<template>
	<div>
		<!-- Header: Personal Info -->
		<div class="d-flex">
			<feather-icon icon="UserIcon" size="19" />
			<h4 class="mb-0 ml-50">{{ $t("Personal Information") }}</h4>
		</div>

		<!-- Form: Personal Info Form -->
		<validation-observer #default="{ handleSubmit }" ref="refFormObserver">
			<b-form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">
				<!-- Field: Arabic Name -->
				<b-row>
					<b-col cols="12" md="3">
						<b-form-group :label="$t('First name')" label-for="fname_ar">
							<validation-provider
								#default="validationContext"
								vid="fname_ar"
								:name="$t('First name')"
								rules="required|min:3"
							>
								<b-form-input
									id="fname_ar"
									v-model="formData.fname_ar"
									autofocus
									:state="getValidationState(validationContext)"
									trim
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>
					<b-col cols="12" md="3">
						<b-form-group :label="$t('Second name')" label-for="sname_ar">
							<validation-provider
								#default="validationContext"
								vid="sname_ar"
								:name="$t('Second name')"
								rules="required|min:3"
							>
								<b-form-input
									id="sname_ar"
									v-model="formData.sname_ar"
									:state="getValidationState(validationContext)"
									trim
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>
					<b-col cols="12" md="3">
						<b-form-group :label="$t('Third name')" label-for="tname_ar">
							<validation-provider
								#default="validationContext"
								vid="tname_ar"
								:name="$t('Third name')"
								rules="required|min:3"
							>
								<b-form-input
									id="tname_ar"
									v-model="formData.tname_ar"
									:state="getValidationState(validationContext)"
									trim
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>
					<b-col cols="12" md="3">
						<b-form-group :label="$t('Last name')" label-for="lname_ar">
							<validation-provider
								#default="validationContext"
								vid="lname_ar"
								:name="$t('Last name')"
								rules="required|min:3"
							>
								<b-form-input
									id="lname_ar"
									v-model="formData.lname_ar"
									:state="getValidationState(validationContext)"
									trim
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>
				</b-row>

				<!-- Field: English Name -->
				<b-row>
					<b-col cols="12" md="3">
						<b-form-group :label="$t('First name') + ` (` + $t('In English') + `)`" label-for="fname_en">
							<validation-provider
								#default="validationContext"
								vid="fname_en"
								:name="$t('First name')"
								rules="required|min:3"
							>
								<b-form-input
									id="fname_en"
									v-model="formData.fname_en"
									:state="getValidationState(validationContext)"
									trim
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>
					<b-col cols="12" md="3">
						<b-form-group :label="$t('Second name') + ` (` + $t('In English') + `)`" label-for="sname_en">
							<validation-provider
								#default="validationContext"
								vid="sname_en"
								:name="$t('Second name')"
								rules="required|min:3"
							>
								<b-form-input
									id="sname_en"
									v-model="formData.sname_en"
									:state="getValidationState(validationContext)"
									trim
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>
					<b-col cols="12" md="3">
						<b-form-group :label="$t('Third name') + ` (` + $t('In English') + `)`" label-for="tname_en">
							<validation-provider
								#default="validationContext"
								vid="tname_en"
								:name="$t('Third name')"
								rules="required|min:3"
							>
								<b-form-input
									id="tname_en"
									v-model="formData.tname_en"
									:state="getValidationState(validationContext)"
									trim
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>
					<b-col cols="12" md="3">
						<b-form-group :label="$t('Last name') + ` (` + $t('In English') + `)`" label-for="lname_en">
							<validation-provider
								#default="validationContext"
								vid="lname_en"
								:name="$t('Last name')"
								rules="required|min:3"
							>
								<b-form-input
									id="lname_en"
									v-model="formData.lname_en"
									:state="getValidationState(validationContext)"
									trim
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>
				</b-row>

				<b-row>
					<!-- Field: Gender -->
					<b-col cols="12" lg="3">
						<b-form-group :label="$t('Gender')" label-for="gender" label-class="mb-1">
							<validation-provider
								#default="validationContext"
								vid="gender"
								:name="$t('Gender')"
								rules="required"
							>
								<b-form-radio-group
									id="gender"
									v-model="formData.gender"
									:options="$genders"
									:state="getValidationState(validationContext)"
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>

					<!-- Fields: Birthdays -->
					<!-- <b-col cols="12" lg="3">
						<b-form-group :label="$t('Birth date') + ' (' + $t('Meladi') + ')'">
							<validation-provider #default="validationContext" vid="birthday_meladi" :name="$t('Birth date') + ' (' + $t('Meladi') + ')'" rules="required">
								<date-picker v-model="formData.birthday_meladi" :locale="$i18n.locale == 'ar' ? 'ar-sa' : ''" :state="getValidationState(validationContext)"></date-picker>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>
					<b-col cols="12" lg="3">
						<b-form-group :label="$t('Birth date') + ' (' + $t('Hijri') + ')'">
							<validation-provider #default="validationContext" vid="birthday_hijri" :name="$t('Birth date') + ' (' + $t('Hijri') + ')'" rules="required">
								<date-picker v-model="formData.birthday_hijri" :locale="$i18n.locale == 'ar' ? 'ar-sa' : ''" calendar="hijri" :state="getValidationState(validationContext)"></date-picker>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col> -->
				</b-row>

				<!-- Header: Educational -->
				<div class="d-flex mt-3 mb-1">
					<feather-icon icon="BookOpenIcon" size="19" />
					<h4 class="mb-0 ml-50">{{ $t("Education") }}</h4>
				</div>

				<!-- Fields: Qualification, Major, Job title, Employer -->
				<b-row>
					<b-col cols="12" md="6">
						<b-form-group :label="$t('Qualification')" label-for="qualification">
							<validation-provider
								#default="validationContext"
								vid="qualification"
								:name="$t('Qualification')"
								rules="required|min:3"
							>
								<v-select
									v-model="formData.qualification"
									:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
									:options="$qualifications"
									:reduce="(qualification) => qualification.value"
									:clearable="false"
									input-id="subscriber-qualification"
									:value="formData.qualification"
									:state="getValidationState(validationContext)"
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>
					<b-col cols="12" md="6">
						<b-form-group :label="$t('Major')" label-for="major">
							<validation-provider
								#default="validationContext"
								vid="major"
								:name="$t('Major')"
								rules="required|min:3"
							>
								<b-form-input
									id="major"
									v-model="formData.major"
									:state="getValidationState(validationContext)"
									trim
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>
					<b-col cols="12" md="6">
						<b-form-group :label="$t('Job title')" label-for="job-title">
							<validation-provider
								#default="validationContext"
								vid="job_title"
								:name="$t('Job title')"
								rules="required|min:3"
							>
								<b-form-input
									id="job_title"
									v-model="formData.job_title"
									:state="getValidationState(validationContext)"
									trim
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>
					<b-col cols="12" md="6">
						<b-form-group :label="$t('Employer')" label-for="employer">
							<validation-provider
								#default="validationContext"
								vid="employer"
								:name="$t('Employer')"
								rules="required|min:3"
							>
								<b-form-input
									id="employer"
									v-model="formData.employer"
									:state="getValidationState(validationContext)"
									trim
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>
				</b-row>

				<!-- Header: Address -->
				<div class="d-flex mt-3 mb-1">
					<feather-icon icon="MapPinIcon" size="19" />
					<h4 class="mb-0 ml-50">{{ $t("Address") }}</h4>
				</div>

				<!-- Fields: Country, City, Nationality -->
				<b-row>
					<b-col cols="12" md="4">
						<b-form-group :label="$t('Country')" label-for="subscriber-country">
							<validation-provider
								#default="validationContext"
								vid="country"
								:name="$t('Country')"
								rules="required"
							>
								<v-select
									v-model="formData.country"
									:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
									:options="$countries"
									:reduce="(country) => country.value"
									:clearable="false"
									input-id="subscriber-country"
									:value="formData.country"
									:state="getValidationState(validationContext)"
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>

					<b-col cols="12" md="4">
						<b-form-group :label="$t('City')" label-for="subscriber-city">
							<validation-provider
								#default="validationContext"
								vid="city"
								:name="$t('City')"
								rules="required"
							>
								<v-select
									v-model="formData.city"
									:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
									:options="Object.values($cities)[parseInt(formData.country)]"
									:reduce="(city) => city.value"
									:clearable="false"
									input-id="subscriber-city"
									:value="formData.city"
									:state="getValidationState(validationContext)"
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>

					<b-col cols="12" md="4">
						<b-form-group :label="$t('Nationality')" label-for="subscriber-nationality">
							<validation-provider
								#default="validationContext"
								vid="nationality"
								:name="$t('Nationality')"
								rules="required"
							>
								<v-select
									v-model="formData.nationality"
									:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
									:options="$nationalities"
									:reduce="(nationality) => nationality.value"
									:clearable="false"
									input-id="subscriber-nationality"
									:value="formData.nationality"
									:state="getValidationState(validationContext)"
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>
				</b-row>

				<!-- Fields: Postbox -->
				<b-row>
					<b-col cols="12" md="4">
						<b-form-group :label="$t('Post box')" label-for="post-box">
							<validation-provider
								#default="validationContext"
								vid="post_box"
								:name="$t('Post box')"
								rules="required|min:3"
							>
								<b-form-input
									id="post-box"
									v-model="formData.post_box"
									:state="getValidationState(validationContext)"
									trim
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>

					<b-col cols="12" md="4">
						<b-form-group :label="$t('Post code')" label-for="post-code">
							<validation-provider
								#default="validationContext"
								vid="post_code"
								:name="$t('Post code')"
								rules="required|min:3"
							>
								<b-form-input
									id="post-code"
									v-model="formData.post_code"
									:state="getValidationState(validationContext)"
									trim
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>
				</b-row>

				<b-row class="mt-2">
					<b-col>
						<b-button
							type="submit"
							variant="primary"
							class="mb-1 mb-sm-0 mr-0 mr-sm-1"
							:block="$store.getters['app/currentBreakPoint'] === 'xs'"
						>
							{{ $t("Save Changes") }}
						</b-button>
						<b-button
							type="reset"
							variant="outline-secondary"
							:block="$store.getters['app/currentBreakPoint'] === 'xs'"
						>
							{{ $t("Cancel") }}
						</b-button>
					</b-col>
				</b-row>
			</b-form>
		</validation-observer>
	</div>
</template>

<script>
	import {
		BRow,
		BCol,
		BForm,
		BFormGroup,
		BFormInput,
		BFormRadioGroup,
		BFormInvalidFeedback,
		BButton,
	} from "bootstrap-vue"
	import vSelect from "vue-select"
	import { $genders, $countries, $nationalities, $cities, $qualifications } from "@siteConfig"
	import { ValidationProvider, ValidationObserver } from "vee-validate"
	import { required, min } from "@validations"
	import { onUnmounted, ref } from "@vue/composition-api"
	import store from "@/store"
	import router from "@/router"
	import formValidation from "@/@core/comp-functions/forms/form-validation"

	export default {
		components: {
			BRow,
			BCol,
			BForm,
			BFormGroup,
			BFormInput,
			vSelect,
			BFormRadioGroup,
			BButton,
			ValidationProvider,
			ValidationObserver,
			BFormInvalidFeedback,
		},
		props: {
			subscriberData: {
				type: Object,
				required: true,
			},
		},
		setup(props) {
			// Module configurations
			const SUBSCRIBER_APP_STORE_MODULE_NAME = "app-subscriber"
			if (!store.hasModule(SUBSCRIBER_APP_STORE_MODULE_NAME))
				store.registerModule(SUBSCRIBER_APP_STORE_MODULE_NAME, subscriberStoreModule)
			onUnmounted(() => {
				if (store.hasModule(SUBSCRIBER_APP_STORE_MODULE_NAME))
					store.unregisterModule(SUBSCRIBER_APP_STORE_MODULE_NAME)
			})

			// Form config for submit & rest
			const {
				fname_ar,
				sname_ar,
				tname_ar,
				lname_ar,
				fname_en,
				sname_en,
				tname_en,
				lname_en,
				gender,
				birthday_meladi,
				birthday_hijri,
				qualification,
				major,
				job_title,
				employer,
				country,
				city,
				nationality,
				post_box,
				post_code,
			} = props.subscriberData
			const oldData = {
				fname_ar,
				sname_ar,
				tname_ar,
				lname_ar,
				fname_en,
				sname_en,
				tname_en,
				lname_en,
				gender,
				birthday_meladi,
				birthday_hijri,
				qualification,
				major,
				job_title,
				employer,
				country,
				city,
				nationality,
				post_box,
				post_code,
			}
			const formData = ref(JSON.parse(JSON.stringify(oldData)))
			const resetsubscriberData = () => {
				formData.value = JSON.parse(JSON.stringify(oldData))
			}

			// Submitting
			const onSubmit = function () {
				store
					.dispatch("app-subscriber/updateSubscriber", {
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
			const { refFormObserver, getValidationState, resetForm } = formValidation(resetsubscriberData)

			return {
				$genders,
				$countries,
				$nationalities,
				$cities,
				$qualifications,
				refFormObserver,
				required,
				min,
				formData,
				getValidationState,
				resetForm,
				onSubmit,
			}
		},
	}
</script>
