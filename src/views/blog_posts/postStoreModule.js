import axios from "@axios"

export default {
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {
		fetchPosts(ctx, { queryParams }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`blog/posts`, { params: queryParams })
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		fetchCategories(ctx) {
			return new Promise((resolve, reject) => {
				axios
					.get(`blog/categories`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		fetchPost(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`blog/posts/${id}`)
					.then((response) => resolve(response.data))
					.catch((error) => reject(error))
			})
		},
		updatePost(ctx, { id, formData }) {
			return new Promise((resolve, reject) => {
				axios
					.put(`blog/posts/${id}`, formData)
					.then((response) => resolve(response.data))
					.catch((error) => reject(error))
			})
		},
		addPost(ctx, { formData }) {
			return new Promise((resolve, reject) => {
				axios
					.post(`blog/posts`, formData)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		deletePost(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.delete(`blog/posts/${id}`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
	},
}
