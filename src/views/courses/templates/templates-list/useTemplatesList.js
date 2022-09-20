import { ref, watch, computed } from "@vue/composition-api";
import store from "@/store";
import i18n from "@/libs/i18n";

// Notification
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

export default function useTemplatesList() {
	// Use toast
	const toast = useToast();

	const refTemplateListTable = ref(null);

	// Table Handlers
	const tableColumns = [{ key: "#" }, { key: "name", sortable: true, label: i18n.t("Name") }, { key: "language", sortable: true, label: i18n.t("Language") }, { key: "layout", sortable: true, label: i18n.t("Layout") }, { key: "actions", label: i18n.t("Actions") }];
	const perPage = ref(10);
	const totalTemplates = ref(0);
	const currentPage = ref(1);
	const perPageOptions = [10, 25, 50, 100];
	const searchQuery = ref("");
	const sortBy = ref("id");
	const isSortDirDesc = ref(true);

	const dataMeta = computed(() => {
		const localItemsCount = refTemplateListTable.value ? refTemplateListTable.value.localItems.length : 0;
		return {
			from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
			to: perPage.value * (currentPage.value - 1) + localItemsCount,
			of: totalTemplates.value,
		};
	});

	const refetchData = () => {
		refTemplateListTable.value.refresh();
	};

	watch([currentPage, perPage, searchQuery], () => {
		refetchData();
	});

	const fetchTemplates = (ctx, callback) => {
		store
			.dispatch("course-template/fetchTemplates", {
				queryParams: {
					q: searchQuery.value,
					perPage: perPage.value,
					page: currentPage.value,
					sortBy: sortBy.value,
					sortDesc: isSortDirDesc.value,
				},
			})
			.then((response) => {
				const { templates, total } = response.data;
				callback(templates);
				totalTemplates.value = total;
			})
			.catch(() => {
				toast({
					component: ToastificationContent,
					props: {
						title: i18n.t("Error fetching templates list"),
						icon: "AlertTriangleIcon",
						variant: "danger",
					},
				});
			});
	};

	return {
		fetchTemplates,
		tableColumns,
		perPage,
		currentPage,
		totalTemplates,
		dataMeta,
		perPageOptions,
		searchQuery,
		sortBy,
		isSortDirDesc,
		refTemplateListTable,

		refetchData,
	};
}