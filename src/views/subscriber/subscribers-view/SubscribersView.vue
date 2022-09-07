<template>
	<div>
		<!-- Alert: No item found -->
		<b-alert variant="danger" :show="subscriberData === undefined">
			<h4 class="alert-heading">{{ $t("Error fetching subscriber data") }}</h4>
			<div class="alert-body">
				{{ $t("No subscriber found with this subscriber id") }}. {{ $t("Go to") }}
				<b-link class="alert-link" :to="{ name: 'activated-subscribers' }"> {{ $t("Subscribers List") }} </b-link>
				{{ $t("for other subscribers") }}.
			</div>
		</b-alert>

		<template v-if="subscriberData">
			<!-- First Row -->
			<subscriber-view-subscriber-info-card :subscriber-data="subscriberData" />

			<subscriber-view-subscriber-timeline-card :subscriber-data="subscriberData" />

			<subscriber-enrolled-courses />
		</template>
	</div>
</template>

<script>
	import store from "@/store";
	import router from "@/router";
	import { ref, onUnmounted } from "@vue/composition-api";
	import { BRow, BCol, BAlert, BLink } from "bootstrap-vue";
	import SubscriberEnrolledCourses from "./SubscriberEnrolledCourses.vue";
	import subscriberStoreModule from "../subscriberStoreModule";
	import SubscriberViewSubscriberInfoCard from "./SubscriberViewSubscriberInfoCard.vue";
	import SubscriberViewSubscriberTimelineCard from "./SubscriberViewSubscriberTimelineCard.vue";

	export default {
		components: {
			BRow,
			BCol,
			BAlert,
			BLink,

			// Local Components
			SubscriberViewSubscriberInfoCard,
			SubscriberViewSubscriberTimelineCard,

			SubscriberEnrolledCourses,
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
