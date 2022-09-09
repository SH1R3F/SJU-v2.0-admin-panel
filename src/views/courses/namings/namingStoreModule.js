import axios from "@axios";

export default {
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {
		fetchNamings(ctx, { naming, queryParams }) {
			console.log(naming);
			return new Promise((resolve, reject) => {
				axios
					.get(`/courses/namings/${naming}`, { params: queryParams })
					.then((response) => resolve(response))
					.catch((error) => reject(error));
			});
		},
		fetchNaming(ctx, { naming, id }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/courses/namings/${naming}/show/${id}`)
					.then((response) => resolve(response.data))
					.catch((error) => reject(error));
			});
		},
		updateNaming(ctx, { naming, id, form }) {
			return new Promise((resolve, reject) => {
				axios
					.post(`/courses/namings/${naming}/update/${id}`, form)
					.then((response) => resolve(response.data))
					.catch((error) => reject(error));
			});
		},
		addNaming(ctx, { naming, namingData }) {
			return new Promise((resolve, reject) => {
				axios
					.post(`/courses/namings/${naming}/store`, namingData)
					.then((response) => resolve(response))
					.catch((error) => reject(error));
			});
		},
		deleteNaming(ctx, { id, naming }) {
			return new Promise((resolve, reject) => {
				axios
					.post(`/courses/namings/${naming}/delete/${id}`)
					.then((response) => resolve(response))
					.catch((error) => reject(error));
			});
		},
		toggleStatus(ctx, { id, naming }) {
			return new Promise((resolve, reject) => {
				axios
					.post(`/courses/namings/${naming}/toggle/${id}`)
					.then((response) => resolve(response))
					.catch((error) => reject(error));
			});
		},
	},
};
