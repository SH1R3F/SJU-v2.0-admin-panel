import { ref, watch, computed } from "@vue/composition-api";
import store from "@/store";
import { title } from "@core/utils/filter";
import i18n from "@/libs/i18n";

// Notification
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

export default function useCoursesList() {
	// Use toast
	const toast = useToast();

	const refUserListTable = ref(null);

	// Table Handlers
	const tableColumns = [
		{ key: "#", sortable: true },
		{ key: "name", sortable: true, label: i18n.t("Course name") },
		{ key: "status", sortable: true, label: i18n.t("Status") },
		{ key: "actions", label: i18n.t("Actions") },
	];
	const perPage = ref(10);
	const totalCourses = ref(0);
	const currentPage = ref(1);
	const perPageOptions = [10, 25, 50, 100];
	const searchQuery = ref("");
	const sortBy = ref("id");
	const isSortDirDesc = ref(true);

	const dataMeta = computed(() => {
		const localItemsCount = refUserListTable.value ? refUserListTable.value.localItems.length : 0;
		return {
			from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
			to: perPage.value * (currentPage.value - 1) + localItemsCount,
			of: totalCourses.value,
		};
	});

	const refetchData = () => {
		refUserListTable.value.refresh();
	};

	watch([currentPage, perPage, searchQuery], () => {
		refetchData();
	});

	const fetchCourses = (ctx, callback) => {
		store
			.dispatch("app-subscriber/fetchCourses", {
				q: searchQuery.value,
				perPage: perPage.value,
				page: currentPage.value,
				sortBy: sortBy.value,
				sortDesc: isSortDirDesc.value,
			})
			.then((response) => {
				const { users, total } = response.data;
				callback(users);
				totalCourses.value = total;
			})
			.catch(() => {
				toast({
					component: ToastificationContent,
					props: {
						title: "Error fetching users list",
						icon: "AlertTriangleIcon",
						variant: "danger",
					},
				});
			});
	};

	// *===============================================---*
	// *--------- UI ---------------------------------------*
	// *===============================================---*

	const resolveUserRoleVariant = (role) => {
		if (role === "subscriber") return "primary";
		if (role === "author") return "warning";
		if (role === "maintainer") return "success";
		if (role === "editor") return "info";
		if (role === "admin") return "danger";
		return "primary";
	};

	const resolveUserRoleIcon = (role) => {
		if (role === "subscriber") return "UserIcon";
		if (role === "author") return "SettingsIcon";
		if (role === "maintainer") return "DatabaseIcon";
		if (role === "editor") return "Edit2Icon";
		if (role === "admin") return "ServerIcon";
		return "UserIcon";
	};

	const resolveUserStatusVariant = (status) => {
		if (status === "pending") return "warning";
		if (status === "active") return "success";
		if (status === "inactive") return "secondary";
		return "primary";
	};

	return {
		fetchCourses,
		tableColumns,
		perPage,
		currentPage,
		totalCourses,
		dataMeta,
		perPageOptions,
		searchQuery,
		sortBy,
		isSortDirDesc,
		refUserListTable,

		resolveUserRoleVariant,
		resolveUserRoleIcon,
		resolveUserStatusVariant,
		refetchData,
	};
}
