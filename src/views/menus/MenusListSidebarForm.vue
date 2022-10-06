<template>
	<b-sidebar id="menu-sidebar" :visible="isMenuSidebarActive" bg-variant="white" sidebar-class="sidebar-lg" shadow backdrop no-header right @hidden="resetForm" @change="(val) => $emit('update:is-menu-sidebar-active', val)">
		<template #default="{ hide }">
			<!-- Header -->
			<div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
				<h5 class="mb-0">{{ $t(`${menuItemData ? "Edit" : "Add new"} menu`) }}</h5>
				<feather-icon class="ml-1 cursor-pointer" icon="XIcon" size="16" @click="hide" />
			</div>

			<!-- BODY -->
			<validation-observer #default="{ handleSubmit }" ref="refFormObserver">
				<!-- Form -->
				<b-form class="p-2" @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">
					<!-- Title (In arabic) -->
					<validation-provider #default="validationContext" vid="title_ar" :name="`${$t('Title')} (${$t('In Arabic')})`" rules="required|min:3">
						<b-form-group :label="`${$t('Title')} (${$t('In Arabic')})`" label-for="title_ar">
							<b-form-input id="title_ar" v-model="formData.title_ar" :state="getValidationState(validationContext)" trim />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Title (In english) -->
					<validation-provider #default="validationContext" vid="title_en" :name="`${$t('Title')} (${$t('In English')})`" rules="required|min:3">
						<b-form-group :label="`${$t('Title')} (${$t('In English')})`" label-for="title_en">
							<b-form-input id="title_en" v-model="formData.title_en" :state="getValidationState(validationContext)" trim />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Link -->
					<validation-provider #default="validationContext" vid="link" :name="$t('Link')" rules="required">
						<b-form-group :label="$t('Link')" label-for="link">
							<b-form-input id="link" v-model="formData.link" :state="getValidationState(validationContext)" trim />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- open_in_same_page -->
					<validation-provider #default="validationContext" vid="open_in_same_page" :name="$t('Open in same page?')">
						<b-form-group :label="$t('Open in same page?')" label-for="open_in_same_page">
							<b-form-radio-group id="open_in_same_page" class="with-invalid-feedback" v-model="formData.open_in_same_page" :options="yes_or_no" :state="getValidationState(validationContext)" />
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
	import { BSidebar, BForm, BFormGroup, BFormInput, BInputGroup, BInputGroupPrepend, BFormInvalidFeedback, BFormRadioGroup, BButton } from "bootstrap-vue"
	import { ValidationProvider, ValidationObserver } from "vee-validate"
	import { computed, onUnmounted, ref } from "@vue/composition-api"
	import { required } from "@validations"
	import formValidation from "@core/comp-functions/forms/form-validation"
	import Ripple from "vue-ripple-directive"
	import vSelect from "vue-select"
	import store from "@/store"
	import menuStoreModule from "./menuStoreModule"
	import i18n from "@/libs/i18n"

	export default {
		components: {
			BSidebar,
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
			prop: "isMenuSidebarActive",
			event: "update:is-menu-sidebar-active",
		},
		props: {
			isMenuSidebarActive: {
				type: Boolean,
				required: false,
			},
			menuItemData: {
				type: Object,
				required: false,
			},
		},
		setup(props, { emit }) {
			// Module configurations
			const SITE_MENUS_STORE_MODULE_NAME = "site-menus"
			if (!store.hasModule(SITE_MENUS_STORE_MODULE_NAME)) store.registerModule(SITE_MENUS_STORE_MODULE_NAME, menuStoreModule)
			onUnmounted(() => {
				if (store.hasModule(SITE_MENUS_STORE_MODULE_NAME)) store.unregisterModule(SITE_MENUS_STORE_MODULE_NAME)
			})

			const blankData = {
				title_ar: "",
				title_en: "",
				link: "",
				open_in_same_page: "",
			}
			let formData = computed(() => {
				return props.menuItemData ? props.menuItemData : blankData
			})
			const resetFormData = () => {
				formData = JSON.parse(JSON.stringify(blankData))
			}

			const onSubmit = () => {
				if (props.menuItemData) {
					// Edit
					store
						.dispatch("site-menus/updateMenu", { id: props.menuItemData.id, formData: formData.value })
						.then(() => {
							emit("refetch-data")
							emit("update:is-menu-sidebar-active", false)
						})
						.catch((error) => {
							if (error.response.status === 400) {
								// Set errors
								refFormObserver.value.setErrors(error.response.data)
							}
						})

					return
				}

				// Otherwise.. Add
				store
					.dispatch("site-menus/addMenu", { formData: formData.value })
					.then(() => {
						emit("refetch-data")
						emit("update:is-menu-sidebar-active", false)
					})
					.catch((error) => {
						if (error.response.status === 400) {
							// Set errors
							refFormObserver.value.setErrors(error.response.data)
						}
					})
			}

			const { refFormObserver, getValidationState, resetForm } = formValidation(resetFormData)

			return {
				formData,
				onSubmit,
				refFormObserver,
				getValidationState,
				resetForm,
				required,
				yes_or_no: [
					{ text: i18n.t("No"), value: 0 },
					{ text: i18n.t("Yes"), value: 1 },
				],
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
