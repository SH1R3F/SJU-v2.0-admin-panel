import axios from "@axios"

export default {
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {
		fetchMembers(ctx, queryParams) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/members`, { params: queryParams })
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		exportMembers(ctx, queryParams) {
			return new Promise((resolve, reject) => {
				axios
					.post(`/members/export`, queryParams)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		fetchMember(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/members/${id}`)
					.then((response) => resolve(response.data))
					.catch((error) => reject(error))
			})
		},
		updateMember(ctx, { id, form, type }) {
			return new Promise((resolve, reject) => {
				if (type === "FormData") {
					axios
						.post(`/members/${id}`, form)
						.then((response) => resolve(response.data))
						.catch((error) => reject(error))
				} else {
					axios
						.put(`/members/${id}`, form)
						.then((response) => resolve(response.data))
						.catch((error) => reject(error))
				}
			})
		},
		// Fetch courses that user has enrolled in // Will be updated when courses functionality are added
		fetchCourses(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/members/show/${id}/courses`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		addMember(ctx, subscriberData) {
			return new Promise((resolve, reject) => {
				axios
					.post("/members", subscriberData)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		deleteMember(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.delete(`/members/${id}`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		acceptMember(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.post(`/members/accept/${id}`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		unacceptMember(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.post(`/members/unaccept/${id}`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		toggleActivateMember(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.post(`/members/toggleActivate/${id}`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		toggleApproveMember(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.post(`/members/toggleApprove/${id}`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		toggleRefuseMember(ctx, payload) {
			return new Promise((resolve, reject) => {
				axios
					.post(`/members/toggleRefuse/${payload.id}`, payload)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		getCard(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/members/card/${id}`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
	},
}
