<template>
	<component :is="!questions.length ? 'div' : 'b-card'" class="mt-3">
		<!-- Alert: No item found -->
		<b-alert variant="secondary" :show="!questions.length">
			<div class="alert-heading d-flex justify-content-between py-2">
				<h4>{{ $t("No questions added for this questionnaire") }}</h4>
				<b-button variant="primary" size="sm" @click="showSidebar = true">{{ $t("Add") }}</b-button>
			</div>
		</b-alert>

		<template v-if="questions.length">
			<div class="d-flex justify-content-between py-2">
				<h2>{{ $t("Questions") }}</h2>
				<b-button variant="primary" size="sm" @click="showSidebar = true">{{ $t("Add") }}</b-button>
			</div>
			<!-- draggable -->
			<draggable
				v-model="questions"
				class="list-group list-group-flush cursor-move"
				tag="ul"
				@change="reorderQuestions"
			>
				<transition-group type="transition" name="flip-list">
					<b-list-group-item
						v-for="question in questions"
						:key="question.id"
						tag="li"
						class="d-flex justify-content-between align-items-center"
					>
						<div class="ml-25">
							<b-card-text class="font-weight-bolder mb-0">
								{{ question.question }}
							</b-card-text>
						</div>
						<div>
							<b-button
								:title="$t('Edit')"
								v-ripple.400="'rgba(255, 255, 255, 0.15)'"
								variant="info"
								class="btn-icon ml-1"
								size="sm"
								:to="{ name: 'edit-question', params: { id: question.id } }"
							>
								<feather-icon icon="EditIcon" />
							</b-button>

							<b-button
								:title="$t('Delete')"
								v-ripple.400="'rgba(255, 255, 255, 0.15)'"
								variant="danger"
								class="btn-icon ml-1"
								size="sm"
								@click="deleteQuestion(question.id)"
							>
								<feather-icon icon="TrashIcon" />
							</b-button>
						</div>
					</b-list-group-item>
				</transition-group>
			</draggable>
		</template>
		<questions-sidebar :show-sidebar="showSidebar" @added-question="addedQuestion" />
	</component>
</template>

<script>
	import { BCard, BButton, BAlert, BLink, BListGroupItem, BCardText } from "bootstrap-vue"
	import { onBeforeMount, ref } from "@vue/composition-api"
	import QuestionsSidebar from "./QuestionsSidebar.vue"
	import axios from "@axios"
	import router from "@/router"
	import draggable from "vuedraggable"
	import Ripple from "vue-ripple-directive"

	export default {
		components: {
			BCard,
			BButton,
			BAlert,
			BLink,
			BListGroupItem,
			BCardText,
			QuestionsSidebar,
			draggable,
		},
		directives: {
			Ripple,
		},
		setup() {
			const questions = ref([])
			const showSidebar = ref(false)

			// Fetch questions
			const fetchQuestions = async () => {
				const id = router.currentRoute.params.id
				const response = await axios.get(`/courses/questions/${id}`)
				questions.value = response.data
			}

			// Fetch questions
			fetchQuestions()

			const addedQuestion = async () => {
				showSidebar.value = false
				await fetchQuestions()
			}

			const reorderQuestions = async function () {
				const response = await axios.post(`/courses/questions/reorder`, { questions: questions.value })
			}

			const deleteQuestion = async (id) => {
				const response = await axios.delete(`/courses/questions/${id}`)
				await fetchQuestions()
			}

			return {
				questions,
				showSidebar,
				addedQuestion,
				reorderQuestions,
				deleteQuestion,
			}
		},
	}
</script>
