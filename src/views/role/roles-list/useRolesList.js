import { ref, watch, computed } from "@vue/composition-api";
import store from "@/store";
import i18n from "@/libs/i18n";

// Notification
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

export default function useRolesList() {
	// Use toast
	const toast = useToast();

	const refRoleListTable = ref(null);

	// Table Handlers
	const tableColumns = [
		{
			key: "#",
		},
		{
			key: "display_name",
			sortable: true,
			label: i18n.t("Role"), // I stopped here
		},
		{
			key: "description",
			sortable: true,
			label: i18n.t("Description"),
		},
		{ key: "actions", label: i18n.t("Actions") },
	];
	const perPage = ref(10);
	const totalRoles = ref(0);
	const currentPage = ref(1);
	const perPageOptions = [10, 25, 50, 100];
	const searchQuery = ref("");
	const sortBy = ref("id");
	const isSortDirDesc = ref(true);

	const dataMeta = computed(() => {
		const localItemsCount = refRoleListTable.value ? refRoleListTable.value.localItems.length : 0;
		return {
			from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
			to: perPage.value * (currentPage.value - 1) + localItemsCount,
			of: totalRoles.value,
		};
	});

	const refetchData = () => {
		refRoleListTable.value.refresh();
	};

	watch([currentPage, perPage, searchQuery], () => {
		refetchData();
	});

	const fetchRoles = (ctx, callback) => {
		store
			.dispatch("app-role/fetchRoles")
			.then((response) => {
				const { roles, total } = response.data;
				callback(roles.data);
				totalRoles.value = total;
			})
			.catch(() => {
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
		fetchRoles,
		tableColumns,
		perPage,
		currentPage,
		totalRoles,
		dataMeta,
		perPageOptions,
		searchQuery,
		sortBy,
		isSortDirDesc,
		refRoleListTable,
		refetchData,
	};
}
