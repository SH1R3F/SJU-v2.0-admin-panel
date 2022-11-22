<template>
	<div>
		<h4 class="my-2">{{ $t("Experiences") }}</h4>
		<b-row>
			<b-table :items="experiences"> </b-table>
		</b-row>

		<h4 class="my-2">{{ $t("Fields") }}</h4>
		<b-row>
			<b-table :items="fields"> </b-table>
		</b-row>

		<h4 class="my-2">{{ $t("Languages good at") }}</h4>
		<b-row>
			<b-table :items="languages"> </b-table>
		</b-row>
	</div>
</template>

<script>
	import { BRow, BTable } from "bootstrap-vue"
	import { $levels } from "@siteConfig"

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
			const { languages = [], experiences = [], fields = [] } = props.memberData.experiences_and_fields || {}

			let langs = []
			languages.forEach((language) => {
				langs.push({
					name: language.name,
					level: $levels.find((l) => l.value === language.level).label,
				})
			})

			return {
				experiences,
				fields,
				languages: langs,
			}
		},
	}
</script>

<style></style>
