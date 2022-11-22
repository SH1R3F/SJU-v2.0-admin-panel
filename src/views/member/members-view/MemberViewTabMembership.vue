<template>
	<div>
		<b-row>
			<b-table responsive :items="items"> </b-table>
		</b-row>
	</div>
</template>

<script>
	import { BRow, BTable } from "bootstrap-vue"
	import { $membershipStatus, $invoiceStatus, $membershipTypes } from "@siteConfig"
	import i18n from "@/libs/i18n"

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
			const membershipStatus = (member, subscription) => {
				if (member.approved == -2) {
					return i18n.t("Refused")
				} else if (member.approved == null) {
					return i18n.t("Completing info")
				} else if (member.approved == 0) {
					if (member.refusal_reason) {
						return i18n.t("Waiting approval (after refuse)")
					} else {
						return i18n.t("Waiting branch approval")
					}
				} else if (member.approved == 1) {
					if (member.active == -1) {
						return i18n.t("Waiting admin approval")
					} else if (member.active == 0) {
						return i18n.t("Inactive")
					} else if (member.active == 1) {
						if (subscription.status == 1) {
							if (new Date() < new Date(subscription.end_date)) {
								return i18n.t("Active")
							} else {
								return i18n.t("Ended subscription")
							}
						} else {
							return i18n.t("Waiting to pay")
						}
					}
				}
			}

			return {
				$membershipTypes,
				$membershipStatus,
				$invoiceStatus,
				items: [
					{ field: i18n.t("Membership start date"), value: props.memberData.subscription.start_date },
					{ field: i18n.t("Membership end date"), value: props.memberData.subscription.end_date },
					{ field: i18n.t("Invoice id"), value: props.memberData.invoice.invoice_number },
					{
						field: i18n.t("Invoice status"),
						value: $invoiceStatus.find((s) => s.value == props.memberData.invoice.status).label,
					},
					{
						field: i18n.t("Membership status"),
						value: membershipStatus(props.memberData, props.memberData.subscription),
					},
				],
			}
		},
	}
</script>

<style></style>
