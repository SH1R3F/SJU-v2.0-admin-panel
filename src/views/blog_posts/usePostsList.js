import { ref, watch, computed } from "@vue/composition-api"
import store from "@/store"
import i18n from "@/libs/i18n"

// Notification
import { useToast } from "vue-toastification/composition"
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue"

export default function usePostsList() {
	// Use toast
	const toast = useToast()

	const refPostListTable = ref(null)

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
			key: "category",
			sortable: true,
			label: i18n.t("Category"),
		},
		{
			key: "actions",
			label: i18n.t("Actions"),
			thStyle: { minWidth: "150px" },
		},
	]
	const perPage = ref(10)
	const totalPosts = ref(0)
	const currentPage = ref(1)
	const perPageOptions = [10, 25, 50, 100]
	const searchQuery = ref("")
	const sortBy = ref("id")
	const isSortDirDesc = ref(true)

	const dataMeta = computed(() => {
		const localItemsCount = refPostListTable.value ? refPostListTable.value.localItems.length : 0
		return {
			from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
			to: perPage.value * (currentPage.value - 1) + localItemsCount,
			of: totalPosts.value,
		}
	})

	const refetchData = () => {
		refPostListTable.value.refresh()
	}

	watch([currentPage, perPage, searchQuery], () => {
		refetchData()
	})

	const fetchPosts = (ctx, callback) => {
		store
			.dispatch("blog-posts/fetchPosts", {
				queryParams: {
					q: searchQuery.value,
					perPage: perPage.value,
					page: currentPage.value,
					sortBy: sortBy.value,
					sortDesc: isSortDirDesc.value,
				},
			})
			.then((response) => {
				const { posts, total } = response.data
				callback(posts)
				totalPosts.value = total
			})
			.catch(() => {
				toast({
					component: ToastificationContent,
					props: {
						title: i18n.t("Error fetching posts list"),
						icon: "AlertTriangleIcon",
						variant: "danger",
					},
				})
			})
	}

	return {
		fetchPosts,
		tableColumns,
		perPage,
		currentPage,
		totalPosts,
		dataMeta,
		perPageOptions,
		searchQuery,
		sortBy,
		isSortDirDesc,
		refPostListTable,

		refetchData,
	}
}
