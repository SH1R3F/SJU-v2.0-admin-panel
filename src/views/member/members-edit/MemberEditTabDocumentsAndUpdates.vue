<template>
	<validation-observer #default="{ handleSubmit }" ref="refFormObserver">
		<b-form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">
			<!-- Field: National image file -->
			<b-row>
				<b-col cols="12" md="6">
					<b-form-group :label="$t('National image')" label-for="national_image">
						<validation-provider #default="validationContext" vid="national_image" :name="$t('National image')">
							<b-form-file v-model="NationalImageFile" id="national_image" :state="getValidationState(validationContext)" />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
							<b-card-text class="my-1">
								{{ $t("Current file:") }}
								<a v-if="memberData.national_image" class="font-weight-bolder" target="_blank" :href="memberData.national_image">{{ $t("National image") }}</a>
								<a v-else>{{ $t("Unspecified") }}</a>
							</b-card-text>
						</validation-provider>
					</b-form-group>
				</b-col>
			</b-row>

			<!-- Field: Employer letter file -->
			<b-row>
				<b-col cols="12" md="6">
					<b-form-group :label="$t('Employer letter')" label-for="employer_letter">
						<validation-provider #default="validationContext" vid="employer_letter" :name="$t('Employer letter')">
							<b-form-file v-model="EmployerLetterFile" id="employer_letter" :state="getValidationState(validationContext)" />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
							<b-card-text class="my-1">
								{{ $t("Current file:") }}
								<a v-if="memberData.employer_letter" class="font-weight-bolder" target="_blank" :href="memberData.employer_letter">{{ $t("Employer letter") }}</a>
								<a v-else>{{ $t("Unspecified") }}</a>
							</b-card-text>
						</validation-provider>
					</b-form-group>
				</b-col>
			</b-row>

			<hr class="my-2" />

			<h4 class="mb-2">{{ $t("Update requests") }}</h4>
			<b-row>
				<!-- Field: Update Personal Information -->
				<b-col cols="12">
					<b-form-group :label="$t('Personal information')" label-for="updated_personal_information" label-class="mb-1">
						<validation-provider #default="validationContext" vid="updated_personal_information" :name="$t('Personal information')" rules="required">
							<b-form-radio-group id="updated_personal_information" v-model="formData.updated_personal_information" :options="$updateRequestsOptions" :state="getValidationState(validationContext)" />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</validation-provider>
					</b-form-group>
				</b-col>

				<!-- Field: Update Profile image -->
				<b-col cols="12">
					<b-form-group :label="$t('Profile image')" label-for="updated_profile_image" label-class="mb-1">
						<validation-provider #default="validationContext" vid="updated_profile_image" :name="$t('Personal information')" rules="required">
							<b-form-radio-group id="updated_profile_image" v-model="formData.updated_profile_image" :options="$updateRequestsOptions" :state="getValidationState(validationContext)" />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</validation-provider>
					</b-form-group>
				</b-col>

				<!-- Field: Update National image -->
				<b-col cols="12">
					<b-form-group :label="$t('National image')" label-for="updated_national_image" label-class="mb-1">
						<validation-provider #default="validationContext" vid="updated_national_image" :name="$t('Personal information')" rules="required">
							<b-form-radio-group id="updated_national_image" v-model="formData.updated_national_image" :options="$updateRequestsOptions" :state="getValidationState(validationContext)" />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</validation-provider>
					</b-form-group>
				</b-col>

				<!-- Field: Update Employer letter -->
				<b-col cols="12">
					<b-form-group :label="$t('Employer letter')" label-for="updated_employer_letter" label-class="mb-1">
						<validation-provider #default="validationContext" vid="updated_employer_letter" :name="$t('Employer letter')" rules="required">
							<b-form-radio-group id="updated_employer_letter" v-model="formData.updated_employer_letter" :options="$updateRequestsOptions" :state="getValidationState(validationContext)" />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</validation-provider>
					</b-form-group>
				</b-col>

				<!-- Field: Update Experiences and fields -->
				<b-col cols="12">
					<b-form-group :label="$t('Experiences and fields')" label-for="updated_experiences_and_fields" label-class="mb-1">
						<validation-provider #default="validationContext" vid="updated_experiences_and_fields" :name="$t('Experiences and fields')" rules="required">
							<b-form-radio-group id="updated_experiences_and_fields" v-model="formData.updated_experiences_and_fields" :options="$updateRequestsOptions" :state="getValidationState(validationContext)" />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</validation-provider>
					</b-form-group>
				</b-col>
			</b-row>

			<b-row>
				<b-col class="mt-2">
					<b-button type="submit" variant="primary" class="mb-1 mb-sm-0 mr-0 mr-sm-1" :block="$store.getters['app/currentBreakPoint'] === 'xs'"> {{ $t("Save Changes") }} </b-button>
					<b-button type="reset" variant="outline-secondary" :block="$store.getters['app/currentBreakPoint'] === 'xs'"> {{ $t("Cancel") }} </b-button>
				</b-col>
			</b-row>
		</b-form>
	</validation-observer>
</template>

<script>
	import { BRow, BCol, BForm, BFormGroup, BCardText, BFormRadioGroup, BFormInput, BFormFile, BButton, BFormInvalidFeedback } from "bootstrap-vue";
	import { ValidationObserver, ValidationProvider } from "vee-validate";
	import { onUnmounted, ref } from "@vue/composition-api";
	import store from "@/store";
	import router from "@/router";
	import memberStoreModule from "../memberStoreModule";
	import { $updateRequestsOptions } from "@siteConfig";
	import vSelect from "vue-select";
	import formValidation from "@/@core/comp-functions/forms/form-validation";

	export default {
		components: {
			BRow,
			BCol,
			BForm,
			BFormGroup,
			BCardText,
			BFormRadioGroup,
			BFormInput,
			BFormFile,
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
			const MEMBER_APP_STORE_MODULE_NAME = "app-member";
			if (!store.hasModule(MEMBER_APP_STORE_MODULE_NAME)) store.registerModule(MEMBER_APP_STORE_MODULE_NAME, memberStoreModule);
			onUnmounted(() => {
				if (store.hasModule(MEMBER_APP_STORE_MODULE_NAME)) store.unregisterModule(MEMBER_APP_STORE_MODULE_NAME);
			});

			// Form config for submit & rest
			const { national_image, employer_letter, updated_profile_image, updated_national_image, updated_personal_information, updated_employer_letter, updated_experiences_and_fields } = props.memberData;
			const oldData = { national_image, employer_letter, updated_profile_image, updated_national_image, updated_personal_information, updated_employer_letter, updated_experiences_and_fields };
			const formData = ref(JSON.parse(JSON.stringify(oldData)));
			const NationalImageFile = ref(null);
			const EmployerLetterFile = ref(null);

			const resetmemberData = () => {
				formData.value = JSON.parse(JSON.stringify(oldData));
				NationalImageFile.value = null;
				EmployerLetterFile.value = null;
			};

			// Submitting
			const onSubmit = function () {
				// Convert to FormData to upload the file
				formData.value.NationalImageFile = NationalImageFile.value;
				formData.value.EmployerLetterFile = EmployerLetterFile.value;
				const converted = new FormData();
				Object.keys(formData.value).forEach((key) => converted.append(key, formData.value[key]));
				converted.append("_method", "PUT");

				// Submit
				store
					.dispatch("app-member/updateMember", { id: router.currentRoute.params.id, form: converted, type: "FormData" })
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
			const { refFormObserver, getValidationState, resetForm } = formValidation(resetmemberData);

			return { refFormObserver, formData, $updateRequestsOptions, getValidationState, resetForm, onSubmit, NationalImageFile, EmployerLetterFile };
		},
	};
</script>

<style></style>
