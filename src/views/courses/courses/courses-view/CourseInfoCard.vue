<template>
	<div>
		<b-card>
			<b-row class="align-items-center">
				<!-- User Info: Left col -->
				<b-col cols="21" xl="6" class="d-flex justify-content-between flex-column">
					<!-- User Avatar & Action Buttons -->
					<div class="d-flex justify-content-start">
						<div class="d-flex flex-column ml-1">
							<div class="mb-1">
								<h4 class="mb-0">
									{{ courseData.name_ar }}
								</h4>
								<span class="card-text">{{ courseData.SN }}</span>
							</div>
							<div class="d-flex flex-wrap">
								<b-button :to="{ name: 'edit-course', params: { id: courseData.id } }" variant="primary">{{ $t("Edit") }}</b-button>
								<b-button variant="outline-danger" class="ml-1" v-b-modal.modal-danger>{{ $t("Delete") }}</b-button>
							</div>
						</div>
					</div>
				</b-col>

				<!-- Right Col: Table -->
				<b-col cols="12" xl="6">
					<table class="mt-2 mt-xl-0 w-100">
						<!-- Name -->
						<tr>
							<th class="pb-50">
								<feather-icon icon="UserIcon" class="mr-75" />
								<span class="font-weight-bold">{{ $t("Name") }}</span>
							</th>
							<td class="pb-50 text-capitalize">
								{{ courseData.name_ar }}
							</td>
						</tr>
						<tr>
							<th class="pb-50"></th>
							<td class="pb-50 text-capitalize">
								{{ courseData.name_en }}
							</td>
						</tr>

						<!-- Minutes -->
						<tr>
							<th class="pb-50">
								<feather-icon icon="SlidersIcon" class="mr-75" />
								<span class="font-weight-bold">{{ $t("Minutes") }}</span>
							</th>
							<td class="pb-50 text-capitalize">
								{{ courseData.minutes }}
							</td>
						</tr>

						<tr>
							<th class="pb-50">
								<feather-icon icon="FlagIcon" class="mr-75" />
								<span class="font-weight-bold">{{ $t("Percentage") }}</span>
							</th>
							<td class="pb-50">{{ courseData.percentage }}%</td>
						</tr>
						<tr>
							<th>
								<feather-icon icon="PhoneIcon" class="mr-75" />
								<span class="font-weight-bold">{{ $t("Region") }}</span>
							</th>
							<td>
								{{ courseData.region }}
							</td>
						</tr>
						<tr>
							<th>
								<feather-icon icon="PhoneIcon" class="mr-75" />
								<span class="font-weight-bold">{{ $t("Status") }}</span>
							</th>
							<td>
								{{ $courseStatus[courseData.status].text }}
							</td>
						</tr>
					</table>
				</b-col>
			</b-row>
		</b-card>
		<!-- Modal for course deletion -->
		<b-modal id="modal-danger" ok-only ok-variant="danger" :ok-title="$t('Accept')" @ok="deleteCourse" modal-class="modal-danger" centered :title="$t('Delete course?')">
			<b-card-text>{{ $t("Are you sure you want to delete this course? You won't be able to undo this step and all course data will be delete with no way to retreive.") }}</b-card-text>
		</b-modal>
	</div>
</template>

<script>
	import { BCard, BButton, BAvatar, BRow, BCol, BModal, BCardText } from "bootstrap-vue";
	import { $courseStatus } from "@siteConfig";
	import store from "@/store";
	import { onUnmounted } from "vue-demi";
	import courseStoreModule from "../courseStoreModule";
	import router from "@/router";

	export default {
		components: {
			BCard,
			BButton,
			BRow,
			BCol,
			BAvatar,
			BModal,
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
			const APP_COURSE_STORE_MODULE_NAME = "app-course";
			if (!store.hasModule(APP_COURSE_STORE_MODULE_NAME)) store.registerModule(APP_COURSE_STORE_MODULE_NAME, courseStoreModule);
			onUnmounted(() => {
				if (store.hasModule(APP_COURSE_STORE_MODULE_NAME)) store.unregisterModule(APP_COURSE_STORE_MODULE_NAME);
			});

			const deleteCourse = function () {
				store
					.dispatch("app-course/deleteCourse", { id: router.currentRoute.params.id })
					.then((response) => {
						// Redirect with success message
						this.$bvToast.toast(response.data.message, {
							variant: "success",
							solid: true,
							autoHideDelay: 100,
						});
						setTimeout(() => {
							router.push({ name: "app-courses" });
						}, 1500);
					})
					.catch((error) => {
						this.$bvToast.toast(error.message, {
							variant: "danger",
							solid: true,
						});
						return;
					});
			};

			return {
				$courseStatus,
				deleteCourse,
			};
		},
	};
</script>

<style></style>
