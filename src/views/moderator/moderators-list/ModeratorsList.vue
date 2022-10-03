<template>
	<div>
		<moderators-list-add-new :is-add-new-moderator-sidebar-active.sync="isAddNewModeratorSidebarActive" @refetch-data="refetchData" />

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

					<b-col cols="12" md="6">
						<div class="d-flex align-items-center justify-content-end">
							<!-- Add new -->
							<b-button variant="primary" @click="isAddNewModeratorSidebarActive = true">
								<span class="text-nowrap">{{ $t("Add") }}</span>
							</b-button>
						</div>
					</b-col>
				</b-row>
			</div>
			<!-- Header of table -->

			<b-table ref="refModeratorListTable" class="position-relative" :fields="tableColumns" :items="fetchModerators" responsive primary-key="id" :sort-by.sync="sortBy" show-empty :empty-text="$t('No matching records found')" :sort-desc.sync="isSortDirDesc">
				<!-- Column: # -->
				<template #cell(#)="data"> {{ (currentPage - 1) * perPage + (data.index + 1) }} </template>

				<!-- Column: User -->
				<template #cell(username)="data">
					<b-media vertical-align="center" class="align-items-center">
						<template #aside>
							<b-avatar size="32" :src="data.item.avatar" :text="avatarText(data.item.username)" :variant="data.item.avatar ? '' : 'light-success'" :to="{ name: 'edit-moderator', params: { id: data.item.id } }" />
						</template>
						<b-link :to="{ name: 'edit-moderator', params: { id: data.item.id } }" class="font-weight-bold d-block text-nowrap">
							{{ data.item.username }}
						</b-link>
					</b-media>
				</template>

				<!-- Column: Actions -->
				<template #cell(actions)="data">
					<b-dropdown variant="link" no-caret :right="$store.state.appConfig.isRTL">
						<template #button-content>
							<feather-icon icon="MoreVerticalIcon" size="16" class="align-middle text-body" />
						</template>
						<b-dropdown-item :to="{ name: 'edit-moderator', params: { id: data.item.id } }">
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
						<b-pagination v-model="currentPage" :total-rows="totalModerators" :per-page="perPage" first-number last-number class="mb-0 mt-1 mt-sm-0" prev-class="prev-item" next-class="next-item">
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
		<!-- Modal for moderator deletion -->
		<b-modal id="modal-danger" ok-only ok-variant="danger" :ok-title="$t('Accept')" @ok="deleteModerator" modal-class="modal-danger" centered :title="$t('Delete moderator?')">
			<b-card-text>{{ $t("Are you sure you want to delete this moderator? You won't be able to undo this step and all moderator data will be delete with no way to retreive.") }}</b-card-text>
		</b-modal>
	</div>
</template>

<script>
	import { BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink, BBadge, BDropdown, BDropdownItem, BPagination, BCardText } from "bootstrap-vue";
	import vSelect from "vue-select";
	import store from "@/store";
	import { ref, onUnmounted } from "@vue/composition-api";
	import { avatarText } from "@core/utils/filter";
	import ModeratorsListAddNew from "./ModeratorsListAddNew.vue";
	import useModeratorsList from "./useModeratorsList";
	import moderatorStoreModule from "../moderatorStoreModule";

	export default {
		components: {
			ModeratorsListAddNew,

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
			const MODERATOR_APP_STORE_MODULE_NAME = "app-moderator";
			// Register module
			if (!store.hasModule(MODERATOR_APP_STORE_MODULE_NAME)) store.registerModule(MODERATOR_APP_STORE_MODULE_NAME, moderatorStoreModule);
			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(MODERATOR_APP_STORE_MODULE_NAME)) store.unregisterModule(MODERATOR_APP_STORE_MODULE_NAME);
			});

			const isAddNewModeratorSidebarActive = ref(false);

			const { tableColumns, fetchModerators, perPage, currentPage, totalModerators, dataMeta, perPageOptions, searchQuery, sortBy, isSortDirDesc, refModeratorListTable, refetchData } = useModeratorsList();

			const toBeDeletedId = ref(null);
			const deleteModerator = function () {
				store
					.dispatch("app-moderator/deleteModerator", { id: toBeDeletedId.value })
					.then((response) => {
						// Success message and update moderators
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
				// Sidebar
				isAddNewModeratorSidebarActive,

				fetchModerators,
				deleteModerator,
				toBeDeletedId,
				tableColumns,
				perPage,
				currentPage,
				totalModerators,
				dataMeta,
				perPageOptions,
				searchQuery,
				sortBy,
				isSortDirDesc,
				refModeratorListTable,
				refetchData,
				avatarText,
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
