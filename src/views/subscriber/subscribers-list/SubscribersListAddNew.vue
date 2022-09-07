<template>
	<b-sidebar id="add-new-subscriber-sidebar" :visible="isAddNewSubscriberSidebarActive" bg-variant="white" sidebar-class="sidebar-lg" shadow backdrop no-header right @hidden="resetForm" @change="(val) => $emit('update:is-add-new-user-sidebar-active', val)">
		<template #default="{ hide }">
			<!-- Header -->
			<div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
				<h5 class="mb-0">{{ $t("Add new subscriber") }}</h5>

				<feather-icon class="ml-1 cursor-pointer" icon="XIcon" size="16" @click="hide" />
			</div>

			<!-- BODY -->
			<validation-observer #default="{ handleSubmit }" ref="refFormObserver">
				<!-- Form -->
				<b-form class="p-2" @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">
					<!-- National ID -->
					<validation-provider #default="validationContext" vid="national_id" :name="$t('National id')" rules="required">
						<b-form-group :label="$t('National id')" label-for="national_id">
							<b-form-input id="national_id" v-model="subscriberData.national_id" autofocus :state="getValidationState(validationContext)" trim />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Full Name (Arabic) -->
					<validation-provider #default="validationContext" vid="fname_ar" :name="$t('First name')" rules="required">
						<b-form-group :label="$t('First name')" label-for="fname_ar">
							<b-form-input id="fname_ar" v-model="subscriberData.fname_ar" autofocus :state="getValidationState(validationContext)" trim />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<validation-provider #default="validationContext" vid="sname_ar" :name="$t('Second name')" rules="required">
						<b-form-group :label="$t('Second name')" label-for="sname_ar">
							<b-form-input id="sname_ar" v-model="subscriberData.sname_ar" :state="getValidationState(validationContext)" trim />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<validation-provider #default="validationContext" vid="tname_ar" :name="$t('Third name')" rules="required">
						<b-form-group :label="$t('Third name')" label-for="tname_ar">
							<b-form-input id="tname_ar" v-model="subscriberData.tname_ar" :state="getValidationState(validationContext)" trim />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<validation-provider #default="validationContext" vid="lname_ar" :name="$t('Last name')" rules="required">
						<b-form-group :label="$t('Last name')" label-for="lname_ar">
							<b-form-input id="lname_ar" v-model="subscriberData.lname_ar" :state="getValidationState(validationContext)" trim />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Gender -->
					<validation-provider #default="validationContext" vid="gender" :name="$t('Gender')" rules="required">
						<b-form-group :label="$t('Gender')" label-for="gender">
							<b-form-radio-group id="gender" class="with-invalid-feedback" v-model="subscriberData.gender" :options="$genders" :state="getValidationState(validationContext)" />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Email -->
					<validation-provider #default="validationContext" name="email" rules="required|email">
						<b-form-group :label="$t('Email')" label-for="email">
							<b-form-input id="email" v-model="subscriberData.email" :state="getValidationState(validationContext)" trim />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Password -->
					<validation-provider #default="validationContext" name="password" rules="required">
						<b-form-group :label="$t('Password')" label-for="password">
							<b-form-input id="password" v-model="subscriberData.password" :state="getValidationState(validationContext)" trim />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Mobile -->
					<b-form-group :label="$t('Mobile')" label-for="mobile">
						<b-input-group>
							<b-input-group-prepend>
								<validation-provider #default="validationContext" vid="mobile_key" :name="$t('Mobile key')" rules="required">
									<v-select v-model="subscriberData.mobile_key" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="$mobileCodes" :reduce="(mobileCode) => mobileCode.value" :clearable="false" input-id="mobile-key" />
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-input-group-prepend>

							<validation-provider #default="validationContext" vid="mobile" :name="$t('Mobile')" rules="required" style="flex: 1">
								<b-form-input :placeholder="$t('Mobile')" id="mobile" v-model="subscriberData.mobile" :state="getValidationState(validationContext)" trim />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-input-group>
					</b-form-group>

					<!-- Country -->
					<validation-provider #default="validationContext" vid="country" :name="$t('Country')" rules="required">
						<b-form-group :label="$t('Country')" label-for="country" :state="getValidationState(validationContext)">
							<v-select v-model="subscriberData.country" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="$countries" :reduce="(country) => country.value" :clearable="false" input-id="subscriber-country" :value="subscriberData.country" />
							<b-form-invalid-feedback :state="getValidationState(validationContext)">
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- City -->
					<validation-provider #default="validationContext" vid="city" :name="$t('City')" rules="required">
						<b-form-group :label="$t('City')" label-for="city" :state="getValidationState(validationContext)">
							<v-select v-model="subscriberData.city" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="$cities[subscriberData.country]" :reduce="(city) => city.value" :clearable="false" input-id="subscriber-city" :value="subscriberData.city" />
							<b-form-invalid-feedback :state="getValidationState(validationContext)">
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Nationality -->
					<validation-provider #default="validationContext" vid="nationality" :name="$t('Nationality')" rules="required">
						<b-form-group :label="$t('Nationality')" label-for="nationality" :state="getValidationState(validationContext)">
							<v-select v-model="subscriberData.nationality" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="$countries" :reduce="(nationality) => nationality.value" :clearable="false" input-id="subscriber-nationality" :value="subscriberData.nationality" />
							<b-form-invalid-feedback :state="getValidationState(validationContext)">
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Form Actions -->
					<div class="d-flex mt-2">
						<b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" class="mr-2" type="submit"> Add </b-button>
						<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" type="button" variant="outline-secondary" @click="hide"> Cancel </b-button>
					</div>
				</b-form>
			</validation-observer>
		</template>
	</b-sidebar>
</template>

<script>
	import { BSidebar, BForm, BFormGroup, BFormInput, BInputGroup, BInputGroupPrepend, BFormInvalidFeedback, BFormRadioGroup, BButton } from "bootstrap-vue";
	import { ValidationProvider, ValidationObserver } from "vee-validate";
	import { onUnmounted, ref } from "@vue/composition-api";
	import { required, alphaNum, email } from "@validations";
	import formValidation from "@core/comp-functions/forms/form-validation";
	import Ripple from "vue-ripple-directive";
	import vSelect from "vue-select";
	import countries from "@/@fake-db/data/other/countries";
	import store from "@/store";
	import { $genders, $mobileCodes, $countries, $cities } from "@siteConfig";
	import subscriberStoreModule from "../subscriberStoreModule";

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
			prop: "isAddNewSubscriberSidebarActive",
			event: "update:is-add-new-subscriber-sidebar-active",
		},
		props: {
			isAddNewSubscriberSidebarActive: {
				type: Boolean,
				required: true,
			},
		},
		data() {
			return {
				required,
				alphaNum,
				email,
				countries,
			};
		},
		setup(props, { emit }) {
			// Module configurations
			const SUBSCRIBER_APP_STORE_MODULE_NAME = "app-subscriber";
			if (!store.hasModule(SUBSCRIBER_APP_STORE_MODULE_NAME)) store.registerModule(SUBSCRIBER_APP_STORE_MODULE_NAME, subscriberStoreModule);
			onUnmounted(() => {
				if (store.hasModule(SUBSCRIBER_APP_STORE_MODULE_NAME)) store.unregisterModule(SUBSCRIBER_APP_STORE_MODULE_NAME);
			});

			const blankSubscriberData = {
				national_id: "",
				fname_ar: "",
				sname_ar: "",
				tname_ar: "",
				lname_ar: "",
				gender: null,
				email: "",
				password: "",
				mobile_key: "",
				mobile: "",
				country: "",
				city: "",
				nationality: "",
			};

			const subscriberData = ref(JSON.parse(JSON.stringify(blankSubscriberData)));
			const resetsubscriberData = () => {
				subscriberData.value = JSON.parse(JSON.stringify(blankSubscriberData));
			};

			const onSubmit = () => {
				store
					.dispatch("app-subscriber/addSubscriber", subscriberData.value)
					.then(() => {
						emit("refetch-data");
						emit("update:is-add-new-subscriber-sidebar-active", false);
					})
					.catch((error) => {
						if (error.response.status === 400) {
							// Set errors
							refFormObserver.value.setErrors(error.response.data);
						}
					});
			};

			const { refFormObserver, getValidationState, resetForm } = formValidation(resetsubscriberData);

			return {
				subscriberData,
				onSubmit,
				refFormObserver,
				getValidationState,
				resetForm,
				$genders,
				$mobileCodes,
				$countries,
				$cities,
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
