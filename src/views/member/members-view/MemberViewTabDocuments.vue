<template>
	<div>
		<b-row>
			<b-table :items="items">
				<!-- Column: Status -->
				<template #cell(link)="data">
					<a :href="data.item.link" target="_blank" v-if="data.item.link">{{ $t("Preview") }}</a>
					<a v-else>{{ $t("Unspecified") }}</a>
				</template>
			</b-table>
		</b-row>
	</div>
</template>

<script>
	import { BRow, BTable } from "bootstrap-vue";
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
				items: [
					{ name: i18n.t("Profile image"), link: props.memberData.avatar },
					{ name: i18n.t("National image"), link: props.memberData.national_image },
					{ name: i18n.t("Employer letter"), link: props.memberData.employer_letter },
				],
			};
		},
	};
</script>

<style></style>
