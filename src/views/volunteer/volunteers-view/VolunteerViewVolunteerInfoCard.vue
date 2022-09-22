<template>
	<div>
		<b-card>
			<b-row class="align-items-center">
				<!-- User Info: Left col -->
				<b-col cols="21" xl="6" class="d-flex justify-content-between flex-column">
					<!-- User Avatar & Action Buttons -->
					<div class="d-flex justify-content-start">
						<b-avatar :src="volunteerData.avatar" :text="avatarText(dblocalize(volunteerData, 'fname'))" :variant="volunteerData.avatar ? '' : `light-success`" size="104px" rounded />
						<div class="d-flex flex-column ml-1">
							<div class="mb-1">
								<h4 class="mb-0">
									{{ volunteerData.fullName }}
								</h4>
								<span class="card-text">{{ volunteerData.email }}</span>
							</div>
							<div class="d-flex flex-wrap">
								<b-button :to="{ name: 'edit-volunteer', params: { id: volunteerData.id } }" variant="primary">{{ $t("Edit") }}</b-button>
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
								{{ volunteerData.fullName }}
							</td>
						</tr>
						<tr>
							<th class="pb-50"></th>
							<td class="pb-50 text-capitalize">
								{{ volunteerData.fullName_en }}
							</td>
						</tr>

						<!-- Gender -->
						<tr>
							<th class="pb-50">
								<feather-icon icon="SlidersIcon" class="mr-75" />
								<span class="font-weight-bold">{{ $t("Gender") }}</span>
							</th>
							<td class="pb-50 text-capitalize">
								{{ $genders[volunteerData.gender].text }}
							</td>
						</tr>

						<tr>
							<th class="pb-50">
								<feather-icon icon="FlagIcon" class="mr-75" />
								<span class="font-weight-bold">{{ $t("Country") }}</span>
							</th>
							<td class="pb-50">
								{{ $countries[volunteerData.country].label }}
							</td>
						</tr>
						<tr>
							<th>
								<feather-icon icon="PhoneIcon" class="mr-75" />
								<span class="font-weight-bold">{{ $t("Mobile") }}</span>
							</th>
							<td>
								{{ volunteerData.mobile_key + volunteerData.mobile }}
							</td>
						</tr>
					</table>
				</b-col>
			</b-row>
		</b-card>
		<!-- Modal for volunteer deletion -->
		<b-modal id="modal-danger" ok-only ok-variant="danger" :ok-title="$t('Accept')" @ok="deleteVolunteer" modal-class="modal-danger" centered :title="$t('Delete volunteer?')">
			<b-card-text>{{ $t("Are you sure you want to delete this volunteer? You won't be able to undo this step and all volunteer data will be delete with no way to retreive.") }}</b-card-text>
		</b-modal>
	</div>
</template>

<script>
	import { BCard, BButton, BAvatar, BRow, BCol, BModal, BCardText } from "bootstrap-vue";
	import { avatarText } from "@core/utils/filter";
	import { $countries, $status, $genders } from "@siteConfig";
	import store from "@/store";
	import { onUnmounted } from "vue-demi";
	import volunteerStoreModule from "../volunteerStoreModule";
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
			volunteerData: {
				type: Object,
				required: true,
			},
		},
		setup() {
			// MODULE CONFIGURATION
			const VOLUNTEER_APP_STORE_MODULE_NAME = "app-volunteer";
			if (!store.hasModule(VOLUNTEER_APP_STORE_MODULE_NAME)) store.registerModule(VOLUNTEER_APP_STORE_MODULE_NAME, volunteerStoreModule);
			onUnmounted(() => {
				if (store.hasModule(VOLUNTEER_APP_STORE_MODULE_NAME)) store.unregisterModule(VOLUNTEER_APP_STORE_MODULE_NAME);
			});

			const deleteVolunteer = function () {
				store
					.dispatch("app-volunteer/deleteVolunteer", { id: router.currentRoute.params.id })
					.then((response) => {
						// Redirect with success message
						this.$bvToast.toast(response.data.message, {
							variant: "success",
							solid: true,
							autoHideDelay: 100,
						});
						setTimeout(() => {
							router.push({ name: "active-volunteers" });
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
				avatarText,
				$countries,
				$status,
				$genders,
				deleteVolunteer,
			};
		},
	};
</script>

<style></style>
