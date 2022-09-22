<template>
	<component is="b-card">
		<div>
			<validation-observer #default="{ handleSubmit }" ref="refFormObserver">
				<!-- Form -->
				<b-form class="p-2" @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">
					<!-- Field: National id fields -->
					<b-row>
						<b-col cols="12" md="6">
							<b-form-group :label="$t('National id')" label-for="national_id">
								<validation-provider #default="validationContext" vid="national_id" :name="$t('National id')" rules="required|min:3">
									<b-form-input type="number" id="national_id" v-model="memberData.national_id" autofocus :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>
						<b-col cols="12" md="6">
							<b-form-group :label="$t('Mobile')" label-for="mobile">
								<validation-provider #default="validationContext" vid="mobile" :name="$t('Mobile')" rules="required">
									<b-form-input id="mobile" type="number" v-model="memberData.mobile" :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>

						<!-- Field: Arabic Name -->
						<b-col cols="12" md="3">
							<b-form-group :label="$t('First name')" label-for="fname_ar">
								<validation-provider #default="validationContext" vid="fname_ar" :name="$t('First name')" rules="required|min:3">
									<b-form-input id="fname_ar" v-model="memberData.fname_ar" :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>
						<b-col cols="12" md="3">
							<b-form-group :label="$t('Second name')" label-for="sname_ar">
								<validation-provider #default="validationContext" vid="sname_ar" :name="$t('Second name')" rules="required|min:3">
									<b-form-input id="sname_ar" v-model="memberData.sname_ar" :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>
						<b-col cols="12" md="3">
							<b-form-group :label="$t('Third name')" label-for="tname_ar">
								<validation-provider #default="validationContext" vid="tname_ar" :name="$t('Third name')" rules="required|min:3">
									<b-form-input id="tname_ar" v-model="memberData.tname_ar" :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>
						<b-col cols="12" md="3">
							<b-form-group :label="$t('Last name')" label-for="lname_ar">
								<validation-provider #default="validationContext" vid="lname_ar" :name="$t('Last name')" rules="required|min:3">
									<b-form-input id="lname_ar" v-model="memberData.lname_ar" :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>

						<!-- Field: English Name -->
						<b-col cols="12" md="3">
							<b-form-group :label="$t('First name') + ` (` + $t('In English') + `)`" label-for="fname_en">
								<validation-provider #default="validationContext" vid="fname_en" :name="$t('First name')" rules="required|min:3">
									<b-form-input id="fname_en" v-model="memberData.fname_en" :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>
						<b-col cols="12" md="3">
							<b-form-group :label="$t('Second name') + ` (` + $t('In English') + `)`" label-for="sname_en">
								<validation-provider #default="validationContext" vid="sname_en" :name="$t('Second name')" rules="required|min:3">
									<b-form-input id="sname_en" v-model="memberData.sname_en" :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>
						<b-col cols="12" md="3">
							<b-form-group :label="$t('Third name') + ` (` + $t('In English') + `)`" label-for="tname_en">
								<validation-provider #default="validationContext" vid="tname_en" :name="$t('Third name')" rules="required|min:3">
									<b-form-input id="tname_en" v-model="memberData.tname_en" :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>
						<b-col cols="12" md="3">
							<b-form-group :label="$t('Last name') + ` (` + $t('In English') + `)`" label-for="lname_en">
								<validation-provider #default="validationContext" vid="lname_en" :name="$t('Last name')" rules="required|min:3">
									<b-form-input id="lname_en" v-model="memberData.lname_en" :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>

						<!-- Field: Gender -->
						<b-col cols="12" lg="3">
							<b-form-group :label="$t('Gender')" label-for="gender" label-class="mb-1">
								<validation-provider #default="validationContext" vid="gender" :name="$t('Gender')" rules="required">
									<b-form-radio-group id="gender" v-model="memberData.gender" :options="$genders" :state="getValidationState(validationContext)" />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>

						<!-- Fields: Birthdays -->
						<b-col cols="12" lg="3">
							<b-form-group :label="$t('Birth date') + ' (' + $t('Meladi') + ')'">
								<validation-provider #default="validationContext" vid="birthday_meladi" :name="$t('Birth date') + ' (' + $t('Meladi') + ')'" rules="required">
									<date-picker v-model="memberData.birthday_meladi" :locale="$i18n.locale == 'ar' ? 'ar-sa' : ''" :state="getValidationState(validationContext)"></date-picker>
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>
						<b-col cols="12" lg="3">
							<b-form-group :label="`${$t('Birth date')} (${$t('Hijri')})`">
								<validation-provider #default="validationContext" vid="birthday_hijri" :name="$t('Birth date') + ' (' + $t('Hijri') + ')'" rules="required">
									<date-picker v-model="memberData.birthday_hijri" :locale="$i18n.locale == 'ar' ? 'ar-sa' : ''" calendar="hijri" :state="getValidationState(validationContext)"></date-picker>
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>

						<b-col cols="12">
							<b-form-group :label="$t('Nationality')">
								<validation-provider #default="validationContext" vid="nationality" :name="$t('Nationality')" rules="required">
									<v-select v-model="memberData.nationality" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="$countries" :reduce="(nationality) => nationality.value" input-id="nationality" :state="getValidationState(validationContext)" />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
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
								<validation-provider #default="validationContext" vid="qualification" :name="$t('Qualification')" rules="required|min:3">
									<b-form-input id="qualification" v-model="memberData.qualification" :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>
						<b-col cols="12" md="6">
							<b-form-group :label="$t('Major')" label-for="major">
								<validation-provider #default="validationContext" vid="major" :name="$t('Major')" rules="required|min:3">
									<b-form-input id="major" v-model="memberData.major" :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>
						<b-col cols="12" md="6">
							<b-form-group :label="`${$t('Job title')} (${$t('Journalist')})`" label-for="journalist_job_title">
								<validation-provider #default="validationContext" vid="journalist_job_title" :name="`${$t('Job title')} (${$t('Journalist')})`" rules="required|min:3">
									<b-form-input id="journalist_job_title" v-model="memberData.journalist_job_title" :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>
						<b-col cols="12" md="6">
							<b-form-group :label="`${$t('Employer')} (${$t('Journalist')})`" label-for="journalist_employer">
								<validation-provider #default="validationContext" vid="journalist_employer" :name="`${$t('Employer')} (${$t('Journalist')})`" rules="required|min:3">
									<b-form-input id="journalist_employer" v-model="memberData.journalist_employer" :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>
						<b-col cols="12">
							<b-form-group :label="$t('Newspaper type')" label-for="newspaper_type">
								<validation-provider #default="validationContext" vid="newspaper_type" :name="$t('Newspaper type')" rules="required">
									<v-select v-model="memberData.newspaper_type" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="$newspaperTypes" :reduce="(type) => type.value" input-id="newspaper_type" :state="getValidationState(validationContext)" />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>
						<b-col cols="12" md="6">
							<b-form-group :label="`${$t('Job title')} (${$t('Non-journalist')})`" label-for="job-title">
								<validation-provider #default="validationContext" vid="job_title" :name="`${$t('Job title')} (${$t('Non-journalist')})`" rules="required|min:3">
									<b-form-input id="job_title" v-model="memberData.job_title" :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>
						<b-col cols="12" md="6">
							<b-form-group :label="`${$t('Employer')} (${$t('Non-journalist')})`" label-for="employer">
								<validation-provider #default="validationContext" vid="employer" :name="`${$t('Employer')} (${$t('Non-journalist')})`" rules="required|min:3">
									<b-form-input id="employer" v-model="memberData.employer" :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>

						<!-- Fields: Worktel, Fax, Mobile -->
						<b-col cols="12" md="6">
							<b-form-group :label="$t('Work telephone')" label-for="work-tel">
								<validation-provider #default="validationContext" vid="worktel" :name="$t('Work telephone')">
									<b-form-input id="work-tel" v-model="memberData.worktel" :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>
						<b-col cols="12" md="6">
							<b-form-group :label="$t('Extension')" label-for="worktel-ext">
								<validation-provider #default="validationContext" vid="worktel_ext" :name="$t('Extension')">
									<b-form-input id="worktel-ext" v-model="memberData.worktel_ext" :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>
						<b-col cols="12" md="6">
							<b-form-group :label="$t('Fax')" label-for="fax">
								<validation-provider #default="validationContext" vid="fax" :name="$t('Fax')">
									<b-form-input id="fax" v-model="memberData.fax" :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>
						<b-col cols="12" md="6">
							<b-form-group :label="$t('Extension')" label-for="fax-ext">
								<validation-provider #default="validationContext" vid="fax_ext" :name="$t('Extension')">
									<b-form-input id="fax-ext" v-model="memberData.fax_ext" :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>

						<!-- Fields: Postbox -->
						<b-col cols="12" md="6">
							<b-form-group :label="$t('Post box')" label-for="post-box">
								<validation-provider #default="validationContext" vid="post_box" :name="$t('Post box')" rules="required|min:3">
									<b-form-input id="post-box" v-model="memberData.post_box" :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>

						<b-col cols="12" md="6">
							<b-form-group :label="$t('Post code')" label-for="post-code">
								<validation-provider #default="validationContext" vid="post_code" :name="$t('Post code')" rules="required|min:3">
									<b-form-input id="post-code" v-model="memberData.post_code" :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>

						<b-col cols="12">
							<b-form-group :label="$t('City')">
								<validation-provider #default="validationContext" vid="city" :name="$t('City')" rules="required">
									<v-select v-model="memberData.city" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="$cities['Saudi Arabia']" :reduce="(city) => city.value" :state="getValidationState(validationContext)" />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>

						<b-col cols="12" md="6">
							<b-form-group :label="$t('Email')" label-for="email">
								<validation-provider #default="validationContext" vid="memberEmail" name="email" rules="required|email">
									<b-form-input id="email" v-model="memberData.memberEmail" :state="getValidationState(validationContext)" trim />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>

						<b-col cols="12" md="6">
							<b-form-group :label="$t('Password')" label-for="password">
								<validation-provider #default="validationContext" name="password" rules="required">
									<b-form-input id="password" type="password" v-model="memberData.password" :state="getValidationState(validationContext)" />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-form-group>
						</b-col>
					</b-row>

					<!-- Form Actions -->
					<div class="d-flex mt-2">
						<b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" class="mr-2" type="submit">{{ $t("Add") }}</b-button>
						<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" type="button" variant="outline-secondary">{{ $t("Cancel") }}</b-button>
					</div>
				</b-form>
			</validation-observer>
		</div>
	</component>
</template>

<script>
	import { BRow, BCol, BCard, BForm, BFormGroup, BFormInput, BInputGroup, BFormInvalidFeedback, BFormRadioGroup, BButton } from "bootstrap-vue";
	import { ValidationProvider, ValidationObserver } from "vee-validate";
	import { onUnmounted, ref } from "@vue/composition-api";
	import { required, email } from "@validations";
	import formValidation from "@core/comp-functions/forms/form-validation";
	import Ripple from "vue-ripple-directive";
	import vSelect from "vue-select";
	import store from "@/store";
	import router from "@/router";
	import { $genders, $countries, $cities, $newspaperTypes } from "@siteConfig";
	import memberStoreModule from "../memberStoreModule";

	export default {
		components: {
			BRow,
			BCol,
			BCard,
			BForm,
			BFormGroup,
			BFormInput,
			BFormInvalidFeedback,
			BInputGroup,
			BButton,
			BFormRadioGroup,
			vSelect,
			// Form Validation
			ValidationProvider,
			ValidationObserver,
		},
		directives: {
			Ripple,
		},
		data() {
			return {
				required,
				email,
			};
		},
		setup() {
			// Module configurations
			const MEMBER_APP_STORE_MODULE_NAME = "app-member";
			if (!store.hasModule(MEMBER_APP_STORE_MODULE_NAME)) store.registerModule(MEMBER_APP_STORE_MODULE_NAME, memberStoreModule);
			onUnmounted(() => {
				if (store.hasModule(MEMBER_APP_STORE_MODULE_NAME)) store.unregisterModule(MEMBER_APP_STORE_MODULE_NAME);
			});

			const blankMemberData = {
				national_id: "",
				mobile: "",
				fname_ar: "",
				sname_ar: "",
				tname_ar: "",
				lname_ar: "",
				fname_en: "",
				sname_en: "",
				tname_en: "",
				lname_en: "",
				gender: null,
				birthday_hijri: "",
				birthday_meladi: "",
				nationality: null,
				qualification: "",
				major: "",
				journalist_job_title: "",
				journalist_employer: "",
				job_title: "",
				employer: "",
				worktel: "",
				worktel_ext: "",
				fax: "",
				fax_ext: "",
				post_box: "",
				post_code: "",
				memberEmail: "",
				password: "",
				city: null,
			};

			const memberData = ref(JSON.parse(JSON.stringify(blankMemberData)));
			const resetmemberData = () => {
				memberData.value = JSON.parse(JSON.stringify(blankMemberData));
			};

			const onSubmit = () => {
				store
					.dispatch("app-member/addMember", memberData.value)
					.then((response) => {
						router.push({ name: "all-members" });
					})
					.catch((error) => {
						console.log(error);
						if (error.response.status === 400) {
							// Set errors
							refFormObserver.value.setErrors(error.response.data);
						}
					});
			};

			const { refFormObserver, getValidationState, resetForm } = formValidation(resetmemberData);

			return {
				memberData,
				onSubmit,
				refFormObserver,
				getValidationState,
				resetForm,
				$genders,
				$countries,
				$cities,
				$newspaperTypes,
			};
		},
	};
</script>

<style lang="scss">
	@import "@core/scss/vue/libs/vue-select.scss";

	#add-new-user-sidebar {
		.vs__dropdown-menu {
			max-height: 200px !important;
		}
	}
</style>
