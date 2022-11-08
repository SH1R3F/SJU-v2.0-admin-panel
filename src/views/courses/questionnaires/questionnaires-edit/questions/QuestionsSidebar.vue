<template>
	<b-sidebar
		id="add-new-questionnaire-sidebar"
		:visible="showSidebar"
		bg-variant="white"
		sidebar-class="sidebar-lg"
		shadow
		backdrop
		no-header
		right
	>
		<template #default="{ hide }">
			<!-- Header -->
			<div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
				<h5 class="mb-0">{{ $t(`Add new question`) }}</h5>

				<feather-icon class="ml-1 cursor-pointer" icon="XIcon" size="16" @click="hide" />
			</div>

			<!-- BODY -->
			<validation-observer #default="{ handleSubmit }" ref="refFormObserver">
				<!-- Form -->
				<b-form class="p-2" @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="resetQuestion">
					<!-- Field: question -->
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

					<!-- Field: Type -->
					<validation-provider #default="validationContext" vid="type" :name="$t('MCQ')">
						<b-form-group :label="$t('MCQ')" label-for="type">
							<b-form-checkbox v-model="formData.mcq"> {{ $t("yes") }} </b-form-checkbox>
							<b-form-invalid-feedback>
								{{ validationContext.errors[0] }}
							</b-form-invalid-feedback>
						</b-form-group>
					</validation-provider>

					<div v-if="formData.mcq">
						<!-- Field: Answer 1 -->
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
						<!-- Field: Color 1 -->
						<b-form-group :label="`${$t('Color')} 1`" label-for="color1">
							<b-form-input id="color1" v-model="formData.color1" type="color" />
						</b-form-group>

						<!-- Field: Answer 2 -->
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
						<!-- Field: Color 2 -->
						<b-form-group :label="`${$t('Color')} 2`" label-for="color2">
							<b-form-input id="color2" v-model="formData.color2" type="color" />
						</b-form-group>

						<!-- Field: Answer 3 -->
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
						<!-- Field: Color 3 -->
						<b-form-group :label="`${$t('Color')} 3`" label-for="color3">
							<b-form-input id="color3" v-model="formData.color3" type="color" />
						</b-form-group>

						<!-- Field: Answer 4 -->
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
						<!-- Field: Color 4 -->
						<b-form-group :label="`${$t('Color')} 4`" label-for="color4">
							<b-form-input id="color4" v-model="formData.color4" type="color" />
						</b-form-group>
					</div>

					<!-- Form Actions -->
					<div class="d-flex mt-2">
						<b-button
							v-ripple.400="'rgba(255, 255, 255, 0.15)'"
							variant="primary"
							class="mr-2"
							type="submit"
						>
							{{ $t("Add") }}
						</b-button>
						<b-button
							v-ripple.400="'rgba(186, 191, 199, 0.15)'"
							type="button"
							variant="outline-secondary"
							@click="hide"
						>
							{{ $t("Cancel") }}
						</b-button>
					</div>
				</b-form>
			</validation-observer>
		</template>
	</b-sidebar>
</template>

<script>
	import {
		BSidebar,
		BForm,
		BFormGroup,
		BFormInput,
		BFormInvalidFeedback,
		BFormCheckbox,
		BButton,
	} from "bootstrap-vue"
	import { ValidationProvider, ValidationObserver } from "vee-validate"
	import Ripple from "vue-ripple-directive"
	import formValidation from "@core/comp-functions/forms/form-validation"
	import { ref } from "@vue/composition-api"
	import axios from "@axios"
	import router from "@/router"
	import { required } from "@validations"

	export default {
		directives: {
			Ripple,
		},
		components: {
			BSidebar,
			BForm,
			BFormGroup,
			BFormInput,
			BFormInvalidFeedback,
			BFormCheckbox,
			BButton,

			ValidationProvider,
			ValidationObserver,
		},
		props: ["showSidebar"],

		setup(props, { emit }) {
			const blankFormData = {
				question: "",
				type: 0,
				answer1: "",
				color1: "#000000",
				answer2: "",
				color2: "#000000",
				answer3: "",
				color3: "#000000",
				answer4: "",
				color4: "#000000",
			}

			const formData = ref(JSON.parse(JSON.stringify(blankFormData)))
			const resetQuestion = () => {
				formData.value = JSON.parse(JSON.stringify(blankFormData))
			}

			const { refFormObserver, getValidationState, resetForm } = formValidation(resetQuestion)

			const onSubmit = () => {
				const id = router.currentRoute.params.id
				axios
					.post(`/courses/questions/${id}`, formData.value)
					.then((response) => {
						emit("added-question")
					})
					.catch((error) => {
						if (error.response.status === 400) {
							// Set errors
							refFormObserver.value.setErrors(error.response.data)
						}
					})
			}

			return {
				refFormObserver,
				getValidationState,
				resetForm,

				formData,
				onSubmit,

				required,
			}
		},
	}
</script>
