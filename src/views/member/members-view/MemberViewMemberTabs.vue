<template>
	<b-card>
		<b-tabs v-if="memberData" pills>
			<!-- Tab: Membership -->
			<b-tab>
				<template #title>
					<feather-icon icon="Share2Icon" size="16" class="mr-0 mr-sm-50" />
					<span class="d-none d-sm-inline">{{ $t("Membership") }}</span>
				</template>
				<member-view-tab-membership :member-data="memberData" class="mt-2 pt-75" />
			</b-tab>

			<!-- Tab: Information -->
			<b-tab>
				<template #title>
					<feather-icon icon="InfoIcon" size="16" class="mr-0 mr-sm-50" />
					<span class="d-none d-sm-inline">{{ $t("Information") }}</span>
				</template>
				<member-view-tab-information :member-data="memberData" class="mt-2 pt-75" />
			</b-tab>

			<!-- Tab: Contact -->
			<b-tab>
				<template #title>
					<feather-icon icon="Share2Icon" size="16" class="mr-0 mr-sm-50" />
					<span class="d-none d-sm-inline">{{ $t("Contact") }}</span>
				</template>
				<member-view-tab-contact :member-data="memberData" class="mt-2 pt-75" />
			</b-tab>

			<!-- Tab: Experiences and fields -->
			<b-tab>
				<template #title>
					<feather-icon icon="Share2Icon" size="16" class="mr-0 mr-sm-50" />
					<span class="d-none d-sm-inline">{{ $t("Experiences and fields") }}</span>
				</template>
				<member-view-tab-experiences-and-fields :member-data="memberData" class="mt-2 pt-75" />
			</b-tab>

			<!-- Tab: Documents -->
			<b-tab>
				<template #title>
					<feather-icon icon="Share2Icon" size="16" class="mr-0 mr-sm-50" />
					<span class="d-none d-sm-inline">{{ $t("Documents & Update requests") }}</span>
				</template>
				<member-view-tab-documents :member-data="memberData" class="mt-2 pt-75" />
			</b-tab>

			<!-- Tab: Member Card -->
			<b-tab>
				<template #title>
					<feather-icon icon="Share2Icon" size="16" class="mr-0 mr-sm-50" />
					<span class="d-none d-sm-inline">{{ $t("Member Card") }}</span>
				</template>
				<member-card :member-data="memberData" class="mt-2 pt-75" />
			</b-tab>
		</b-tabs>
	</b-card>
</template>

<script>
	import { BCard, BTabs, BTab } from "bootstrap-vue"
	import MemberViewTabMembership from "./MemberViewTabMembership.vue"
	import MemberViewTabInformation from "./MemberViewTabInformation.vue"
	import MemberViewTabContact from "./MemberViewTabContact.vue"
	import MemberViewTabExperiencesAndFields from "./MemberViewTabExperiencesAndFields.vue"
	import MemberViewTabDocuments from "./MemberViewTabDocuments.vue"
	import MemberCard from "./MemberCard.vue"

	export default {
		components: {
			BCard,
			BTabs,
			BTab,

			MemberViewTabMembership,
			MemberViewTabInformation,
			MemberViewTabContact,
			MemberViewTabExperiencesAndFields,
			MemberViewTabDocuments,
			MemberCard,
		},
		props: ["memberData"],
	}
</script>

<style></style>
