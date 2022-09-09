<template>
	<div>
		<!-- Media -->
		<b-media class="mb-2 align-items-center">
			<template #aside>
				<b-avatar ref="previewEl" :src="formData.image" :text="avatarText(templateData.name)" :variant="formData.image ? '' : `light-secondary`" size="90px" rounded />
			</template>
			<h4 class="mb-1">
				{{ templateData.name }}
			</h4>
		</b-media>

		<!-- User Info: Input Fields -->
		<validation-observer #default="{ handleSubmit }" ref="refFormObserver">
			<b-form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">
				<!-- Field: Name -->
				<b-row>
					<b-col cols="12">
						<validation-provider #default="validationContext" vid="name" :name="$t('Name')" rules="required|min:3">
							<b-form-group :label="$t('Name')" label-for="name">
								<b-form-input id="name" v-model="formData.name" autofocus :state="getValidationState(validationContext)" trim />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Field: File -->
				<b-row>
					<b-col cols="12">
						<validation-provider #default="validationContext" vid="templatefile" :name="$t('File')" rules="required">
							<b-form-group :label="$t('File')" label-for="templatefile">
								<b-form-file id="templatefile" v-model="fileToBeUploaded" :state="getValidationState(validationContext)" :placeholder="$t('Choose a file or drop it here...')" :drop-placeholder="$t('Drop file here...')" />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Field: Language -->
				<b-row>
					<b-col cols="12">
						<validation-provider #default="validationContext" vid="language" :name="$t('Language')" rules="required">
							<b-form-group :label="$t('Language')" label-for="language">
								<v-select v-model="formData.language" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="$languages" :reduce="(language) => language.value" :clearable="false" input-id="subscriber-language" :value="formData.language" :state="getValidationState(validationContext)" />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Field: Layout -->
				<b-row>
					<b-col cols="12">
						<validation-provider #default="validationContext" vid="layout" :name="$t('Layout')" rules="required">
							<b-form-group :label="$t('Layout')" label-for="layout">
								<v-select v-model="formData.layout" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="$layouts" :reduce="(layout) => layout.value" :clearable="false" input-id="subscriber-layout" :value="formData.layout" :state="getValidationState(validationContext)" />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Action Buttons -->
				<b-button variant="primary" type="submit" class="mb-1 mb-sm-0 mr-0 mr-sm-1" :block="$store.getters['app/currentBreakPoint'] === 'xs'"> {{ $t("Save Changes") }} </b-button>
				<b-button variant="outline-secondary" type="reset" :block="$store.getters['app/currentBreakPoint'] === 'xs'"> {{ $t("Cancel") }} </b-button>
			</b-form>
		</validation-observer>
	</div>
</template>

<script>
	import { BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BFormFile, BForm, BFormInvalidFeedback } from "bootstrap-vue";
	import vSelect from "vue-select";
	import { avatarText } from "@core/utils/filter";
	import { onUnmounted, ref } from "@vue/composition-api";
	import templateStoreModule from "../templateStoreModule";
	import router from "@/router";
	import store from "@/store";
	import { ValidationProvider, ValidationObserver } from "vee-validate";
	import { required } from "@validations";
	import formValidation from "@/@core/comp-functions/forms/form-validation";
	import { $languages, $layouts } from "@siteConfig";

	export default {
		components: {
			BButton,
			BMedia,
			BAvatar,
			BRow,
			BCol,
			BFormGroup,
			BFormInput,
			BFormFile,
			BForm,
			ValidationProvider,
			ValidationObserver,
			BFormInvalidFeedback,
			vSelect,
		},

		props: {
			templateData: {
				type: Object,
				required: true,
			},
		},

		setup(props) {
			// MODULE CONFIGURATION
			const COURSE_TEMPLATE_STORE_MODULE_NAME = "course-template";
			if (!store.hasModule(COURSE_TEMPLATE_STORE_MODULE_NAME)) store.registerModule(COURSE_TEMPLATE_STORE_MODULE_NAME, templateStoreModule);
			onUnmounted(() => {
				if (store.hasModule(COURSE_TEMPLATE_STORE_MODULE_NAME)) store.unregisterModule(COURSE_TEMPLATE_STORE_MODULE_NAME);
			});

			const fileToBeUploaded = ref(null);

			// Form config for submit & rest
			const oldData = props.templateData;
			const formData = ref(JSON.parse(JSON.stringify(oldData)));
			const resettemplateData = () => {
				formData.value = JSON.parse(JSON.stringify(oldData));
			};

			// Submitting
			const onSubmit = function () {
				formData.value.templatefile = fileToBeUploaded.value;
				// Convert to FormData to upload the file
				const converted = new FormData();
				Object.keys(formData.value).forEach((key) => converted.append(key, formData.value[key]));

				store
					.dispatch("course-template/updateTemplate", { id: router.currentRoute.params.id, form: converted })
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
			const { refFormObserver, getValidationState, resetForm } = formValidation(resettemplateData);

			return {
				avatarText,
				fileToBeUploaded,
				formData,
				required,
				refFormObserver,
				onSubmit,
				resetForm,
				getValidationState,
				$languages,
				$layouts,
			};
		},
	};
</script>

<style lang="scss">
	@import "@core/scss/vue/libs/vue-select.scss";
</style>
