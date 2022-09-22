<template>
	<component :is="volunteerData === undefined ? 'div' : 'b-card'">
		<!-- Alert: No item found -->
		<b-alert variant="danger" :show="volunteerData === undefined">
			<h4 class="alert-heading">{{ $t("Error fetching volunteer data") }}</h4>
			<div class="alert-body">
				{{ $t("No volunteer found with this volunteer id") }}. {{ $t("Go to") }}
				<b-link class="alert-link" :to="{ name: 'active-volunteers' }"> {{ $t("Volunteers List") }} </b-link>
				{{ $t("for other volunteers") }}.
			</div>
		</b-alert>

		<b-tabs v-if="volunteerData" pills>
			<!-- Tab: Account -->
			<b-tab active>
				<template #title>
					<feather-icon icon="UserIcon" size="16" class="mr-0 mr-sm-50" />
					<span class="d-none d-sm-inline">{{ $t("Account") }}</span>
				</template>
				<volunteer-edit-tab-account :volunteer-data="volunteerData" class="mt-2 pt-75" />
			</b-tab>

			<!-- Tab: Information -->
			<b-tab>
				<template #title>
					<feather-icon icon="InfoIcon" size="16" class="mr-0 mr-sm-50" />
					<span class="d-none d-sm-inline">{{ $t("Information") }}</span>
				</template>
				<volunteer-edit-tab-information :volunteer-data="volunteerData" class="mt-2 pt-75" />
			</b-tab>

			<!-- Tab: Contact -->
			<b-tab>
				<template #title>
					<feather-icon icon="Share2Icon" size="16" class="mr-0 mr-sm-50" />
					<span class="d-none d-sm-inline">{{ $t("Contact") }}</span>
				</template>
				<volunteer-edit-tab-contact :volunteer-data="volunteerData" class="mt-2 pt-75" />
			</b-tab>
		</b-tabs>
	</component>
</template>

<script>
	import { BTab, BTabs, BCard, BAlert, BLink } from "bootstrap-vue";
	import { ref, onUnmounted } from "@vue/composition-api";
	import router from "@/router";
	import store from "@/store";
	import volunteerStoreModule from "../volunteerStoreModule";
	import VolunteerEditTabAccount from "./VolunteerEditTabAccount.vue";
	import VolunteerEditTabInformation from "./VolunteerEditTabInformation.vue";
	import VolunteerEditTabContact from "./VolunteerEditTabContact.vue";

	export default {
		components: {
			BTab,
			BTabs,
			BCard,
			BAlert,
			BLink,

			VolunteerEditTabAccount,
			VolunteerEditTabInformation,
			VolunteerEditTabContact,
		},
		setup() {
			const volunteerData = ref(null);

			const VOLUNTEER_APP_STORE_MODULE_NAME = "app-volunteer";

			// Register module
			if (!store.hasModule(VOLUNTEER_APP_STORE_MODULE_NAME)) store.registerModule(VOLUNTEER_APP_STORE_MODULE_NAME, volunteerStoreModule);

			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(VOLUNTEER_APP_STORE_MODULE_NAME)) store.unregisterModule(VOLUNTEER_APP_STORE_MODULE_NAME);
			});

			store
				.dispatch("app-volunteer/fetchVolunteer", { id: router.currentRoute.params.id })
				.then((response) => {
					volunteerData.value = response.data;
				})
				.catch((error) => {
					if (error.response.status === 404) {
						volunteerData.value = undefined;
					}
				});

			return {
				volunteerData,
			};
		},
	};
</script>

<style></style>
