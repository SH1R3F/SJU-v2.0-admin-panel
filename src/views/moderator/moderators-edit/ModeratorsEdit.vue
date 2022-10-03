<template>
	<component :is="moderatorData === undefined ? 'div' : 'b-card'">
		<!-- Alert: No item found -->
		<b-alert variant="danger" :show="moderatorData === undefined">
			<h4 class="alert-heading">{{ $t("Error fetching moderator data") }}</h4>
			<div class="alert-body">
				{{ $t("No moderator found with this moderator id") }}. {{ $t("Go to") }}
				<b-link class="alert-link" :to="{ name: 'active-moderators' }"> {{ $t("Moderators List") }} </b-link>
				{{ $t("for other moderators") }}.
			</div>
		</b-alert>

		<b-tabs v-if="moderatorData" pills>
			<!-- Tab: Account -->
			<b-tab active>
				<template #title>
					<feather-icon icon="UserIcon" size="16" class="mr-0 mr-sm-50" />
					<span class="d-none d-sm-inline">{{ $t("Account") }}</span>
				</template>
				<moderator-edit-tab-account :moderator-data="moderatorData" class="mt-2 pt-75" />
			</b-tab>
		</b-tabs>
	</component>
</template>

<script>
	import { BTab, BTabs, BCard, BAlert, BLink } from "bootstrap-vue";
	import { ref, onUnmounted } from "@vue/composition-api";
	import router from "@/router";
	import store from "@/store";
	import moderatorStoreModule from "../moderatorStoreModule";
	import ModeratorEditTabAccount from "./ModeratorEditTabAccount.vue";

	export default {
		components: {
			BTab,
			BTabs,
			BCard,
			BAlert,
			BLink,

			ModeratorEditTabAccount,
		},
		setup() {
			const MODERATOR_APP_STORE_MODULE_NAME = "app-moderator";
			// Register module
			if (!store.hasModule(MODERATOR_APP_STORE_MODULE_NAME)) store.registerModule(MODERATOR_APP_STORE_MODULE_NAME, moderatorStoreModule);
			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(MODERATOR_APP_STORE_MODULE_NAME)) store.unregisterModule(MODERATOR_APP_STORE_MODULE_NAME);
			});

			const moderatorData = ref(null);
			store
				.dispatch("app-moderator/fetchModerator", { id: router.currentRoute.params.id })
				.then((response) => {
					moderatorData.value = response.data;
				})
				.catch((error) => {
					if (error.response.status === 404) {
						moderatorData.value = undefined;
					}
				});

			return {
				moderatorData,
			};
		},
	};
</script>

<style></style>
