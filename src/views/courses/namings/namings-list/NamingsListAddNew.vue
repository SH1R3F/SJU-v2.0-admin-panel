<template>
	<b-sidebar id="add-new-naming-sidebar" :visible="isAddNewNamingSidebarActive" bg-variant="white" sidebar-class="sidebar-lg" shadow backdrop no-header right @hidden="resetForm" @change="(val) => $emit('update:is-add-new-naming-sidebar-active', val)">
		<template #default="{ hide }">
			<!-- Header -->
			<div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
				<h5 class="mb-0">{{ $t(`Add new ${naming}`) }}</h5>

				<feather-icon class="ml-1 cursor-pointer" icon="XIcon" size="16" @click="hide" />
			</div>

			<!-- BODY -->
			<validation-observer #default="{ handleSubmit }" ref="refFormObserver">
				<!-- Form -->
				<b-form class="p-2" @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">
					<!-- Name (Arabic) -->
					<validation-provider #default="validationContext" vid="name_ar" :name="`${$t('Name')} (${$t('In Arabic')})`" rules="required|min:3">
						<b-form-group :label="`${$t('Name')} (${$t('In Arabic')})`" label-for="name_ar">
							<b-form-input id="name_ar" v-model="namingData.name_ar" autofocus :state="getValidationState(validationContext)" trim />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Name (English) -->
					<validation-provider #default="validationContext" vid="name_en" :name="`${$t('Name')} (${$t('In English')})`" rules="min:3">
						<b-form-group :label="`${$t('Name')} (${$t('In English')})`" label-for="name_en">
							<b-form-input id="name_en" v-model="namingData.name_en" :state="getValidationState(validationContext)" trim />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Description (Arabic) -->
					<validation-provider #default="validationContext" vid="description_ar" :name="`${$t('Description')} (${$t('In Arabic')})`" rules="required|min:3">
						<b-form-group :label="`${$t('Description')} (${$t('In Arabic')})`" label-for="description_ar">
							<b-form-input id="description_ar" v-model="namingData.description_ar" :state="getValidationState(validationContext)" trim />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Description (English) -->
					<validation-provider #default="validationContext" vid="description_en" :name="`${$t('Description')} (${$t('In English')})`" rules="min:3">
						<b-form-group :label="`${$t('Description')} (${$t('In English')})`" label-for="description_en">
							<b-form-input id="description_en" v-model="namingData.description_en" :state="getValidationState(validationContext)" trim />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Image -->
					<validation-provider #default="validationContext" vid="image" :name="$t('Image')">
						<b-form-group :label="$t('Image')" label-for="image">
							<b-form-file ref="refInputEl" @input="inputImageRenderer" class="mt-1" accept="image/*" />
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
	import { required, min } from "@validations"
	import formValidation from "@core/comp-functions/forms/form-validation"
	import Ripple from "vue-ripple-directive"
	import vSelect from "vue-select"
	import countries from "@/@fake-db/data/other/countries"
	import store from "@/store"
	import { $genders, $mobileCodes, $countries, $cities } from "@siteConfig"
	import namingStoreModule from "../namingStoreModule"
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
			prop: "isAddNewNamingSidebarActive",
			event: "update:is-add-new-naming-sidebar-active",
		},
		props: {
			isAddNewNamingSidebarActive: {
				type: Boolean,
				required: true,
			},
			naming: {
				type: String,
				required: true,
			},
		},
		data() {
			return {
				required,
				min,
				countries,
			}
		},
		setup(props, { emit }) {
			// Module configurations
			const COURSE_NAMING_STORE_MODULE_NAME = "course-naming"
			if (!store.hasModule(COURSE_NAMING_STORE_MODULE_NAME)) store.registerModule(COURSE_NAMING_STORE_MODULE_NAME, namingStoreModule)
			onUnmounted(() => {
				if (store.hasModule(COURSE_NAMING_STORE_MODULE_NAME)) store.unregisterModule(COURSE_NAMING_STORE_MODULE_NAME)
			})

			const refInputEl = ref(null)
			const blankNamingData = {
				name_ar: "",
				name_en: "",
				description_ar: "",
				description_en: "",
				image: null,
			}

			const namingData = ref(JSON.parse(JSON.stringify(blankNamingData)))
			const resetnamingData = () => {
				namingData.value = JSON.parse(JSON.stringify(blankNamingData))
			}

			const { inputImageRenderer } = useInputImageRenderer(refInputEl, (base64) => {
				// eslint-disable-next-line no-param-reassign
				namingData.value.image = base64
			})

			const onSubmit = () => {
				store
					.dispatch("course-naming/addNaming", { naming: props.naming, namingData: namingData.value })
					.then(() => {
						emit("refetch-data")
						emit("update:is-add-new-naming-sidebar-active", false)
					})
					.catch((error) => {
						if (error.response.status === 400) {
							// Set errors
							refFormObserver.value.setErrors(error.response.data)
						}
					})
			}

			const { refFormObserver, getValidationState, resetForm } = formValidation(resetnamingData)

			return {
				namingData,
				onSubmit,
				refFormObserver,
				getValidationState,
				resetForm,
				$genders,
				$mobileCodes,
				$countries,
				$cities,
				inputImageRenderer,
				refInputEl,
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
