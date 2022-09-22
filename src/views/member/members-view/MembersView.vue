<template>
	<div>
		<!-- Alert: No item found -->
		<b-alert variant="danger" :show="memberData === undefined">
			<h4 class="alert-heading">{{ $t("Error fetching member data") }}</h4>
			<div class="alert-body">
				{{ $t("No member found with this member id") }}. {{ $t("Go to") }}
				<b-link class="alert-link" :to="{ name: 'active-members' }"> {{ $t("Members List") }} </b-link>
				{{ $t("for other members") }}.
			</div>
		</b-alert>

		<template v-if="memberData">
			<!-- First Row -->
			<member-view-member-info-card :member-data="memberData" />

			<member-view-member-tabs :member-data="memberData" />
		</template>
	</div>
</template>

<script>
	import store from "@/store";
	import router from "@/router";
	import { ref, onUnmounted } from "@vue/composition-api";
	import { BRow, BCol, BAlert, BLink } from "bootstrap-vue";
	import memberStoreModule from "../memberStoreModule";
	import MemberViewMemberInfoCard from "./MemberViewMemberInfoCard.vue";
	import MemberViewMemberTabs from "./MemberViewMemberTabs.vue";

	export default {
		components: {
			BRow,
			BCol,
			BAlert,
			BLink,

			// Local Components
			MemberViewMemberInfoCard,
			MemberViewMemberTabs,
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
