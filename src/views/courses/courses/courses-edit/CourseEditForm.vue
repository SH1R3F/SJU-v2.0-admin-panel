<template>
	<div>
		<!-- User Info: Input Fields -->
		<validation-observer #default="{ handleSubmit }" ref="refFormObserver">
			<b-form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">
				<!-- Field: Name -->
				<b-row>
					<b-col cols="6">
						<validation-provider #default="validationContext" vid="name_ar" :name="`${$t('Name')} (${$t('In Arabic')})`" rules="required|min:3">
							<b-form-group :label="`${$t('Name')} (${$t('In Arabic')})`" label-for="name_ar">
								<b-form-input id="name_ar" v-model="formData.name_ar" autofocus :state="getValidationState(validationContext)" trim />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>

					<b-col cols="6">
						<validation-provider #default="validationContext" vid="name_en" :name="`${$t('Name')} (${$t('In English')})`" rules="min:3">
							<b-form-group :label="`${$t('Name')} (${$t('In English')})`" label-for="name_en">
								<b-form-input id="name_en" v-model="formData.name_en" :state="getValidationState(validationContext)" trim />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Field: Region -->
				<b-row>
					<b-col cols="12">
						<validation-provider #default="validationContext" vid="region" :name="$t('Region')" rules="required|min:3">
							<b-form-group :label="$t('Region')" label-for="region">
								<b-form-input id="region" v-model="formData.region" :state="getValidationState(validationContext)" trim />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Field: Type and Gender -->
				<b-row>
					<b-col cols="6">
						<validation-provider #default="validationContext" vid="type_id" :name="$t('Course type')" rules="required">
							<b-form-group :label="$t('Course type')" label-for="type_id">
								<v-select v-model="formData.type_id" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="namings.types" label="name_ar" :reduce="(type) => type.id" :clearable="false" :state="getValidationState(validationContext)" />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>

					<b-col cols="6">
						<validation-provider #default="validationContext" vid="gender_id" :name="$t('Gender')" rules="required">
							<b-form-group :label="$t('Gender')" label-for="gender_id">
								<v-select v-model="formData.gender_id" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="namings.genders" label="name_ar" :reduce="(gender) => gender.id" :clearable="false" :state="getValidationState(validationContext)" />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Field: Category and Location -->
				<b-row>
					<b-col cols="6">
						<validation-provider #default="validationContext" vid="category_id" :name="$t('Course category')" rules="required">
							<b-form-group :label="$t('Course category')" label-for="category_id">
								<v-select v-model="formData.category_id" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="namings.categories" label="name_ar" :reduce="(category) => category.id" :clearable="false" :state="getValidationState(validationContext)" />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>

					<b-col cols="6">
						<validation-provider #default="validationContext" vid="location_id" :name="$t('Location')" rules="required">
							<b-form-group :label="$t('Location')" label-for="location_id">
								<v-select v-model="formData.location_id" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="namings.locations" label="name_ar" :reduce="(location) => location.id" :clearable="false" :state="getValidationState(validationContext)" />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Field: Map link -->
				<b-row>
					<b-col cols="12">
						<validation-provider #default="validationContext" vid="map_link" :name="$t('Map link')" rules="required">
							<b-form-group :label="$t('Map link')" label-for="map_link">
								<b-form-input id="map_link" v-model="formData.map_link" :state="getValidationState(validationContext)" trim />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Field: Longitude and Latitude -->
				<b-row>
					<b-col cols="6">
						<validation-provider #default="validationContext" vid="map_longitude" :name="$t('Map longitude')" rules="required">
							<b-form-group :label="$t('Map longitude')" label-for="map_longitude">
								<b-form-input id="map_longitude" v-model="formData.map_longitude" :state="getValidationState(validationContext)" trim />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>

					<b-col cols="6">
						<validation-provider #default="validationContext" vid="map_latitude" :name="$t('Map latitude')" rules="required">
							<b-form-group :label="$t('Map latitude')" label-for="map_latitude">
								<b-form-input id="map_latitude" v-model="formData.map_latitude" :state="getValidationState(validationContext)" trim />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Field: Seats -->
				<b-row>
					<b-col cols="12">
						<validation-provider #default="validationContext" vid="seats" :name="$t('Seats')" rules="required">
							<b-form-group :label="$t('Seats')" label-for="seats">
								<b-form-input type="number" max="1000" id="seats" v-model="formData.seats" :state="getValidationState(validationContext)" trim />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Field: Date: From, To -->
				<b-row>
					<b-col cols="6">
						<validation-provider #default="validationContext" vid="date_from" :name="`${$t('Date')} (${$t('From')})`" rules="required">
							<b-form-group :label="`${$t('Date')} (${$t('From')})`" label-for="date_from">
								<date-picker id="date_from" v-model="formData.date_from" :locale="$i18n.locale == 'ar' ? 'ar-sa' : ''" :state="getValidationState(validationContext)" />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>

					<b-col cols="6">
						<validation-provider #default="validationContext" vid="date_to" :name="`${$t('Date')} (${$t('To')})`" rules="required">
							<b-form-group :label="`${$t('Date')} (${$t('To')})`" label-for="date_to">
								<date-picker id="date_to" v-model="formData.date_to" :locale="$i18n.locale == 'ar' ? 'ar-sa' : ''" :state="getValidationState(validationContext)" />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Field: Time: From, To -->
				<b-row>
					<b-col cols="6">
						<validation-provider #default="validationContext" vid="time_from" :name="`${$t('Time')} (${$t('From')})`" rules="required">
							<b-form-group :label="`${$t('Time')} (${$t('From')})`" label-for="time_from">
								<b-form-timepicker v-bind="labels[locale] || {}" :locale="locale" id="timepicker-buttons-from" v-model="formData.time_from" :state="getValidationState(validationContext)" now-button reset-button />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>

					<b-col cols="6">
						<validation-provider #default="validationContext" vid="time_to" :name="`${$t('Time')} (${$t('To')})`" rules="required">
							<b-form-group :label="`${$t('Time')} (${$t('To')})`" label-for="time_to">
								<b-form-timepicker v-bind="labels[locale] || {}" :locale="locale" id="timepicker-buttons-to" v-model="formData.time_to" :state="getValidationState(validationContext)" now-button reset-button />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Field: Days -->
				<b-row>
					<b-col cols="12">
						<validation-provider #default="validationContext" vid="days" :name="$t('Days')" rules="required">
							<b-form-group :label="$t('Days')" label-for="days">
								<v-select v-model="formData.days" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="$days" :reduce="(day) => day.value" :state="getValidationState(validationContext)" multiple />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Field: Minutes -->
				<b-row>
					<b-col cols="12">
						<validation-provider #default="validationContext" vid="minutes" :name="$t('Minutes')" rules="required">
							<b-form-group :label="$t('Minutes')" label-for="minutes">
								<b-form-input type="number" id="minutes" v-model="formData.minutes" :state="getValidationState(validationContext)" trim />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Field: Percentage -->
				<b-row>
					<b-col cols="12">
						<validation-provider #default="validationContext" vid="percentage" :name="$t('Percentage')" rules="required">
							<b-form-group :label="$t('Percentage')" label-for="percentage">
								<b-form-input type="number" max="100" id="percentage" v-model="formData.percentage" :state="getValidationState(validationContext)" trim />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Field: Price -->
				<b-row>
					<b-col cols="12">
						<validation-provider #default="validationContext" vid="price" :name="$t('Price')" rules="required">
							<b-form-group :label="$t('Price')" label-for="price">
								<v-select v-model="formData.price" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="$packages" :reduce="(pkg) => pkg.value" :clearable="false" :state="getValidationState(validationContext)" />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Field: Photos -->
				<b-row>
					<b-col cols="12">
						<validation-provider #default="validationContext" vid="photos" :name="$t('Photos')">
							<b-form-group :label="$t('Photos')" label-for="photos">
								<b-form-file ref="refInputEl" @input="InputImagesRenderer" :placeholder="$t('Choose a file or drop it here...')" :drop-placeholder="$t('Drop file here...')" multiple accept="image/*" />
								<b-alert variant="secondary" show v-if="formData.images.length">
									<div class="alert-body">
										<b-img v-for="(photo, i) in formData.images" thumbnail :src="photo" style="height: 150px; object-fit: cover; margin-inline-end: 7px" @click="removePhoto(i)" />
									</div>
								</b-alert>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Field: Trainer -->
				<b-row>
					<b-col cols="12">
						<validation-provider #default="validationContext" vid="trainer" :name="$t('Trainer')" rules="required">
							<b-form-group :label="$t('Trainer')" label-for="trainer">
								<b-form-input id="trainer" v-model="formData.trainer" :state="getValidationState(validationContext)" trim />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Field: Content -->
				<b-row>
					<b-col cols="12">
						<validation-provider #default="validationContext" vid="content" :name="$t('Content')" rules="required">
							<b-form-group :label="$t('Content')" label-for="content">
								<!-- Field: Message - Quill Editor -->
								<quill-editor id="quil-content" v-model="formData.content" :state="getValidationState(validationContext)" trim :options="{ theme: 'snow' }" />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Field: Summary -->
				<b-row>
					<b-col cols="12">
						<validation-provider #default="validationContext" vid="summary" :name="$t('Summary')" rules="required">
							<b-form-group :label="$t('Summary')" label-for="summary">
								<b-form-textarea id="summary" v-model="formData.summary" :state="getValidationState(validationContext)" trim />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Field: Zoom link -->
				<b-row>
					<b-col cols="12">
						<validation-provider #default="validationContext" vid="zoom_link" :name="$t('Zoom link')">
							<b-form-group :label="$t('Zoom link')" label-for="zoom_link">
								<b-form-input id="zoom_link" v-model="formData.zoom_link" :state="getValidationState(validationContext)" trim />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Field: Youtube link -->
				<b-row>
					<b-col cols="12">
						<validation-provider #default="validationContext" vid="youtube_link" :name="$t('Youtube link')">
							<b-form-group :label="$t('Youtube link')" label-for="youtube_link">
								<b-form-input id="youtube_link" v-model="formData.youtube_link" :state="getValidationState(validationContext)" trim />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Field: Template -->
				<b-row>
					<b-col cols="12">
						<validation-provider #default="validationContext" vid="template_id" :name="$t('Template')" rules="required">
							<b-form-group :label="$t('Template')" label-for="template_id">
								<v-select v-model="formData.template_id" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="namings.templates" label="name" :reduce="(template) => template.id" :clearable="false" :state="getValidationState(validationContext)" />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Field: Questionnaire -->
				<b-row>
					<b-col cols="12">
						<validation-provider #default="validationContext" vid="questionnaire_id" :name="$t('Questionnaire')" rules="required">
							<b-form-group :label="$t('Questionnaire')" label-for="questionnaire_id">
								<v-select v-model="formData.questionnaire_id" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="namings.questionnaires" label="name_ar" :reduce="(questionnaire) => questionnaire.id" :clearable="false" :state="getValidationState(validationContext)" />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<!-- Field: Status -->
				<b-row>
					<b-col cols="12">
						<validation-provider #default="validationContext" vid="status" :name="$t('Status')" rules="required">
							<b-form-group :label="$t('Status')" label-for="status">
								<v-select v-model="formData.status" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="$courseStatus" :reduce="(status) => status.value" label="text" :state="getValidationState(validationContext)" />
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
	import { BImg, BAlert, BButton, BRow, BCol, BFormGroup, BFormTimepicker, BFormTextarea, BFormInput, BFormFile, BForm, BFormInvalidFeedback } from "bootstrap-vue"
	import vSelect from "vue-select"
	import { onUnmounted, ref } from "@vue/composition-api"
	import courseStoreModule from "../courseStoreModule"
	import useCoursesList from "../courses-list/useCoursesList"
	import namingStoreModule from "../../namings/namingStoreModule"
	import router from "@/router"
	import store from "@/store"
	import { ValidationProvider, ValidationObserver } from "vee-validate"
	import { required } from "@validations"
	import formValidation from "@/@core/comp-functions/forms/form-validation"
	import { $days, $courseStatus, $packages } from "@siteConfig"
	import { quillEditor } from "vue-quill-editor"
	import "quill/dist/quill.core.css"
	// eslint-disable-next-line
	import "quill/dist/quill.snow.css"
	// eslint-disable-next-line
	import "quill/dist/quill.bubble.css"
	import i18n from "@/libs/i18n"
	import { useInputImagesRenderer } from "@core/comp-functions/forms/form-utils"

	export default {
		components: {
			BImg,
			BButton,
			BAlert,
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
			BFormTimepicker,
			BFormTextarea,
			quillEditor,
		},

		props: {
			courseData: {
				type: Object,
				required: true,
			},
		},

		setup(props) {
			// MODULE CONFIGURATION
			const APP_COURSE_STORE_MODULE_NAME = "app-course"
			if (!store.hasModule(APP_COURSE_STORE_MODULE_NAME)) store.registerModule(APP_COURSE_STORE_MODULE_NAME, courseStoreModule)
			onUnmounted(() => {
				if (store.hasModule(APP_COURSE_STORE_MODULE_NAME)) store.unregisterModule(APP_COURSE_STORE_MODULE_NAME)
			})
			// MODULE CONFIGURATION
			const COURSE_NAMING_STORE_MODULE_NAME = "course-naming"
			if (!store.hasModule(COURSE_NAMING_STORE_MODULE_NAME)) store.registerModule(COURSE_NAMING_STORE_MODULE_NAME, namingStoreModule)
			onUnmounted(() => {
				if (store.hasModule(COURSE_NAMING_STORE_MODULE_NAME)) store.unregisterModule(COURSE_NAMING_STORE_MODULE_NAME)
			})

			const fileToBeUploaded = ref(null)

			// Form config for submit & rest
			let oldData = props.courseData

			// const days = [];
			// oldData.days.forEach((day, k) => {
			// 	days[k] = $days[day];
			// });
			// oldData.days = days;

			const formData = ref(JSON.parse(JSON.stringify(oldData)))
			const resetcourseData = () => {
				formData.value = JSON.parse(JSON.stringify(oldData))
			}

			// Photos upload management
			const refInputEl = ref(null)
			const InputImagesRenderer = () => {
				refInputEl.value.files.forEach((file) => {
					useInputImagesRenderer(file, (img) => {
						formData.value.images.push(img)
					})
				})
			}
			const removePhoto = (i) => {
				formData.value.images.splice(i, 1)
			}

			// Submitting
			const onSubmit = function () {
				store
					.dispatch("app-course/updateCourse", { id: router.currentRoute.params.id, form: formData.value })
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

			const { fetchNamings } = useCoursesList()
			let namings = ref({})
			fetchNamings(null, (p) => {
				namings.value = p
			})

			// Form validation configuration
			const { refFormObserver, getValidationState, resetForm } = formValidation(resetcourseData)
			const locale = i18n.locale == "ar" ? "ar-EG" : "en-US"

			return {
				fileToBeUploaded,
				formData,
				required,
				refFormObserver,
				onSubmit,
				getValidationState,
				resetForm,
				namings,
				$days,
				$courseStatus,
				$packages,
				locale,
				labels: {
					"ar-EG": {
						labelHours: "ساعات",
						labelMinutes: "الدقائق",
						labelSeconds: "ثواني",
						labelAmpm: "صباحا مساء",
						labelAm: "ص",
						labelPm: "م",
						labelIncrement: "زيادة",
						labelDecrement: "إنقاص",
						labelSelected: "الوقت المحدد",
						labelNoTimeSelected: "لم يتم اختيار الوقت",
						labelCloseButton: "غلق",
						labelNowButton: "الآن",
						labelResetButton: "إلغاء",
					},
				},
				refInputEl,
				InputImagesRenderer,
				removePhoto,
			}
		},
	}
</script>

<style lang="scss">
	@import "@core/scss/vue/libs/vue-select.scss";
	.ql-editor {
		min-height: 200px;
	}
	#timepicker-buttons-from__dialog_,
	#timepicker-buttons-to__dialog_ {
		z-index: 9999 !important;
		left: auto;
	}
</style>
