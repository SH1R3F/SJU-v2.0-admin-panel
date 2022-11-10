<template>
	<div>
		<!-- Media -->
		<b-media class="mb-2 align-items-center">
			<template #aside>
				<b-avatar
					ref="previewEl"
					:src="formData.image"
					:text="avatarText(templateData.name)"
					:variant="formData.image ? '' : `light-secondary`"
					size="90px"
					rounded
				/>
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
						<validation-provider
							#default="validationContext"
							vid="name"
							:name="$t('Name')"
							rules="required|min:3"
						>
							<b-form-group :label="$t('Name')" label-for="name">
								<b-form-input
									id="name"
									v-model="formData.name"
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

				<!-- Field: File -->
				<b-row>
					<b-col cols="12">
						<validation-provider #default="validationContext" vid="templatefile" :name="$t('File')">
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
					</b-col>
				</b-row>

				<!-- Field: Language -->
				<b-row>
					<b-col cols="12">
						<validation-provider
							#default="validationContext"
							vid="language"
							:name="$t('Language')"
							rules="required"
						>
							<b-form-group :label="$t('Language')" label-for="language">
								<v-select
									v-model="formData.language"
									:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
									:options="$languages"
									:reduce="(language) => language.value"
									:clearable="false"
									input-id="subscriber-language"
									:value="formData.language"
									:state="getValidationState(validationContext)"
								/>
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
						<validation-provider
							#default="validationContext"
							vid="layout"
							:name="$t('Layout')"
							rules="required"
						>
							<b-form-group :label="$t('Layout')" label-for="layout">
								<v-select
									v-model="formData.layout"
									:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
									:options="$layouts"
									:reduce="(layout) => layout.value"
									:clearable="false"
									input-id="subscriber-layout"
									:value="formData.layout"
									:state="getValidationState(validationContext)"
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Refresh if upload new -->
				<div>
					<b-button variant="primary" type="submit">{{ $t("Refresh") }}</b-button>
				</div>
				<hr class="my-4" />
				<div>
					<h2>عرض تقريبي:</h2>
					<iframe ref="preview" :src="formData.preview" width="100%" height="700"></iframe>

					<!-- Row Loop -->
					<b-row v-for="(field, index) in formData.fields" :id="index" :key="index" ref="row">
						<!-- Field Name -->
						<b-col md="4" lg="2">
							<b-form-group :label="$t('Field name')" label-for="field-name">
								<v-select
									v-model="field.name"
									:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
									:options="$fields"
									:reduce="(field) => field.value"
									:clearable="false"
									input-id="field-name"
									:value="field.name"
								/>
							</b-form-group>
						</b-col>

						<!-- Text -->
						<b-col md="4" lg="2" v-if="field.name === '{free_text}'">
							<b-form-group :label="$t('Text')" label-for="text">
								<b-form-input id="text" type="text" v-model="field.free_text" />
							</b-form-group>
						</b-col>

						<!-- Position Y -->
						<b-col md="2" lg="1">
							<b-form-group :label="$t('Length')" label-for="position-y">
								<b-form-input id="position-y" type="number" v-model="field.position_y" />
							</b-form-group>
						</b-col>

						<!-- Width -->
						<b-col md="2" lg="1">
							<b-form-group :label="$t('Width')" label-for="position-fixed">
								<v-select
									v-model="field.position_fixed"
									:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
									:options="[
										{
											label: $t('Specify'),
											value: 'width: auto;',
										},
										{
											label: $t('Center'),
											value: 'width: 100%; text-align:center;',
										},
									]"
									:reduce="(field) => field.value"
									:clearable="false"
									input-id="position-fixed"
									:value="field.position_fixed"
								/>
							</b-form-group>
						</b-col>

						<!-- Position X -->
						<b-col md="2" lg="1" v-if="field.position_fixed == 'width: auto;'">
							<b-form-group :label="$t('Width')" label-for="position-x">
								<b-form-input id="position-x" type="number" v-model="field.position_x" />
							</b-form-group>
						</b-col>

						<!-- Font size -->
						<b-col md="2" lg="1">
							<b-form-group :label="$t('Font size')" label-for="font-size">
								<v-select
									v-model="field.font_size"
									:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
									:options="$fontsizes"
									:reduce="(size) => size.value"
									:clearable="false"
									input-id="font-size"
									:value="field.font_size"
								/>
							</b-form-group>
						</b-col>

						<!-- Font color -->
						<b-col md="2" lg="1">
							<b-form-group :label="$t('Font color')" label-for="font-color">
								<b-form-input id="font-color" type="color" v-model="field.font_color" />
							</b-form-group>
						</b-col>

						<!-- Font Type -->
						<b-col md="3" lg="2">
							<b-form-group :label="$t('Font type')" label-for="font-type">
								<v-select
									v-model="field.font_type"
									:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
									:options="$fonttypes"
									:reduce="(type) => type.value"
									:clearable="false"
									input-id="font-type"
									:value="field.font_type"
								/>
							</b-form-group>
						</b-col>

						<!-- Remove Button -->
						<b-col md="2" lg="1" class="mb-50">
							<b-button
								v-ripple.400="'rgba(234, 84, 85, 0.15)'"
								variant="outline-danger"
								class="mt-0 mt-md-2"
								@click="removeField(index)"
							>
								<feather-icon icon="XIcon" class="mr-25" />
							</b-button>
						</b-col>
						<b-col cols="12" v-if="index != formData.fields.length - 1">
							<hr />
						</b-col>
					</b-row>
					<!-- Row Loop -->

					<b-button
						class="mt-2"
						v-ripple.400="'rgba(255, 255, 255, 0.15)'"
						variant="primary"
						@click="addField"
					>
						<feather-icon icon="PlusIcon" class="mr-25" />
						<span>{{ $t("Add field") }}</span>
					</b-button>

					<hr class="my-3" />

					<b-form-group :label="$t('Add surname before name')" label-for="add_title">
						<b-form-checkbox v-model="formData.with_title" value="1" unchecked-value="0">
							{{ $t("yes") }}
						</b-form-checkbox>
					</b-form-group>

					<b-row v-if="formData.with_title">
						<b-col md="4">
							<b-form-group :label="$t('Male')" label-for="male">
								<b-form-input id="male" v-model="formData.male_title" :placeholder="$t('Ex: Mr')" />
							</b-form-group>
						</b-col>
						<b-col md="4">
							<b-form-group :label="$t('Female')" label-for="female">
								<b-form-input
									id="female"
									v-model="formData.female_title"
									:placeholder="$t('Ex: Mrs')"
								/>
							</b-form-group>
						</b-col>
					</b-row>

					<b-row>
						<b-col md="6">
							<b-form-group :label="$t('Add certificate code')" label-for="certcode">
								<v-select
									v-model="formData.certcode"
									:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
									:options="$certcodes"
									:reduce="(code) => code.value"
									:clearable="false"
									input-id="font-type"
									:value="formData.certcode"
								/>
							</b-form-group>
						</b-col>
					</b-row>

					<b-row>
						<b-col md="3">
							<b-form-group :label="$t('Margin top')" label-for="margin-top">
								<b-form-input id="margin-top" v-model="formData.code_margin_top" type="number" />
							</b-form-group>
						</b-col>
						<b-col md="3">
							<b-form-group :label="$t('Margin right')" label-for="margin-right">
								<b-form-input id="margin-right" v-model="formData.code_margin_right" type="number" />
							</b-form-group>
						</b-col>
						<b-col md="3">
							<b-form-group :label="$t('Margin bottom')" label-for="margin-bottom">
								<b-form-input id="margin-bottom" v-model="formData.code_margin_bottom" type="number" />
							</b-form-group>
						</b-col>
						<b-col md="3">
							<b-form-group :label="$t('Margin left')" label-for="margin-left">
								<b-form-input id="margin-left" v-model="formData.code_margin_left" type="number" />
							</b-form-group>
						</b-col>
					</b-row>
				</div>

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
		BFormCheckbox,
		BFormFile,
		BForm,
		BFormInvalidFeedback,
	} from "bootstrap-vue"
	import vSelect from "vue-select"
	import { avatarText } from "@core/utils/filter"
	import { onUnmounted, ref } from "@vue/composition-api"
	import templateStoreModule from "../templateStoreModule"
	import router from "@/router"
	import store from "@/store"
	import { ValidationProvider, ValidationObserver } from "vee-validate"
	import { required } from "@validations"
	import formValidation from "@/@core/comp-functions/forms/form-validation"
	import { $languages, $layouts, $fields, $fontsizes, $fonttypes, $certcodes } from "@siteConfig"
	import { heightTransition } from "@core/mixins/ui/transition"
	import Ripple from "vue-ripple-directive"
	import i18n from "@/libs/i18n"

	export default {
		components: {
			BButton,
			BMedia,
			BAvatar,
			BRow,
			BCol,
			BFormGroup,
			BFormInput,
			BFormCheckbox,
			BFormFile,
			BForm,
			ValidationProvider,
			ValidationObserver,
			BFormInvalidFeedback,
			vSelect,
		},
		directives: {
			Ripple,
		},
		mixins: [heightTransition],
		props: {
			templateData: {
				type: Object,
				required: true,
			},
		},
		setup(props) {
			// MODULE CONFIGURATION
			const COURSE_TEMPLATE_STORE_MODULE_NAME = "course-template"
			if (!store.hasModule(COURSE_TEMPLATE_STORE_MODULE_NAME))
				store.registerModule(COURSE_TEMPLATE_STORE_MODULE_NAME, templateStoreModule)
			onUnmounted(() => {
				if (store.hasModule(COURSE_TEMPLATE_STORE_MODULE_NAME))
					store.unregisterModule(COURSE_TEMPLATE_STORE_MODULE_NAME)
			})

			const fileToBeUploaded = ref(null)

			// Form config for submit & rest
			try {
				props.templateData.fields = JSON.parse(props.templateData.fields)
			} catch (e) {}
			const oldData = props.templateData
			const formData = ref(JSON.parse(JSON.stringify(oldData)))
			const resettemplateData = () => {
				formData.value = JSON.parse(JSON.stringify(oldData))
			}

			const preview = ref(null)
			// Submitting
			const onSubmit = function () {
				formData.value.templatefile = fileToBeUploaded.value
				// Convert to FormData to upload the file
				const converted = new FormData()
				Object.keys(formData.value).forEach((key) => {
					if (key == "fields") {
						converted.append(key, JSON.stringify(formData.value[key]))
						return
					}
					converted.append(key, formData.value[key])
				})
				converted.append("_method", "PUT")

				store
					.dispatch("course-template/updateTemplate", { id: router.currentRoute.params.id, form: converted })
					.then((response) => {
						this.$bvToast.toast(response.message, {
							variant: "success",
							solid: true,
						})
						if (response.template) {
							formData.value = response.template
							try {
								formData.value.fields = JSON.parse(response.template.fields)
							} catch (e) {}

							// Refresh iframe?
							preview.value.contentWindow.location.reload()
						}
					})
					.catch((error) => {
						if (error?.response?.status === 400) {
							// Set errors
							refFormObserver.value.setErrors(error.response.data)
						}
					})
			}

			// Form validation configuration
			const { refFormObserver, getValidationState, resetForm } = formValidation(resettemplateData)

			// Form Repeater
			// const fields = ref([
			// 	{
			// 		name: "",
			// 		free_text: "",
			// 		position_y: 0,
			// 		position_fixed: "",
			// 		position_x: 0,
			// 		font_size: "",
			// 		font_color: "",
			// 		font_type: "",
			// 	},
			// ])
			const addField = () => {
				formData.value.fields.push({
					name: "",
					free_text: "",
					position_y: null,
					position_fixed: "",
					position_x: null,
					font_size: "",
					font_color: "",
					font_type: "",
				})
			}
			const removeField = (index) => {
				formData.value.fields.splice(index, 1)
			}

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
				$fields,
				$fontsizes,
				$fonttypes,
				$certcodes,
				preview,
				// Form Repeater
				addField,
				removeField,
			}
		},
	}
</script>

<style lang="scss">
	@import "@core/scss/vue/libs/vue-select.scss";
</style>
