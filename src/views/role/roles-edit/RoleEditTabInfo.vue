<template>
	<div>
		<!-- Media -->
		<b-media class="mb-2 align-items-center">
			<template #aside>
				<b-avatar ref="previewEl" :text="avatarText(roleData.display_name)" variant="light-success" size="90px" rounded />
			</template>
			<h4 class="mb-1">
				{{ roleData.display_name }}
			</h4>
		</b-media>

		<!-- User Info: Input Fields -->
		<validation-observer #default="{ handleSubmit }" ref="refFormObserver">
			<b-form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">
				<b-row>
					<!-- Field: Name -->
					<b-col cols="12" md="12">
						<b-form-group :label="$t('Name')" label-for="display_name">
							<validation-provider #default="validationContext" name="display_name" rules="required|min:3">
								<b-form-input id="display_name" v-model="formData.display_name" autofocus :state="getValidationState(validationContext)" trim />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
					</b-col>

					<!-- Field: Description -->
					<b-col cols="12" md="12">
						<b-form-group :label="$t('Description')" label-for="description">
							<validation-provider #default="validationContext" name="description" rules="required|min:3">
								<b-form-input id="description" v-model="formData.description" :state="getValidationState(validationContext)" trim />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-form-group>
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
	import { BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BFormInvalidFeedback } from "bootstrap-vue";
	import { avatarText } from "@core/utils/filter";
	import { onUnmounted, ref } from "@vue/composition-api";
	import roleStoreModule from "../roleStoreModule";
	import router from "@/router";
	import store from "@/store";
	import { ValidationProvider, ValidationObserver } from "vee-validate";
	import { required, min } from "@validations";
	import formValidation from "@/@core/comp-functions/forms/form-validation";

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
			roleData: {
				required: true,
			},
		},

		setup(props) {
			// MODULE CONFIGURATION
			const ROLE_APP_STORE_MODULE_NAME = "app-role";
			if (!store.hasModule(ROLE_APP_STORE_MODULE_NAME)) store.registerModule(ROLE_APP_STORE_MODULE_NAME, roleStoreModule);
			onUnmounted(() => {
				if (store.hasModule(ROLE_APP_STORE_MODULE_NAME)) store.unregisterModule(ROLE_APP_STORE_MODULE_NAME);
			});

			// Form config for submit & rest
			const { display_name, description } = props.roleData;
			const oldData = { display_name, description };
			const formData = ref(JSON.parse(JSON.stringify(oldData)));
			const resetroleData = () => {
				formData.value = JSON.parse(JSON.stringify(oldData));
			};

			// Submitting
			const onSubmit = function () {
				store
					.dispatch("app-role/updateRole", { id: router.currentRoute.params.id, form: formData.value })
					.then((response) => {
						this.$bvToast.toast(response.message, {
							variant: "success",
							solid: true,
						});
					})
					.catch((error) => {
						if (error.response.status === 400) {
							// Set errors
							refFormObserver.value.setErrors(error.response.data);
						}
					});
			};

			// Form validation configuration
			const { refFormObserver, getValidationState, resetForm } = formValidation(resetroleData);

			return {
				avatarText,
				formData,
				required,
				min,
				refFormObserver,
				onSubmit,
				resetForm,
				getValidationState,
			};
		},
	};
</script>

<style lang="scss">
	@import "@core/scss/vue/libs/vue-select.scss";
</style>
