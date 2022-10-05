import axios from "@axios"

export default {
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {
		fetchStudioItems(ctx, queryParams) {
			return new Promise((resolve, reject) => {
				axios
					.get("/studio", { params: queryParams })
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		addFile(ctx, { studioData, studioType }) {
			return new Promise((resolve, reject) => {
				axios
					.post(`/studio/${studioType}`, studioData)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
		deleteItem(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.delete(`/studio/${id}`)
					.then((response) => resolve(response))
					.catch((error) => reject(error))
			})
		},
	},
}
