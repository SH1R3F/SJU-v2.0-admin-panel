import axios from "@axios"

export default {
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {
		fetchSubscribers(ctx, queryParams) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/subscribers`, { params: queryParams })
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		exportSubscribers(ctx, queryParams) {
			return new Promise((resolve, reject) => {
				axios
					.post(`/subscribers/export`, queryParams)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		fetchSubscriber(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/subscribers/${id}`)
					.then((response) => resolve(response.data))
					.catch((error) => reject(error))
			})
		},
		updateSubscriber(ctx, { id, form }) {
			return new Promise((resolve, reject) => {
				axios
					.put(`/subscribers/${id}`, form)
					.then((response) => resolve(response.data))
					.catch((error) => reject(error))
			})
		},
		// Fetch courses that user has enrolled in // Will be updated when courses functionality are added
		fetchCourses(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/subscribers/show/${id}/courses`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		addSubscriber(ctx, subscriberData) {
			return new Promise((resolve, reject) => {
				axios
					.post("/subscribers", subscriberData)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		deleteSubscriber(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.delete(`/subscribers/${id}`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		toggleSubscriber(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.post(`/subscribers/${id}/toggle`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
	},
}
