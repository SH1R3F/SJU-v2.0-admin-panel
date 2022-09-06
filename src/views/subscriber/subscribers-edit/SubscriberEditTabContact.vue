<template>
	<validation-observer ref="contactInfoForm">
		<b-form @submit="saveAccountInfo">
			<b-row>
				<!-- Fields: Worktel, Fax, Mobile -->
				<b-col cols="12" md="6">
					<b-form-group :label="$t('Work telephone')" label-for="work-tel">
						<b-form-input id="work-tel" v-model="formData.worktel" />
					</b-form-group>
				</b-col>
				<b-col cols="12" md="6">
					<b-form-group :label="$t('Extension')" label-for="worktel-ext">
						<b-form-input id="worktel-ext" v-model="formData.worktel_ext" />
					</b-form-group>
				</b-col>
				<b-col cols="12" md="6">
					<b-form-group :label="$t('Fax')" label-for="fax">
						<b-form-input id="fax" v-model="formData.fax" />
					</b-form-group>
				</b-col>
				<b-col cols="12" md="6">
					<b-form-group :label="$t('Extension')" label-for="fax-ext">
						<b-form-input id="fax-ext" v-model="formData.fax_ext" />
					</b-form-group>
				</b-col>
				<b-col cols="12" md="6">
					<b-form-group :label="$t('Mobile')" label-for="mobile">
						<validation-provider #default="{ errors }" name="mobile" rules="required">
							<b-form-input id="mobile" v-model="formData.mobile" />
							<small class="text-danger">{{ errors[0] }}</small>
						</validation-provider>
					</b-form-group>
				</b-col>
				<b-col cols="12" md="6">
					<b-form-group :label="$t('Key')" label-for="mobile-key">
						<validation-provider #default="{ errors }" name="mobile_key" rules="required">
							<v-select v-model="formData.mobile_key" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="$mobileCodes" :reduce="(mobileCode) => mobileCode.value" :clearable="false" input-id="mobile-key" :value="formData.mobile_key" />
							<small class="text-danger">{{ errors[0] }}</small>
						</validation-provider>
					</b-form-group>
				</b-col>

				<b-col class="mt-2">
					<b-button type="submit" variant="primary" class="mb-1 mb-sm-0 mr-0 mr-sm-1" :block="$store.getters['app/currentBreakPoint'] === 'xs'"> {{ $t("Save Changes") }} </b-button>
					<b-button variant="outline-secondary" :block="$store.getters['app/currentBreakPoint'] === 'xs'"> {{ $t("Cancel") }} </b-button>
				</b-col>
			</b-row>
		</b-form>
	</validation-observer>
</template>

<script>
	import { BRow, BCol, BForm, BFormGroup, BFormInput, BButton } from "bootstrap-vue";
	import { ValidationObserver, ValidationProvider } from "vee-validate";
	import { onUnmounted, ref } from "@vue/composition-api";
	import store from "@/store";
	import router from "@/router";
	import subscriberStoreModule from "../subscriberStoreModule";
	import { $mobileCodes } from "@siteConfig";
	import vSelect from "vue-select";

	export default {
		components: {
			BRow,
			BCol,
			BForm,
			BFormGroup,
			BFormInput,
			BButton,
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

			// Form
			const contactInfoForm = ref(null);
			const { worktel, worktel_ext, fax, fax_ext, mobile, mobile_key } = props.subscriberData;
			const formData = ref({ worktel, worktel_ext, fax, fax_ext, mobile, mobile_key });

			// Submit form
			const saveAccountInfo = function (e) {
				e.preventDefault();

				// Validate
				contactInfoForm.value
					.validate()
					.then((success) => {
						if (success) {
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
										contactInfoForm.value.setErrors(error.response.data);
									}
								});
						}
					})
					.catch((err) => {
						return;
					});
			};

			return { contactInfoForm, formData, saveAccountInfo, $mobileCodes };
		},
	};
</script>

<style></style>
