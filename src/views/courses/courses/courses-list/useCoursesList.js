import { ref, watch, computed } from "@vue/composition-api"
import store from "@/store"
import i18n from "@/libs/i18n"

// Notification
import { useToast } from "vue-toastification/composition"
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue"

export default function useCoursesList() {
	// Use toast
	const toast = useToast()

	const refCourseListTable = ref(null)

	// Table Handlers
	const tableColumns = [
		{ key: "#" },
		{ key: "SN", sortable: true, label: i18n.t("Course Number") },
		{ key: "name_ar", sortable: true, label: i18n.t("Name") },
		{ key: "date", sortable: true, label: i18n.t("Date") },
		{ key: "type", label: i18n.t("Course type") },
		{ key: "category", label: i18n.t("Course category") },
		{ key: "gender", sortable: true, label: i18n.t("Gender") },
		{ key: "location", label: i18n.t("Location") },
		{ key: "region", sortable: true, label: i18n.t("Region") },
		{ key: "status", sortable: true, label: i18n.t("Status") },
		{ key: "actions", label: i18n.t("Actions") },
	]
	const perPage = ref(10)
	const totalCourses = ref(0)
	const currentPage = ref(1)
	const perPageOptions = [10, 25, 50, 100]
	const searchQuery = ref("")
	const sortBy = ref("id")
	const isSortDirDesc = ref(true)
	const snFilter = ref(null)
	const nameFilter = ref(null)
	const regionFilter = ref(null)
	const dayFilter = ref(null)
	const monthFilter = ref(null)
	const yearFilter = ref(null)

	const dataMeta = computed(() => {
		const localItemsCount = refCourseListTable.value ? refCourseListTable.value.localItems.length : 0
		return {
			from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
			to: perPage.value * (currentPage.value - 1) + localItemsCount,
			of: totalCourses.value,
		}
	})

	const refetchData = () => {
		refCourseListTable.value.refresh()
	}

	watch(
		[currentPage, perPage, searchQuery, snFilter, nameFilter, regionFilter, dayFilter, monthFilter, yearFilter],
		() => {
			refetchData()
		}
	)

	const fetchCourses = (ctx, callback) => {
		store
			.dispatch("app-course/fetchCourses", {
				queryParams: {
					q: searchQuery.value,
					perPage: perPage.value,
					page: currentPage.value,
					sortBy: sortBy.value,
					sortDesc: isSortDirDesc.value,

					// Filtering
					sn: snFilter.value,
					name: nameFilter.value,
					region: regionFilter.value,
					day: dayFilter.value,
					month: monthFilter.value,
					year: yearFilter.value,
				},
			})
			.then((response) => {
				const { courses, total } = response.data
				callback(courses)
				totalCourses.value = total
			})
			.catch(() => {
				toast({
					component: ToastificationContent,
					props: {
						title: i18n.t("Error fetching courses list"),
						icon: "AlertTriangleIcon",
						variant: "danger",
					},
				})
			})
	}

	const exportData = (ctx, callback) => {
		store
			.dispatch("app-course/exportCourses", {
				queryParams: {
					q: searchQuery.value,
					perPage: perPage.value,
					page: currentPage.value,
					sortBy: sortBy.value,
					sortDesc: isSortDirDesc.value,

					// Filtering
					sn: snFilter.value,
					name: nameFilter.value,
					region: regionFilter.value,
					day: dayFilter.value,
					month: monthFilter.value,
					year: yearFilter.value,
				},
			})
			.then((response) => {
				window.location = response.data.excel
			})
			.catch(() => {
				toast({
					component: ToastificationContent,
					props: {
						title: i18n.t("Error fetching courses list"),
						icon: "AlertTriangleIcon",
						variant: "danger",
					},
				})
			})
	}

	const fetchNamings = (ctx, callback) => {
		store
			.dispatch("course-naming/fetchAllNamings")
			.then((response) => {
				callback(response.data)
			})
			.catch(() => {
				toast({
					component: ToastificationContent,
					props: {
						title: i18n.t(`Error fetching namings lists`),
						icon: "AlertTriangleIcon",
						variant: "danger",
					},
				})
			})
	}

	return {
		fetchCourses,
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
		exportData,

		fetchNamings,

		// Extra filters
		snFilter,
		nameFilter,
		regionFilter,
		dayFilter,
		monthFilter,
		yearFilter,
	}
}
