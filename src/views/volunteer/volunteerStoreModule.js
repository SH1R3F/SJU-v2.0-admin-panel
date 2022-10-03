import axios from "@axios"

export default {
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {
		fetchVolunteers(ctx, queryParams) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/volunteers`, { params: queryParams })
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		fetchVolunteer(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/volunteers/${id}`)
					.then((response) => resolve(response.data))
					.catch((error) => reject(error))
			})
		},
		updateVolunteer(ctx, { id, form }) {
			return new Promise((resolve, reject) => {
				axios
					.put(`/volunteers/${id}`, form)
					.then((response) => resolve(response.data))
					.catch((error) => reject(error))
			})
		},
		// Fetch courses that user has enrolled in // Will be updated when courses functionality are added
		fetchCourses(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/volunteers/show/${id}/courses`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		addVolunteer(ctx, volunteerData) {
			return new Promise((resolve, reject) => {
				axios
					.post("/volunteers", volunteerData)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		deleteVolunteer(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.delete(`/volunteers/${id}`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
	},
}
