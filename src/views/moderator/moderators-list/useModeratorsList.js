import { ref, watch, computed } from "@vue/composition-api";
import store from "@/store";
import i18n from "@/libs/i18n";

// Notification
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

export default function useModeratorsList() {
	// Use toast
	const toast = useToast();

	const refModeratorListTable = ref(null);

	// Table Handlers
	const tableColumns = [
		{
			key: "#",
		},
		{
			key: "username",
			sortable: true,
			label: i18n.t("Username"), // I stopped here
		},
		{
			key: "mobile",
			sortable: true,
			label: i18n.t("Mobile"),
		},
		{
			key: "email",
			sortable: true,
			label: i18n.t("Email"),
		},
		{
			key: "role",
			label: i18n.t("Role"),
		},
		{ key: "actions", label: i18n.t("Actions") },
	];
	const perPage = ref(10);
	const totalModerators = ref(0);
	const currentPage = ref(1);
	const perPageOptions = [10, 25, 50, 100];
	const searchQuery = ref("");
	const sortBy = ref("id");
	const isSortDirDesc = ref(true);

	const dataMeta = computed(() => {
		const localItemsCount = refModeratorListTable.value ? refModeratorListTable.value.localItems.length : 0;
		return {
			from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
			to: perPage.value * (currentPage.value - 1) + localItemsCount,
			of: totalModerators.value,
		};
	});

	const refetchData = () => {
		refModeratorListTable.value.refresh();
	};

	watch([currentPage, perPage, searchQuery], () => {
		refetchData();
	});

	const fetchModerators = (ctx, callback) => {
		store
			.dispatch("app-moderator/fetchModerators", {
				q: searchQuery.value,
				perPage: perPage.value,
				page: currentPage.value,
				sortBy: sortBy.value,
				sortDesc: isSortDirDesc.value,
			})
			.then((response) => {
				const { moderators, total } = response.data;
				callback(moderators);
				totalModerators.value = total;
			})
			.catch(() => {
				toast({
					component: ToastificationContent,
					props: {
						title: i18n.t("Error fetching moderators list"),
						icon: "AlertTriangleIcon",
						variant: "danger",
					},
				});
			});
	};

	const fetchRoles = (ctx, callback) => {
		store
			.dispatch("app-moderator/fetchRoles")
			.then((response) => {
				const { roles } = response.data;
				callback(roles);
			})
			.catch((e) => {
				toast({
					component: ToastificationContent,
					props: {
						title: i18n.t("Error fetching roles list"),
						icon: "AlertTriangleIcon",
						variant: "danger",
					},
				});
			});
	};

	return {
		fetchModerators,
		fetchRoles,
		tableColumns,
		perPage,
		currentPage,
		totalModerators,
		dataMeta,
		perPageOptions,
		searchQuery,
		sortBy,
		isSortDirDesc,
		refModeratorListTable,
		refetchData,
	};
}
