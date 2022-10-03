<template>
	<div class="mb-2">
		<!-- Filters -->
		<courses-list-filters :sn-filter.sync="snFilter" :name-filter.sync="nameFilter" :region-filter.sync="regionFilter" :day-filter.sync="dayFilter" :month-filter.sync="monthFilter" :year-filter.sync="yearFilter" />

		<!-- Table Container Card -->
		<b-card class="mb-0">
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
							<b-button variant="primary" :to="{ name: 'create-course' }">
								<span class="text-nowrap">{{ $t("Add") }}</span>
							</b-button>
						</div>
					</b-col>
				</b-row>
			</div>
			<!-- Header of table -->

			<b-table ref="refCourseListTable" class="position-relative" :fields="tableColumns" :items="fetchCourses" responsive primary-key="id" :sort-by.sync="sortBy" show-empty :empty-text="$t('No matching records found')" :sort-desc.sync="isSortDirDesc">
				<!-- Column: # -->
				<template #cell(#)="data"> {{ (currentPage - 1) * perPage + (data.index + 1) }} </template>

				<!-- Column: Name -->
				<template #cell(name_ar)="data">
					<b-media vertical-align="center" class="align-items-center">
						<template #aside>
							<b-avatar size="32" :text="avatarText(data.item.name_ar)" variant="light-success" :to="{ name: 'edit-course', params: { id: data.item.id } }" />
						</template>
						<b-link :to="{ name: 'show-course', params: { id: data.item.id } }" class="font-weight-bold d-block text-nowrap">
							{{ data.item.name_ar }}
						</b-link>
					</b-media>
				</template>

				<!-- Column: Layout -->
				<template #cell(status)="data">
					{{ $courseStatus[data.item.status]["text"] }}
				</template>

				<!-- Column: Actions -->
				<template #cell(actions)="data">
					<b-dropdown variant="link" no-caret :right="$store.state.appConfig.isRTL">
						<template #button-content>
							<feather-icon icon="MoreVerticalIcon" size="16" class="align-middle text-body" />
						</template>

						<b-dropdown-item :to="{ name: 'show-course', params: { id: data.item.id } }">
							<feather-icon icon="EditIcon" />
							<span class="align-middle ml-50">{{ $t("Details") }}</span>
						</b-dropdown-item>

						<b-dropdown-item :to="{ name: 'edit-course', params: { id: data.item.id } }">
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
						<b-pagination v-model="currentPage" :total-rows="totalCourses" :per-page="perPage" first-number last-number class="mb-0 mt-1 mt-sm-0" prev-class="prev-item" next-class="next-item">
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
		<!-- Modal for courses deletion -->
		<b-modal id="modal-danger" ok-only ok-variant="danger" :ok-title="$t('Accept')" @ok="deleteCourse" modal-class="modal-danger" centered :title="$t('Delete course?')">
			<b-card-text>{{ $t("Are you sure you want to delete this course? You won't be able to undo this step and all course data will be delete with no way to retreive.") }}</b-card-text>
		</b-modal>
	</div>
</template>

<script>
	import { BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink, BBadge, BDropdown, BDropdownItem, BPagination, BCardText } from "bootstrap-vue"
	import vSelect from "vue-select"
	import store from "@/store"
	import { ref, onUnmounted } from "@vue/composition-api"
	import { avatarText } from "@core/utils/filter"
	import useCoursesList from "./useCoursesList"
	import courseStoreModule from "../courseStoreModule"
	import { $courseStatus } from "@siteConfig"
	import Ripple from "vue-ripple-directive"
	import CoursesListFilters from "./CoursesListFilters.vue"

	export default {
		components: {
			CoursesListFilters,
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
		setup() {
			const APP_COURSE_STORE_MODULE_NAME = "app-course"
			// Register module
			if (!store.hasModule(APP_COURSE_STORE_MODULE_NAME)) store.registerModule(APP_COURSE_STORE_MODULE_NAME, courseStoreModule)
			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(APP_COURSE_STORE_MODULE_NAME)) store.unregisterModule(APP_COURSE_STORE_MODULE_NAME)
			})

			const {
				tableColumns,
				fetchCourses,
				perPage,
				currentPage,
				totalCourses,
				dataMeta,
				perPageOptions,
				searchQuery,
				sortBy,
				isSortDirDesc,
				refCourseListTable,
				refetchData,

				// Extra Filters
				snFilter,
				nameFilter,
				regionFilter,
				dayFilter,
				monthFilter,
				yearFilter,
			} = useCoursesList()

			const toBeDeletedId = ref(null)
			const deleteCourse = function () {
				store
					.dispatch("app-course/deleteCourse", { id: toBeDeletedId.value })
					.then((response) => {
						// Success message and update users
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

			const toggleStatus = function (id) {
				store
					.dispatch("app-course/toggleStatus", { id })
					.then((response) => {
						// Success message and update users
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

				fetchCourses,
				deleteCourse,
				toggleStatus,
				toBeDeletedId,
				tableColumns,
				perPage,
				currentPage,
				totalCourses,
				dataMeta,
				perPageOptions,
				searchQuery,
				sortBy,
				isSortDirDesc,
				refCourseListTable,
				refetchData,

				// Filter
				avatarText,

				// Extra Filters
				snFilter,
				nameFilter,
				regionFilter,
				dayFilter,
				monthFilter,
				yearFilter,

				$courseStatus,
			}
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
