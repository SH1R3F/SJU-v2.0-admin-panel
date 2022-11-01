<template>
	<b-sidebar
		id="add-new-volunteer-sidebar"
		:visible="isAddNewVolunteerSidebarActive"
		bg-variant="white"
		sidebar-class="sidebar-lg"
		shadow
		backdrop
		no-header
		right
		@hidden="resetForm"
		@change="(val) => $emit('update:is-add-new-volunteer-sidebar-active', val)"
	>
		<template #default="{ hide }">
			<!-- Header -->
			<div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
				<h5 class="mb-0">{{ $t("Add new volunteer") }}</h5>

				<feather-icon class="ml-1 cursor-pointer" icon="XIcon" size="16" @click="hide" />
			</div>

			<!-- BODY -->
			<validation-observer #default="{ handleSubmit }" ref="refFormObserver">
				<!-- Form -->
				<b-form class="p-2" @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">
					<!-- Full Name (Arabic) -->
					<validation-provider
						#default="validationContext"
						vid="fname_ar"
						:name="$t('First name')"
						rules="required"
					>
						<b-form-group :label="$t('First name')" label-for="fname_ar">
							<b-form-input
								id="fname_ar"
								v-model="volunteerData.fname_ar"
								autofocus
								:state="getValidationState(validationContext)"
								trim
							/>
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<validation-provider
						#default="validationContext"
						vid="sname_ar"
						:name="$t('Second name')"
						rules="required"
					>
						<b-form-group :label="$t('Second name')" label-for="sname_ar">
							<b-form-input
								id="sname_ar"
								v-model="volunteerData.sname_ar"
								:state="getValidationState(validationContext)"
								trim
							/>
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<validation-provider
						#default="validationContext"
						vid="tname_ar"
						:name="$t('Third name')"
						rules="required"
					>
						<b-form-group :label="$t('Third name')" label-for="tname_ar">
							<b-form-input
								id="tname_ar"
								v-model="volunteerData.tname_ar"
								:state="getValidationState(validationContext)"
								trim
							/>
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<validation-provider
						#default="validationContext"
						vid="lname_ar"
						:name="$t('Last name')"
						rules="required"
					>
						<b-form-group :label="$t('Last name')" label-for="lname_ar">
							<b-form-input
								id="lname_ar"
								v-model="volunteerData.lname_ar"
								:state="getValidationState(validationContext)"
								trim
							/>
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Gender -->
					<validation-provider
						#default="validationContext"
						vid="gender"
						:name="$t('Gender')"
						rules="required"
					>
						<b-form-group :label="$t('Gender')" label-for="gender">
							<b-form-radio-group
								id="gender"
								class="with-invalid-feedback"
								v-model="volunteerData.gender"
								:options="$genders"
								:state="getValidationState(validationContext)"
							/>
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Email -->
					<validation-provider #default="validationContext" name="email" rules="required|email">
						<b-form-group :label="$t('Email')" label-for="vemail">
							<b-form-input
								id="vemail"
								v-model="volunteerData.email"
								:state="getValidationState(validationContext)"
								trim
							/>
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Password -->
					<validation-provider #default="validationContext" name="password" rules="required">
						<b-form-group :label="$t('Password')" label-for="password">
							<b-form-input
								id="password"
								type="password"
								v-model="volunteerData.password"
								:state="getValidationState(validationContext)"
								trim
							/>
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Mobile -->
					<b-form-group :label="$t('Mobile')" label-for="vmobile">
						<b-input-group>
							<b-input-group-prepend>
								<validation-provider
									#default="validationContext"
									vid="mobile_key"
									:name="$t('Mobile key')"
									rules="required"
								>
									<v-select
										v-model="volunteerData.mobile_key"
										:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
										:options="$mobileCodes"
										:reduce="(mobileCode) => mobileCode.value"
										:clearable="false"
										input-id="mobile-key"
									/>
									<b-form-invalid-feedback>
										{{ validationContext.errors[0] }}
									</b-form-invalid-feedback>
								</validation-provider>
							</b-input-group-prepend>

							<validation-provider
								#default="validationContext"
								vid="mobile"
								:name="$t('Mobile')"
								rules="required"
								style="flex: 1"
							>
								<b-form-input
									:placeholder="$t('Mobile')"
									id="vmobile"
									v-model="volunteerData.mobile"
									:state="getValidationState(validationContext)"
									trim
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-input-group>
					</b-form-group>

					<!-- Country -->
					<validation-provider
						#default="validationContext"
						vid="country"
						:name="$t('Country')"
						rules="required"
					>
						<b-form-group
							:label="$t('Country')"
							label-for="country"
							:state="getValidationState(validationContext)"
						>
							<v-select
								v-model="volunteerData.country"
								:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
								:options="$countries"
								:reduce="(country) => country.value"
								:clearable="false"
								input-id="volunteer-country"
								:value="volunteerData.country"
							/>
							<b-form-invalid-feedback :state="getValidationState(validationContext)">
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Branch -->
					<validation-provider
						#default="validationContext"
						vid="branch"
						:name="$t('Branch')"
						rules="required"
					>
						<b-form-group
							:label="$t('Branch')"
							label-for="branch"
							:state="getValidationState(validationContext)"
						>
							<v-select
								v-model="volunteerData.branch"
								:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
								:options="$branches"
								:reduce="(branch) => branch.value"
								:clearable="false"
								input-id="volunteer-branch"
								:value="volunteerData.branch"
							/>
							<b-form-invalid-feedback :state="getValidationState(validationContext)">
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Nationality -->
					<validation-provider
						#default="validationContext"
						vid="nationality"
						:name="$t('Nationality')"
						rules="required"
					>
						<b-form-group
							:label="$t('Nationality')"
							label-for="nationality"
							:state="getValidationState(validationContext)"
						>
							<v-select
								v-model="volunteerData.nationality"
								:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
								:options="$countries"
								:reduce="(nationality) => nationality.value"
								:clearable="false"
								input-id="volunteer-nationality"
								:value="volunteerData.nationality"
							/>
							<b-form-invalid-feedback :state="getValidationState(validationContext)">
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Form Actions -->
					<div class="d-flex mt-2">
						<b-button
							v-ripple.400="'rgba(255, 255, 255, 0.15)'"
							variant="primary"
							class="mr-2"
							type="submit"
							>{{ $t("Add") }}</b-button
						>
						<b-button
							v-ripple.400="'rgba(186, 191, 199, 0.15)'"
							type="button"
							variant="outline-secondary"
							@click="hide"
							>{{ $t("Cancel") }}</b-button
						>
					</div>
				</b-form>
			</validation-observer>
		</template>
	</b-sidebar>
</template>

<script>
	import {
		BSidebar,
		BForm,
		BFormGroup,
		BFormInput,
		BInputGroup,
		BInputGroupPrepend,
		BFormInvalidFeedback,
		BFormRadioGroup,
		BButton,
	} from "bootstrap-vue"
	import { ValidationProvider, ValidationObserver } from "vee-validate"
	import { onUnmounted, ref } from "@vue/composition-api"
	import { required, alphaNum, email } from "@validations"
	import formValidation from "@core/comp-functions/forms/form-validation"
	import Ripple from "vue-ripple-directive"
	import vSelect from "vue-select"
	import countries from "@/@fake-db/data/other/countries"
	import store from "@/store"
	import { $genders, $mobileCodes, $countries, $branches } from "@siteConfig"
	import volunteerStoreModule from "../volunteerStoreModule"

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
			prop: "isAddNewVolunteerSidebarActive",
			event: "update:is-add-new-volunteer-sidebar-active",
		},
		props: {
			isAddNewVolunteerSidebarActive: {
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
			}
		},
		setup(props, { emit }) {
			// Module configurations
			const VOLUNTEER_APP_STORE_MODULE_NAME = "app-volunteer"
			if (!store.hasModule(VOLUNTEER_APP_STORE_MODULE_NAME))
				store.registerModule(VOLUNTEER_APP_STORE_MODULE_NAME, volunteerStoreModule)
			onUnmounted(() => {
				if (store.hasModule(VOLUNTEER_APP_STORE_MODULE_NAME))
					store.unregisterModule(VOLUNTEER_APP_STORE_MODULE_NAME)
			})

			const blankVolunteerData = {
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
				branch: "",
				nationality: "",
			}

			const volunteerData = ref(JSON.parse(JSON.stringify(blankVolunteerData)))
			const resetvolunteerData = () => {
				volunteerData.value = JSON.parse(JSON.stringify(blankVolunteerData))
			}

			const onSubmit = () => {
				store
					.dispatch("app-volunteer/addVolunteer", volunteerData.value)
					.then(() => {
						emit("refetch-data")
						emit("update:is-add-new-volunteer-sidebar-active", false)
					})
					.catch((error) => {
						if (error.response.status === 400) {
							// Set errors
							refFormObserver.value.setErrors(error.response.data)
						}
					})
			}

			const { refFormObserver, getValidationState, resetForm } = formValidation(resetvolunteerData)

			return {
				volunteerData,
				onSubmit,
				refFormObserver,
				getValidationState,
				resetForm,
				$genders,
				$mobileCodes,
				$countries,
				$branches,
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
