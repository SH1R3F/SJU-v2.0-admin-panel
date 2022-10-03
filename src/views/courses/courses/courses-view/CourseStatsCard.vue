<template>
	<div>
		<b-card :title="$t('Course statistics')">
			<b-row>
				<!-- Right Col: Table -->
				<b-col cols="4">
					<table class="mt-2 mt-xl-0 w-100">
						<!-- Name -->
						<tr>
							<th class="pb-50">
								<feather-icon icon="UserIcon" class="mr-75" />
								<span class="font-weight-bold">{{ $t("Total attendance") }}</span>
							</th>
							<td class="pb-50 text-capitalize">
								{{ courseData.users }}
								{{ $t("Attendants") }}
							</td>
						</tr>

						<tr>
							<th class="pb-50">
								<feather-icon icon="SlidersIcon" class="mr-75" />
								<span class="font-weight-bold">{{ $t("Passed number") }}</span>
							</th>
							<td class="pb-50 text-capitalize">
								{{ courseData.passed }}
								{{ $t("Passed") }}
							</td>
						</tr>

						<tr>
							<th class="pb-50">
								<feather-icon icon="FlagIcon" class="mr-75" />
								<span class="font-weight-bold">{{ $t("Unpassed number") }}</span>
							</th>
							<td class="pb-50">{{ courseData.unpassed }} {{ $t("Unpassed") }}</td>
						</tr>

						<tr>
							<th>
								<feather-icon icon="PhoneIcon" class="mr-75" />
								<span class="font-weight-bold">{{ $t("Attendance duration") }}</span>
							</th>
							<td>
								{{ courseData.attendance_duration ? courseData.attendance_duration : $t("Unspecified") }}
							</td>
						</tr>
					</table>
				</b-col>
			</b-row>
		</b-card>
	</div>
</template>

<script>
	import { BCard, BButton, BAvatar, BRow, BCol, BCardText } from "bootstrap-vue"
	import { avatarText } from "@core/utils/filter"
	import { $courseStatus } from "@siteConfig"
	import store from "@/store"
	import { onUnmounted } from "vue-demi"
	import courseStoreModule from "../courseStoreModule"
	import router from "@/router"

	export default {
		components: {
			BCard,
			BButton,
			BRow,
			BCol,
			BAvatar,
			BCardText,
		},
		props: {
			courseData: {
				type: Object,
				required: true,
			},
		},
		setup() {
			// MODULE CONFIGURATION
			const APP_COURSE_STORE_MODULE_NAME = "app-course"
			if (!store.hasModule(APP_COURSE_STORE_MODULE_NAME)) store.registerModule(APP_COURSE_STORE_MODULE_NAME, courseStoreModule)
			onUnmounted(() => {
				if (store.hasModule(APP_COURSE_STORE_MODULE_NAME)) store.unregisterModule(APP_COURSE_STORE_MODULE_NAME)
			})

			const deleteCourse = function () {
				store
					.dispatch("app-course/deleteCourse", { id: router.currentRoute.params.id })
					.then((response) => {
						// Redirect with success message
						this.$bvToast.toast(response.data.message, {
							variant: "success",
							solid: true,
							autoHideDelay: 100,
						})
						setTimeout(() => {
							router.push({ name: "active-courses" })
						}, 1500)
					})
					.catch((error) => {
						this.$bvToast.toast(error.message, {
							variant: "danger",
							solid: true,
						})
						return
					})
			}

			return {
				avatarText,
				$courseStatus,
				deleteCourse,
			}
		},
	}
</script>

<style></style>
