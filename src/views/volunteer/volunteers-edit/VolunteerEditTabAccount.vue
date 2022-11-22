<template>
	<div>
		<!-- Media -->
		<b-media class="mb-2">
			<template #aside>
				<b-avatar
					ref="previewEl"
					:src="formData.avatar"
					:text="avatarText(dblocalize(volunteerData, 'fname'))"
					variant="light-success"
					size="90px"
					rounded
				/>
			</template>
			<h4 class="mb-1">
				{{ volunteerData.fullName }}
			</h4>
			<div class="d-flex flex-wrap">
				<b-button variant="primary" @click="$refs.refInputEl.click()">
					<input ref="refInputEl" type="file" class="d-none" @input="inputImageRenderer" />
					<span class="d-none d-sm-inline">{{ $t("Change") }}</span>
					<feather-icon icon="EditIcon" class="d-inline d-sm-none" />
				</b-button>
				<b-button variant="outline-secondary" class="ml-1" @click="cancelAvatar">
					<span class="d-none d-sm-inline">{{ $t("Cancel") }}</span>
					<feather-icon icon="TrashIcon" class="d-inline d-sm-none" />
				</b-button>
			</div>
		</b-media>

		<!-- User Info: Input Fields -->
		<validation-observer #default="{ handleSubmit }" ref="refFormObserver">
			<b-form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">
				<!-- Field: Email -->
				<b-row>
					<b-col cols="12" md="12">
						<b-form-group :label="$t('Email')" label-for="email">
							<validation-provider #default="validationContext" name="email" rules="required|email">
								<b-form-input
									id="email"
									v-model="formData.volunteerEmail"
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
				</b-row>

				<!-- Field: Password -->
				<b-row>
					<b-col cols="12" md="6">
						<b-form-group :label="$t('Password')" label-for="password">
							<validation-provider
								#default="validationContext"
								vid="password"
								:name="$t('Password')"
								rules="min:6"
							>
								<b-form-input
									id="password"
									v-model="formData.password"
									type="password"
									:state="getValidationState(validationContext)"
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>
					<b-col cols="12" md="6">
						<b-form-group :label="$t('Password confirmation')" label-for="password-confirmation">
							<validation-provider
								#default="validationContext"
								vid="password_confirmation"
								:name="$t('Password confirmation')"
								rules="confirmed:password"
							>
								<b-form-input
									id="password-confirmation"
									v-model="formData.password_confirmation"
									type="password"
									:state="getValidationState(validationContext)"
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>
				</b-row>

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
		BForm,
		BFormInvalidFeedback,
	} from "bootstrap-vue"
	import { avatarText } from "@core/utils/filter"
	import { useInputImageRenderer } from "@core/comp-functions/forms/form-utils"
	import { onUnmounted, ref } from "@vue/composition-api"
	import volunteerStoreModule from "../volunteerStoreModule"
	import router from "@/router"
	import store from "@/store"
	import { ValidationProvider, ValidationObserver } from "vee-validate"
	import { required, email, min } from "@validations"
	import formValidation from "@/@core/comp-functions/forms/form-validation"

	export default {
		components: {
			BButton,
			BMedia,
			BAvatar,
			BRow,
			BCol,
			BFormGroup,
			BFormInput,
			BForm,
			ValidationProvider,
			ValidationObserver,
			BFormInvalidFeedback,
		},

		props: {
			volunteerData: {
				type: Object,
				required: true,
			},
		},

		setup(props) {
			// MODULE CONFIGURATION
			const VOLUNTEER_APP_STORE_MODULE_NAME = "app-volunteer"
			if (!store.hasModule(VOLUNTEER_APP_STORE_MODULE_NAME))
				store.registerModule(VOLUNTEER_APP_STORE_MODULE_NAME, volunteerStoreModule)
			onUnmounted(() => {
				if (store.hasModule(VOLUNTEER_APP_STORE_MODULE_NAME))
					store.unregisterModule(VOLUNTEER_APP_STORE_MODULE_NAME)
			})

			// Demo Purpose => Update image on click of update
			const refInputEl = ref(null)
			const previewEl = ref(null)
			const { inputImageRenderer } = useInputImageRenderer(refInputEl, (base64) => {
				// eslint-disable-next-line no-param-reassign
				formData.value.avatar = base64
			})

			// Cancel Avatar
			const cancelAvatar = () => {
				formData.value.avatar = null
			}

			// Form config for submit & rest
			const { avatar, email: volunteerEmail } = props.volunteerData
			const oldData = { avatar, volunteerEmail }
			const formData = ref(JSON.parse(JSON.stringify(oldData)))
			const resetvolunteerData = () => {
				formData.value = JSON.parse(JSON.stringify(oldData))
			}

			// Submitting
			const onSubmit = function () {
				store
					.dispatch("app-volunteer/updateVolunteer", {
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
			const { refFormObserver, getValidationState, resetForm } = formValidation(resetvolunteerData)

			return {
				avatarText,
				//  ? Demo - Update Image on click of update button
				refInputEl,
				previewEl,
				inputImageRenderer,
				cancelAvatar,
				formData,
				required,
				email,
				min,
				refFormObserver,
				onSubmit,
				resetForm,
				getValidationState,
			}
		},
	}
</script>

<style lang="scss">
	@import "@core/scss/vue/libs/vue-select.scss";
</style>
