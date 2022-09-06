<template>
	<div>
		<!-- Header: Personal Info -->
		<div class="d-flex">
			<feather-icon icon="UserIcon" size="19" />
			<h4 class="mb-0 ml-50">{{ $t("Personal Information") }}</h4>
		</div>

		<!-- Form: Personal Info Form -->
		<validation-observer ref="informationForm">
			<b-form @submit="saveAccountInfo">
				<!-- Field: Arabic Name -->
				<b-row>
					<b-col cols="12" md="3">
						<b-form-group :label="$t('First name')" label-for="fname_ar">
							<validation-provider #default="{ errors }" name="fname_ar" rules="required|min:3">
								<b-form-input id="fname_ar" v-model="formData.fname_ar" />
								<small class="text-danger">{{ errors[0] }}</small>
							</validation-provider>
						</b-form-group>
					</b-col>
					<b-col cols="12" md="3">
						<b-form-group :label="$t('Second name')" label-for="sname_ar">
							<validation-provider #default="{ errors }" name="sname_ar" rules="required|min:3">
								<b-form-input id="sname_ar" v-model="formData.sname_ar" />
								<small class="text-danger">{{ errors[0] }}</small>
							</validation-provider>
						</b-form-group>
					</b-col>
					<b-col cols="12" md="3">
						<b-form-group :label="$t('Third name')" label-for="tname_ar">
							<validation-provider #default="{ errors }" name="tname_ar" rules="required|min:3">
								<b-form-input id="tname_ar" v-model="formData.tname_ar" />
								<small class="text-danger">{{ errors[0] }}</small>
							</validation-provider>
						</b-form-group>
					</b-col>
					<b-col cols="12" md="3">
						<b-form-group :label="$t('Last name')" label-for="lname_ar">
							<validation-provider #default="{ errors }" name="lname_ar" rules="required|min:3">
								<b-form-input id="lname_ar" v-model="formData.lname_ar" />
								<small class="text-danger">{{ errors[0] }}</small>
							</validation-provider>
						</b-form-group>
					</b-col>
				</b-row>

				<!-- Field: English Name -->
				<b-row>
					<b-col cols="12" md="3">
						<b-form-group :label="$t('First name') + ` (` + $t('In English') + `)`" label-for="fname_en">
							<validation-provider #default="{ errors }" name="fname_en" rules="required|min:3">
								<b-form-input id="fname_en" v-model="formData.fname_en" />
								<small class="text-danger">{{ errors[0] }}</small>
							</validation-provider>
						</b-form-group>
					</b-col>
					<b-col cols="12" md="3">
						<b-form-group :label="$t('Second name') + ` (` + $t('In English') + `)`" label-for="sname_en">
							<validation-provider #default="{ errors }" name="sname_en" rules="required|min:3">
								<b-form-input id="sname_en" v-model="formData.sname_en" />
								<small class="text-danger">{{ errors[0] }}</small>
							</validation-provider>
						</b-form-group>
					</b-col>
					<b-col cols="12" md="3">
						<b-form-group :label="$t('Third name') + ` (` + $t('In English') + `)`" label-for="tname_en">
							<validation-provider #default="{ errors }" name="tname_en" rules="required|min:3">
								<b-form-input id="tname_en" v-model="formData.tname_en" />
								<small class="text-danger">{{ errors[0] }}</small>
							</validation-provider>
						</b-form-group>
					</b-col>
					<b-col cols="12" md="3">
						<b-form-group :label="$t('Last name') + ` (` + $t('In English') + `)`" label-for="lname_en">
							<validation-provider #default="{ errors }" name="lname_en" rules="required|min:3">
								<b-form-input id="lname_en" v-model="formData.lname_en" />
								<small class="text-danger">{{ errors[0] }}</small>
							</validation-provider>
						</b-form-group>
					</b-col>
				</b-row>

				<b-row>
					<!-- Field: Gender -->
					<b-col cols="12" lg="3">
						<b-form-group :label="$t('Gender')" label-for="gender" label-class="mb-1">
							<validation-provider #default="{ errors }" name="gender" rules="required">
								<b-form-radio-group id="gender" v-model="formData.gender" :options="$genders" />
								<small class="text-danger">{{ errors[0] }}</small>
							</validation-provider>
						</b-form-group>
					</b-col>

					<!-- Fields: Birthdays -->
					<b-col cols="12" lg="3">
						<b-form-group :label="$t('Birth date') + ' (' + $t('Meladi') + ')'">
							<validation-provider #default="{ errors }" name="birthday_meladi" rules="required">
								<date-picker v-model="formData.birthday_meladi" locale="ar-sa"></date-picker>
								<small class="text-danger">{{ errors[0] }}</small>
							</validation-provider>
						</b-form-group>
					</b-col>
					<b-col cols="12" lg="3">
						<b-form-group :label="$t('Birth date') + ' (' + $t('Hijri') + ')'">
							<validation-provider #default="{ errors }" name="birthday_hijri" rules="required">
								<date-picker v-model="formData.birthday_hijri" locale="ar-sa" calendar="hijri"></date-picker>
								<small class="text-danger">{{ errors[0] }}</small>
							</validation-provider>
						</b-form-group>
					</b-col>
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
							<validation-provider #default="{ errors }" name="qualification" rules="required|min:3">
								<b-form-input id="qualification" v-model="formData.qualification" />
								<small class="text-danger">{{ errors[0] }}</small>
							</validation-provider>
						</b-form-group>
					</b-col>
					<b-col cols="12" md="6">
						<b-form-group :label="$t('Major')" label-for="major">
							<validation-provider #default="{ errors }" name="major" rules="required|min:3">
								<b-form-input id="major" v-model="formData.major" />
								<small class="text-danger">{{ errors[0] }}</small>
							</validation-provider>
						</b-form-group>
					</b-col>
					<b-col cols="12" md="6">
						<b-form-group :label="$t('Job title')" label-for="job-title">
							<validation-provider #default="{ errors }" name="job_title" rules="required|min:3">
								<b-form-input id="job_title" v-model="formData.job_title" />
								<small class="text-danger">{{ errors[0] }}</small>
							</validation-provider>
						</b-form-group>
					</b-col>
					<b-col cols="12" md="6">
						<b-form-group :label="$t('Employer')" label-for="employer">
							<validation-provider #default="{ errors }" name="employer" rules="required|min:3">
								<b-form-input id="employer" v-model="formData.employer" />
								<small class="text-danger">{{ errors[0] }}</small>
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
							<validation-provider #default="{ errors }" name="country" rules="required">
								<v-select v-model="formData.country" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="$countries" :reduce="(country) => country.value" :clearable="false" input-id="subscriber-country" :value="formData.country" />
								<small class="text-danger">{{ errors[0] }}</small>
							</validation-provider>
						</b-form-group>
					</b-col>

					<b-col cols="12" md="4">
						<b-form-group :label="$t('City')" label-for="subscriber-city">
							<validation-provider #default="{ errors }" name="city" rules="required">
								<v-select v-model="formData.city" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="$cities[formData.country]" :reduce="(city) => city.value" :clearable="false" input-id="subscriber-city" :value="formData.city" />
								<small class="text-danger">{{ errors[0] }}</small>
							</validation-provider>
						</b-form-group>
					</b-col>

					<b-col cols="12" md="4">
						<b-form-group :label="$t('Nationality')" label-for="subscriber-nationality">
							<validation-provider #default="{ errors }" name="nationality" rules="required">
								<v-select v-model="formData.nationality" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="$countries" :reduce="(nationality) => nationality.value" :clearable="false" input-id="subscriber-nationality" :value="formData.nationality" />
								<small class="text-danger">{{ errors[0] }}</small>
							</validation-provider>
						</b-form-group>
					</b-col>
				</b-row>

				<!-- Fields: Postbox -->
				<b-row>
					<b-col cols="12" md="4">
						<b-form-group :label="$t('Post box')" label-for="post-box">
							<validation-provider #default="{ errors }" name="post_box" rules="required|min:3">
								<b-form-input id="post-box" v-model="formData.post_box" />
								<small class="text-danger">{{ errors[0] }}</small>
							</validation-provider>
						</b-form-group>
					</b-col>

					<b-col cols="12" md="4">
						<b-form-group :label="$t('Post code')" label-for="post-code">
							<validation-provider #default="{ errors }" name="post_code" rules="required|min:3">
								<b-form-input id="post-code" v-model="formData.post_code" />
								<small class="text-danger">{{ errors[0] }}</small>
							</validation-provider>
						</b-form-group>
					</b-col>
				</b-row>

				<b-row class="mt-2">
					<b-col>
						<b-button type="submit" variant="primary" class="mb-1 mb-sm-0 mr-0 mr-sm-1" :block="$store.getters['app/currentBreakPoint'] === 'xs'"> {{ $t("Save Changes") }} </b-button>
						<b-button variant="outline-secondary" :block="$store.getters['app/currentBreakPoint'] === 'xs'"> {{ $t("Cancel") }} </b-button>
					</b-col>
				</b-row>
			</b-form>
		</validation-observer>
	</div>
</template>

<script>
	import { BRow, BCol, BForm, BFormGroup, BFormInput, BFormRadioGroup, BButton } from "bootstrap-vue";
	import vSelect from "vue-select";
	import { $genders, $countries, $cities } from "@siteConfig";
	import { ValidationProvider, ValidationObserver } from "vee-validate";
	import { required, min } from "@validations";
	import { onUnmounted, ref } from "@vue/composition-api";
	import store from "@/store";
	import router from "@/router";

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
		},
		props: {
			subscriberData: {
				type: Object,
				required: true,
			},
		},
		setup(props) {
			// Module configurations
			const SUBSCRIBER_APP_STORE_MODULE_NAME = "app-subscriber";
			if (!store.hasModule(SUBSCRIBER_APP_STORE_MODULE_NAME)) store.registerModule(SUBSCRIBER_APP_STORE_MODULE_NAME, subscriberStoreModule);
			onUnmounted(() => {
				if (store.hasModule(SUBSCRIBER_APP_STORE_MODULE_NAME)) store.unregisterModule(SUBSCRIBER_APP_STORE_MODULE_NAME);
			});

			// Subscriber information form
			const { fname_ar, sname_ar, tname_ar, lname_ar, fname_en, sname_en, tname_en, lname_en, gender, birthday_meladi, birthday_hijri, qualification, major, job_title, employer, country, city, nationality, post_box, post_code } = props.subscriberData;
			const formData = ref({ fname_ar, sname_ar, tname_ar, lname_ar, fname_en, sname_en, tname_en, lname_en, gender, birthday_meladi, birthday_hijri, qualification, major, job_title, employer, country, city, nationality, post_box, post_code });

			const informationForm = ref(null);
			const saveAccountInfo = function (e) {
				e.preventDefault();

				// Vee validation configuration

				// Validation
				informationForm.value
					.validate()
					.then((success) => {
						if (success) {
							// Submitting
							store
								.dispatch("app-subscriber/updateSubscriber", { id: router.currentRoute.params.id, form: formData.value })
								.then((response) => {
									this.$bvToast.toast(response.message, {
										variant: "success",
										solid: true,
									});
								})
								.catch((error) => {
									if (error.response.status === 400) {
										// Set errors
										informationForm.value.setErrors(error.response.data);
									}
								});
						}
					})
					.catch((err) => {
						return;
					});
			};

			return {
				$genders,
				$countries,
				$cities,
				saveAccountInfo,
				informationForm,
				required,
				min,
				formData,
			};
		},
	};
</script>
