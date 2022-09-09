<template>
	<div class="mb-2">
		<namings-list-add-new v-if="namingSlug !== 'gender'" :naming="namingSlug" :is-add-new-naming-sidebar-active.sync="isAddNewNamingSidebarActive" @refetch-data="refetchData" />

		<!-- Table Container Card -->
		<b-card :title="$t(namingTitle)" class="mb-0">
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
							<b-button v-if="namingSlug !== 'gender'" variant="primary" @click="isAddNewNamingSidebarActive = true">
								<span class="text-nowrap">{{ $t("Add") }}</span>
							</b-button>
						</div>
					</b-col>
				</b-row>
			</div>
			<!-- Header of table -->

			<b-table ref="refNamingListTable" class="position-relative" :fields="tableColumns" :items="fetchNamings" responsive primary-key="id" :sort-by.sync="sortBy" show-empty :empty-text="$t('No matching records found')" :sort-desc.sync="isSortDirDesc">
				<!-- Column: # -->
				<template #cell(#)="data"> {{ (currentPage - 1) * perPage + (data.index + 1) }} </template>

				<!-- Column: Name -->
				<template #cell(name)="data">
					<b-media vertical-align="center" class="align-items-center">
						<template #aside>
							<b-avatar size="32" :src="data.item.image" :text="avatarText(data.item.name_ar)" :variant="data.item.image ? '' : 'light-success'" :to="{ name: 'apps-users-view', params: { id: data.item.id } }" />
						</template>
						<b-link :to="{ name: 'show-subscriber', params: { id: data.item.id } }" class="font-weight-bold d-block text-nowrap">
							{{ dblocalize(data.item, "name") }}
						</b-link>
					</b-media>
				</template>

				<!-- Column: Description -->
				<template #cell(description)="data">
					{{ dblocalize(data.item, "description") }}
				</template>

				<!-- Column: Status [Will be updated when activation coded] -->
				<template #cell(status)="data">
					<b-badge pill :variant="data.item.status ? 'light-success' : 'light-danger'" class="text-capitalize">
						{{ $t($status[data.item.status].text) }}
					</b-badge>
				</template>

				<!-- Column: Actions -->
				<template #cell(actions)="data">
					<b-button :title="$t(data.item.status ? 'Deactivate' : 'Activate')" @click="toggleStatus(data.item.id)" v-ripple.400="'rgba(255, 255, 255, 0.15)'" :variant="data.item.status ? 'warning' : 'success'" class="btn-icon ml-1" size="sm">
						<feather-icon :icon="data.item.status ? 'ToggleLeftIcon' : 'ToggleRightIcon'" />
					</b-button>

					<b-button v-if="namingSlug !== 'gender'" :title="$t('Edit')" :to="{ name: 'edit-naming', params: { naming: namingSlug, id: data.item.id } }" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="info" class="btn-icon ml-1" size="sm">
						<feather-icon icon="EditIcon" />
					</b-button>

					<b-button v-if="namingSlug !== 'gender'" :title="$t('Delete')" v-b-modal.modal-danger @click="toBeDeletedId = data.item.id" v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="danger" class="btn-icon mx-1" size="sm">
						<feather-icon icon="TrashIcon" />
					</b-button>
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
						<b-pagination v-model="currentPage" :total-rows="totalNamings" :per-page="perPage" first-number last-number class="mb-0 mt-1 mt-sm-0" prev-class="prev-item" next-class="next-item">
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
		<!-- Modal for naming deletion -->
		<b-modal id="modal-danger" ok-only ok-variant="danger" :ok-title="$t('Accept')" @ok="deleteNaming" modal-class="modal-danger" centered :title="$t('Delete naming?')">
			<b-card-text>{{ $t("Are you sure you want to delete this naming? You won't be able to undo this step and all naming data will be delete with no way to retreive.") }}</b-card-text>
		</b-modal>
	</div>
</template>

<script>
	import { BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink, BBadge, BDropdown, BDropdownItem, BPagination, BCardText } from "bootstrap-vue";
	import vSelect from "vue-select";
	import store from "@/store";
	import { ref, onUnmounted } from "@vue/composition-api";
	import { avatarText } from "@core/utils/filter";
	import NamingsListAddNew from "./NamingsListAddNew.vue";
	import useNamingsList from "./useNamingsList";
	import namingStoreModule from "../namingStoreModule";
	import { $status } from "@siteConfig";
	import Ripple from "vue-ripple-directive";

	export default {
		components: {
			NamingsListAddNew,

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
			Ripple,
		},
		directives: {
			Ripple,
		},
		props: {
			namingSlug: {
				type: String,
				required: true,
			},
			namingTitle: {
				type: String,
				required: true,
			},
		},
		setup(props) {
			const COURSE_NAMING_STORE_MODULE_NAME = "course-naming";

			// Register module
			if (!store.hasModule(COURSE_NAMING_STORE_MODULE_NAME)) store.registerModule(COURSE_NAMING_STORE_MODULE_NAME, namingStoreModule);

			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(COURSE_NAMING_STORE_MODULE_NAME)) store.unregisterModule(COURSE_NAMING_STORE_MODULE_NAME);
			});

			const isAddNewNamingSidebarActive = ref(false);

			const { tableColumns, fetchNamings, perPage, currentPage, totalNamings, dataMeta, perPageOptions, searchQuery, sortBy, isSortDirDesc, refNamingListTable, refetchData } = useNamingsList(props.namingSlug);

			const toBeDeletedId = ref(null);
			const deleteNaming = function () {
				store
					.dispatch("course-naming/deleteNaming", { id: toBeDeletedId.value, naming: props.namingSlug })
					.then((response) => {
						// Success message and update users
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

			const toggleStatus = function (id) {
				store
					.dispatch("course-naming/toggleStatus", { id, naming: props.namingSlug })
					.then((response) => {
						// Success message and update users
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
				isAddNewNamingSidebarActive,

				fetchNamings,
				deleteNaming,
				toggleStatus,
				toBeDeletedId,
				tableColumns,
				perPage,
				currentPage,
				totalNamings,
				dataMeta,
				perPageOptions,
				searchQuery,
				sortBy,
				isSortDirDesc,
				refNamingListTable,
				refetchData,

				// Filter
				avatarText,

				$status,
			};
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
