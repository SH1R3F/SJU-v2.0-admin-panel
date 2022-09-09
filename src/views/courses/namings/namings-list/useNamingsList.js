import { ref, watch, computed } from "@vue/composition-api";
import store from "@/store";
import i18n from "@/libs/i18n";

// Notification
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

export default function useSubscribersList(naming) {
	// Use toast
	const toast = useToast();

	const refNamingListTable = ref(null);

	// Table Handlers
	const tableColumns = [
		{ key: "#", sortable: true },
		{ key: "name", sortable: true, label: i18n.t("Name") },
		{ key: "description", sortable: true, label: i18n.t("Description") },
		{ key: "status", sortable: true, label: i18n.t("Status") },
		{ key: "actions", label: i18n.t("Actions") },
	];
	const perPage = ref(10);
	const totalNamings = ref(0);
	const currentPage = ref(1);
	const perPageOptions = [10, 25, 50, 100];
	const searchQuery = ref("");
	const sortBy = ref("id");
	const isSortDirDesc = ref(true);

	const dataMeta = computed(() => {
		const localItemsCount = refNamingListTable.value ? refNamingListTable.value.localItems.length : 0;
		return {
			from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
			to: perPage.value * (currentPage.value - 1) + localItemsCount,
			of: totalNamings.value,
		};
	});

	const refetchData = () => {
		refNamingListTable.value.refresh();
	};

	watch([currentPage, perPage, searchQuery], () => {
		refetchData();
	});

	const fetchNamings = (ctx, callback) => {
		store
			.dispatch("course-naming/fetchNamings", {
				naming,
				queryParams: {
					q: searchQuery.value,
					perPage: perPage.value,
					page: currentPage.value,
					sortBy: sortBy.value,
					sortDesc: isSortDirDesc.value,
				},
			})
			.then((response) => {
				const { namings, total } = response.data;
				callback(namings);
				totalNamings.value = total;
			})
			.catch(() => {
				toast({
					component: ToastificationContent,
					props: {
						title: i18n.t("Error fetching namings list"),
						icon: "AlertTriangleIcon",
						variant: "danger",
					},
				});
			});
	};

	return {
		fetchNamings,
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
	};
}
