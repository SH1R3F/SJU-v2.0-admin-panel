<template>
	<div>
		<b-row>
			<b-table :items="items"> </b-table>
		</b-row>
	</div>
</template>

<script>
	import { BRow, BTable } from "bootstrap-vue";
	import { $cities } from "@siteConfig";
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
				$cities,
				items: [
					{ field: i18n.t("Mobile"), value: props.memberData.mobile },
					{ field: i18n.t("Work telephone"), value: `(${props.memberData.worktel_ext}) ${props.memberData.worktel}` },
					{ field: i18n.t("Fax"), value: `(${props.memberData.fax_ext}) ${props.memberData.fax}` },
					{ field: i18n.t("Post box"), value: props.memberData.post_box },
					{ field: i18n.t("Post code"), value: props.memberData.post_code },
					{ field: i18n.t("City"), value: $cities["Saudi Arabia"][props.memberData.city].label },
					{ field: i18n.t("Email"), value: props.memberData.email },
				],
			};
		},
	};
</script>

<style></style>
