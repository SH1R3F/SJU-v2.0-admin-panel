import { ref, watch, computed } from "@vue/composition-api"
import store from "@/store"

// Notification
import { useToast } from "vue-toastification/composition"
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue"
import i18n from "@/libs/i18n"

export default function useInvoicesList() {
	// Use toast
	const toast = useToast()

	const refInvoiceListTable = ref(null)

	// Table Handlers
	const tableColumns = [
		{ key: "#" },
		{ key: "invoice_number", label: i18n.t("Invoice number"), sortable: true },
		{ key: "member", label: i18n.t("Member") },
		{ key: "amount", label: i18n.t("Amount"), sortable: true },
		{ key: "created_at", label: i18n.t("Creation date"), sortable: true },
		{ key: "payment_method", label: i18n.t("Payment method"), sortable: true },
		{ key: "status", label: i18n.t("Status"), sortable: true },
		{ key: "actions" },
	]
	const perPage = ref(10)
	const totalInvoices = ref(0)
	const currentPage = ref(1)
	const perPageOptions = [10, 25, 50, 100]
	const searchQuery = ref("")
	const sortBy = ref("id")
	const isSortDirDesc = ref(true)
	const statusFilter = ref(null)

	const dataMeta = computed(() => {
		const localItemsCount = refInvoiceListTable.value ? refInvoiceListTable.value.localItems.length : 0
		return {
			from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
			to: perPage.value * (currentPage.value - 1) + localItemsCount,
			of: totalInvoices.value,
		}
	})

	const refetchData = () => {
		refInvoiceListTable.value.refresh()
	}

	watch([currentPage, perPage, searchQuery, statusFilter], () => {
		refetchData()
	})

	const fetchInvoices = (ctx, callback) => {
		store
			.dispatch("app-invoice/fetchInvoices", {
				q: searchQuery.value,
				perPage: perPage.value,
				page: currentPage.value,
				sortBy: sortBy.value,
				sortDesc: isSortDirDesc.value,
			})
			.then((response) => {
				const { invoices, total } = response.data

				callback(invoices)
				totalInvoices.value = total
			})
			.catch(() => {
				toast({
					component: ToastificationContent,
					props: {
						title: "Error fetching invoices' list",
						icon: "AlertTriangleIcon",
						variant: "danger",
					},
				})
			})
	}
	const exportData = (ctx, callback) => {
		store
			.dispatch("app-invoice/exportInvoices", {
				q: searchQuery.value,
				perPage: perPage.value,
				page: currentPage.value,
				sortBy: sortBy.value,
				sortDesc: isSortDirDesc.value,
			})
			.then((response) => {
				window.location = response.data.excel
			})
			.catch(() => {
				toast({
					component: ToastificationContent,
					props: {
						title: "Error fetching invoices' list",
						icon: "AlertTriangleIcon",
						variant: "danger",
					},
				})
			})
	}

	// *===============================================---*
	// *--------- UI ---------------------------------------*
	// *===============================================---*

	const resolveInvoiceStatusVariantAndIcon = (status) => {
		if (status === "Partial Payment") return { variant: "warning", icon: "PieChartIcon" }
		if (status === "Paid") return { variant: "success", icon: "CheckCircleIcon" }
		if (status === "Downloaded") return { variant: "info", icon: "ArrowDownCircleIcon" }
		if (status === "Draft") return { variant: "primary", icon: "SaveIcon" }
		if (status === "Sent") return { variant: "secondary", icon: "SendIcon" }
		if (status === "Past Due") return { variant: "danger", icon: "InfoIcon" }
		return { variant: "secondary", icon: "XIcon" }
	}

	const resolveClientAvatarVariant = (status) => {
		if (status === "Partial Payment") return "primary"
		if (status === "Paid") return "danger"
		if (status === "Downloaded") return "secondary"
		if (status === "Draft") return "warning"
		if (status === "Sent") return "info"
		if (status === "Past Due") return "success"
		return "primary"
	}

	return {
		fetchInvoices,
		tableColumns,
		perPage,
		currentPage,
		totalInvoices,
		dataMeta,
		perPageOptions,
		searchQuery,
		sortBy,
		isSortDirDesc,
		refInvoiceListTable,

		statusFilter,

		resolveInvoiceStatusVariantAndIcon,
		resolveClientAvatarVariant,

		refetchData,
		exportData,
	}
}
