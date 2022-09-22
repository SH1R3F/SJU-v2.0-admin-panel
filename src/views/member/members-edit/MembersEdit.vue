<template>
	<component :is="memberData === undefined ? 'div' : 'b-card'">
		<!-- Alert: No item found -->
		<b-alert variant="danger" :show="memberData === undefined">
			<h4 class="alert-heading">{{ $t("Error fetching member data") }}</h4>
			<div class="alert-body">
				{{ $t("No member found with this member id") }}. {{ $t("Go to") }}
				<b-link class="alert-link" :to="{ name: 'active-members' }"> {{ $t("Members List") }} </b-link>
				{{ $t("for other members") }}.
			</div>
		</b-alert>

		<b-tabs v-if="memberData" pills>
			<!-- Tab: Account -->
			<b-tab active>
				<template #title>
					<feather-icon icon="UserIcon" size="16" class="mr-0 mr-sm-50" />
					<span class="d-none d-sm-inline">{{ $t("Account") }}</span>
				</template>
				<member-edit-tab-account :member-data="memberData" class="mt-2 pt-75" />
			</b-tab>

			<!-- Tab: Information -->
			<b-tab>
				<template #title>
					<feather-icon icon="InfoIcon" size="16" class="mr-0 mr-sm-50" />
					<span class="d-none d-sm-inline">{{ $t("Information") }}</span>
				</template>
				<member-edit-tab-information :member-data="memberData" class="mt-2 pt-75" />
			</b-tab>

			<!-- Tab: Contact -->
			<b-tab>
				<template #title>
					<feather-icon icon="Share2Icon" size="16" class="mr-0 mr-sm-50" />
					<span class="d-none d-sm-inline">{{ $t("Contact") }}</span>
				</template>
				<member-edit-tab-contact :member-data="memberData" class="mt-2 pt-75" />
			</b-tab>

			<!-- Tab: Experiences and fields -->
			<b-tab>
				<template #title>
					<feather-icon icon="Share2Icon" size="16" class="mr-0 mr-sm-50" />
					<span class="d-none d-sm-inline">{{ $t("Experiences and fields") }}</span>
				</template>
				<member-edit-tab-experiences-and-fields :member-data="memberData" class="mt-2 pt-75" />
			</b-tab>

			<!-- Tab: Documents and update requests -->
			<b-tab>
				<template #title>
					<feather-icon icon="Share2Icon" size="16" class="mr-0 mr-sm-50" />
					<span class="d-none d-sm-inline">{{ $t("Documents & Update requests") }}</span>
				</template>
				<member-edit-tab-documents-and-updates :member-data="memberData" class="mt-2 pt-75" />
			</b-tab>

			<!-- Tab: Membership -->
			<b-tab>
				<template #title>
					<feather-icon icon="Share2Icon" size="16" class="mr-0 mr-sm-50" />
					<span class="d-none d-sm-inline">{{ $t("Membership") }}</span>
				</template>
				<member-edit-tab-membership :member-data="memberData" class="mt-2 pt-75" />
			</b-tab>
		</b-tabs>
	</component>
</template>

<script>
	import { BTab, BTabs, BCard, BAlert, BLink } from "bootstrap-vue";
	import { ref, onUnmounted } from "@vue/composition-api";
	import router from "@/router";
	import store from "@/store";
	import memberStoreModule from "../memberStoreModule";
	import MemberEditTabAccount from "./MemberEditTabAccount.vue";
	import MemberEditTabInformation from "./MemberEditTabInformation.vue";
	import MemberEditTabContact from "./MemberEditTabContact.vue";
	import MemberEditTabExperiencesAndFields from "./MemberEditTabExperiencesAndFields.vue";
	import MemberEditTabDocumentsAndUpdates from "./MemberEditTabDocumentsAndUpdates.vue";
	import MemberEditTabMembership from "./MemberEditTabMembership.vue";

	export default {
		components: {
			BTab,
			BTabs,
			BCard,
			BAlert,
			BLink,

			MemberEditTabAccount,
			MemberEditTabInformation,
			MemberEditTabContact,
			MemberEditTabExperiencesAndFields,
			MemberEditTabDocumentsAndUpdates,
			MemberEditTabMembership,
		},
		setup() {
			const memberData = ref(null);

			const MEMBER_APP_STORE_MODULE_NAME = "app-member";

			// Register module
			if (!store.hasModule(MEMBER_APP_STORE_MODULE_NAME)) store.registerModule(MEMBER_APP_STORE_MODULE_NAME, memberStoreModule);

			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(MEMBER_APP_STORE_MODULE_NAME)) store.unregisterModule(MEMBER_APP_STORE_MODULE_NAME);
			});

			store
				.dispatch("app-member/fetchMember", { id: router.currentRoute.params.id })
				.then((response) => {
					memberData.value = response.data;
				})
				.catch((error) => {
					if (error.response.status === 404) {
						memberData.value = undefined;
					}
				});

			return {
				memberData,
			};
		},
	};
</script>

<style></style>
