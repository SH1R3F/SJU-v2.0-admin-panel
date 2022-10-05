<template>
	<b-sidebar id="add-new-studio-sidebar" :visible="isAddNewStudioSidebarActive" bg-variant="white" sidebar-class="sidebar-lg" shadow backdrop no-header right @hidden="resetForm" @change="(val) => $emit('update:is-add-new-studio-sidebar-active', val)">
		<template #default="{ hide }">
			<!-- Header -->
			<div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
				<h5 class="mb-0">{{ $t(`Add new ${studioType}`) }}</h5>
				<feather-icon class="ml-1 cursor-pointer" icon="XIcon" size="16" @click="hide" />
			</div>

			<!-- BODY -->
			<validation-observer #default="{ handleSubmit }" ref="refFormObserver">
				<!-- Form -->
				<b-form class="p-2" @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">
					<!-- Studio type upload -->
					<validation-provider #default="validationContext" :vid="studioType" :name="$t('File')" rules="required">
						<b-form-group :label="$t('File')" label-for="studioFile">
							<b-form-file id="studioFile" v-model="fileToBeUploaded" :state="getValidationState(validationContext)" :placeholder="$t('Choose a file or drop it here...')" :drop-placeholder="$t('Drop file here...')" :accept="studioType === 'photo' ? 'image/*' : 'video/mp4,video/x-m4v,video/*'" />
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
	import { BSidebar, BForm, BFormFile, BFormGroup, BFormInput, BInputGroup, BInputGroupPrepend, BFormInvalidFeedback, BFormRadioGroup, BButton } from "bootstrap-vue"
	import { ValidationProvider, ValidationObserver } from "vee-validate"
	import { onUnmounted, ref } from "@vue/composition-api"
	import formValidation from "@core/comp-functions/forms/form-validation"
	import Ripple from "vue-ripple-directive"
	import vSelect from "vue-select"
	import store from "@/store"
	import studioStoreModule from "./studioStoreModule"
	import { required } from "@validations"

	export default {
		components: {
			BSidebar,
			BForm,
			BFormFile,
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
			prop: "isAddNewStudioSidebarActive",
			event: "update:is-add-new-studio-sidebar-active",
		},
		props: {
			isAddNewStudioSidebarActive: {
				type: Boolean,
				required: true,
			},
			studioType: {
				type: String,
				required: true,
			},
		},
		setup(props, { emit }) {
			// Module configurations
			const STUDIO_APP_STORE_MODULE_NAME = "app-studio"
			if (!store.hasModule(STUDIO_APP_STORE_MODULE_NAME)) store.registerModule(STUDIO_APP_STORE_MODULE_NAME, studioStoreModule)
			onUnmounted(() => {
				if (store.hasModule(STUDIO_APP_STORE_MODULE_NAME)) store.unregisterModule(STUDIO_APP_STORE_MODULE_NAME)
			})

			const fileToBeUploaded = ref(null)
			const resetstudioData = () => {
				fileToBeUploaded.value = null
			}

			const onSubmit = () => {
				// Convert to FormData to upload the file
				const studioData = new FormData()
				studioData.append("studioFile", fileToBeUploaded.value)

				store
					.dispatch("app-studio/addFile", { studioData, studioType: props.studioType })
					.then(() => {
						emit("refetch-data")
						emit("update:is-add-new-studio-sidebar-active", false)
					})
					.catch((error) => {
						if (error.response.status === 400) {
							// Set errors
							refFormObserver.value.setErrors(error.response.data)
						}
					})
			}

			const { refFormObserver, getValidationState, resetForm } = formValidation(resetstudioData)

			return {
				fileToBeUploaded,
				onSubmit,
				refFormObserver,
				getValidationState,
				resetForm,
				required,
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
