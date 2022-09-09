<template>
	<component :is="namingData === undefined ? 'div' : 'b-card'">
		<!-- Alert: No item found -->
		<b-alert variant="danger" :show="namingData === undefined">
			<h4 class="alert-heading">{{ $t("Error fetching subscriber data") }}</h4>
			<div class="alert-body">
				{{ $t("No subscriber found with this subscriber id") }}. {{ $t("Go to") }}
				<b-link class="alert-link" :to="{ name: 'active-subscribers' }"> {{ $t("Subscribers List") }} </b-link>
				{{ $t("for other subscribers") }}.
			</div>
		</b-alert>

		<template v-if="namingData">
			<naming-edit-form :naming-data="namingData" class="pt-75" />
		</template>
	</component>
</template>

<script>
	import { BTab, BTabs, BCard, BAlert, BLink } from "bootstrap-vue";
	import { ref, onUnmounted } from "@vue/composition-api";
	import router from "@/router";
	import store from "@/store";
	import namingStoreModule from "../namingStoreModule";
	import NamingEditForm from "./NamingEditForm.vue";

	export default {
		components: {
			BTab,
			BTabs,
			BCard,
			BAlert,
			BLink,

			NamingEditForm,
		},
		setup() {
			const namingData = ref(null);

			const COURSE_NAMING_STORE_MODULE_NAME = "course-naming";
			// Register module
			if (!store.hasModule(COURSE_NAMING_STORE_MODULE_NAME)) store.registerModule(COURSE_NAMING_STORE_MODULE_NAME, namingStoreModule);
			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(COURSE_NAMING_STORE_MODULE_NAME)) store.unregisterModule(COURSE_NAMING_STORE_MODULE_NAME);
			});

			store
				.dispatch("course-naming/fetchNaming", { naming: router.currentRoute.params.naming, id: router.currentRoute.params.id })
				.then((response) => {
					namingData.value = response.data;
				})
				.catch((error) => {
					if (error.response.status === 404) {
						namingData.value = undefined;
					}
				});

			return {
				namingData,
			};
		},
	};
</script>

<style></style>
