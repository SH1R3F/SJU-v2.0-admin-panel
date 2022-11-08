<template>
	<div>
		<!-- User Info: Input Fields -->
		<validation-observer #default="{ handleSubmit }" ref="refFormObserver">
			<b-form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">
				<!-- Field: Name -->
				<b-row>
					<b-col cols="12">
						<validation-provider
							#default="validationContext"
							vid="name_ar"
							:name="`${$t('Name')} (${$t('In Arabic')})`"
							rules="required|min:3"
						>
							<b-form-group :label="`${$t('Name')} (${$t('In Arabic')})`" label-for="name_ar">
								<b-form-input
									id="name_ar"
									v-model="formData.name_ar"
									autofocus
									:state="getValidationState(validationContext)"
									trim
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Field: Name -->
				<b-row>
					<b-col cols="12">
						<validation-provider
							#default="validationContext"
							vid="name"
							:name="`${$t('Name')} (${$t('In English')})`"
							rules="min:3"
						>
							<b-form-group :label="`${$t('Name')} (${$t('In English')})`" label-for="name_en">
								<b-form-input
									id="name_en"
									v-model="formData.name_en"
									:state="getValidationState(validationContext)"
									trim
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Action Buttons -->
				<b-button
					variant="primary"
					type="submit"
					class="mb-1 mb-sm-0 mr-0 mr-sm-1"
					:block="$store.getters['app/currentBreakPoint'] === 'xs'"
				>
					{{ $t("Save Changes") }}
				</b-button>
				<b-button
					variant="outline-secondary"
					type="reset"
					:block="$store.getters['app/currentBreakPoint'] === 'xs'"
				>
					{{ $t("Cancel") }}
				</b-button>
			</b-form>
		</validation-observer>
	</div>
</template>

<script>
	import {
		BButton,
		BMedia,
		BAvatar,
		BRow,
		BCol,
		BFormGroup,
		BFormInput,
		BFormFile,
		BForm,
		BFormInvalidFeedback,
	} from "bootstrap-vue"
	import vSelect from "vue-select"
	import { avatarText } from "@core/utils/filter"
	import { onUnmounted, ref } from "@vue/composition-api"
	import questionnaireStoreModule from "../questionnaireStoreModule"
	import router from "@/router"
	import store from "@/store"
	import { ValidationProvider, ValidationObserver } from "vee-validate"
	import { required } from "@validations"
	import formValidation from "@/@core/comp-functions/forms/form-validation"
	import { $languages, $layouts } from "@siteConfig"

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
			questionnaireData: {
				type: Object,
				required: true,
			},
		},

		setup(props) {
			// MODULE CONFIGURATION
			const COURSE_QUESTIONNAIRE_STORE_MODULE_NAME = "course-questionnaire"
			if (!store.hasModule(COURSE_QUESTIONNAIRE_STORE_MODULE_NAME))
				store.registerModule(COURSE_QUESTIONNAIRE_STORE_MODULE_NAME, questionnaireStoreModule)
			onUnmounted(() => {
				if (store.hasModule(COURSE_QUESTIONNAIRE_STORE_MODULE_NAME))
					store.unregisterModule(COURSE_QUESTIONNAIRE_STORE_MODULE_NAME)
			})

			const fileToBeUploaded = ref(null)

			// Form config for submit & rest
			const oldData = props.questionnaireData
			const formData = ref(JSON.parse(JSON.stringify(oldData)))
			const resetquestionnaireData = () => {
				formData.value = JSON.parse(JSON.stringify(oldData))
			}

			// Submitting
			const onSubmit = function () {
				store
					.dispatch("course-questionnaire/updateQuestionnaire", {
						id: router.currentRoute.params.id,
						form: formData.value,
					})
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
			const { refFormObserver, getValidationState, resetForm } = formValidation(resetquestionnaireData)

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
			}
		},
	}
</script>

<style lang="scss">
	@import "@core/scss/vue/libs/vue-select.scss";
</style>
