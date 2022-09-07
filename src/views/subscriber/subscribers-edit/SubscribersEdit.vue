<template>
	<component :is="subscriberData === undefined ? 'div' : 'b-card'">
		<!-- Alert: No item found -->
		<b-alert variant="danger" :show="subscriberData === undefined">
			<h4 class="alert-heading">{{ $t("Error fetching subscriber data") }}</h4>
			<div class="alert-body">
				{{ $t("No subscriber found with this subscriber id") }}. {{ $t("Go to") }}
				<b-link class="alert-link" :to="{ name: 'active-subscribers' }"> {{ $t("Subscribers List") }} </b-link>
				{{ $t("for other subscribers") }}.
			</div>
		</b-alert>

		<b-tabs v-if="subscriberData" pills>
			<!-- Tab: Account -->
			<b-tab active>
				<template #title>
					<feather-icon icon="UserIcon" size="16" class="mr-0 mr-sm-50" />
					<span class="d-none d-sm-inline">{{ $t("Account") }}</span>
				</template>
				<subscriber-edit-tab-account :subscriber-data="subscriberData" class="mt-2 pt-75" />
			</b-tab>

			<!-- Tab: Information -->
			<b-tab>
				<template #title>
					<feather-icon icon="InfoIcon" size="16" class="mr-0 mr-sm-50" />
					<span class="d-none d-sm-inline">{{ $t("Information") }}</span>
				</template>
				<subscriber-edit-tab-information :subscriber-data="subscriberData" class="mt-2 pt-75" />
			</b-tab>

			<!-- Tab: Contact -->
			<b-tab>
				<template #title>
					<feather-icon icon="Share2Icon" size="16" class="mr-0 mr-sm-50" />
					<span class="d-none d-sm-inline">{{ $t("Contact") }}</span>
				</template>
				<subscriber-edit-tab-contact :subscriber-data="subscriberData" class="mt-2 pt-75" />
			</b-tab>
		</b-tabs>
	</component>
</template>

<script>
	import { BTab, BTabs, BCard, BAlert, BLink } from "bootstrap-vue";
	import { ref, onUnmounted } from "@vue/composition-api";
	import router from "@/router";
	import store from "@/store";
	import subscriberStoreModule from "../subscriberStoreModule";
	import SubscriberEditTabAccount from "./SubscriberEditTabAccount.vue";
	import SubscriberEditTabInformation from "./SubscriberEditTabInformation.vue";
	import SubscriberEditTabContact from "./SubscriberEditTabContact.vue";

	export default {
		components: {
			BTab,
			BTabs,
			BCard,
			BAlert,
			BLink,

			SubscriberEditTabAccount,
			SubscriberEditTabInformation,
			SubscriberEditTabContact,
		},
		setup() {
			const subscriberData = ref(null);

			const SUBSCRIBER_APP_STORE_MODULE_NAME = "app-subscriber";

			// Register module
			if (!store.hasModule(SUBSCRIBER_APP_STORE_MODULE_NAME)) store.registerModule(SUBSCRIBER_APP_STORE_MODULE_NAME, subscriberStoreModule);

			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(SUBSCRIBER_APP_STORE_MODULE_NAME)) store.unregisterModule(SUBSCRIBER_APP_STORE_MODULE_NAME);
			});

			store
				.dispatch("app-subscriber/fetchSubscriber", { id: router.currentRoute.params.id })
				.then((response) => {
					subscriberData.value = response.data;
				})
				.catch((error) => {
					if (error.response.status === 404) {
						subscriberData.value = undefined;
					}
				});

			return {
				subscriberData,
			};
		},
	};
</script>

<style></style>
