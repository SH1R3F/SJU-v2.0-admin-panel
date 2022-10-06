import axios from "@axios"

export default {
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {
		fetchPages(ctx, { queryParams }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/pages/`, { params: queryParams })
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		fetchPage(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/pages/${id}`)
					.then((response) => resolve(response.data))
					.catch((error) => reject(error))
			})
		},
		updatePage(ctx, { id, formData }) {
			return new Promise((resolve, reject) => {
				axios
					.put(`/pages/${id}`, formData)
					.then((response) => resolve(response.data))
					.catch((error) => reject(error))
			})
		},
		addPage(ctx, { formData }) {
			return new Promise((resolve, reject) => {
				axios
					.post(`/pages`, formData)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		deletePage(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.delete(`/pages/${id}`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
	},
}
