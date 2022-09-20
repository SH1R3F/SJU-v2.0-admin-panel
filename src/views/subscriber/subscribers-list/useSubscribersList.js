import { ref, watch, computed } from "@vue/composition-api";
import store from "@/store";
import i18n from "@/libs/i18n";

// Notification
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import router from "@/router";

export default function useSubscribersList() {
	// Use toast
	const toast = useToast();

	const refSubscriberListTable = ref(null);

	// Table Handlers
	const tableColumns = [{ key: "#" }, { key: "subscriber", sortable: true, label: i18n.t("Subscriber") }, { key: "email", sortable: true, label: i18n.t("Email") }, { key: "courses", sortable: true, label: i18n.t("Courses") }, { key: "status", sortable: true, label: i18n.t("Status") }, { key: "actions", label: i18n.t("Actions") }];
	const perPage = ref(10);
	const totalSubscribers = ref(0);
	const currentPage = ref(1);
	const perPageOptions = [10, 25, 50, 100];
	const searchQuery = ref("");
	const sortBy = ref("id");
	const isSortDirDesc = ref(true);
	const nameFilter = ref(null);
	const mobileFilter = ref(null);
	const emailFilter = ref(null);

	const dataMeta = computed(() => {
		const localItemsCount = refSubscriberListTable.value ? refSubscriberListTable.value.localItems.length : 0;
		return {
			from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
			to: perPage.value * (currentPage.value - 1) + localItemsCount,
			of: totalSubscribers.value,
		};
	});

	const refetchData = () => {
		refSubscriberListTable.value.refresh();
	};

	watch([currentPage, perPage, searchQuery, nameFilter, mobileFilter, emailFilter], () => {
		refetchData();
	});

	const fetchSubscribers = (ctx, callback) => {
		store
			.dispatch("app-subscriber/fetchSubscribers", {
				q: searchQuery.value,
				perPage: perPage.value,
				page: currentPage.value,
				sortBy: sortBy.value,
				sortDesc: isSortDirDesc.value,
				status: router.currentRoute.name === "active-subscribers" ? 1 : 0,

				// Filtering
				name: nameFilter.value,
				mobile: mobileFilter.value,
				email: emailFilter.value,
			})
			.then((response) => {
				const { subscribers, total } = response.data;
				callback(subscribers);
				totalSubscribers.value = total;
			})
			.catch(() => {
				toast({
					component: ToastificationContent,
					props: {
						title: i18n.t("Error fetching subscribers list"),
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
		fetchSubscribers,
		tableColumns,
		perPage,
		currentPage,
		totalSubscribers,
		dataMeta,
		perPageOptions,
		searchQuery,
		sortBy,
		isSortDirDesc,
		refSubscriberListTable,
		refetchData,

		// Extra Filters
		nameFilter,
		mobileFilter,
		emailFilter,
	};
}
