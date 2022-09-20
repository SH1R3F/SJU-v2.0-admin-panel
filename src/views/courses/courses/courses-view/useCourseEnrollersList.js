import { ref, watch, computed } from "@vue/composition-api";
import store from "@/store";
import i18n from "@/libs/i18n";
// Notification
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import router from "@/router";

export default function useCourseEnrollersList() {
	// Use toast
	const toast = useToast();
	const refCourseEnrollersListTable = ref(null);

	// Table Handlers
	const tableColumns = [{ key: "#" }, { key: "name", sortable: true, label: i18n.t("Name") }, { key: "type", label: i18n.t("Type") }, { key: "mobile", label: i18n.t("Mobile") }, { key: "email", sortable: true, label: i18n.t("Email") }, { key: "passed", label: i18n.t("Passed") }, { key: "actions", label: i18n.t("Actions") }];
	const perPage = ref(10);
	const totalEnrollers = ref(0);
	const currentPage = ref(1);
	const perPageOptions = [10, 25, 50, 100];
	const searchQuery = ref("");
	const sortBy = ref("id");
	const isSortDirDesc = ref(true);

	const dataMeta = computed(() => {
		const localItemsCount = refCourseEnrollersListTable.value ? refCourseEnrollersListTable.value.localItems.length : 0;
		return {
			from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
			to: perPage.value * (currentPage.value - 1) + localItemsCount,
			of: totalEnrollers.value,
		};
	});

	const refetchData = () => {
		refCourseEnrollersListTable.value.refresh();
	};

	watch([currentPage, perPage, searchQuery], () => {
		refetchData();
	});

	const fetchCourseEnrollers = (ctx, callback) => {
		store
			.dispatch("app-course/fetchCourseEnrollers", {
				id: router.currentRoute.params.id,
				queryParams: {
					q: searchQuery.value,
					perPage: perPage.value,
					page: currentPage.value,
					sortBy: sortBy.value,
					sortDesc: isSortDirDesc.value,
				},
			})
			.then((response) => {
				const { enrollers, total } = response.data;
				callback(enrollers);
				totalEnrollers.value = total;
			})
			.catch(() => {
				toast({
					component: ToastificationContent,
					props: {
						title: i18n.t("Error fetching course enrollers list"),
						icon: "AlertTriangleIcon",
						variant: "danger",
					},
				});
			});
	};

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
	};
}
