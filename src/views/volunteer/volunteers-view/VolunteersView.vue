<template>
	<div>
		<!-- Alert: No item found -->
		<b-alert variant="danger" :show="volunteerData === undefined">
			<h4 class="alert-heading">{{ $t("Error fetching volunteer data") }}</h4>
			<div class="alert-body">
				{{ $t("No volunteer found with this volunteer id") }}. {{ $t("Go to") }}
				<b-link class="alert-link" :to="{ name: 'active-volunteers' }"> {{ $t("Volunteers List") }} </b-link>
				{{ $t("for other volunteers") }}.
			</div>
		</b-alert>

		<template v-if="volunteerData">
			<!-- First Row -->
			<volunteer-view-volunteer-info-card :volunteer-data="volunteerData" />

			<!-- <volunteer-view-volunteer-timeline-card :volunteer-data="volunteerData" /> -->

			<volunteer-enrolled-courses />
		</template>
	</div>
</template>

<script>
	import store from "@/store"
	import router from "@/router"
	import { ref, onUnmounted } from "@vue/composition-api"
	import { BRow, BCol, BAlert, BLink } from "bootstrap-vue"
	import VolunteerEnrolledCourses from "./VolunteerEnrolledCourses.vue"
	import volunteerStoreModule from "../volunteerStoreModule"
	import VolunteerViewVolunteerInfoCard from "./VolunteerViewVolunteerInfoCard.vue"
	import VolunteerViewVolunteerTimelineCard from "./VolunteerViewVolunteerTimelineCard.vue"

	export default {
		components: {
			BRow,
			BCol,
			BAlert,
			BLink,

			// Local Components
			VolunteerViewVolunteerInfoCard,
			VolunteerViewVolunteerTimelineCard,

			VolunteerEnrolledCourses,
		},
		setup() {
			const volunteerData = ref(null)

			const VOLUNTEER_APP_STORE_MODULE_NAME = "app-volunteer"
			// Register module
			if (!store.hasModule(VOLUNTEER_APP_STORE_MODULE_NAME)) store.registerModule(VOLUNTEER_APP_STORE_MODULE_NAME, volunteerStoreModule)
			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(VOLUNTEER_APP_STORE_MODULE_NAME)) store.unregisterModule(VOLUNTEER_APP_STORE_MODULE_NAME)
			})

			store
				.dispatch("app-volunteer/fetchVolunteer", { id: router.currentRoute.params.id })
				.then((response) => {
					volunteerData.value = response.data
				})
				.catch((error) => {
					if (error.response.status === 404) {
						volunteerData.value = undefined
					}
				})

			return {
				volunteerData,
			}
		},
	}
</script>

<style></style>
