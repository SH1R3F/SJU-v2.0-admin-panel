<template>
	<component :is="questionnaireData === undefined ? 'div' : 'b-card'">
		<!-- Alert: No item found -->
		<b-alert variant="danger" :show="questionnaireData === undefined">
			<h4 class="alert-heading">{{ $t("Error fetching questionnaire data") }}</h4>
			<div class="alert-body">
				{{ $t("No questionnaire found with this questionnaire id") }}. {{ $t("Go to") }}
				<b-link class="alert-link" :to="{ name: 'courses-questionnaires' }"> {{ $t("Questionnaires List") }} </b-link>
				{{ $t("for other questionnaires") }}.
			</div>
		</b-alert>

		<template v-if="questionnaireData">
			<questionnaire-edit-form :questionnaire-data="questionnaireData" class="pt-75" />
		</template>
	</component>
</template>

<script>
	import { BTab, BTabs, BCard, BAlert, BLink } from "bootstrap-vue";
	import { ref, onUnmounted } from "@vue/composition-api";
	import router from "@/router";
	import store from "@/store";
	import questionnaireStoreModule from "../questionnaireStoreModule";
	import QuestionnaireEditForm from "./QuestionnaireEditForm.vue";

	export default {
		components: {
			BTab,
			BTabs,
			BCard,
			BAlert,
			BLink,

			QuestionnaireEditForm,
		},
		setup() {
			const questionnaireData = ref(null);

			const COURSE_QUESTIONNAIRE_STORE_MODULE_NAME = "course-questionnaire";
			// Register module
			if (!store.hasModule(COURSE_QUESTIONNAIRE_STORE_MODULE_NAME)) store.registerModule(COURSE_QUESTIONNAIRE_STORE_MODULE_NAME, questionnaireStoreModule);
			// UnRegister on leave
			onUnmounted(() => {
				if (store.hasModule(COURSE_QUESTIONNAIRE_STORE_MODULE_NAME)) store.unregisterModule(COURSE_QUESTIONNAIRE_STORE_MODULE_NAME);
			});

			store
				.dispatch("course-questionnaire/fetchQuestionnaire", { id: router.currentRoute.params.id })
				.then((response) => {
					questionnaireData.value = response.data;
				})
				.catch((error) => {
					if (error.response.status === 404) {
						questionnaireData.value = undefined;
					}
				});

			return {
				questionnaireData,
			};
		},
	};
</script>

<style></style>
