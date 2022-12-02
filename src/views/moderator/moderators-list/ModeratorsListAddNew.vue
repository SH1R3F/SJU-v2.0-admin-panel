<template>
	<b-sidebar
		id="add-new-moderator-sidebar"
		:visible="isAddNewModeratorSidebarActive"
		bg-variant="white"
		sidebar-class="sidebar-lg"
		shadow
		backdrop
		no-header
		right
		@hidden="resetForm"
		@change="(val) => $emit('update:is-add-new-moderator-sidebar-active', val)"
	>
		<template #default="{ hide }">
			<!-- Header -->
			<div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
				<h5 class="mb-0">{{ $t("Add new moderator") }}</h5>

				<feather-icon class="ml-1 cursor-pointer" icon="XIcon" size="16" @click="hide" />
			</div>

			<!-- BODY -->
			<validation-observer #default="{ handleSubmit }" ref="refFormObserver">
				<!-- Form -->
				<b-form class="p-2" @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">
					<!-- Username -->
					<validation-provider
						#default="validationContext"
						vid="username"
						:name="$t('Username')"
						rules="required|min:3"
					>
						<b-form-group :label="$t('Username')" label-for="username">
							<b-form-input
								id="username"
								v-model="moderatorData.username"
								:state="getValidationState(validationContext)"
								trim
							/>
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Email -->
					<validation-provider #default="validationContext" name="email" rules="required|email">
						<b-form-group :label="$t('Email')" label-for="email">
							<b-form-input
								id="email"
								v-model="moderatorData.email"
								:state="getValidationState(validationContext)"
								trim
							/>
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Mobile -->
					<b-form-group :label="$t('Mobile')" label-for="mobile">
						<b-input-group>
							<validation-provider
								#default="validationContext"
								vid="mobile"
								:name="$t('Mobile')"
								rules="required"
								style="flex: 1"
							>
								<b-form-input
									:placeholder="$t('Mobile')"
									id="mobile"
									v-model="moderatorData.mobile"
									:state="getValidationState(validationContext)"
									trim
								/>
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-input-group>
					</b-form-group>

					<!-- Role -->
					<validation-provider #default="validationContext" vid="role" :name="$t('Role')" rules="required">
						<b-form-group
							:label="$t('Role')"
							label-for="role"
							:state="getValidationState(validationContext)"
						>
							<v-select
								v-model="moderatorData.role"
								:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
								:options="roles"
								label="display_name"
								:reduce="(role) => role.id"
							/>
							<b-form-invalid-feedback :state="getValidationState(validationContext)">
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Branch -->
					<validation-provider #default="validationContext" vid="branch_id" :name="$t('Branch')">
						<b-form-group
							:label="$t('Branch')"
							label-for="branch"
							:state="getValidationState(validationContext)"
						>
							<v-select
								v-model="moderatorData.branch_id"
								:dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'"
								:options="$branches"
								:reduce="(branch) => branch.value"
							/>
							<b-form-invalid-feedback :state="getValidationState(validationContext)">
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
								v-model="moderatorData.password"
								:state="getValidationState(validationContext)"
								trim
							/>
							<b-form-invalid-feedback>
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
	import { required, email, min } from "@validations"
	import formValidation from "@core/comp-functions/forms/form-validation"
	import Ripple from "vue-ripple-directive"
	import vSelect from "vue-select"
	import store from "@/store"
	import moderatorStoreModule from "../moderatorStoreModule"
	import useModeratorsList from "./useModeratorsList"
	import { $branches } from "@siteConfig"

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
			prop: "isAddNewModeratorSidebarActive",
			event: "update:is-add-new-moderator-sidebar-active",
		},
		props: {
			isAddNewModeratorSidebarActive: {
				type: Boolean,
				required: true,
			},
		},
		setup(props, { emit }) {
			// Module configurations
			const MODERATOR_APP_STORE_MODULE_NAME = "app-moderator"
			if (!store.hasModule(MODERATOR_APP_STORE_MODULE_NAME))
				store.registerModule(MODERATOR_APP_STORE_MODULE_NAME, moderatorStoreModule)
			onUnmounted(() => {
				if (store.hasModule(MODERATOR_APP_STORE_MODULE_NAME))
					store.unregisterModule(MODERATOR_APP_STORE_MODULE_NAME)
			})

			const { fetchRoles } = useModeratorsList()
			let roles = ref([])
			fetchRoles(null, (results) => {
				roles.value = results
			})

			const blankModeratorData = {
				username: "",
				email: "",
				password: "",
				mobile: "",
				role: "",
				branch_id: "",
			}

			const moderatorData = ref(JSON.parse(JSON.stringify(blankModeratorData)))
			const resetmoderatorData = () => {
				moderatorData.value = JSON.parse(JSON.stringify(blankModeratorData))
			}

			const onSubmit = () => {
				store
					.dispatch("app-moderator/addModerator", moderatorData.value)
					.then(() => {
						emit("refetch-data")
						emit("update:is-add-new-moderator-sidebar-active", false)
					})
					.catch((error) => {
						if (error.response.status === 400) {
							// Set errors
							refFormObserver.value.setErrors(error.response.data)
						}
					})
			}

			const { refFormObserver, getValidationState, resetForm } = formValidation(resetmoderatorData)

			return {
				moderatorData,
				roles,
				onSubmit,
				refFormObserver,
				getValidationState,
				resetForm,
				required,
				email,
				min,
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
