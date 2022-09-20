<template>
	<component :is="courseData === undefined ? 'div' : 'b-card'">
		<!-- Alert: No item found -->
		<b-alert variant="danger" :show="courseData === undefined">
			<h4 class="alert-heading">{{ $t("Error fetching course data") }}</h4>
			<div class="alert-body">
				{{ $t("No course found with this course id") }}. {{ $t("Go to") }}
				<b-link class="alert-link" :to="{ name: 'courses-courses' }"> {{ $t("Courses List") }} </b-link>
				{{ $t("for other courses") }}.
			</div>
		</b-alert>

		<template v-if="courseData">
			<course-edit-form :course-data="courseData" class="pt-75" />
		</template>
	</component>
</template>

<script>
	import { BTab, BTabs, BCard, BAlert, BLink } from "bootstrap-vue";
	import { ref, onUnmounted } from "@vue/composition-api";
	import router from "@/router";
	import store from "@/store";
	import courseStoreModule from "../courseStoreModule";
	import CourseEditForm from "./CourseEditForm.vue";

	export default {
		components: {
			BTab,
			BTabs,
			BCard,
			BAlert,
			BLink,

			CourseEditForm,
		},
		setup() {
			const courseData = ref(null);

			const APP_COURSE_STORE_MODULE_NAME = "app-course";
			// Register module
			if (!store.hasModule(APP_COURSE_STORE_MODULE_NAME)) store.registerModule(APP_COURSE_STORE_MODULE_NAME, courseStoreModule);
			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(APP_COURSE_STORE_MODULE_NAME)) store.unregisterModule(APP_COURSE_STORE_MODULE_NAME);
			});

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
