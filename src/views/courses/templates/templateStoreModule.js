import axios from "@axios"

export default {
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {
		fetchTemplates(ctx, { queryParams }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/courses/templates`, { params: queryParams })
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		fetchTemplate(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/courses/templates/${id}`)
					.then((response) => resolve(response.data))
					.catch((error) => reject(error))
			})
		},
		updateTemplate(ctx, { id, form }) {
			return new Promise((resolve, reject) => {
				axios
					.post(`/courses/templates/${id}`, form)
					.then((response) => resolve(response.data))
					.catch((error) => reject(error))
			})
		},
		addTemplate(ctx, { templateData }) {
			return new Promise((resolve, reject) => {
				axios
					.post(`/courses/templates`, templateData)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		deleteTemplate(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.delete(`/courses/templates/${id}`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
	},
}
