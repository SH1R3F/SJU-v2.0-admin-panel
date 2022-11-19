<template>
	<div>
		<b-card>
			<b-row class="align-items-center">
				<!-- User Info: Left col -->
				<b-col cols="21" xl="6" class="d-flex justify-content-between flex-column">
					<!-- User Avatar & Action Buttons -->
					<div class="d-flex justify-content-start">
						<b-avatar
							:src="memberData.avatar"
							:text="avatarText(dblocalize(memberData, 'fname'))"
							:variant="memberData.avatar ? '' : `light-success`"
							size="104px"
							rounded
						/>
						<div class="d-flex flex-column ml-1">
							<div class="mb-1">
								<h4 class="mb-0">
									{{ memberData.fullName }}
								</h4>
								<span class="card-text">{{ memberData.email }}</span>
							</div>
							<div class="d-flex flex-wrap">
								<b-button
									:to="{ name: 'edit-member', params: { id: memberData.id } }"
									variant="primary"
									>{{ $t("Edit") }}</b-button
								>
								<b-button variant="outline-danger" class="ml-1" v-b-modal.modal-danger>{{
									$t("Delete")
								}}</b-button>
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
								{{ memberData.fullName }}
							</td>
						</tr>
						<tr>
							<th class="pb-50"></th>
							<td class="pb-50 text-capitalize">
								{{ memberData.fullName_en }}
							</td>
						</tr>

						<!-- National id -->
						<tr>
							<th class="pb-50">
								<feather-icon icon="CreditCardIcon" class="mr-75" />
								<span class="font-weight-bold">{{ $t("National id") }}</span>
							</th>
							<td class="pb-50 text-capitalize">
								{{ memberData.national_id }}
							</td>
						</tr>

						<!-- Membership type -->
						<tr>
							<th class="pb-50">
								<feather-icon icon="SettingsIcon" class="mr-75" />
								<span class="font-weight-bold">{{ $t("Membership type") }}</span>
							</th>
							<td class="pb-50 text-capitalize">
								{{
									memberData.membership_type === null
										? ""
										: $membershipTypes.find((c) => c.value === memberData.subscription.type).label
								}}
							</td>
						</tr>

						<!-- Membership number -->
						<tr>
							<th class="pb-50">
								<feather-icon icon="HashIcon" class="mr-75" />
								<span class="font-weight-bold">{{ $t("Membership number") }}</span>
							</th>
							<td class="pb-50 text-capitalize">
								{{ memberData.membership_number }}
							</td>
						</tr>

						<!-- City -->
						<tr>
							<th class="pb-50">
								<feather-icon icon="MapPinIcon" class="mr-75" />
								<span class="font-weight-bold">{{ $t("City") }}</span>
							</th>
							<td class="pb-50 text-capitalize">
								{{ memberData.city === null ? "" : $cities["Saudi Arabia"][memberData.city].label }}
							</td>
						</tr>

						<!-- Registration date -->
						<tr>
							<th class="pb-50">
								<feather-icon icon="LogInIcon" class="mr-75" />
								<span class="font-weight-bold">{{ $t("Registration date") }}</span>
							</th>
							<td class="pb-50">
								{{ memberData.created_at }}
							</td>
						</tr>
					</table>
				</b-col>
			</b-row>
		</b-card>
		<!-- Modal for member deletion -->
		<b-modal
			id="modal-danger"
			ok-only
			ok-variant="danger"
			:ok-title="$t('Accept')"
			@ok="deleteMember"
			modal-class="modal-danger"
			centered
			:title="$t('Delete member?')"
		>
			<b-card-text>{{
				$t(
					"Are you sure you want to delete this member? You won't be able to undo this step and all member data will be delete with no way to retreive."
				)
			}}</b-card-text>
		</b-modal>
	</div>
</template>

<script>
	import { BCard, BButton, BAvatar, BRow, BCol, BModal, BCardText } from "bootstrap-vue"
	import { avatarText } from "@core/utils/filter"
	import { $countries, $membershipTypes, $cities } from "@siteConfig"
	import store from "@/store"
	import { onUnmounted } from "vue-demi"
	import memberStoreModule from "../memberStoreModule"
	import router from "@/router"

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
			memberData: {
				type: Object,
				required: true,
			},
		},
		setup() {
			// MODULE CONFIGURATION
			const MEMBER_APP_STORE_MODULE_NAME = "app-member"
			if (!store.hasModule(MEMBER_APP_STORE_MODULE_NAME))
				store.registerModule(MEMBER_APP_STORE_MODULE_NAME, memberStoreModule)
			onUnmounted(() => {
				if (store.hasModule(MEMBER_APP_STORE_MODULE_NAME)) store.unregisterModule(MEMBER_APP_STORE_MODULE_NAME)
			})

			const deleteMember = function () {
				store
					.dispatch("app-member/deleteMember", { id: router.currentRoute.params.id })
					.then((response) => {
						// Redirect with success message
						this.$bvToast.toast(response.data.message, {
							variant: "success",
							solid: true,
							autoHideDelay: 100,
						})
						setTimeout(() => {
							router.push({ name: "all-members" })
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
				$countries,
				$membershipTypes,
				$cities,
				deleteMember,
			}
		},
	}
</script>

<style></style>
