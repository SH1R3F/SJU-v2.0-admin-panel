<template>
	<component :is="formData === undefined ? 'div' : 'b-card'">
		<!-- Alert: No item found -->
		<b-alert variant="danger" :show="formData === undefined">
			<h4 class="alert-heading">{{ $t("Error fetching page data") }}</h4>
			<div class="alert-body">
				{{ $t("No page found with this page id") }}. {{ $t("Go to") }}
				<b-link class="alert-link" :to="{ name: 'site-pages' }"> {{ $t("Pages List") }} </b-link>
				{{ $t("for other pages") }}.
			</div>
		</b-alert>

		<template v-if="formData">
			<validation-observer #default="{ handleSubmit }" ref="refFormObserver">
				<b-form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">
					<b-row>
						<!-- Field: Title (In Arabic) -->
						<b-col cols="12" md="6">
							<validation-provider #default="validationContext" vid="title_ar" :name="`${$t('Title')} (${$t('In Arabic')})`" rules="required|min:3">
								<b-form-group :label="`${$t('Title')} (${$t('In Arabic')})`" label-for="title_ar">
									<b-form-input id="title_ar" v-model="formData.title_ar" autofocus :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</b-form-group>
							</validation-provider>
						</b-col>

						<!-- Field: Title (In English) -->
						<b-col cols="12" md="6">
							<validation-provider #default="validationContext" vid="title_en" :name="`${$t('Title')} (${$t('In English')})`" rules="required|min:3">
								<b-form-group :label="`${$t('Title')} (${$t('In English')})`" label-for="title_en">
									<b-form-input id="title_en" v-model="formData.title_en" :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</b-form-group>
							</validation-provider>
						</b-col>

						<!-- Field: Slug -->
						<b-col cols="12">
							<validation-provider #default="validationContext" vid="slug" :name="$t('Slug')" rules="required|min:3|alpha-dash">
								<b-form-group :label="$t('Slug')" label-for="slug">
									<b-form-input id="slug" v-model="formData.slug" :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</b-form-group>
							</validation-provider>
						</b-col>

						<!-- Field: Content (In Arabic) -->
						<b-col cols="12">
							<validation-provider #default="validationContext" vid="content_ar" :name="`${$t('Content')} (${$t('In Arabic')})`" rules="required|min:3">
								<b-form-group :label="`${$t('Content')} (${$t('In Arabic')})`" label-for="content_ar">
									<!-- Field: Arabic Content - Quill Editor -->
									<quill-editor id="quil-content" v-model="formData.content_ar" :state="getValidationState(validationContext)" trim :options="{ theme: 'snow' }" />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</b-form-group>
							</validation-provider>
						</b-col>

						<!-- Field: Content (In English) -->
						<b-col cols="12">
							<validation-provider #default="validationContext" vid="content_en" :name="`${$t('Content')} (${$t('In English')})`" rules="required|min:3">
								<b-form-group :label="`${$t('Content')} (${$t('In English')})`" label-for="content_en">
									<!-- Field: English Content - Quill Editor -->
									<quill-editor id="quil-content" v-model="formData.content_en" :state="getValidationState(validationContext)" trim :options="{ theme: 'snow' }" />
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
		</template>
	</component>
</template>

<script>
	import { BTab, BTabs, BCard, BAlert, BLink, BRow, BButton, BFormGroup, BFormInput, BForm, BFormInvalidFeedback, BCol } from "bootstrap-vue"
	import { ValidationProvider, ValidationObserver } from "vee-validate"
	import { required, min, alphaDash } from "@validations"
	import formValidation from "@/@core/comp-functions/forms/form-validation"

	import { ref, onUnmounted } from "@vue/composition-api"
	import router from "@/router"
	import store from "@/store"
	import pageStoreModule from "./pageStoreModule"
	import { quillEditor } from "vue-quill-editor"
	import "quill/dist/quill.core.css"
	// eslint-disable-next-line
	import "quill/dist/quill.snow.css"
	// eslint-disable-next-line
	import "quill/dist/quill.bubble.css"

	export default {
		components: {
			BTab,
			BTabs,
			BCard,
			BAlert,
			BLink,
			BRow,
			BButton,
			BFormGroup,
			BFormInput,
			BForm,
			ValidationProvider,
			ValidationObserver,
			BFormInvalidFeedback,
			BCol,
			quillEditor,
		},
		setup() {
			const SITE_PAGES_STORE_MODULE_NAME = "site-pages"
			// Register module
			if (!store.hasModule(SITE_PAGES_STORE_MODULE_NAME)) store.registerModule(SITE_PAGES_STORE_MODULE_NAME, pageStoreModule)
			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(SITE_PAGES_STORE_MODULE_NAME)) store.unregisterModule(SITE_PAGES_STORE_MODULE_NAME)
			})

			const oldData = ref({
				title_ar: "",
				title_en: "",
				slug: "",
				content_ar: "",
				content_en: "",
			})
			const formData = ref(JSON.parse(JSON.stringify(oldData.value)))
			const resetformData = () => {
				formData.value = JSON.parse(JSON.stringify(oldData.value))
			}

			if (router.currentRoute.name === "edit-page") {
				store
					.dispatch("site-pages/fetchPage", { id: router.currentRoute.params.id })
					.then((response) => {
						oldData.value = response.data
						formData.value = JSON.parse(JSON.stringify(oldData.value))
					})
					.catch((error) => {
						if (error.response.status === 404) {
							oldData.value = undefined
							formData.value = undefined
						}
					})
			}

			const onSubmit = function () {
				if (router.currentRoute.name === "edit-page") {
					store
						.dispatch("site-pages/updatePage", { id: router.currentRoute.params.id, formData: formData.value })
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
								this.$bvToast.toast(Object.values(error.response.data)[0], {
									variant: "danger",
									solid: true,
								})
							}
						})
				} else if (router.currentRoute.name === "create-page") {
					store
						.dispatch("site-pages/addPage", { formData: formData.value })
						.then((response) => {
							router.push({ name: "site-pages" })
						})
						.catch((error) => {
							if (error.response.status === 400) {
								// Set errors
								refFormObserver.value.setErrors(error.response.data)
								this.$bvToast.toast(Object.values(error.response.data)[0], {
									variant: "danger",
									solid: true,
								})
							}
						})
				}
			}
			const { refFormObserver, getValidationState, resetForm } = formValidation(resetformData)

			return {
				formData,
				formData,
				required,
				min,
				alphaDash,
				refFormObserver,
				onSubmit,
				resetForm,
				getValidationState,
			}
		},
	}
</script>

<style>
	.ql-editor {
		min-height: 400px;
	}
</style>
