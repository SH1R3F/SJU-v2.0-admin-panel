<template>
	<b-sidebar id="add-new-questionnaire-sidebar" :visible="isAddNewQuestionnaireSidebarActive" bg-variant="white" sidebar-class="sidebar-lg" shadow backdrop no-header right @hidden="resetForm" @change="(val) => $emit('update:is-add-new-questionnaire-sidebar-active', val)">
		<template #default="{ hide }">
			<!-- Header -->
			<div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
				<h5 class="mb-0">{{ $t(`Add new questionnaire`) }}</h5>

				<feather-icon class="ml-1 cursor-pointer" icon="XIcon" size="16" @click="hide" />
			</div>

			<!-- BODY -->
			<validation-observer #default="{ handleSubmit }" ref="refFormObserver">
				<!-- Form -->
				<b-form class="p-2" @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">
					<!-- Field: Name (In Arabic) -->
					<validation-provider #default="validationContext" vid="name_ar" :name="`${$t('Name')} (${$t('In Arabic')})`" rules="required|min:3">
						<b-form-group :label="`${$t('Name')} (${$t('In Arabic')})`" label-for="name_ar">
							<b-form-input id="name_ar" v-model="questionnaireData.name_ar" autofocus :state="getValidationState(validationContext)" trim />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Field: Name (In English) -->
					<validation-provider #default="validationContext" vid="name_en" :name="`${$t('Name')} (${$t('In English')})`" rules="min:3">
						<b-form-group :label="`${$t('Name')} (${$t('In English')})`" label-for="name_en">
							<b-form-input id="name_en" v-model="questionnaireData.name_en" autofocus :state="getValidationState(validationContext)" trim />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Form Actions -->
					<div class="d-flex mt-2">
						<b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" class="mr-2" type="submit">{{ $t("Add") }}</b-button>
						<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" type="button" variant="outline-secondary" @click="hide">{{ $t("Cancel") }}</b-button>
					</div>
				</b-form>
			</validation-observer>
		</template>
	</b-sidebar>
</template>

<script>
	import { BSidebar, BFormFile, BForm, BFormGroup, BFormInput, BInputGroup, BInputGroupPrepend, BFormInvalidFeedback, BFormRadioGroup, BButton } from "bootstrap-vue"
	import { ValidationProvider, ValidationObserver } from "vee-validate"
	import { onUnmounted, ref } from "@vue/composition-api"
	import { required } from "@validations"
	import formValidation from "@core/comp-functions/forms/form-validation"
	import Ripple from "vue-ripple-directive"
	import vSelect from "vue-select"
	import store from "@/store"
	import { $languages, $layouts } from "@siteConfig"
	import questionnaireStoreModule from "../questionnaireStoreModule"
	import { useInputImageRenderer } from "@core/comp-functions/forms/form-utils"

	export default {
		components: {
			BSidebar,
			BFormFile,
			BForm,
			BFormGroup,
			BFormInput,
			BFormInvalidFeedback,
			BButton,
			BFormRadioGroup,
			vSelect,
			// Form Validation
			ValidationProvider,
			ValidationObserver,
			BInputGroup,
			BInputGroupPrepend,
		},
		directives: {
			Ripple,
		},
		model: {
			prop: "isAddNewQuestionnaireSidebarActive",
			event: "update:is-add-new-questionnaire-sidebar-active",
		},
		props: {
			isAddNewQuestionnaireSidebarActive: {
				type: Boolean,
				required: true,
			},
		},
		data() {
			return {
				required,
			}
		},
		setup(props, { emit }) {
			// Module configurations
			const COURSE_QUESTIONNAIRE_STORE_MODULE_NAME = "course-questionnaire"
			if (!store.hasModule(COURSE_QUESTIONNAIRE_STORE_MODULE_NAME)) store.registerModule(COURSE_QUESTIONNAIRE_STORE_MODULE_NAME, questionnaireStoreModule)
			onUnmounted(() => {
				if (store.hasModule(COURSE_QUESTIONNAIRE_STORE_MODULE_NAME)) store.unregisterModule(COURSE_QUESTIONNAIRE_STORE_MODULE_NAME)
			})

			const fileToBeUploaded = ref(null)
			const blankquestionnaireData = {
				name_ar: "",
				name_en: "",
			}

			const questionnaireData = ref(JSON.parse(JSON.stringify(blankquestionnaireData)))
			const resetquestionnaireData = () => {
				questionnaireData.value = JSON.parse(JSON.stringify(blankquestionnaireData))
			}

			const onSubmit = () => {
				store
					.dispatch("course-questionnaire/addQuestionnaire", questionnaireData.value)
					.then(() => {
						emit("refetch-data")
						emit("update:is-add-new-questionnaire-sidebar-active", false)
					})
					.catch((error) => {
						if (error.response.status === 400) {
							// Set errors
							refFormObserver.value.setErrors(error.response.data)
						}
					})
			}

			const { refFormObserver, getValidationState, resetForm } = formValidation(resetquestionnaireData)

			return {
				questionnaireData,
				onSubmit,
				refFormObserver,
				getValidationState,
				resetForm,
				$languages,
				$layouts,
				fileToBeUploaded,
			}
		},
	}
</script>

<style lang="scss">
	@import "@core/scss/vue/libs/vue-select.scss";

	#add-new-user-sidebar {
		.vs__dropdown-menu {
			max-height: 200px !important;
		}
	}
</style>
