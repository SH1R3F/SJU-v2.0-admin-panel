<template>
	<b-form class="repeater-form" @submit.prevent="onSubmit">
		<h4 class="my-2">{{ $t("Experiences") }}</h4>
		<!-- Row Loop -->
		<b-row v-for="(experience, index) in experiences" ref="experienceRow" :key="`exp-${index}`">
			<!-- Experience name -->
			<b-col md="6">
				<b-form-group :label="$t('Experience')" :label-for="`experience-name-${index}`">
					<b-form-input v-model="experience['name']" :id="`experience-name-${index}`" type="text" :placeholder="$t('Experience')" />
				</b-form-group>
			</b-col>

			<!-- Years -->
			<b-col md="3">
				<b-form-group :label="$t('Years')" :label-for="`years-${index}`">
					<b-form-input v-model="experience['years']" :id="`years-${index}`" type="number" :placeholder="$t('Years')" />
				</b-form-group>
			</b-col>

			<!-- Remove Button -->
			<b-col lg="2" md="3" class="mb-50">
				<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" class="mt-0 mt-md-2" @click="removeItem(index, 'experience')">
					<feather-icon icon="XIcon" class="mr-25" />
					<span>{{ $t("Delete") }}</span>
				</b-button>
			</b-col>
		</b-row>

		<b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" @click="addItem('experience')" :disabled="Object.keys(experiences[experiences.length - 1] || {}).length != 2 && experiences.length !== 0">
			<feather-icon icon="PlusIcon" class="mr-25" />
			<span>{{ $t("Add New") }}</span>
		</b-button>

		<hr class="my-2" />

		<h4 class="my-2">{{ $t("Fields I want to contribute") }}</h4>
		<!-- Row Loop -->
		<b-row v-for="(field, index2) in fields" ref="fieldRow" :key="`field-${index2}`">
			<!-- Field name -->
			<b-col md="9">
				<b-form-group :label="$t('Field')" :label-for="`field-name-${index2}`">
					<b-form-input v-model="field['name']" :id="`field-name-${index2}`" type="text" :placeholder="$t('Field')" />
				</b-form-group>
			</b-col>

			<!-- Remove Button -->
			<b-col lg="2" md="3" class="mb-50">
				<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" class="mt-0 mt-md-2" @click="removeItem(index2, 'field')">
					<feather-icon icon="XIcon" class="mr-25" />
					<span>{{ $t("Delete") }}</span>
				</b-button>
			</b-col>
		</b-row>

		<b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" @click="addItem('field')" :disabled="Object.keys(fields[fields.length - 1] || {}).length != 1 && fields.length !== 0">
			<feather-icon icon="PlusIcon" class="mr-25" />
			<span>{{ $t("Add New") }}</span>
		</b-button>

		<hr class="my-2" />

		<h4 class="my-2">{{ $t("Languages good at") }}</h4>
		<!-- Row Loop -->
		<b-row v-for="(language, index3) in languages" ref="languageRow" :key="`lang-${index3}`">
			<!-- Language name -->
			<b-col md="6">
				<b-form-group :label="$t('Language')" :label-for="`language-name-${index3}`">
					<b-form-input v-model="language['name']" :id="`language-name-${index3}`" type="text" :placeholder="$t('Language')" />
				</b-form-group>
			</b-col>

			<!-- Level -->
			<b-col md="3">
				<b-form-group :label="$t('Level')" :label-for="`level-${index3}`">
					<v-select v-model="language['level']" :dir="$store.state.appConfig.isRTL ? 'ltr' : 'rtl'" :options="$levels" :reduce="(level) => level.value" :input-id="`level-${index3}`" />
				</b-form-group>
			</b-col>

			<!-- Remove Button -->
			<b-col lg="2" md="3" class="mb-50">
				<b-button v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="outline-danger" class="mt-0 mt-md-2" @click="removeItem(index3, 'language')">
					<feather-icon icon="XIcon" class="mr-25" />
					<span>{{ $t("Delete") }}</span>
				</b-button>
			</b-col>
		</b-row>

		<b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="primary" @click="addItem('language')" :disabled="Object.keys(languages[languages.length - 1] || {}).length != 2 && languages.length !== 0">
			<feather-icon icon="PlusIcon" class="mr-25" />
			<span>{{ $t("Add New") }}</span>
		</b-button>

		<b-col class="mt-2">
			<b-button type="submit" variant="primary" class="mb-1 mb-sm-0 mr-0 mr-sm-1" :block="$store.getters['app/currentBreakPoint'] === 'xs'"> {{ $t("Save Changes") }} </b-button>
		</b-col>
	</b-form>
</template>

<script>
	import { BRow, BCol, BForm, BFormGroup, BFormInput, BButton, BFormInvalidFeedback } from "bootstrap-vue";
	import { onUnmounted, ref } from "@vue/composition-api";
	import store from "@/store";
	import router from "@/router";
	import memberStoreModule from "../memberStoreModule";
	import { $levels } from "@siteConfig";
	import vSelect from "vue-select";
	import { heightTransition } from "@core/mixins/ui/transition";
	import Ripple from "vue-ripple-directive";

	export default {
		components: {
			BRow,
			BCol,
			BForm,
			BFormGroup,
			BFormInput,
			BButton,
			BFormInvalidFeedback,
			vSelect,
		},
		directives: {
			Ripple,
		},
		mixins: [heightTransition],
		props: {
			memberData: {
				type: Object,
				required: true,
			},
		},
		setup(props) {
			// Module configurations
			const MEMBER_APP_STORE_MODULE_NAME = "app-member";
			if (!store.hasModule(MEMBER_APP_STORE_MODULE_NAME)) store.registerModule(MEMBER_APP_STORE_MODULE_NAME, memberStoreModule);
			onUnmounted(() => {
				if (store.hasModule(MEMBER_APP_STORE_MODULE_NAME)) store.unregisterModule(MEMBER_APP_STORE_MODULE_NAME);
			});

			// Replications
			const { exp = [], flds = [], langs = [] } = props.memberData.experiences_and_fields || [];

			const experiences = ref(exp);
			const fields = ref(flds);
			const languages = ref(langs);

			const addItem = (type) => {
				let items;
				let length;
				switch (type) {
					case "experience":
						items = experiences.value;
						length = 2;
						break;
					case "field":
						items = fields.value;
						length = 1;
						break;
					case "language":
						items = languages.value;
						length = 2;
						break;
				}
				if (Object.keys(items[items.length - 1] || {}).length == length || items.length == 0) {
					items.push({});
				}
			};

			const removeItem = (index, type) => {
				let items;
				switch (type) {
					case "experience":
						items = experiences.value;
						break;
					case "field":
						items = fields.value;
						break;
					case "language":
						items = languages.value;
						break;
				}

				items.splice(index, 1);
			};

			// Submitting
			const onSubmit = function () {
				// Filter empty values of each
				experiences.value = experiences.value.filter((experience) => Object.keys(experience).length == 2);
				fields.value = fields.value.filter((field) => Object.keys(field).length == 1);
				languages.value = languages.value.filter((language) => Object.keys(language).length == 2);
				const experiences_and_fields = {
					experiences: experiences.value,
					fields: fields.value,
					languages: languages.value,
				};

				store
					.dispatch("app-member/updateMember", { id: router.currentRoute.params.id, form: { experiences_and_fields } })
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

			return {
				$levels,
				onSubmit,
				removeItem,
				addItem,
				experiences,
				fields,
				languages,
			};
		},
	};
</script>

<style scoped>
	.repeater-form {
		overflow: hidden;
		transition: 0.35s height;
	}
</style>
