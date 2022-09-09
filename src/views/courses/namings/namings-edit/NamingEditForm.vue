<template>
	<div>
		<!-- Media -->
		<b-media class="mb-2">
			<template #aside>
				<b-avatar ref="previewEl" :src="formData.image" :text="avatarText(dblocalize(namingData, 'name'))" :variant="formData.image ? '' : `light-secondary`" size="90px" rounded />
			</template>
			<h4 class="mb-1">
				{{ dblocalize(namingData, "name") }}
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
					<!-- Field: Name (Arabic) -->
					<b-col cols="12" md="6">
						<validation-provider #default="validationContext" vid="name_ar" :name="`${$t('Name')} (${$t('In Arabic')})`" rules="required|min:3">
							<b-form-group :label="`${$t('Name')} (${$t('In Arabic')})`" label-for="name_ar">
								<b-form-input id="name_ar" v-model="formData.name_ar" autofocus :state="getValidationState(validationContext)" trim />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
					<!-- Field: Name (Arabic) -->
					<b-col cols="12" md="6">
						<validation-provider #default="validationContext" vid="name_en" :name="`${$t('Name')} (${$t('In English')})`" rules="min:3">
							<b-form-group :label="`${$t('Name')} (${$t('In English')})`" label-for="name_en">
								<b-form-input id="name_en" v-model="formData.name_en" :state="getValidationState(validationContext)" trim />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
				</b-row>

				<b-row>
					<!-- Field: Description (Arabic) -->
					<b-col cols="12" md="6">
						<validation-provider #default="validationContext" vid="description_ar" :name="`${$t('Description')} (${$t('In Arabic')})`" rules="required|min:3">
							<b-form-group :label="`${$t('Description')} (${$t('In Arabic')})`" label-for="description_ar">
								<b-form-input id="description_ar" v-model="formData.description_ar" :state="getValidationState(validationContext)" trim />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
					</b-col>
					<!-- Field: Description (Arabic) -->
					<b-col cols="12" md="6">
						<validation-provider #default="validationContext" vid="description_en" :name="`${$t('Description')} (${$t('In English')})`" rules="min:3">
							<b-form-group :label="`${$t('Description')} (${$t('In English')})`" label-for="description_en">
								<b-form-input id="description_en" v-model="formData.description_en" :state="getValidationState(validationContext)" trim />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</validation-provider>
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
	import { useInputImageRenderer } from "@core/comp-functions/forms/form-utils";
	import { onUnmounted, ref } from "@vue/composition-api";
	import namingStoreModule from "../namingStoreModule";
	import router from "@/router";
	import store from "@/store";
	import { ValidationProvider, ValidationObserver } from "vee-validate";
	import { required, email, min } from "@validations";
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
			namingData: {
				type: Object,
				required: true,
			},
		},

		setup(props) {
			// MODULE CONFIGURATION
			const COURSE_NAMING_STORE_MODULE_NAME = "course-naming";
			if (!store.hasModule(COURSE_NAMING_STORE_MODULE_NAME)) store.registerModule(COURSE_NAMING_STORE_MODULE_NAME, namingStoreModule);
			onUnmounted(() => {
				if (store.hasModule(COURSE_NAMING_STORE_MODULE_NAME)) store.unregisterModule(COURSE_NAMING_STORE_MODULE_NAME);
			});

			// Demo Purpose => Update image on click of update
			const refInputEl = ref(null);
			const previewEl = ref(null);
			const { inputImageRenderer } = useInputImageRenderer(refInputEl, (base64) => {
				// eslint-disable-next-line no-param-reassign
				// props.namingData.avatar = base64;
				formData.value.image = base64;
			});

			// Cancel Avatar
			const cancelAvatar = () => {
				formData.value.image = null;
			};

			// Form config for submit & rest
			const oldData = props.namingData;
			const formData = ref(JSON.parse(JSON.stringify(oldData)));
			const resetnamingData = () => {
				formData.value = JSON.parse(JSON.stringify(oldData));
			};

			// Submitting
			const onSubmit = function () {
				store
					.dispatch("course-naming/updateNaming", { naming: router.currentRoute.params.naming, id: router.currentRoute.params.id, form: formData.value })
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
			const { refFormObserver, getValidationState, resetForm } = formValidation(resetnamingData);

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
			};
		},
	};
</script>

<style lang="scss">
	@import "@core/scss/vue/libs/vue-select.scss";
</style>
