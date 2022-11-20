<template>
	<div>
		<!-- Media -->
		<b-media class="mb-2">
			<template #aside>
				<b-avatar
					ref="previewEl"
					:src="formData.avatar"
					:text="avatarText(moderatorData.username)"
					:variant="formData.avatar ? '' : `light-success`"
					size="90px"
					rounded
				/>
			</template>
			<h4 class="mb-1">
				{{ moderatorData.username }}
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
				<b-row>
					<!-- Field: Username -->
					<b-col cols="12" md="6">
						<b-form-group :label="$t('Username')" label-for="username">
							<validation-provider #default="validationContext" name="username" rules="required">
								<b-form-input
									id="username"
									v-model="formData.username"
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

					<!-- Field: mobile -->
					<b-col cols="12" md="6">
						<b-form-group :label="$t('Mobile')" label-for="mobile">
							<validation-provider #default="validationContext" name="mobile" rules="required">
								<b-form-input
									id="mobile"
									v-model="formData.mobile"
									:state="getValidationState(validationContext)"
									trim
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>

					<!-- Field: Email -->
					<b-col cols="12" md="12">
						<b-form-group :label="$t('Email')" label-for="email">
							<validation-provider #default="validationContext" name="email" rules="required|email">
								<b-form-input
									id="email"
									v-model="formData.adminEmail"
									:state="getValidationState(validationContext)"
									trim
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>

					<!-- Field: Role -->
					<b-col cols="12" md="12">
						<b-form-group :label="$t('Role')" label-for="role">
							<validation-provider
								#default="validationContext"
								vid="role"
								:name="$t('Role')"
								rules="required"
							>
								<v-select
									v-model="formData.role_id"
									:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
									:options="roles"
									label="display_name"
									:reduce="(role) => role.id"
								/>
								<b-form-invalid-feedback :state="getValidationState(validationContext)">
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>

					<!-- Field: Branch -->
					<b-col cols="12" md="12">
						<b-form-group :label="$t('Branch')" label-for="branch">
							<validation-provider #default="validationContext" vid="branch" :name="$t('Branch')">
								<v-select
									v-model="formData.branch_id"
									:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
									:options="$branches"
									:reduce="(branch) => branch.value"
								/>
								<b-form-invalid-feedback :state="getValidationState(validationContext)">
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>

					<!-- Field: Password -->
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
	import moderatorStoreModule from "../moderatorStoreModule"
	import router from "@/router"
	import store from "@/store"
	import { ValidationProvider, ValidationObserver } from "vee-validate"
	import { required, email, min } from "@validations"
	import formValidation from "@/@core/comp-functions/forms/form-validation"
	import vSelect from "vue-select"
	import useModeratorsList from "../moderators-list/useModeratorsList"
	import { $branches } from "@siteConfig"

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
			vSelect,
		},

		props: {
			moderatorData: {
				required: true,
			},
		},

		setup(props) {
			// MODULE CONFIGURATION
			const MODERATOR_APP_STORE_MODULE_NAME = "app-moderator"
			if (!store.hasModule(MODERATOR_APP_STORE_MODULE_NAME))
				store.registerModule(MODERATOR_APP_STORE_MODULE_NAME, moderatorStoreModule)
			onUnmounted(() => {
				if (store.hasModule(MODERATOR_APP_STORE_MODULE_NAME))
					store.unregisterModule(MODERATOR_APP_STORE_MODULE_NAME)
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
			const { avatar, email: adminEmail, username, mobile, role_id, branch_id } = props.moderatorData
			const oldData = { avatar, adminEmail, username, mobile, role_id, branch_id }
			const formData = ref(JSON.parse(JSON.stringify(oldData)))
			const resetmoderatorData = () => {
				formData.value = JSON.parse(JSON.stringify(oldData))
			}

			// Submitting
			const onSubmit = function () {
				store
					.dispatch("app-moderator/updateModerator", {
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
			const { refFormObserver, getValidationState, resetForm } = formValidation(resetmoderatorData)
			const { fetchRoles } = useModeratorsList()
			let roles = ref([])
			fetchRoles(null, (results) => {
				roles.value = results
			})

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
				roles,
				$branches,
			}
		},
	}
</script>

<style lang="scss">
	@import "@core/scss/vue/libs/vue-select.scss";
</style>
