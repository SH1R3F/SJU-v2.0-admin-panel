<template>
	<b-sidebar id="add-new-role-sidebar" :visible="isAddNewRoleSidebarActive" bg-variant="white" sidebar-class="sidebar-lg" shadow backdrop no-header right @hidden="resetForm" @change="(val) => $emit('update:is-add-new-user-sidebar-active', val)">
		<template #default="{ hide }">
			<!-- Header -->
			<div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
				<h5 class="mb-0">{{ $t("Add new role") }}</h5>

				<feather-icon class="ml-1 cursor-pointer" icon="XIcon" size="16" @click="hide" />
			</div>

			<!-- BODY -->
			<validation-observer #default="{ handleSubmit }" ref="refFormObserver">
				<!-- Form -->
				<b-form class="p-2" @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetForm">
					<!-- name -->
					<validation-provider #default="validationContext" vid="display_name" :name="$t('Name')" rules="required|min:3">
						<b-form-group :label="$t('Name')" label-for="display_name">
							<b-form-input id="display_name" v-model="roleData.display_name" autofocus :state="getValidationState(validationContext)" trim />
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<!-- Description -->
					<b-form-group :label="$t('Description')" label-for="description">
						<b-input-group>
							<validation-provider #default="validationContext" vid="description" :name="$t('Description')" rules="required" style="flex: 1">
								<b-form-input id="description" v-model="roleData.description" :state="getValidationState(validationContext)" trim />
								<b-form-invalid-feedback>
									{{ validationContext.errors[0] }}
								</b-form-invalid-feedback>
							</validation-provider>
						</b-input-group>
					</b-form-group>

					<!-- Form Actions -->
					<div class="d-flex mt-2">
						<b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" class="mr-2" type="submit">{{ $t("Add") }}</b-button>
						<b-button v-ripple.400="'rgba(186, 191, 199, 0.15)'" type="button" variant="outline-secondary" @click="hide">{{ $t("Cancel") }}</b-button>
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
	import { required, min } from "@validations";
	import formValidation from "@core/comp-functions/forms/form-validation";
	import Ripple from "vue-ripple-directive";
	import vSelect from "vue-select";
	import store from "@/store";
	import roleStoreModule from "../roleStoreModule";

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
			prop: "isAddNewRoleSidebarActive",
			event: "update:is-add-new-role-sidebar-active",
		},
		props: {
			isAddNewRoleSidebarActive: {
				type: Boolean,
				required: true,
			},
		},
		setup(props, { emit }) {
			// Module configurations
			const ROLE_APP_STORE_MODULE_NAME = "app-role";
			if (!store.hasModule(ROLE_APP_STORE_MODULE_NAME)) store.registerModule(ROLE_APP_STORE_MODULE_NAME, roleStoreModule);
			onUnmounted(() => {
				if (store.hasModule(ROLE_APP_STORE_MODULE_NAME)) store.unregisterModule(ROLE_APP_STORE_MODULE_NAME);
			});

			const blankRoleData = {
				name: "",
				display_name: "",
				description: "",
			};

			const roleData = ref(JSON.parse(JSON.stringify(blankRoleData)));
			const resetroleData = () => {
				roleData.value = JSON.parse(JSON.stringify(blankRoleData));
			};

			const onSubmit = () => {
				store
					.dispatch("app-role/addRole", roleData.value)
					.then(() => {
						emit("refetch-data");
						emit("update:is-add-new-role-sidebar-active", false);
					})
					.catch((error) => {
						if (error.response.status === 400) {
							// Set errors
							refFormObserver.value.setErrors(error.response.data);
						}
					});
			};

			const { refFormObserver, getValidationState, resetForm } = formValidation(resetroleData);

			return {
				roleData,
				onSubmit,
				refFormObserver,
				getValidationState,
				resetForm,
				required,
				min,
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
