import axios from "@axios"

export default {
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {
		fetchQuestionnaires(ctx, { queryParams }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/courses/questionnaires`, { params: queryParams })
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		fetchQuestionnaire(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/courses/questionnaires/${id}`)
					.then((response) => resolve(response.data))
					.catch((error) => reject(error))
			})
		},
		updateQuestionnaire(ctx, { id, form }) {
			return new Promise((resolve, reject) => {
				axios
					.put(`/courses/questionnaires/${id}`, form)
					.then((response) => resolve(response.data))
					.catch((error) => reject(error))
			})
		},
		addQuestionnaire(ctx, questionnaireData) {
			return new Promise((resolve, reject) => {
				axios
					.post(`/courses/questionnaires`, questionnaireData)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		deleteQuestionnaire(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.delete(`/courses/questionnaires/${id}`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
	},
}
