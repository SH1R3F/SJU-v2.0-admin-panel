import { ref, watch, computed } from "@vue/composition-api";
import store from "@/store";
import i18n from "@/libs/i18n";

// Notification
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import router from "@/router";

export default function useMembersList() {
	// Use toast
	const toast = useToast();

	const refMemberListTable = ref(null);

	// Table Handlers
	const tableColumns = [
		{ key: "#" },
		{ key: "national_id", sortable: true, label: i18n.t("National id") },
		{ key: "membership_number", sortable: true, label: i18n.t("Membership number") },
		{ key: "member", sortable: true, label: i18n.t("Member") },
		{ key: "membership_type", sortable: true, label: i18n.t("Membership type") },
		{ key: "city", sortable: true, label: i18n.t("City") },
		{ key: "mobile", sortable: true, label: i18n.t("Mobile") },
		{ key: "status", sortable: true, label: i18n.t("Status") },
		{ key: "invoice_status", sortable: true, label: i18n.t("Invoice status") },
		{ key: "actions", label: i18n.t("Actions") },
	];
	const perPage = ref(10);
	const totalMembers = ref(0);
	const currentPage = ref(1);
	const perPageOptions = [10, 25, 50, 100];
	const searchQuery = ref("");
	const sortBy = ref("id");
	const isSortDirDesc = ref(true);
	const nameFilter = ref(null);
	const mobileFilter = ref(null);
	const emailFilter = ref(null);
	const nationalIdFilter = ref(null);
	const membershipNumberFilter = ref(null);
	const membershipTypeFilter = ref(null);
	const cityFilter = ref(null);
	const yearFilter = ref(null);

	const dataMeta = computed(() => {
		const localItemsCount = refMemberListTable.value ? refMemberListTable.value.localItems.length : 0;
		return {
			from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
			to: perPage.value * (currentPage.value - 1) + localItemsCount,
			of: totalMembers.value,
		};
	});

	const refetchData = () => {
		refMemberListTable.value.refresh();
	};

	watch([currentPage, perPage, searchQuery, nameFilter, mobileFilter, emailFilter, nationalIdFilter, membershipNumberFilter, membershipTypeFilter, cityFilter, yearFilter], () => {
		refetchData();
	});

	const fetchMembers = (ctx, callback) => {
		let status;
		switch (router.currentRoute.name) {
			case "all-members":
				status = "all";
				break;

			case "branch-waiting-members":
				status = 0;
				break;

			case "branch-accepted-members":
				status = 1;
				break;

			case "waiting-members":
				status = 1;
				break;

			case "refused-members":
				status = 2;
				break;
		}

		store
			.dispatch("app-member/fetchMembers", {
				q: searchQuery.value,
				perPage: perPage.value,
				page: currentPage.value,
				sortBy: sortBy.value,
				sortDesc: isSortDirDesc.value,
				status,

				// Filtering
				name: nameFilter.value,
				mobile: mobileFilter.value,
				email: emailFilter.value,
				nationalId: nationalIdFilter.value,
				membershipNumber: membershipNumberFilter.value,
				membershipType: membershipTypeFilter.value,
				city: cityFilter.value,
				year: yearFilter.value,
			})
			.then((response) => {
				const { members, total } = response.data;
				callback(members);
				totalMembers.value = total;
			})
			.catch(() => {
				toast({
					component: ToastificationContent,
					props: {
						title: i18n.t("Error fetching members list"),
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
		fetchMembers,
		tableColumns,
		perPage,
		currentPage,
		totalMembers,
		dataMeta,
		perPageOptions,
		searchQuery,
		sortBy,
		isSortDirDesc,
		refMemberListTable,
		refetchData,

		// Extra Filters
		nameFilter,
		mobileFilter,
		emailFilter,
		nationalIdFilter,
		membershipNumberFilter,
		membershipTypeFilter,
		cityFilter,
		yearFilter,
	};
}
