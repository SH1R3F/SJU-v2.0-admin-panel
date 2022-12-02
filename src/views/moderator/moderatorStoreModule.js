import axios from "@axios"

export default {
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {
		fetchModerators(ctx, queryParams) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/admins`, { params: queryParams })
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		fetchModerator(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/admins/${id}`)
					.then((response) => resolve(response.data))
					.catch((error) => reject(error))
			})
		},
		updateModerator(ctx, { id, form }) {
			return new Promise((resolve, reject) => {
				axios
					.put(`/admins/${id}`, form)
					.then((response) => resolve(response.data))
					.catch((error) => reject(error))
			})
		},
		// Fetch courses that user has enrolled in // Will be updated when courses functionality are added
		fetchCourses(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/admins/show/${id}/courses`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		addModerator(ctx, moderatorData) {
			return new Promise((resolve, reject) => {
				axios
					.post("/admins", moderatorData)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		deleteModerator(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.delete(`/admins/${id}`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		fetchRoles() {
			return new Promise((resolve, reject) => {
				axios
					.get(`/admins/roles`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
	},
}
