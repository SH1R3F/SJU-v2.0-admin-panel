<template>
	<div>
		<volunteers-list-add-new
			:is-add-new-volunteer-sidebar-active.sync="isAddNewVolunteerSidebarActive"
			@refetch-data="refetchData"
		/>

		<!-- Filters -->
		<volunteers-list-filters
			:name-filter.sync="nameFilter"
			:mobile-filter.sync="mobileFilter"
			:email-filter.sync="emailFilter"
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
							<b-button variant="primary" @click="isAddNewVolunteerSidebarActive = true">
								<span class="text-nowrap">{{ $t("Add") }}</span>
							</b-button>
						</div>
					</b-col>
				</b-row>
			</div>
			<!-- Header of table -->

			<b-table
				ref="refVolunteerListTable"
				class="position-relative"
				:fields="tableColumns"
				:items="fetchVolunteers"
				responsive
				primary-key="id"
				:sort-by.sync="sortBy"
				show-empty
				:empty-text="$t('No matching records found')"
				:sort-desc.sync="isSortDirDesc"
			>
				<!-- Column: # -->
				<template #cell(#)="data"> {{ (currentPage - 1) * perPage + (data.index + 1) }} </template>

				<!-- Column: User -->
				<template #cell(volunteer)="data">
					<b-media vertical-align="center" class="align-items-center">
						<template #aside>
							<b-avatar
								size="32"
								:src="data.item.avatar"
								:text="avatarText(data.item.fullName.split(' ')[0])"
								variant="light-success"
								:to="{ name: 'show-volunteer', params: { id: data.item.id } }"
							/>
						</template>
						<b-link
							:to="{ name: 'show-volunteer', params: { id: data.item.id } }"
							class="font-weight-bold d-block text-nowrap"
						>
							{{ data.item.fullName }}
						</b-link>
					</b-media>
				</template>

				<!-- Column: Status [Will be updated when activation coded] -->
				<template #cell(status)="data">
					<b-badge
						pill
						:variant="data.item.email_verified_at ? 'light-success' : 'light-danger'"
						class="text-capitalize"
					>
						{{ $t($status[data.item.email_verified_at ? 1 : 0].text) }}
					</b-badge>
				</template>

				<!-- Column: Actions -->
				<template #cell(actions)="data">
					<b-dropdown variant="link" no-caret :right="$store.state.appConfig.isRTL">
						<template #button-content>
							<feather-icon icon="MoreVerticalIcon" size="16" class="align-middle text-body" />
						</template>
						<b-dropdown-item :to="{ name: 'show-volunteer', params: { id: data.item.id } }">
							<feather-icon icon="FileTextIcon" />
							<span class="align-middle ml-50">{{ $t("Details") }}</span>
						</b-dropdown-item>

						<b-dropdown-item @click="toggleVerification(data.item.id)">
							<feather-icon icon="ToggleLeftIcon" />
							<span class="align-middle ml-50">{{
								$t(data.item.email_verified_at ? "Unverify" : "Verify")
							}}</span>
						</b-dropdown-item>

						<b-dropdown-item :to="{ name: 'edit-volunteer', params: { id: data.item.id } }">
							<feather-icon icon="EditIcon" />
							<span class="align-middle ml-50">{{ $t("Edit") }}</span>
						</b-dropdown-item>

						<b-dropdown-item v-b-modal.modal-danger @click="toBeDeletedId = data.item.id">
							<feather-icon icon="TrashIcon" />
							<span class="align-middle ml-50">{{ $t("Delete") }}</span>
						</b-dropdown-item>
					</b-dropdown>
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
							:total-rows="totalVolunteers"
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
		<!-- Modal for volunteer deletion -->
		<b-modal
			id="modal-danger"
			ok-only
			ok-variant="danger"
			:ok-title="$t('Accept')"
			@ok="deleteVolunteer"
			modal-class="modal-danger"
			centered
			:title="$t('Delete volunteer?')"
		>
			<b-card-text>{{
				$t(
					"Are you sure you want to delete this volunteer? You won't be able to undo this step and all volunteer data will be delete with no way to retreive."
				)
			}}</b-card-text>
		</b-modal>
	</div>
</template>

<script>
	import {
		BCard,
		BRow,
		BCol,
		BFormInput,
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
	import { ref, onUnmounted } from "@vue/composition-api"
	import { avatarText } from "@core/utils/filter"
	import VolunteersListFilters from "./VolunteersListFilters.vue"
	import VolunteersListAddNew from "./VolunteersListAddNew.vue"
	import useVolunteersList from "./useVolunteersList"
	import volunteerStoreModule from "../volunteerStoreModule"
	import { $status } from "@siteConfig"

	export default {
		components: {
			VolunteersListFilters,
			VolunteersListAddNew,

			BCard,
			BRow,
			BCol,
			BFormInput,
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
		},
		setup() {
			const VOLUNTEER_APP_STORE_MODULE_NAME = "app-volunteer"

			// Register module
			if (!store.hasModule(VOLUNTEER_APP_STORE_MODULE_NAME))
				store.registerModule(VOLUNTEER_APP_STORE_MODULE_NAME, volunteerStoreModule)

			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(VOLUNTEER_APP_STORE_MODULE_NAME))
					store.unregisterModule(VOLUNTEER_APP_STORE_MODULE_NAME)
			})

			const isAddNewVolunteerSidebarActive = ref(false)

			const {
				tableColumns,
				fetchVolunteers,
				perPage,
				currentPage,
				totalVolunteers,
				dataMeta,
				perPageOptions,
				searchQuery,
				sortBy,
				isSortDirDesc,
				refVolunteerListTable,
				refetchData,
				exportData,

				// Extra Filters
				nameFilter,
				mobileFilter,
				emailFilter,
			} = useVolunteersList()

			const toBeDeletedId = ref(null)
			const deleteVolunteer = function () {
				store
					.dispatch("app-volunteer/deleteVolunteer", { id: toBeDeletedId.value })
					.then((response) => {
						// Success message and update volunteers
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
			const toggleVerification = function (id) {
				store
					.dispatch("app-volunteer/toggleVolunteer", { id })
					.then((response) => {
						// Success message and update volunteers
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

			return {
				// Sidebar
				isAddNewVolunteerSidebarActive,

				fetchVolunteers,
				deleteVolunteer,
				toBeDeletedId,
				tableColumns,
				perPage,
				currentPage,
				totalVolunteers,
				dataMeta,
				perPageOptions,
				searchQuery,
				sortBy,
				isSortDirDesc,
				refVolunteerListTable,
				refetchData,
				toggleVerification,

				// Filter
				avatarText,

				$status,
				// Extra Filters
				nameFilter,
				mobileFilter,
				emailFilter,
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
