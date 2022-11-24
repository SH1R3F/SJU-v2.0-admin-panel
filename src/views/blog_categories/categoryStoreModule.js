import axios from "@axios"

export default {
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {
		fetchCategories(ctx) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/blog/categories`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		fetchCategory(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/blog/categories/${id}`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		updateCategory(ctx, { id, formData }) {
			return new Promise((resolve, reject) => {
				axios
					.put(`/blog/categories/${id}`, formData)
					.then((response) => resolve(response.data))
					.catch((error) => reject(error))
			})
		},
		updateCategoriesOrder(ctx, { categories }) {
			return new Promise((resolve, reject) => {
				axios
					.put(`/blog/categories`, { categories })
					.then((response) => resolve(response.data))
					.catch((error) => reject(error))
			})
		},
		addCategory(ctx, { formData }) {
			return new Promise((resolve, reject) => {
				axios
					.post(`/blog/categories`, formData)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		deleteCategory(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.delete(`/blog/categories/${id}`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
	},
}
