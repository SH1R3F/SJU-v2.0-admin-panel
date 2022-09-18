import { ref, watch, computed } from "@vue/composition-api";
import store from "@/store";
import i18n from "@/libs/i18n";

// Notification
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

export default function useSubscribersList() {
	// Use toast
	const toast = useToast();

	const refQuestionnaireListTable = ref(null);

	// Table Handlers
	const tableColumns = [
		{ key: "#", sortable: true },
		{ key: "name_ar", sortable: true, label: i18n.t("Name") },
		{ key: "status", sortable: true, label: i18n.t("Status") },
		{ key: "actions", label: i18n.t("Actions") },
	];
	const perPage = ref(10);
	const totalQuestionnaires = ref(0);
	const currentPage = ref(1);
	const perPageOptions = [10, 25, 50, 100];
	const searchQuery = ref("");
	const sortBy = ref("id");
	const isSortDirDesc = ref(true);

	const dataMeta = computed(() => {
		const localItemsCount = refQuestionnaireListTable.value ? refQuestionnaireListTable.value.localItems.length : 0;
		return {
			from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
			to: perPage.value * (currentPage.value - 1) + localItemsCount,
			of: totalQuestionnaires.value,
		};
	});

	const refetchData = () => {
		refQuestionnaireListTable.value.refresh();
	};

	watch([currentPage, perPage, searchQuery], () => {
		refetchData();
	});

	const fetchQuestionnaires = (ctx, callback) => {
		store
			.dispatch("course-questionnaire/fetchQuestionnaires", {
				queryParams: {
					q: searchQuery.value,
					perPage: perPage.value,
					page: currentPage.value,
					sortBy: sortBy.value,
					sortDesc: isSortDirDesc.value,
				},
			})
			.then((response) => {
				const { questionnaires, total } = response.data;
				callback(questionnaires);
				totalQuestionnaires.value = total;
			})
			.catch(() => {
				toast({
					component: ToastificationContent,
					props: {
						title: i18n.t("Error fetching questionnaires list"),
						icon: "AlertTriangleIcon",
						variant: "danger",
					},
				});
			});
	};

	return {
		fetchQuestionnaires,
		tableColumns,
		perPage,
		currentPage,
		totalQuestionnaires,
		dataMeta,
		perPageOptions,
		searchQuery,
		sortBy,
		isSortDirDesc,
		refQuestionnaireListTable,

		refetchData,
	};
}
