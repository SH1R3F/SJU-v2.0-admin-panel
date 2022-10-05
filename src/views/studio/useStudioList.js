import { ref, watch, computed } from "@vue/composition-api"
import store from "@/store"
import i18n from "@/libs/i18n"

// Notification
import { useToast } from "vue-toastification/composition"
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue"

export default function useStudioList() {
	// Use toast
	const toast = useToast()

	const perPage = ref(20)
	const totalItems = ref(0)
	const currentPage = ref(1)

	const dataMeta = computed(() => {
		return {
			from: perPage.value * (currentPage.value - 1),
			to: perPage.value * (currentPage.value - 1),
			of: totalItems.value,
		}
	})

	watch([currentPage], () => {
		refetchData()
	})

	const fetchStudioItems = (studioType, callback) => {
		store
			.dispatch("app-studio/fetchStudioItems", {
				type: studioType,
				perPage: perPage.value,
				page: currentPage.value,
			})
			.then((response) => {
				const { items, total } = response.data
				callback(items)
				totalItems.value = total
			})
			.catch((e) => {
				toast({
					component: ToastificationContent,
					props: {
						title: i18n.t("Error fetching studio items"),
						icon: "AlertTriangleIcon",
						variant: "danger",
					},
				})
			})
	}

	const refetchData = () => {}

	return {
		fetchStudioItems,
		perPage,
		currentPage,
		totalItems,
		dataMeta,
		refetchData,
	}
}
