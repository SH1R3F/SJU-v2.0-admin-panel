<template>
	<div>
		<b-card>
			<b-row class="align-items-center">
				<!-- User Info: Left col -->
				<b-col cols="21" xl="6" class="d-flex justify-content-between flex-column">
					<!-- User Avatar & Action Buttons -->
					<div class="d-flex justify-content-start">
						<b-avatar :src="subscriberData.avatar" :text="avatarText(subscriberData.fname_ar)" :variant="subscriberData.avatar ? '' : `light-success`" size="104px" rounded />
						<div class="d-flex flex-column ml-1">
							<div class="mb-1">
								<h4 class="mb-0">
									{{ subscriberData.fullName }}
								</h4>
								<span class="card-text">{{ subscriberData.email }}</span>
							</div>
							<div class="d-flex flex-wrap">
								<b-button :to="{ name: 'edit-subscriber', params: { id: subscriberData.id } }" variant="primary">{{ $t("Edit") }}</b-button>
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
								{{ subscriberData.fullName }}
							</td>
						</tr>
						<tr>
							<th class="pb-50"></th>
							<td class="pb-50 text-capitalize">
								{{ subscriberData.fullName_en }}
							</td>
						</tr>

						<!-- Gender -->
						<tr>
							<th class="pb-50">
								<feather-icon icon="SlidersIcon" class="mr-75" />
								<span class="font-weight-bold">{{ $t("Gender") }}</span>
							</th>
							<td class="pb-50 text-capitalize">
								{{ $genders[subscriberData.gender].text }}
							</td>
						</tr>

						<tr>
							<th class="pb-50">
								<feather-icon icon="FlagIcon" class="mr-75" />
								<span class="font-weight-bold">{{ $t("Country") }}</span>
							</th>
							<td class="pb-50">
								{{ subscriberData.country }}
							</td>
						</tr>
						<tr>
							<th>
								<feather-icon icon="PhoneIcon" class="mr-75" />
								<span class="font-weight-bold">{{ $t("Mobile") }}</span>
							</th>
							<td>
								{{ subscriberData.mobile_key + subscriberData.mobile }}
							</td>
						</tr>
					</table>
				</b-col>
			</b-row>
		</b-card>
		<!-- Modal for subscriber deletion -->
		<b-modal id="modal-danger" ok-only ok-variant="danger" :ok-title="$t('Accept')" @ok="deleteSubscriber" modal-class="modal-danger" centered :title="$t('Delete subscriber?')">
			<b-card-text>{{ $t("Are you sure you want to delete this subscriber? You won't be able to undo this step and all subscriber data will be delete with no way to retreive.") }}</b-card-text>
		</b-modal>
	</div>
</template>

<script>
	import { BCard, BButton, BAvatar, BRow, BCol, BModal, BCardText } from "bootstrap-vue";
	import { avatarText } from "@core/utils/filter";
	import { $countries, $status, $genders } from "@siteConfig";
	import store from "@/store";
	import { onUnmounted } from "vue-demi";
	import subscriberStoreModule from "../subscriberStoreModule";
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
			subscriberData: {
				type: Object,
				required: true,
			},
		},
		setup() {
			// MODULE CONFIGURATION
			const SUBSCRIBER_APP_STORE_MODULE_NAME = "app-subscriber";
			if (!store.hasModule(SUBSCRIBER_APP_STORE_MODULE_NAME)) store.registerModule(SUBSCRIBER_APP_STORE_MODULE_NAME, subscriberStoreModule);
			onUnmounted(() => {
				if (store.hasModule(SUBSCRIBER_APP_STORE_MODULE_NAME)) store.unregisterModule(SUBSCRIBER_APP_STORE_MODULE_NAME);
			});

			const deleteSubscriber = function () {
				store
					.dispatch("app-subscriber/deleteSubscriber", { id: router.currentRoute.params.id })
					.then((response) => {
						// Redirect with success message
						this.$bvToast.toast(response.data.message, {
							variant: "success",
							solid: true,
							autoHideDelay: 100,
						});
						setTimeout(() => {
							router.push({ name: "active-subscribers" });
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
				deleteSubscriber,
			};
		},
	};
</script>

<style></style>
