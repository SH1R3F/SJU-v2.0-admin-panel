<template>
	<component :is="formData === undefined ? 'div' : 'b-card'">
		<!-- Alert: No item found -->
		<b-alert variant="danger" :show="formData === undefined">
			<h4 class="alert-heading">{{ $t("Error fetching post data") }}</h4>
			<div class="alert-body">
				{{ $t("No post found with this post id") }}. {{ $t("Go to") }}
				<b-link class="alert-link" :to="{ name: 'blog-posts' }"> {{ $t("posts List") }} </b-link>
				{{ $t("for other posts") }}.
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
									<b-form-input id="title_ar" v-model="formData.title_ar" :state="getValidationState(validationContext)" trim autofocus />
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

						<!-- Field: Category -->
						<b-col cols="12" md="6">
							<validation-provider #default="validationContext" vid="blog_category_id" :name="$t('Category')" rules="required">
								<b-form-group :label="$t('Category')" label-for="blog_category_id">
									<v-select :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="categories" :reduce="(category) => category.id" :label="dblocalize('title')" input-id="blog_category_id" v-model="formData.blog_category_id" :state="getValidationState(validationContext)" />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</b-form-group>
							</validation-provider>
						</b-col>

						<!-- Field: News date -->
						<b-col cols="12" md="6">
							<validation-provider #default="validationContext" vid="post_date" :name="$t('News date')">
								<b-form-group :label="$t('News date')" label-for="post_date">
									<date-picker id="post_date" v-model="formData.post_date" :locale="$i18n.locale == 'ar' ? 'ar-sa' : ''" :state="getValidationState(validationContext)" />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</b-form-group>
							</validation-provider>
						</b-col>

						<!-- Field: Post photos -->
						<b-col cols="12">
							<validation-provider #default="validationContext" vid="post_date" :name="$t('Post photos')">
								<b-form-group :label="$t('Post photos')" label-for="post_date">
									<b-form-file ref="refInputEl" @input="InputImagesRenderer" :placeholder="$t('Choose a file or drop it here...')" :drop-placeholder="$t('Drop file here...')" multiple accept="image/*" />
									<b-alert variant="secondary" show v-if="formData.photos.length">
										<div class="alert-body">
											<b-img v-for="(photo, i) in formData.photos" :key="i" thumbnail :src="photo" style="height: 150px; object-fit: cover; margin-inline-end: 7px" @click="removePhoto(i)" />
										</div>
									</b-alert>
								</b-form-group>
							</validation-provider>
						</b-col>

						<!-- Field: Summary (In Arabic) -->
						<b-col cols="12" md="6">
							<validation-provider #default="validationContext" vid="summary_ar" :name="`${$t('Summary')} (${$t('In Arabic')})`" rules="required|min:3">
								<b-form-group :label="`${$t('Summary')} (${$t('In Arabic')})`" label-for="summary_ar">
									<b-form-input id="summary_ar" v-model="formData.summary_ar" :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</b-form-group>
							</validation-provider>
						</b-col>

						<!-- Field: Summary (In English) -->
						<b-col cols="12" md="6">
							<validation-provider #default="validationContext" vid="summary_en" :name="`${$t('Summary')} (${$t('In English')})`" rules="required|min:3">
								<b-form-group :label="`${$t('Summary')} (${$t('In English')})`" label-for="summary_en">
									<b-form-input id="summary_en" v-model="formData.summary_en" :state="getValidationState(validationContext)" trim />
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
	import { BImg, BTab, BTabs, BCard, BAlert, BLink, BRow, BButton, BFormGroup, BFormInput, BForm, BFormFile, BFormInvalidFeedback, BCol } from "bootstrap-vue"
	import { ValidationProvider, ValidationObserver } from "vee-validate"
	import { required, min } from "@validations"
	import formValidation from "@/@core/comp-functions/forms/form-validation"
	import vSelect from "vue-select"
	import { ref, onUnmounted } from "@vue/composition-api"
	import router from "@/router"
	import store from "@/store"
	import postStoreModule from "./postStoreModule"
	import { quillEditor } from "vue-quill-editor"
	import "quill/dist/quill.core.css"
	// eslint-disable-next-line
	import "quill/dist/quill.snow.css"
	// eslint-disable-next-line
	import "quill/dist/quill.bubble.css"
	import { useInputImagesRenderer } from "@core/comp-functions/forms/form-utils"

	export default {
		components: {
			BImg,
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
			BFormFile,
			ValidationProvider,
			ValidationObserver,
			BFormInvalidFeedback,
			BCol,
			quillEditor,
			vSelect,
		},
		setup() {
			const BLOG_POSTS_STORE_MODULE_NAME = "blog-posts"
			// Register module
			if (!store.hasModule(BLOG_POSTS_STORE_MODULE_NAME)) store.registerModule(BLOG_POSTS_STORE_MODULE_NAME, postStoreModule)
			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(BLOG_POSTS_STORE_MODULE_NAME)) store.unregisterModule(BLOG_POSTS_STORE_MODULE_NAME)
			})

			const oldData = ref({
				blog_category_id: "",
				title_ar: "",
				title_en: "",
				post_date: "",
				photos: [],
				summary_ar: "",
				summary_en: "",
				content_ar: "",
				content_en: "",
			})
			const formData = ref(JSON.parse(JSON.stringify(oldData.value)))
			const resetformData = () => {
				formData.value = JSON.parse(JSON.stringify(oldData.value))
			}

			if (router.currentRoute.name === "edit-post") {
				store
					.dispatch("blog-posts/fetchPost", { id: router.currentRoute.params.id })
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

			// Fetch categories for the vue select category id
			const categories = ref([])
			store
				.dispatch("blog-posts/fetchCategories", { id: router.currentRoute.params.id })
				.then((response) => {
					categories.value = response.data.categories
				})
				.catch((error) => {})

			// Photos upload management
			const refInputEl = ref(null)
			const InputImagesRenderer = () => {
				refInputEl.value.files.forEach((file) => {
					useInputImagesRenderer(file, (img) => {
						formData.value.photos.push(img)
					})
				})
			}
			const removePhoto = (i) => {
				formData.value.photos.splice(i, 1)
			}

			const onSubmit = function () {
				if (router.currentRoute.name === "edit-post") {
					store
						.dispatch("blog-posts/updatePost", { id: router.currentRoute.params.id, formData: formData.value })
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
				} else if (router.currentRoute.name === "create-post") {
					store
						.dispatch("blog-posts/addPost", { formData: formData.value })
						.then((response) => {
							router.push({ name: "blog-posts" })
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
				refFormObserver,
				onSubmit,
				resetForm,
				getValidationState,
				categories,
				refInputEl,
				InputImagesRenderer,
				removePhoto,
			}
		},
	}
</script>

<style>
	.ql-editor {
		min-height: 400px;
	}
	#timepicker-buttons-from__dialog_,
	#timepicker-buttons-to__dialog_ {
		z-index: 9999 !important;
		left: auto;
	}
</style>
