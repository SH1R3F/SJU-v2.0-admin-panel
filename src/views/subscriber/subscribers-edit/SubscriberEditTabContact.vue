<template>
	<validation-observer #default="{ handleSubmit }" ref="refFormObserver">
		<b-form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">
			<b-row>
				<!-- Fields: Worktel, Fax, Mobile -->
				<b-col cols="12" md="6">
					<b-form-group :label="$t('Work telephone')" label-for="work-tel">
						<validation-provider #default="validationContext" vid="worktel" :name="$t('Work telephone')">
							<b-form-input id="work-tel" v-model="formData.worktel" autofocus :state="getValidationState(validationContext)" trim />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</validation-provider>
					</b-form-group>
				</b-col>
				<b-col cols="12" md="6">
					<b-form-group :label="$t('Extension')" label-for="worktel-ext">
						<validation-provider #default="validationContext" vid="worktel_ext" :name="$t('Extension')">
							<b-form-input id="worktel-ext" v-model="formData.worktel_ext" :state="getValidationState(validationContext)" trim />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</validation-provider>
					</b-form-group>
				</b-col>
				<b-col cols="12" md="6">
					<b-form-group :label="$t('Fax')" label-for="fax">
						<validation-provider #default="validationContext" vid="fax" :name="$t('Fax')">
							<b-form-input id="fax" v-model="formData.fax" :state="getValidationState(validationContext)" trim />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</validation-provider>
					</b-form-group>
				</b-col>
				<b-col cols="12" md="6">
					<b-form-group :label="$t('Extension')" label-for="fax-ext">
						<validation-provider #default="validationContext" vid="fax_ext" :name="$t('Extension')">
							<b-form-input id="fax-ext" v-model="formData.fax_ext" :state="getValidationState(validationContext)" trim />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</validation-provider>
					</b-form-group>
				</b-col>
				<b-col cols="12" md="6">
					<b-form-group :label="$t('Mobile')" label-for="mobile">
						<validation-provider #default="validationContext" vid="mobile" :name="$t('Mobile')" rules="required">
							<b-form-input id="mobile" v-model="formData.mobile" :state="getValidationState(validationContext)" trim />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</validation-provider>
					</b-form-group>
				</b-col>
				<b-col cols="12" md="6">
					<b-form-group :label="$t('Key')" label-for="mobile-key">
						<validation-provider #default="validationContext" vid="mobile_key" :name="$t('Key')" rules="required">
							<v-select v-model="formData.mobile_key" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="$mobileCodes" :reduce="(mobileCode) => mobileCode.value" :clearable="false" input-id="mobile-key" :value="formData.mobile_key" :state="getValidationState(validationContext)" />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</validation-provider>
					</b-form-group>
				</b-col>

				<b-col class="mt-2">
					<b-button type="submit" variant="primary" class="mb-1 mb-sm-0 mr-0 mr-sm-1" :block="$store.getters['app/currentBreakPoint'] === 'xs'"> {{ $t("Save Changes") }} </b-button>
					<b-button type="reset" variant="outline-secondary" :block="$store.getters['app/currentBreakPoint'] === 'xs'"> {{ $t("Cancel") }} </b-button>
				</b-col>
			</b-row>
		</b-form>
	</validation-observer>
</template>

<script>
	import { BRow, BCol, BForm, BFormGroup, BFormInput, BButton, BFormInvalidFeedback } from "bootstrap-vue";
	import { ValidationObserver, ValidationProvider } from "vee-validate";
	import { onUnmounted, ref } from "@vue/composition-api";
	import store from "@/store";
	import router from "@/router";
	import subscriberStoreModule from "../subscriberStoreModule";
	import { $mobileCodes } from "@siteConfig";
	import vSelect from "vue-select";
	import formValidation from "@/@core/comp-functions/forms/form-validation";

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
			subscriberData: {
				type: Object,
				required: true,
			},
		},
		setup(props) {
			// Module configurations
			const SUBSCRIBER_APP_STORE_MODULE_NAME = "app-subscriber";
			if (!store.hasModule(SUBSCRIBER_APP_STORE_MODULE_NAME)) store.registerModule(SUBSCRIBER_APP_STORE_MODULE_NAME, subscriberStoreModule);
			onUnmounted(() => {
				if (store.hasModule(SUBSCRIBER_APP_STORE_MODULE_NAME)) store.unregisterModule(SUBSCRIBER_APP_STORE_MODULE_NAME);
			});

			// Form config for submit & rest
			const { worktel, worktel_ext, fax, fax_ext, mobile, mobile_key } = props.subscriberData;
			const oldData = { worktel, worktel_ext, fax, fax_ext, mobile, mobile_key };
			const formData = ref(JSON.parse(JSON.stringify(oldData)));
			const resetsubscriberData = () => {
				formData.value = JSON.parse(JSON.stringify(oldData));
			};

			// Submitting
			const onSubmit = function () {
				// Submit
				store
					.dispatch("app-subscriber/updateSubscriber", { id: router.currentRoute.params.id, form: formData.value })
					.then((response) => {
						this.$bvToast.toast(response.message, {
							variant: "success",
							solid: true,
						});
					})
					.catch((error) => {
						if (error.response.status === 400) {
							// Set errors
							refFormObserver.value.setErrors(error.response.data);
						}
					});
			};

			// Form validation configuration
			const { refFormObserver, getValidationState, resetForm } = formValidation(resetsubscriberData);

			return { refFormObserver, formData, $mobileCodes, getValidationState, resetForm, onSubmit };
		},
	};
</script>

<style></style>
