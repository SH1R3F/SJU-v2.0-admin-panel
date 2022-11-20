<template>
	<div>
		<!-- Filters -->
		<members-list-filters
			:name-filter.sync="nameFilter"
			:mobile-filter.sync="mobileFilter"
			:email-filter.sync="emailFilter"
			:national-id-filter.sync="nationalIdFilter"
			:membership-number-filter.sync="membershipNumberFilter"
			:membership-type-filter.sync="membershipTypeFilter"
			:city-filter.sync="cityFilter"
			:year-filter.sync="yearFilter"
		/>

		<!-- Table Container Card -->
		<b-card no-body class="mb-0">
			<!-- Header of table -->
			<div class="m-2">
				<!-- Table Top -->
				<b-row>
					<!-- Per Page -->
					<b-col cols="12" md="6" class="d-flex align-items-center justify-content-between mb-1 mb-md-0">
						<div>
							<label>{{ $t("Show") }}</label>
							<v-select
								v-model="perPage"
								:dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
								:options="perPageOptions"
								:clearable="false"
								class="per-page-selector d-inline-block mx-50"
							/>
							<label>{{ $t("entries") }}</label>
							<!-- Add new -->
						</div>
						<b-button variant="primary" size="sm" @click="exportData">
							<span class="text-nowrap">{{ $t("Export") }}</span>
						</b-button>
					</b-col>

					<!-- Search -->
					<b-col cols="12" md="6">
						<div class="d-flex align-items-center justify-content-end">
							<b-form-input
								v-model="searchQuery"
								class="d-inline-block mr-1"
								:placeholder="$t('Search')"
							/>

							<!-- Add new -->
							<b-button variant="primary" :to="{ name: 'create-member' }">
								<span class="text-nowrap">{{ $t("Add") }}</span>
							</b-button>
						</div>
					</b-col>
				</b-row>
			</div>
			<!-- Header of table -->

			<b-table
				ref="refMemberListTable"
				class="position-relative"
				:fields="computedTableColumns()"
				:items="fetchMembers"
				responsive
				primary-key="id"
				:sort-by.sync="sortBy"
				show-empty
				:empty-text="$t('No matching records found')"
				:sort-desc.sync="isSortDirDesc"
			>
				<!-- Column: # -->
				<template #cell(#)="data"> {{ (currentPage - 1) * perPage + (data.index + 1) }} </template>

				<!-- Column: Member -->
				<template #cell(member)="data">
					<b-media vertical-align="center" class="align-items-center">
						<template #aside>
							<b-avatar
								size="32"
								:src="data.item.avatar"
								:text="avatarText(data.item.fullName.split(' ')[0])"
								:variant="data.item.avatar ? '' : 'light-success'"
								:to="{ name: 'show-member', params: { id: data.item.id } }"
							/>
						</template>
						<b-link
							:to="{ name: 'show-member', params: { id: data.item.id } }"
							class="font-weight-bold d-block text-nowrap"
						>
							{{ data.item.fullName }}
						</b-link>
					</b-media>
				</template>

				<!-- Column: Membership type -->
				<template #cell(membership_type)="data">
					{{ $membershipTypes.find((t) => t.value === data.item.subscription.type).label }}
				</template>

				<!-- Column: City -->
				<template #cell(city)="data">
					{{ data.item.city && $t($cities["Saudi Arabia"][data.item.city].label) }}
				</template>

				<!-- Column: Status -->
				<template #cell(status)="data">
					<template v-if="data.item.active === -1 && data.item.approved === null">
						{{ $t("Completing info") }}
					</template>
					<template v-else-if="data.item.approved === -2">
						{{ $t("Refused") }}
					</template>
					<template
						v-else-if="
							data.item.active === -1 && data.item.approved === 0 && data.item.refusal_reason !== null
						"
					>
						<span
							style="text-decoration: underline; cursor: pointer"
							@click="
								$bvToast.toast(
									data.item.refusal_reason === 'unsatisfy'
										? $t('Unsatisfying conditions')
										: data.item.refusal_reason,
									{
										variant: 'danger',
										solid: true,
									}
								)
							"
							>{{ $t("Waiting approval (after refuse)") }}</span
						>
					</template>
					<template v-else-if="data.item.active === -1 && data.item.approved === 0">
						{{ $t("Waiting branch approval") }}
					</template>
					<template v-else-if="data.item.active === -1 && data.item.approved === 1">
						{{ $t("Waiting admin approval") }}
					</template>
					<template v-else-if="data.item.active === 1 && data.item.approved === 1">
						<template
							v-if="
								data.item.subscription.status === 1 &&
								new Date() >= new Date(data.item.subscription.end_date)
							"
						>
							{{ $t("Ended subscription") }}
						</template>

						<template v-else>
							{{ $t("Waiting to pay") }}
						</template>
					</template>
				</template>

				<!-- Column: Invoice status -->
				<template #cell(invoice_status)="data">
					<b-badge
						pill
						:variant="data.item.invoice.status ? 'light-success' : 'light-danger'"
						class="text-capitalize"
					>
						{{ $t($invoiceStatus.find((s) => s.value === data.item.invoice.status).label) }}
					</b-badge>
				</template>

				<!-- Column: Refusal reason -->
				<template #cell(refusal_reason)="data">
					{{
						data.item.refusal_reason === "unsatisfy"
							? $t("Unsatisfying conditions")
							: data.item.refusal_reason
					}}
				</template>

				<!-- Column: Actions -->
				<template #cell(actions)="data">
					<b-button
						v-if="['all-members'].includes($router.currentRoute.name)"
						:title="$t(data.item.active === 1 ? 'Deactivate' : 'Activate')"
						@click="toggleActivate(data.item.id)"
						v-ripple.400="'rgba(255, 255, 255, 0.15)'"
						:variant="data.item.active === 1 ? 'danger' : 'success'"
						class="btn-icon"
						style="margin-left: 4px; margin-bottom: 4px"
						size="sm"
					>
						<feather-icon :icon="data.item.active === 1 ? 'ToggleLeftIcon' : 'ToggleRightIcon'" />
					</b-button>

					<b-button
						v-if="['all-members'].includes($router.currentRoute.name)"
						:title="$t('Unaccept')"
						@click="unaccept(data.item.id)"
						v-ripple.400="'rgba(255, 255, 255, 0.15)'"
						variant="danger"
						class="btn-icon"
						style="margin-left: 4px; margin-bottom: 4px"
						size="sm"
					>
						<feather-icon icon="XIcon" />
					</b-button>

					<b-button
						v-if="['branch-accepted-members', 'waiting-members'].includes($router.currentRoute.name)"
						:title="$t('Accept')"
						@click="accept(data.item.id)"
						v-ripple.400="'rgba(255, 255, 255, 0.15)'"
						variant="success"
						class="btn-icon"
						style="margin-left: 4px; margin-bottom: 4px"
						size="sm"
					>
						<feather-icon icon="CheckIcon" />
					</b-button>

					<b-button
						v-if="['branch-accepted-members', 'branch-waiting-members'].includes($router.currentRoute.name)"
						:title="data.item.approved === 1 ? $t('Branch disapproval') : $t('Branch approval')"
						@click="toggleApprove(data.item.id)"
						v-ripple.400="'rgba(255, 255, 255, 0.15)'"
						:variant="data.item.approved === 1 ? 'danger' : 'success'"
						class="btn-icon"
						style="margin-left: 4px; margin-bottom: 4px"
						size="sm"
					>
						<feather-icon :icon="data.item.approved === 1 ? 'XIcon' : 'CheckIcon'" />
					</b-button>

					<b-button
						:title="$t('Details')"
						:to="{ name: 'show-member', params: { id: data.item.id } }"
						v-ripple.400="'rgba(255, 255, 255, 0.15)'"
						variant="warning"
						class="btn-icon"
						style="margin-left: 4px; margin-bottom: 4px"
						size="sm"
					>
						<feather-icon icon="FileTextIcon" />
					</b-button>
					<b-button
						:title="$t('Edit')"
						:to="{ name: 'edit-member', params: { id: data.item.id } }"
						v-ripple.400="'rgba(255, 255, 255, 0.15)'"
						variant="info"
						class="btn-icon"
						style="margin-left: 4px; margin-bottom: 4px"
						size="sm"
					>
						<feather-icon icon="EditIcon" />
					</b-button>
					<b-button
						v-b-modal.modal-danger
						@click="toBeDeletedId = data.item.id"
						:title="$t('Delete')"
						v-ripple.400="'rgba(255, 255, 255, 0.15)'"
						variant="danger"
						class="btn-icon"
						style="margin-left: 4px; margin-bottom: 4px"
						size="sm"
					>
						<feather-icon icon="TrashIcon" />
					</b-button>

					<b-button
						v-if="$router.currentRoute.name === 'branch-waiting-members'"
						v-b-modal.modal-refuse
						@click="toBeRefused = data.item.id"
						:title="$t('Refuse')"
						v-ripple.400="'rgba(255, 255, 255, 0.15)'"
						variant="danger"
						class="btn-icon"
						style="margin-left: 4px; margin-bottom: 4px"
						size="sm"
					>
						<feather-icon icon="XIcon" />
					</b-button>

					<b-button
						v-if="$router.currentRoute.name === 'refused-members'"
						:title="$t('Unrefuse')"
						v-ripple.400="'rgba(255, 255, 255, 0.15)'"
						variant="warning"
						class="btn-icon"
						style="margin-left: 4px; margin-bottom: 4px"
						size="sm"
						@click="toggleRefuse(data.item.id)"
					>
						<feather-icon icon="CheckIcon" />
					</b-button>
				</template>
			</b-table>

			<!-- Table footer -->
			<div class="mx-2 mb-2">
				<b-row>
					<b-col
						cols="12"
						sm="6"
						class="d-flex align-items-center justify-content-center justify-content-sm-start"
					>
						<span class="text-muted"
							>{{ $t("Showing") }} {{ dataMeta.from }} {{ $t("to") }} {{ dataMeta.to }} {{ $t("of") }}
							{{ dataMeta.of }} {{ $t("entries") }}</span
						>
					</b-col>
					<!-- Pagination -->
					<b-col
						cols="12"
						sm="6"
						class="d-flex align-items-center justify-content-center justify-content-sm-end"
					>
						<b-pagination
							v-model="currentPage"
							:total-rows="totalMembers"
							:per-page="perPage"
							first-number
							last-number
							class="mb-0 mt-1 mt-sm-0"
							prev-class="prev-item"
							next-class="next-item"
						>
							<template #prev-text>
								<feather-icon icon="ChevronLeftIcon" size="18" />
							</template>
							<template #next-text>
								<feather-icon icon="ChevronRightIcon" size="18" />
							</template>
						</b-pagination>
					</b-col>
				</b-row>
			</div>
			<!-- Table footer -->
		</b-card>
		<!-- Modal for member deletion -->
		<b-modal
			id="modal-danger"
			ok-only
			ok-variant="danger"
			:ok-title="$t('Accept')"
			@ok="deleteMember"
			modal-class="modal-danger"
			centered
			:title="$t('Delete member?')"
		>
			<b-card-text>{{
				$t(
					"Are you sure you want to delete this member? You won't be able to undo this step and all member data will be delete with no way to retreive."
				)
			}}</b-card-text>
		</b-modal>

		<!-- modal login-->
		<b-modal
			id="modal-refuse"
			cancel-variant="outline-secondary"
			:ok-title="$t('Accept')"
			centered
			:title="$t('Refuse member?')"
			@ok="toggleRefuse(null)"
			ok-only
		>
			<b-form-group>
				<v-select
					:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
					:options="[
						{
							label: $t('Unsatisfying conditions'),
							value: 'unsatisfy',
						},
						{
							label: $t('Other'),
							value: 'other',
						},
					]"
					:reduce="(o) => o.value"
					v-model="reason"
					:clearable="false"
				/>
			</b-form-group>
			<b-form-group v-show="reason === 'other'">
				<b-form-textarea v-model="reason_text" :placeholder="$t('Reason')"></b-form-textarea>
			</b-form-group>
		</b-modal>
	</div>
</template>

<script>
	import Ripple from "vue-ripple-directive"

	import {
		BCard,
		BRow,
		BCol,
		BFormGroup,
		BFormInput,
		BFormTextarea,
		BButton,
		BTable,
		BMedia,
		BAvatar,
		BLink,
		BBadge,
		BDropdown,
		BDropdownItem,
		BPagination,
		BCardText,
	} from "bootstrap-vue"
	import vSelect from "vue-select"
	import store from "@/store"
	import { ref, onUnmounted, computed } from "@vue/composition-api"
	import { avatarText } from "@core/utils/filter"
	import MembersListFilters from "./MembersListFilters.vue"
	import useMembersList from "./useMembersList"
	import memberStoreModule from "../memberStoreModule"
	import { $memberStatus, $membershipTypes, $invoiceStatus, $cities } from "@siteConfig"
	import router from "@/router"

	export default {
		components: {
			MembersListFilters,

			BCard,
			BRow,
			BCol,
			BFormInput,
			BFormTextarea,
			BFormGroup,
			BButton,
			BTable,
			BMedia,
			BAvatar,
			BLink,
			BBadge,
			BDropdown,
			BDropdownItem,
			BPagination,

			vSelect,
			BCardText,
			Ripple,
		},
		directives: {
			Ripple,
		},
		setup() {
			const MEMBER_APP_STORE_MODULE_NAME = "app-member"

			// Register module
			if (!store.hasModule(MEMBER_APP_STORE_MODULE_NAME))
				store.registerModule(MEMBER_APP_STORE_MODULE_NAME, memberStoreModule)

			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(MEMBER_APP_STORE_MODULE_NAME)) store.unregisterModule(MEMBER_APP_STORE_MODULE_NAME)
			})

			const {
				tableColumns,
				fetchMembers,
				perPage,
				currentPage,
				totalMembers,
				dataMeta,
				perPageOptions,
				searchQuery,
				sortBy,
				isSortDirDesc,
				refMemberListTable,
				refetchData,
				exportData,

				// Extra Filters
				nameFilter,
				mobileFilter,
				emailFilter,
				nationalIdFilter,
				membershipNumberFilter,
				membershipTypeFilter,
				cityFilter,
				yearFilter,
			} = useMembersList()

			const computedTableColumns = computed(() => {
				return () => {
					if (router.currentRoute.name === "refused-members") {
						return tableColumns.filter((col) => {
							if (col.hasOwnProperty("pageRefused")) {
								return col.pageRefused
							}
							return true
						})
					} else {
						return tableColumns.filter((col) => {
							if (col.hasOwnProperty("pageRefused")) {
								return !col.pageRefused
							}
							return true
						})
					}
				}
			})

			const toBeDeletedId = ref(null)
			const deleteMember = function () {
				store
					.dispatch("app-member/deleteMember", { id: toBeDeletedId.value })
					.then((response) => {
						// Success message and update members
						this.$bvToast.toast(response.data.message, {
							variant: "success",
							solid: true,
						})
						refetchData()
					})
					.catch((error) => {
						this.$bvToast.toast(error.message, {
							variant: "danger",
							solid: true,
						})
						return
					})
			}

			const accept = function (id) {
				store
					.dispatch("app-member/acceptMember", { id })
					.then((response) => {
						// Success message and update members
						this.$bvToast.toast(response.data.message, {
							variant: "success",
							solid: true,
						})
						refetchData()
					})
					.catch((error) => {
						this.$bvToast.toast(error.message, {
							variant: "danger",
							solid: true,
						})
						return
					})
			}

			const unaccept = function (id) {
				store
					.dispatch("app-member/unacceptMember", { id })
					.then((response) => {
						// Success message and update members
						this.$bvToast.toast(response.data.message, {
							variant: "success",
							solid: true,
						})
						refetchData()
					})
					.catch((error) => {
						this.$bvToast.toast(error.message, {
							variant: "danger",
							solid: true,
						})
						return
					})
			}
			const toggleActivate = function (id) {
				store
					.dispatch("app-member/toggleActivateMember", { id })
					.then((response) => {
						// Success message and update members
						this.$bvToast.toast(response.data.message, {
							variant: "success",
							solid: true,
						})
						refetchData()
					})
					.catch((error) => {
						this.$bvToast.toast(error.message, {
							variant: "danger",
							solid: true,
						})
						return
					})
			}

			const toggleApprove = function (id) {
				store
					.dispatch("app-member/toggleApproveMember", { id })
					.then((response) => {
						// Success message and update members
						this.$bvToast.toast(response.data.message, {
							variant: "success",
							solid: true,
						})
						refetchData()
					})
					.catch((error) => {
						this.$bvToast.toast(error.message, {
							variant: "danger",
							solid: true,
						})
						return
					})
			}
			const reason = ref("unsatisfy")
			const reason_text = ref(null)
			const toBeRefused = ref(null)
			const toggleRefuse = function (id = null) {
				let payload
				if (id) {
					payload = {
						id,
					}
				} else {
					payload = {
						id: toBeRefused.value,
						reason: reason.value,
						reason_text: reason_text.value,
					}
				}
				store
					.dispatch("app-member/toggleRefuseMember", payload)
					.then((response) => {
						// Success message and update members
						this.$bvToast.toast(response.data.message, {
							variant: "success",
							solid: true,
						})
						refetchData()
						reason.value = "unsatisfy"
						reason_text.value = null
						toBeRefused.value = null
					})
					.catch((error) => {
						this.$bvToast.toast(error.message, {
							variant: "danger",
							solid: true,
						})
						return
					})
			}

			return {
				fetchMembers,
				deleteMember,
				toBeDeletedId,
				tableColumns,
				computedTableColumns,
				perPage,
				currentPage,
				totalMembers,
				dataMeta,
				perPageOptions,
				searchQuery,
				sortBy,
				isSortDirDesc,
				refMemberListTable,
				refetchData,

				// Filter
				avatarText,

				$memberStatus,
				$membershipTypes,
				$invoiceStatus,
				$cities,
				// Extra Filters
				nameFilter,
				mobileFilter,
				emailFilter,
				nationalIdFilter,
				membershipNumberFilter,
				membershipTypeFilter,
				cityFilter,
				yearFilter,
				toggleApprove,
				toggleRefuse,
				reason,
				reason_text,
				toBeRefused,
				accept,
				unaccept,
				toggleActivate,
				exportData,
			}
		},
		watch: {
			$route(to, from) {
				this.refetchData()
			},
		},
	}
</script>

<style lang="scss" scoped>
	.per-page-selector {
		width: 90px;
	}
</style>

<style lang="scss">
	@import "@core/scss/vue/libs/vue-select.scss";
</style>
