<template>
	<div>
		<component :is="question === undefined ? 'div' : 'b-card'">
			<!-- Alert: No item found -->
			<b-alert variant="danger" :show="question === undefined">
				<h4 class="alert-heading">{{ $t("Error fetching question data") }}</h4>
			</b-alert>

			<template v-if="question">
				<div>
					<!-- User Info: Input Fields -->
					<validation-observer #default="{ handleSubmit }" ref="refFormObserver">
						<b-form @submit.prevent="handleSubmit(onSubmit)">
							<!-- Field: Question -->
							<b-row>
								<b-col cols="12">
									<validation-provider
										#default="validationContext"
										vid="question"
										:name="$t('Question')"
										rules="required"
									>
										<b-form-group :label="$t('Question')" label-for="question">
											<b-form-input
												id="question"
												v-model="formData.question"
												autofocus
												:state="getValidationState(validationContext)"
												trim
											/>
											<b-form-invalid-feedback>
												{{ validationContext.errors[0] }}
											</b-form-invalid-feedback>
										</b-form-group>
									</validation-provider>
								</b-col>
							</b-row>

							<!-- Field: Type -->
							<b-row>
								<b-col cols="12">
									<validation-provider #default="validationContext" vid="type" :name="$t('MCQ')">
										<b-form-group :label="$t('MCQ')" label-for="type">
											<b-form-checkbox v-model="formData.type" value="1" unchecked-value="0">
												{{ $t("yes") }}
											</b-form-checkbox>
											<b-form-invalid-feedback>
												{{ validationContext.errors[0] }}
											</b-form-invalid-feedback>
										</b-form-group>
									</validation-provider>
								</b-col>
							</b-row>

							<div v-if="formData.type == 1">
								<!-- Field: Answer 1 -->
								<b-row>
									<b-col cols="12">
										<validation-provider
											#default="validationContext"
											vid="answer1"
											:name="`${$t('Answer')} 1`"
											rules="required"
										>
											<b-form-group :label="`${$t('Answer')} 1`" label-for="answer1">
												<b-form-input
													id="answer1"
													v-model="formData.answer1"
													:state="getValidationState(validationContext)"
													trim
												/>
												<b-form-invalid-feedback>
													{{ validationContext.errors[0] }}
												</b-form-invalid-feedback>
											</b-form-group>
										</validation-provider>
									</b-col>
									<!-- Field: Color 1 -->
									<b-col cols="6">
										<b-form-input v-model="formData.color1" type="color" />
									</b-col>
								</b-row>

								<!-- Field: Answer 2 -->
								<b-row>
									<b-col cols="12">
										<validation-provider
											#default="validationContext"
											vid="answer2"
											:name="`${$t('Answer')} 2`"
											rules="required"
										>
											<b-form-group :label="`${$t('Answer')} 2`" label-for="answer2">
												<b-form-input
													id="answer2"
													v-model="formData.answer2"
													:state="getValidationState(validationContext)"
													trim
												/>
												<b-form-invalid-feedback>
													{{ validationContext.errors[0] }}
												</b-form-invalid-feedback>
											</b-form-group>
										</validation-provider>
									</b-col>
									<!-- Field: Color 2 -->
									<b-col cols="6">
										<b-form-input v-model="formData.color2" type="color" />
									</b-col>
								</b-row>

								<!-- Field: Answer 3 -->
								<b-row>
									<b-col cols="12">
										<validation-provider
											#default="validationContext"
											vid="answer3"
											:name="`${$t('Answer')} 3`"
											rules="required"
										>
											<b-form-group :label="`${$t('Answer')} 3`" label-for="answer3">
												<b-form-input
													id="answer3"
													v-model="formData.answer3"
													:state="getValidationState(validationContext)"
													trim
												/>
												<b-form-invalid-feedback>
													{{ validationContext.errors[0] }}
												</b-form-invalid-feedback>
											</b-form-group>
										</validation-provider>
									</b-col>
									<!-- Field: Color 3 -->
									<b-col cols="6">
										<b-form-input v-model="formData.color3" type="color" />
									</b-col>
								</b-row>

								<!-- Field: Answer 4 -->
								<b-row>
									<b-col cols="12">
										<validation-provider
											#default="validationContext"
											vid="answer4"
											:name="`${$t('Answer')} 4`"
											rules="required"
										>
											<b-form-group :label="`${$t('Answer')} 4`" label-for="answer4">
												<b-form-input
													id="answer4"
													v-model="formData.answer4"
													:state="getValidationState(validationContext)"
													trim
												/>
												<b-form-invalid-feedback>
													{{ validationContext.errors[0] }}
												</b-form-invalid-feedback>
											</b-form-group>
										</validation-provider>
									</b-col>
									<!-- Field: Color 4 -->
									<b-col cols="6">
										<b-form-input v-model="formData.color4" type="color" />
									</b-col>
								</b-row>
							</div>

							<!-- Action Buttons -->
							<b-button
								variant="primary"
								type="submit"
								class="mb-1 mb-sm-0 mr-0 mr-sm-1"
								:block="$store.getters['app/currentBreakPoint'] === 'xs'"
							>
								{{ $t("Save Changes") }}
							</b-button>
							<b-button
								variant="outline-secondary"
								type="reset"
								:block="$store.getters['app/currentBreakPoint'] === 'xs'"
							>
								{{ $t("Cancel") }}
							</b-button>
						</b-form>
					</validation-observer>
				</div>
			</template>
		</component>
	</div>
</template>

<script>
	import {
		BCard,
		BAlert,
		BForm,
		BButton,
		BCol,
		BRow,
		BFormInvalidFeedback,
		BFormGroup,
		BFormInput,
		BFormCheckbox,
	} from "bootstrap-vue"
	import { ValidationProvider, ValidationObserver } from "vee-validate"
	import formValidation from "@core/comp-functions/forms/form-validation"
	import { ref } from "@vue/composition-api"
	import router from "@/router"
	import axios from "@axios"
	import { required } from "@validations"

	export default {
		components: {
			BCard,
			BAlert,
			BForm,
			BButton,
			BCol,
			BRow,
			BFormInvalidFeedback,
			BFormGroup,
			BFormInput,
			BFormCheckbox,

			ValidationProvider,
			ValidationObserver,
		},

		setup() {
			const { refFormObserver, getValidationState } = formValidation(resetQuestion)

			const question = ref({})

			// Fetch question
			const id = router.currentRoute.params.id
			axios
				.get(`/courses/question/${id}`)
				.then((response) => {
					question.value = response.data
				})
				.catch((error) => {
					if (error.response.status === 400) {
						// Set errors
						refFormObserver.value.setErrors(error.response.data)
					}
				})

			const formData = question
			const resetQuestion = () => {
				formData.value = JSON.parse(JSON.stringify(question.value))
			}

			const onSubmit = () => {
				const id = router.currentRoute.params.id
				axios
					.put(`/courses/questions/${id}`, formData.value)
					.then((response) => {
						router.push({ name: "edit-questionnaire", params: { id: formData.value.questionnaire_id } })
					})
					.catch((error) => {
						if (error.response.status === 400) {
							// Set errors
							refFormObserver.value.setErrors(error.response.data)
						}
					})
			}

			return {
				formData,
				question,
				refFormObserver,
				getValidationState,
				required,
				onSubmit,
			}
		},
	}
</script>
