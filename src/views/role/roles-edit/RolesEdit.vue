<template>
	<div>
		<component :is="roleData === undefined ? 'div' : 'b-card'">
			<!-- Alert: No item found -->
			<b-alert variant="danger" :show="roleData === undefined">
				<h4 class="alert-heading">{{ $t("Error fetching role data") }}</h4>
				<div class="alert-body">
					{{ $t("No role found with this role id") }}. {{ $t("Go to") }}
					<b-link class="alert-link" :to="{ name: 'app-roles' }"> {{ $t("Roles List") }} </b-link>
					{{ $t("for other roles") }}.
				</div>
			</b-alert>

			<b-tabs v-if="roleData" pills>
				<!-- Tab: Information -->
				<b-tab active>
					<template #title>
						<feather-icon icon="UserIcon" size="16" class="mr-0 mr-sm-50" />
						<span class="d-none d-sm-inline">{{ $t("Information") }}</span>
					</template>
					<role-edit-tab-info :role-data="roleData" class="mt-2 pt-75" />
				</b-tab>
			</b-tabs>
		</component>

		<b-card>
			<b-form @submit.prevent="onSubmit">
				<!-- PERMISSION TABLE -->
				<b-card no-body class="border mt-1">
					<b-card-header class="p-1">
						<b-card-title class="font-medium-2">
							<feather-icon icon="LockIcon" size="18" />
							<span class="align-middle ml-50">{{ $t("Permissions") }}</span>
						</b-card-title>
					</b-card-header>
					<b-table striped responsive class="mb-0" :items="permissionsData" :fields="fields">
						<template #cell(module)="data">
							{{ $t(`permission-${data.value}`) }}
						</template>
						<template #cell()="data">
							<b-form-checkbox v-model="abilitiesData[`${data.field.key}-${data.item.module}`]" :disabled="data.value === ''" />
						</template>
					</b-table>
				</b-card>
				<!-- Action Buttons -->
				<b-button variant="primary" type="submit" class="mb-1 mb-sm-0 mr-0 mr-sm-1" :block="$store.getters['app/currentBreakPoint'] === 'xs'"> {{ $t("Save Changes") }} </b-button>
			</b-form>
		</b-card>
	</div>
</template>

<script>
	import { BTab, BTabs, BCard, BButton, BAlert, BForm, BCardTitle, BTable, BFormCheckbox, BCardHeader, BLink } from "bootstrap-vue";
	import { ref, onUnmounted } from "@vue/composition-api";
	import router from "@/router";
	import store from "@/store";
	import roleStoreModule from "../roleStoreModule";
	import RoleEditTabInfo from "./RoleEditTabInfo.vue";
	import i18n from "@/libs/i18n";

	export default {
		components: {
			BTab,
			BTabs,
			BCard,
			BButton,
			BAlert,
			BForm,
			BCardTitle,
			BTable,
			BFormCheckbox,
			BCardHeader,
			BLink,
			RoleEditTabInfo,
		},
		setup() {
			const ROLE_APP_STORE_MODULE_NAME = "app-role";
			// Register module
			if (!store.hasModule(ROLE_APP_STORE_MODULE_NAME)) store.registerModule(ROLE_APP_STORE_MODULE_NAME, roleStoreModule);
			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(ROLE_APP_STORE_MODULE_NAME)) store.unregisterModule(ROLE_APP_STORE_MODULE_NAME);
			});

			const roleData = ref(null);
			store
				.dispatch("app-role/fetchRole", { id: router.currentRoute.params.id })
				.then((response) => {
					roleData.value = response;
				})
				.catch((error) => {
					if (error.response.status === 404) {
						roleData.value = undefined;
					}
				});

			const permissionsData = ref([]);
			const abilitiesData = ref([]);
			// Fetch permissions
			store
				.dispatch("app-role/fetchPermissions", { id: router.currentRoute.params.id })
				.then((response) => {
					const { permissions, abilities } = response.data;
					abilitiesData.value = abilities;
					let groupedPermissions = []; // The grouped permissions

					permissions.forEach(({ subject, action, granted }) => {
						let obj = groupedPermissions.find((el) => el.module === subject);
						if (obj) {
							obj[action] = granted;
						} else {
							let obj = {
								module: subject,
								[action]: granted,
							};
							groupedPermissions.push(obj);
						}
					});
					permissionsData.value = groupedPermissions;
				})
				.catch((error) => {
					if (error.response.status === 404) {
						perms.value = [];
					}
				});

			const onSubmit = function () {
				store
					.dispatch("app-role/updatePermissions", { id: router.currentRoute.params.id, permissions: abilitiesData.value })
					.then((response) => {
						this.$bvToast.toast(response.data.message, {
							variant: "success",
							solid: true,
						});
					})
					.catch((error) => {
						console.log(error);
					});
			};

			return {
				roleData,
				permissionsData,
				abilitiesData,
				fields: [
					{ key: "module", label: i18n.t("Permission") },
					{ key: "manage", label: i18n.t("Manage") },
					{ key: "read", label: i18n.t("Read") },
					{ key: "update", label: i18n.t("Update") },
					{ key: "create", label: i18n.t("Create") },
					{ key: "delete", label: i18n.t("Delete") },
				],
				onSubmit,
			};
		},
	};
</script>

<style></style>
