import { ref, watch, computed } from "@vue/composition-api"
import store from "@/store"
import i18n from "@/libs/i18n"

// Notification
import { useToast } from "vue-toastification/composition"
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue"

export default function usePagesList() {
	// Use toast
	const toast = useToast()

	const refPageListTable = ref(null)

	// Table Handlers
	const tableColumns = [
		{
			key: "#",
		},
		{
			key: "title",
			sortable: true,
			label: i18n.t("Title"),
		},
		{
			key: "slug",
			sortable: true,
			label: i18n.t("Slug"),
		},
		{
			key: "actions",
			label: i18n.t("Actions"),
			thStyle: { minWidth: "150px" },
		},
	]
	const perPage = ref(10)
	const totalPages = ref(0)
	const currentPage = ref(1)
	const perPageOptions = [10, 25, 50, 100]
	const searchQuery = ref("")
	const sortBy = ref("id")
	const isSortDirDesc = ref(true)

	const dataMeta = computed(() => {
		const localItemsCount = refPageListTable.value ? refPageListTable.value.localItems.length : 0
		return {
			from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
			to: perPage.value * (currentPage.value - 1) + localItemsCount,
			of: totalPages.value,
		}
	})

	const refetchData = () => {
		refPageListTable.value.refresh()
	}

	watch([currentPage, perPage, searchQuery], () => {
		refetchData()
	})

	const fetchPages = (ctx, callback) => {
		store
			.dispatch("site-pages/fetchPages", {
				queryParams: {
					q: searchQuery.value,
					perPage: perPage.value,
					page: currentPage.value,
					sortBy: sortBy.value,
					sortDesc: isSortDirDesc.value,
				},
			})
			.then((response) => {
				const { pages, total } = response.data
				callback(pages)
				totalPages.value = total
			})
			.catch(() => {
				toast({
					component: ToastificationContent,
					props: {
						title: i18n.t("Error fetching pages list"),
						icon: "AlertTriangleIcon",
						variant: "danger",
					},
				})
			})
	}

	return {
		fetchPages,
		tableColumns,
		perPage,
		currentPage,
		totalPages,
		dataMeta,
		perPageOptions,
		searchQuery,
		sortBy,
		isSortDirDesc,
		refPageListTable,

		refetchData,
	}
}
