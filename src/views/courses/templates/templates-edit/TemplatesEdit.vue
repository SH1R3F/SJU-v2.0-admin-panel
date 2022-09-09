<template>
	<component :is="templateData === undefined ? 'div' : 'b-card'">
		<!-- Alert: No item found -->
		<b-alert variant="danger" :show="templateData === undefined">
			<h4 class="alert-heading">{{ $t("Error fetching template data") }}</h4>
			<div class="alert-body">
				{{ $t("No template found with this template id") }}. {{ $t("Go to") }}
				<b-link class="alert-link" :to="{ name: 'courses-templates' }"> {{ $t("Templates List") }} </b-link>
				{{ $t("for other templates") }}.
			</div>
		</b-alert>

		<template v-if="templateData">
			<template-edit-form :template-data="templateData" class="pt-75" />
		</template>
	</component>
</template>

<script>
	import { BTab, BTabs, BCard, BAlert, BLink } from "bootstrap-vue";
	import { ref, onUnmounted } from "@vue/composition-api";
	import router from "@/router";
	import store from "@/store";
	import templateStoreModule from "../templateStoreModule";
	import TemplateEditForm from "./TemplateEditForm.vue";

	export default {
		components: {
			BTab,
			BTabs,
			BCard,
			BAlert,
			BLink,

			TemplateEditForm,
		},
		setup() {
			const templateData = ref(null);

			const COURSE_TEMPLATE_STORE_MODULE_NAME = "course-template";
			// Register module
			if (!store.hasModule(COURSE_TEMPLATE_STORE_MODULE_NAME)) store.registerModule(COURSE_TEMPLATE_STORE_MODULE_NAME, templateStoreModule);
			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(COURSE_TEMPLATE_STORE_MODULE_NAME)) store.unregisterModule(COURSE_TEMPLATE_STORE_MODULE_NAME);
			});

			store
				.dispatch("course-template/fetchTemplate", { id: router.currentRoute.params.id })
				.then((response) => {
					templateData.value = response.data;
				})
				.catch((error) => {
					if (error.response.status === 404) {
						templateData.value = undefined;
					}
				});

			return {
				templateData,
			};
		},
	};
</script>

<style></style>
