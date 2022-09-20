<template>
	<div>
		<!-- Alert: No item found -->
		<b-alert variant="danger" :show="courseData === undefined">
			<h4 class="alert-heading">{{ $t("Error fetching course data") }}</h4>
			<div class="alert-body">
				{{ $t("No course found with this course id") }}. {{ $t("Go to") }}
				<b-link class="alert-link" :to="{ name: 'active-courses' }"> {{ $t("Courses List") }} </b-link>
				{{ $t("for other courses") }}.
			</div>
		</b-alert>

		<template v-if="courseData">
			<!-- First Row -->
			<course-info-card :course-data="courseData" />
			<course-stats-card :course-data="courseData" />
			<course-enrollers />
		</template>
	</div>
</template>

<script>
	import store from "@/store";
	import router from "@/router";
	import { ref, onUnmounted } from "@vue/composition-api";
	import { BRow, BCol, BAlert, BLink } from "bootstrap-vue";
	import courseStoreModule from "../courseStoreModule";
	import CourseInfoCard from "./CourseInfoCard.vue";
	import CourseStatsCard from "./CourseStatsCard.vue";
	import CourseEnrollers from "./CourseEnrollers.vue";

	export default {
		components: {
			BRow,
			BCol,
			BAlert,
			BLink,

			// Local Components
			CourseInfoCard,
			CourseStatsCard,
			CourseEnrollers,
		},
		setup() {
			const APP_COURSES_STORE_MODULE_NAME = "app-course";
			// Register module
			if (!store.hasModule(APP_COURSES_STORE_MODULE_NAME)) store.registerModule(APP_COURSES_STORE_MODULE_NAME, courseStoreModule);
			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(APP_COURSES_STORE_MODULE_NAME)) store.unregisterModule(APP_COURSES_STORE_MODULE_NAME);
			});

			const courseData = ref(null);
			store
				.dispatch("app-course/fetchCourse", { id: router.currentRoute.params.id })
				.then((response) => {
					courseData.value = response.data;
				})
				.catch((error) => {
					if (error.response.status === 404) {
						courseData.value = undefined;
					}
				});

			return {
				courseData,
			};
		},
	};
</script>

<style></style>
