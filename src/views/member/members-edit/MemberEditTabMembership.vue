<template>
	<validation-observer #default="{ handleSubmit }" ref="refFormObserver">
		<b-form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">
			<b-row>
				<!-- Field: Membership type -->
				<b-col cols="12">
					<b-form-group :label="$t('Membership type')">
						<validation-provider
							#default="validationContext"
							vid="membership_type"
							:name="$t('Membership type')"
							rules="required"
						>
							<v-select
								v-model="formData.membership_type"
								:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
								:options="$membershipTypes"
								:reduce="(type) => type.value"
								:state="getValidationState(validationContext)"
							/>
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</validation-provider>
					</b-form-group>
				</b-col>

				<!-- Field: Membership start date -->
				<b-col cols="12" md="6">
					<b-form-group :label="$t('Membership start date')" label-for="membership_start_date">
						<validation-provider
							#default="validationContext"
							vid="membership_start_date"
							:name="$t('Membership start date')"
						>
							<date-picker
								v-model="formData.membership_start_date"
								:locale="$i18n.locale == 'ar' ? 'ar-sa' : ''"
								:state="getValidationState(validationContext)"
							></date-picker>
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</validation-provider>
					</b-form-group>
				</b-col>

				<!-- Field: Membership end date -->
				<b-col cols="12" md="6">
					<b-form-group :label="$t('Membership end date')" label-for="membership_end_date">
						<validation-provider
							#default="validationContext"
							vid="membership_end_date"
							:name="$t('Membership end date')"
						>
							<date-picker
								v-model="formData.membership_end_date"
								:locale="$i18n.locale == 'ar' ? 'ar-sa' : ''"
								:state="getValidationState(validationContext)"
							></date-picker>
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</validation-provider>
					</b-form-group>
				</b-col>

				<!-- Field: Invoice id -->
				<b-col cols="12">
					<b-form-group :label="$t('Invoice id')" label-for="invoice_id">
						<validation-provider #default="validationContext" vid="invoice_id" :name="$t('Invoice id')">
							<b-form-input
								id="invoice_id"
								v-model="formData.invoice_id"
								:state="getValidationState(validationContext)"
								trim
							/>
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</validation-provider>
					</b-form-group>
				</b-col>

				<!-- Field: Invoice status -->
				<b-col cols="12">
					<b-form-group :label="$t('Invoice status')">
						<validation-provider
							#default="validationContext"
							vid="invoice_status"
							:name="$t('Invoice status')"
							rules="required"
						>
							<v-select
								v-model="formData.invoice_status"
								:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
								:options="$invoiceStatus"
								:reduce="(status) => status.value"
								:state="getValidationState(validationContext)"
							/>
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</validation-provider>
					</b-form-group>
				</b-col>

				<!-- Field: Membership status -->
				<b-col cols="12">
					<b-form-group :label="$t('Membership status')">
						<validation-provider
							#default="validationContext"
							vid="active"
							:name="$t('Membership status')"
							rules="required"
						>
							<v-select
								v-model="formData.active"
								:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
								:options="$activeStatus"
								:reduce="(status) => status.value"
								:state="getValidationState(validationContext)"
							/>
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</validation-provider>
					</b-form-group>
				</b-col>

				<b-col class="mt-2">
					<b-button
						type="submit"
						variant="primary"
						class="mb-1 mb-sm-0 mr-0 mr-sm-1"
						:block="$store.getters['app/currentBreakPoint'] === 'xs'"
					>
						{{ $t("Save Changes") }}
					</b-button>
					<b-button
						type="reset"
						variant="outline-secondary"
						:block="$store.getters['app/currentBreakPoint'] === 'xs'"
					>
						{{ $t("Cancel") }}
					</b-button>
				</b-col>
			</b-row>
		</b-form>
	</validation-observer>
</template>

<script>
	import { BRow, BCol, BForm, BFormGroup, BFormInput, BButton, BFormInvalidFeedback } from "bootstrap-vue"
	import { ValidationObserver, ValidationProvider } from "vee-validate"
	import { onUnmounted, ref } from "@vue/composition-api"
	import store from "@/store"
	import router from "@/router"
	import memberStoreModule from "../memberStoreModule"
	import { $membershipTypes, $activeStatus, $invoiceStatus } from "@siteConfig"
	import vSelect from "vue-select"
	import formValidation from "@/@core/comp-functions/forms/form-validation"

	export default {
		components: {
			BRow,
			BCol,
			BForm,
			BFormGroup,
			BFormInput,
			BButton,
			BFormInvalidFeedback,
			ValidationObserver,
			ValidationProvider,
			vSelect,
		},
		props: {
			memberData: {
				type: Object,
				required: true,
			},
		},
		setup(props) {
			// Module configurations
			const MEMBER_APP_STORE_MODULE_NAME = "app-member"
			if (!store.hasModule(MEMBER_APP_STORE_MODULE_NAME))
				store.registerModule(MEMBER_APP_STORE_MODULE_NAME, memberStoreModule)
			onUnmounted(() => {
				if (store.hasModule(MEMBER_APP_STORE_MODULE_NAME)) store.unregisterModule(MEMBER_APP_STORE_MODULE_NAME)
			})

			// Form config for submit & rest
			const { active, subscription, invoice } = props.memberData
			const oldData = {
				active,
				membership_type: subscription.type,
				membership_start_date: subscription.start_date,
				membership_end_date: subscription.end_date,
				invoice_id: invoice.invoice_number,
				invoice_status: invoice.status,
			}
			const formData = ref(JSON.parse(JSON.stringify(oldData)))
			const resetmemberData = () => {
				formData.value = JSON.parse(JSON.stringify(oldData))
			}

			// Submitting
			const onSubmit = function () {
				// Submit
				store
					.dispatch("app-member/updateMember", { id: router.currentRoute.params.id, form: formData.value })
					.then((response) => {
						this.$bvToast.toast(response.message, {
							variant: "success",
							solid: true,
						})
					})
					.catch((error) => {
						if (error.response.status === 400) {
							// Set errors
							refFormObserver.value.setErrors(error.response.data)
						}
					})
			}

			// Form validation configuration
			const { refFormObserver, getValidationState, resetForm } = formValidation(resetmemberData)

			return {
				refFormObserver,
				formData,
				$membershipTypes,
				$activeStatus,
				$invoiceStatus,
				getValidationState,
				resetForm,
				onSubmit,
			}
		},
	}
</script>
