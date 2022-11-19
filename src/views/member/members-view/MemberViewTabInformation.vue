<template>
	<div>
		<b-row>
			<b-table :items="items"> </b-table>
		</b-row>
	</div>
</template>

<script>
	import { BRow, BCol, BTable } from "bootstrap-vue"
	import { $genders, $newspaperTypes, $cities, $countries, $nationalities } from "@siteConfig"
	import i18n from "@/libs/i18n"

	export default {
		components: {
			BRow,
			BCol,
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
				$genders,
				$newspaperTypes,
				$cities,
				$countries,
				items: [
					{ field: i18n.t("National id"), value: props.memberData.national_id },
					{ field: i18n.t("Source"), value: props.memberData.source },
					{ field: `${i18n.t("Date")} (${i18n.t("Hijri")})`, value: props.memberData.date },
					{ field: i18n.t("Gender"), value: $genders[props.memberData.gender].text },
					{ field: `${i18n.t("Birth date")} (${i18n.t("Meladi")})`, value: props.memberData.birthday_meladi },
					{ field: `${i18n.t("Birth date")} (${i18n.t("Hijri")})`, value: props.memberData.birthday_hijri },
					{
						field: i18n.t("Nationality"),
						value: $nationalities.find((n) => n.value === props.memberData.nationality).label,
					},
					{ field: i18n.t("Qualification"), value: props.memberData.qualification },
					{ field: i18n.t("Major"), value: props.memberData.major },
					{
						field: `${i18n.t("Job title")} (${i18n.t("Journalist")})`,
						value: props.memberData.journalist_job_title,
					},
					{
						field: `${i18n.t("Employer")} (${i18n.t("Journalist")})`,
						value: props.memberData.journalist_employer,
					},
					{ field: i18n.t("Newspaper type"), value: $newspaperTypes[props.memberData.newspaper_type].label },
					{
						field: `${i18n.t("Job title")} (${i18n.t("Non-journalist")})`,
						value: props.memberData.job_title,
					},
					{ field: `${i18n.t("Employer")} (${i18n.t("Non-journalist")})`, value: props.memberData.employer },
				],
			}
		},
	}
</script>
