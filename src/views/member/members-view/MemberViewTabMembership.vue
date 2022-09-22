<template>
	<div>
		<b-row>
			<b-table responsive :items="items"> </b-table>
		</b-row>
	</div>
</template>

<script>
	import { BRow, BTable } from "bootstrap-vue";
	import { $membershipStatus, $invoiceStatus, $membershipTypes } from "@siteConfig";
	import i18n from "@/libs/i18n";

	export default {
		components: {
			BRow,
			BTable,
		},
		props: {
			memberData: {
				type: Object,
				required: true,
			},
		},
		setup(props) {
			return {
				$membershipTypes,
				$membershipStatus,
				$invoiceStatus,
				items: [
					{ field: i18n.t("Membership start date"), value: props.memberData.membership_start_date },
					{ field: i18n.t("Membership end date"), value: props.memberData.membership_end_date },
					{ field: i18n.t("Invoice id"), value: props.memberData.invoice_id },
					{ field: i18n.t("Invoice status"), value: $invoiceStatus[props.memberData.invoice_status].label },
					{ field: i18n.t("Membership status"), value: $membershipStatus[props.memberData.status].label },
				],
			};
		},
	};
</script>

<style></style>
