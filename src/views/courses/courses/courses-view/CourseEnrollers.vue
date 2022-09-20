<template>
	<!-- 
    UNFINISHED WORK: Till we add members, volunteers and add the table connects them to courses.. 
  -->

	<div>
		<!-- Table Container Card -->
		<b-card :title="$t('Course enrollers')" class="mb-0">
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
						</div>
					</b-col>
				</b-row>
			</div>
			<!-- Header of table -->

			<b-table ref="refCourseEnrollersListTable" class="position-relative" :fields="tableColumns" :items="fetchCourseEnrollers" responsive primary-key="id" :sort-by.sync="sortBy" show-empty empty-text="No matching records found" :sort-desc.sync="isSortDirDesc">
				<!-- Column: # -->
				<template #cell(#)="data"> {{ (currentPage - 1) * perPage + (data.index + 1) }} </template>

				<!-- Column: User -->
				<template #cell(subscriber)="data">
					<b-media vertical-align="center" class="align-items-center">
						<template #aside>
							<b-avatar size="32" :src="data.item.avatar" :text="avatarText(data.item.fullName.split(' ')[0])" :variant="`light-success`" :to="{ name: 'apps-users-view', params: { id: data.item.id } }" />
						</template>
						<b-link :to="{ name: 'show-subscriber', params: { id: data.item.id } }" class="font-weight-bold d-block text-nowrap">
							{{ data.item.fullName }}
						</b-link>
					</b-media>
				</template>

				<!-- Column: Status -->
				<template #cell(status)="data">
					<b-badge pill :variant="`light-${resolveUserStatusVariant(data.item.status)}`" class="text-capitalize">
						{{ data.item.status }}
					</b-badge>
				</template>

				<!-- Column: Actions -->
				<template #cell(actions)="data">
					<b-dropdown variant="link" no-caret :right="$store.state.appConfig.isRTL">
						<template #button-content>
							<feather-icon icon="MoreVerticalIcon" size="16" class="align-middle text-body" />
						</template>
						<b-dropdown-item :to="{ name: 'show-subscriber', params: { id: data.item.id } }">
							<feather-icon icon="FileTextIcon" />
							<span class="align-middle ml-50">Details</span>
						</b-dropdown-item>

						<b-dropdown-item :to="{ name: 'apps-users-edit', params: { id: data.item.id } }">
							<feather-icon icon="EditIcon" />
							<span class="align-middle ml-50">Edit</span>
						</b-dropdown-item>

						<b-dropdown-item>
							<feather-icon icon="TrashIcon" />
							<span class="align-middle ml-50">Delete</span>
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
						<b-pagination v-model="currentPage" :total-rows="totalEnrollers" :per-page="perPage" first-number last-number class="mb-0 mt-1 mt-sm-0" prev-class="prev-item" next-class="next-item">
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
	</div>
</template>

<script>
	import { BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink, BBadge, BDropdown, BDropdownItem, BPagination } from "bootstrap-vue";
	import vSelect from "vue-select";
	import store from "@/store";
	import { ref, onUnmounted } from "@vue/composition-api";
	import { avatarText } from "@core/utils/filter";
	import useCourseEnrollersList from "./useCourseEnrollersList";
	import courseStoreModule from "../courseStoreModule";

	export default {
		components: {
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
		},
		setup() {
			const APP_COURSE_STORE_MODULE_NAME = "app-course";
			// Register module
			if (!store.hasModule(APP_COURSE_STORE_MODULE_NAME)) store.registerModule(APP_COURSE_STORE_MODULE_NAME, courseStoreModule);
			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(APP_COURSE_STORE_MODULE_NAME)) store.unregisterModule(APP_COURSE_STORE_MODULE_NAME);
			});

			const { tableColumns, fetchCourseEnrollers, perPage, currentPage, totalEnrollers, dataMeta, perPageOptions, searchQuery, sortBy, isSortDirDesc, refCourseEnrollersListTable, refetchData } = useCourseEnrollersList();

			return {
				fetchCourseEnrollers,
				tableColumns,
				perPage,
				currentPage,
				totalEnrollers,
				dataMeta,
				perPageOptions,
				searchQuery,
				sortBy,
				isSortDirDesc,
				refCourseEnrollersListTable,
				refetchData,

				// Filter
				avatarText,
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
