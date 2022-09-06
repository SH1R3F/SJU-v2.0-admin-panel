<template>
	<div>
		<!-- Media -->
		<b-media class="mb-2">
			<template #aside>
				<b-avatar ref="previewEl" :src="subscriberData.avatar" :text="avatarText(subscriberData.fname_ar)" variant="" size="90px" rounded />
			</template>
			<h4 class="mb-1">
				{{ subscriberData.fullName }}
			</h4>
			<div class="d-flex flex-wrap">
				<b-button variant="primary" @click="$refs.refInputEl.click()">
					<input ref="refInputEl" type="file" class="d-none" @input="inputImageRenderer" />
					<span class="d-none d-sm-inline">{{ $t("Change") }}</span>
					<feather-icon icon="EditIcon" class="d-inline d-sm-none" />
				</b-button>
				<b-button variant="outline-secondary" class="ml-1">
					<span class="d-none d-sm-inline">{{ $t("Cancel") }}</span>
					<feather-icon icon="TrashIcon" class="d-inline d-sm-none" />
				</b-button>
			</div>
		</b-media>

		<!-- User Info: Input Fields -->
		<validation-observer ref="accountForm">
			<b-form @submit="saveAccountInfo">
				<!-- Field: Email -->
				<b-row>
					<b-col cols="12" md="12">
						<b-form-group :label="$t('Email')" label-for="email">
							<validation-provider #default="{ errors }" name="email" rules="required|email">
								<b-form-input id="email" v-model="formData.email" />
								<small class="text-danger">{{ errors[0] }}</small>
							</validation-provider>
						</b-form-group>
					</b-col>
				</b-row>

				<!-- Field: Password -->
				<b-row>
					<b-col cols="12" md="6">
						<b-form-group :label="$t('Password')" label-for="password">
							<validation-provider #default="{ errors }" name="password" rules="min:6">
								<b-form-input id="password" v-model="formData.password" type="password" />
								<small class="text-danger">{{ errors[0] }}</small>
							</validation-provider>
						</b-form-group>
					</b-col>
					<b-col cols="12" md="6">
						<b-form-group :label="$t('Password confirmation')" label-for="password-confirmation">
							<validation-provider #default="{ errors }" name="password_confirmation" rules="confirmed:password">
								<b-form-input id="password-confirmation" v-model="formData.password_confirmation" type="password" />
								<small class="text-danger">{{ errors[0] }}</small>
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
	import { BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm } from "bootstrap-vue";
	import { avatarText } from "@core/utils/filter";
	import { useInputImageRenderer } from "@core/comp-functions/forms/form-utils";
	import { onUnmounted, ref } from "@vue/composition-api";
	import subscriberStoreModule from "../subscriberStoreModule";
	import router from "@/router";
	import store from "@/store";
	import { ValidationProvider, ValidationObserver } from "vee-validate";
	import { required, email, min } from "@validations";

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

			// Demo Purpose => Update image on click of update
			const refInputEl = ref(null);
			const previewEl = ref(null);
			const accountForm = ref(null);
			const { inputImageRenderer } = useInputImageRenderer(refInputEl, (base64) => {
				// eslint-disable-next-line no-param-reassign
				props.subscriberData.avatar = base64;
			});

			// Subscriber account information form
			const { email } = props.subscriberData;
			const formData = ref({ email });

			const saveAccountInfo = function (e) {
				e.preventDefault();

				// Vee validation configuration

				// Validation
				accountForm.value
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
										accountForm.value.setErrors(error.response.data);
									}
								});
						}
					})
					.catch(() => {
						return;
					});
			};

			return {
				avatarText,
				//  ? Demo - Update Image on click of update button
				refInputEl,
				previewEl,
				inputImageRenderer,
				formData,
				saveAccountInfo,
				required,
				email,
				min,
				accountForm,
			};
		},
	};
</script>

<style lang="scss">
	@import "@core/scss/vue/libs/vue-select.scss";
</style>
