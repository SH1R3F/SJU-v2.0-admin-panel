<template>
	<b-sidebar
		id="add-new-template-sidebar"
		:visible="isAddNewTemplateSidebarActive"
		bg-variant="white"
		sidebar-class="sidebar-lg"
		shadow
		backdrop
		no-header
		right
		@hidden="resetForm"
		@change="(val) => $emit('update:is-add-new-template-sidebar-active', val)"
	>
		<template #default="{ hide }">
			<!-- Header -->
			<div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
				<h5 class="mb-0">{{ $t(`Add new template`) }}</h5>

				<feather-icon class="ml-1 cursor-pointer" icon="XIcon" size="16" @click="hide" />
			</div>

			<!-- BODY -->
			<validation-observer #default="{ handleSubmit }" ref="refFormObserver">
				<!-- Form -->
				<b-form class="p-2" @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">
					<!-- Field: Name -->
					<validation-provider
						#default="validationContext"
						vid="name"
						:name="$t('Name')"
						rules="required|min:3"
					>
						<b-form-group :label="$t('Name')" label-for="name">
							<b-form-input
								id="name"
								v-model="templateData.name"
								autofocus
								:state="getValidationState(validationContext)"
								trim
							/>
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Field: File -->
					<validation-provider
						#default="validationContext"
						vid="templatefile"
						:name="$t('File')"
						rules="required"
					>
						<b-form-group :label="$t('File')" label-for="templatefile">
							<b-form-file
								id="templatefile"
								v-model="fileToBeUploaded"
								:state="getValidationState(validationContext)"
								:placeholder="$t('Choose a file or drop it here...')"
								:drop-placeholder="$t('Drop file here...')"
							/>
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Field: Language -->
					<validation-provider
						#default="validationContext"
						vid="language"
						:name="$t('Language')"
						rules="required"
					>
						<b-form-group :label="$t('Language')" label-for="language">
							<v-select
								v-model="templateData.language"
								:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
								:options="$languages"
								:reduce="(language) => language.value"
								:clearable="false"
								input-id="subscriber-language"
								:state="getValidationState(validationContext)"
							/>
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Field: Layout -->

					<validation-provider
						#default="validationContext"
						vid="layout"
						:name="$t('Layout')"
						rules="required"
					>
						<b-form-group :label="$t('Layout')" label-for="layout">
							<v-select
								v-model="templateData.layout"
								:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
								:options="$layouts"
								:reduce="(layout) => layout.value"
								:clearable="false"
								input-id="subscriber-layout"
								:state="getValidationState(validationContext)"
							/>
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Form Actions -->
					<div class="d-flex mt-2">
						<b-button
							v-ripple.400="'rgba(255, 255, 255, 0.15)'"
							variant="primary"
							class="mr-2"
							type="submit"
							>{{ $t("Add") }}</b-button
						>
						<b-button
							v-ripple.400="'rgba(186, 191, 199, 0.15)'"
							type="button"
							variant="outline-secondary"
							@click="hide"
							>{{ $t("Cancel") }}</b-button
						>
					</div>
				</b-form>
			</validation-observer>
		</template>
	</b-sidebar>
</template>

<script>
	import {
		BSidebar,
		BFormFile,
		BForm,
		BFormGroup,
		BFormInput,
		BInputGroup,
		BInputGroupPrepend,
		BFormInvalidFeedback,
		BFormRadioGroup,
		BButton,
	} from "bootstrap-vue"
	import { ValidationProvider, ValidationObserver } from "vee-validate"
	import { onUnmounted, ref } from "@vue/composition-api"
	import { required } from "@validations"
	import formValidation from "@core/comp-functions/forms/form-validation"
	import Ripple from "vue-ripple-directive"
	import vSelect from "vue-select"
	import store from "@/store"
	import { $languages, $layouts } from "@siteConfig"
	import templateStoreModule from "../templateStoreModule"
	import { useInputImageRenderer } from "@core/comp-functions/forms/form-utils"
	import router from "@/router"

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
			prop: "isAddNewTemplateSidebarActive",
			event: "update:is-add-new-template-sidebar-active",
		},
		props: {
			isAddNewTemplateSidebarActive: {
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
			const COURSE_TEMPLATE_STORE_MODULE_NAME = "course-template"
			if (!store.hasModule(COURSE_TEMPLATE_STORE_MODULE_NAME))
				store.registerModule(COURSE_TEMPLATE_STORE_MODULE_NAME, templateStoreModule)
			onUnmounted(() => {
				if (store.hasModule(COURSE_TEMPLATE_STORE_MODULE_NAME))
					store.unregisterModule(COURSE_TEMPLATE_STORE_MODULE_NAME)
			})

			const fileToBeUploaded = ref(null)
			const blanktemplateData = {
				name: "",
				file: "",
				language: "",
				layout: "",
			}

			const templateData = ref(JSON.parse(JSON.stringify(blanktemplateData)))
			const resettemplateData = () => {
				templateData.value = JSON.parse(JSON.stringify(blanktemplateData))
				fileToBeUploaded.value = null
			}

			const onSubmit = () => {
				templateData.value.templatefile = fileToBeUploaded.value
				// Convert to FormData to upload the file
				const converted = new FormData()
				Object.keys(templateData.value).forEach((key) => converted.append(key, templateData.value[key]))

				store
					.dispatch("course-template/addTemplate", { templateData: converted })
					.then((res) => {
						// Redirect to edit this template page!
						router.push({ name: "edit-template", params: { id: res.data.template.id } })
					})
					.catch((error) => {
						if (error.response.status === 400) {
							// Set errors
							refFormObserver.value.setErrors(error.response.data)
						}
					})
			}

			const { refFormObserver, getValidationState, resetForm } = formValidation(resettemplateData)

			return {
				templateData,
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
