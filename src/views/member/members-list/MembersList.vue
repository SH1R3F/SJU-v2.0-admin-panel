<template>
	<div>
		<!-- Filters -->
		<members-list-filters :name-filter.sync="nameFilter" :mobile-filter.sync="mobileFilter" :email-filter.sync="emailFilter" :national-id-filter.sync="nationalIdFilter" :membership-number-filter.sync="membershipNumberFilter" :membership-type-filter.sync="membershipTypeFilter" :city-filter.sync="cityFilter" :year-filter.sync="yearFilter" />

		<!-- Table Container Card -->
		<b-card no-body class="mb-0">
			<!-- Header of table -->
			<div class="m-2">
				<!-- Table Top -->
				<b-row>
					<!-- Per Page -->
					<b-col cols="12" md="6" class="d-flex align-items-center justify-content-start mb-1 mb-md-0">
						<label>{{ $t("Show") }}</label>
						<v-select v-model="perPage" :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" :options="perPageOptions" :clearable="false" class="per-page-selector d-inline-block mx-50" />
						<label>{{ $t("entries") }}</label>
					</b-col>

					<!-- Search -->
					<b-col cols="12" md="6">
						<div class="d-flex align-items-center justify-content-end">
							<b-form-input v-model="searchQuery" class="d-inline-block mr-1" :placeholder="$t('Search')" />

							<!-- Add new -->
							<b-button variant="primary" :to="{ name: 'create-member' }">
								<span class="text-nowrap">{{ $t("Add") }}</span>
							</b-button>
						</div>
					</b-col>
				</b-row>
			</div>
			<!-- Header of table -->

			<b-table ref="refMemberListTable" class="position-relative" :fields="tableColumns" :items="fetchMembers" responsive primary-key="id" :sort-by.sync="sortBy" show-empty :empty-text="$t('No matching records found')" :sort-desc.sync="isSortDirDesc">
				<!-- Column: # -->
				<template #cell(#)="data"> {{ (currentPage - 1) * perPage + (data.index + 1) }} </template>

				<!-- Column: Member -->
				<template #cell(member)="data">
					<b-media vertical-align="center" class="align-items-center">
						<template #aside>
							<b-avatar size="32" :src="data.item.avatar" :text="avatarText(data.item.fullName.split(' ')[0])" :variant="data.item.avatar ? '' : 'light-success'" :to="{ name: 'show-member', params: { id: data.item.id } }" />
						</template>
						<b-link :to="{ name: 'show-member', params: { id: data.item.id } }" class="font-weight-bold d-block text-nowrap">
							{{ data.item.fullName }}
						</b-link>
					</b-media>
				</template>

				<!-- Column: Membership type -->
				<template #cell(membership_type)="data">
					{{ data.item.membership_type === null ? "" : $t($membershipTypes[data.item.membership_type].label) }}
				</template>

				<!-- Column: City -->
				<template #cell(city)="data">
					{{ data.item.city && $t($cities["Saudi Arabia"][data.item.city].label) }}
				</template>

				<!-- Column: Status -->
				<template #cell(status)="data">
					{{ $t($membershipStatus[data.item.status].label) }}
				</template>

				<!-- Column: Invoice status -->
				<template #cell(invoice_status)="data">
					<b-badge pill :variant="data.item.invoice_status ? 'light-success' : 'light-danger'" class="text-capitalize">
						{{ $t($invoiceStatus[data.item.invoice_status].label) }}
					</b-badge>
				</template>

				<!-- Column: Actions -->
				<template #cell(actions)="data">
					<b-dropdown variant="link" no-caret :right="$store.state.appConfig.isRTL">
						<template #button-content>
							<feather-icon icon="MoreVerticalIcon" size="16" class="align-middle text-body" />
						</template>
						<b-dropdown-item :to="{ name: 'show-member', params: { id: data.item.id } }">
							<feather-icon icon="FileTextIcon" />
							<span class="align-middle ml-50">{{ $t("Details") }}</span>
						</b-dropdown-item>

						<b-dropdown-item :to="{ name: 'edit-member', params: { id: data.item.id } }">
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
					<b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-start">
						<span class="text-muted">{{ $t("Showing") }} {{ dataMeta.from }} {{ $t("to") }} {{ dataMeta.to }} {{ $t("of") }} {{ dataMeta.of }} {{ $t("entries") }}</span>
					</b-col>
					<!-- Pagination -->
					<b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">
						<b-pagination v-model="currentPage" :total-rows="totalMembers" :per-page="perPage" first-number last-number class="mb-0 mt-1 mt-sm-0" prev-class="prev-item" next-class="next-item">
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
		<b-modal id="modal-danger" ok-only ok-variant="danger" :ok-title="$t('Accept')" @ok="deleteMember" modal-class="modal-danger" centered :title="$t('Delete member?')">
			<b-card-text>{{ $t("Are you sure you want to delete this member? You won't be able to undo this step and all member data will be delete with no way to retreive.") }}</b-card-text>
		</b-modal>
	</div>
</template>

<script>
	import { BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink, BBadge, BDropdown, BDropdownItem, BPagination, BCardText } from "bootstrap-vue";
	import vSelect from "vue-select";
	import store from "@/store";
	import { ref, onUnmounted } from "@vue/composition-api";
	import { avatarText } from "@core/utils/filter";
	import MembersListFilters from "./MembersListFilters.vue";
	import useMembersList from "./useMembersList";
	import memberStoreModule from "../memberStoreModule";
	import { $membershipStatus, $membershipTypes, $invoiceStatus, $cities } from "@siteConfig";

	export default {
		components: {
			MembersListFilters,

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
			const MEMBER_APP_STORE_MODULE_NAME = "app-member";

			// Register module
			if (!store.hasModule(MEMBER_APP_STORE_MODULE_NAME)) store.registerModule(MEMBER_APP_STORE_MODULE_NAME, memberStoreModule);

			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(MEMBER_APP_STORE_MODULE_NAME)) store.unregisterModule(MEMBER_APP_STORE_MODULE_NAME);
			});

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

				// Extra Filters
				nameFilter,
				mobileFilter,
				emailFilter,
				nationalIdFilter,
				membershipNumberFilter,
				membershipTypeFilter,
				cityFilter,
				yearFilter,
			} = useMembersList();

			const toBeDeletedId = ref(null);
			const deleteMember = function () {
				store
					.dispatch("app-member/deleteMember", { id: toBeDeletedId.value })
					.then((response) => {
						// Success message and update members
						this.$bvToast.toast(response.data.message, {
							variant: "success",
							solid: true,
						});
						refetchData();
					})
					.catch((error) => {
						this.$bvToast.toast(error.message, {
							variant: "danger",
							solid: true,
						});
						return;
					});
			};

			return {
				fetchMembers,
				deleteMember,
				toBeDeletedId,
				tableColumns,
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

				$membershipStatus,
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
			};
		},
		watch: {
			$route(to, from) {
				this.refetchData();
			},
		},
	};
</script>

<style lang="scss" scoped>
	.per-page-selector {
		width: 90px;
	}
</style>

<style lang="scss">
	@import "@core/scss/vue/libs/vue-select.scss";
</style>
