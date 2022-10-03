import axios from "@axios";

export default {
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {
		fetchRoles(ctx, queryParams) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/roles`, { params: queryParams })
					.then((response) => resolve(response))
					.catch((error) => reject(error));
			});
		},
		fetchPermissions(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/roles/${id}/permissions`)
					.then((response) => resolve(response))
					.catch((error) => reject(error));
			});
		},
		updatePermissions(ctx, { id, permissions }) {
			return new Promise((resolve, reject) => {
				axios
					.post(`/roles/${id}/permissions`, { permissions })
					.then((response) => resolve(response))
					.catch((error) => reject(error));
			});
		},
		fetchRole(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/roles/${id}`)
					.then((response) => resolve(response.data))
					.catch((error) => reject(error));
			});
		},
		updateRole(ctx, { id, form }) {
			return new Promise((resolve, reject) => {
				axios
					.put(`/roles/${id}`, form)
					.then((response) => resolve(response.data))
					.catch((error) => reject(error));
			});
		},
		// Fetch courses that user has enrolled in // Will be updated when courses functionality are added
		fetchCourses(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/roles/show/${id}/courses`)
					.then((response) => resolve(response))
					.catch((error) => reject(error));
			});
		},
		addRole(ctx, roleData) {
			return new Promise((resolve, reject) => {
				axios
					.post("/roles", roleData)
					.then((response) => resolve(response))
					.catch((error) => reject(error));
			});
		},
		deleteRole(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.delete(`/roles/${id}`)
					.then((response) => resolve(response))
					.catch((error) => reject(error));
			});
		},
	},
};
