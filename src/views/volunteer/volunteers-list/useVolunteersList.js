import { ref, watch, computed } from "@vue/composition-api";
import store from "@/store";
import i18n from "@/libs/i18n";

// Notification
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import router from "@/router";

export default function useVolunteersList() {
	// Use toast
	const toast = useToast();

	const refVolunteerListTable = ref(null);

	// Table Handlers
	const tableColumns = [{ key: "#" }, { key: "volunteer", sortable: true, label: i18n.t("Volunteer") }, { key: "email", sortable: true, label: i18n.t("Email") }, { key: "courses", sortable: true, label: i18n.t("Courses") }, { key: "status", sortable: true, label: i18n.t("Status") }, { key: "actions", label: i18n.t("Actions") }];
	const perPage = ref(10);
	const totalVolunteers = ref(0);
	const currentPage = ref(1);
	const perPageOptions = [10, 25, 50, 100];
	const searchQuery = ref("");
	const sortBy = ref("id");
	const isSortDirDesc = ref(true);
	const nameFilter = ref(null);
	const mobileFilter = ref(null);
	const emailFilter = ref(null);

	const dataMeta = computed(() => {
		const localItemsCount = refVolunteerListTable.value ? refVolunteerListTable.value.localItems.length : 0;
		return {
			from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
			to: perPage.value * (currentPage.value - 1) + localItemsCount,
			of: totalVolunteers.value,
		};
	});

	const refetchData = () => {
		refVolunteerListTable.value.refresh();
	};

	watch([currentPage, perPage, searchQuery, nameFilter, mobileFilter, emailFilter], () => {
		refetchData();
	});

	const fetchVolunteers = (ctx, callback) => {
		store
			.dispatch("app-volunteer/fetchVolunteers", {
				q: searchQuery.value,
				perPage: perPage.value,
				page: currentPage.value,
				sortBy: sortBy.value,
				sortDesc: isSortDirDesc.value,
				status: router.currentRoute.name === "active-volunteers" ? 1 : 0,

				// Filtering
				name: nameFilter.value,
				mobile: mobileFilter.value,
				email: emailFilter.value,
			})
			.then((response) => {
				const { volunteers, total } = response.data;
				callback(volunteers);
				totalVolunteers.value = total;
			})
			.catch(() => {
				toast({
					component: ToastificationContent,
					props: {
						title: i18n.t("Error fetching volunteers list"),
						icon: "AlertTriangleIcon",
						variant: "danger",
					},
				});
			});
	};

	// *===============================================---*
	// *--------- UI ---------------------------------------*
	// *===============================================---*

	const resolveUserStatusVariant = (status) => {
		if (status === "pending") return "warning";
		if (status === "active") return "success";
		if (status === "inactive") return "secondary";
		return "primary";
	};

	return {
		fetchVolunteers,
		tableColumns,
		perPage,
		currentPage,
		totalVolunteers,
		dataMeta,
		perPageOptions,
		searchQuery,
		sortBy,
		isSortDirDesc,
		refVolunteerListTable,
		refetchData,

		// Extra Filters
		nameFilter,
		mobileFilter,
		emailFilter,
	};
}
