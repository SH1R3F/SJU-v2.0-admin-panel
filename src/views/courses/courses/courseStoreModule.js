import axios from "@axios";

export default {
	namespaced: true,
	state: {},
	getters: {},
	mutations: {},
	actions: {
		fetchCourses(ctx, { queryParams }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/courses/`, { params: queryParams })
					.then((response) => resolve(response))
					.catch((error) => reject(error));
			});
		},
		fetchCourse(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/courses/${id}`)
					.then((response) => resolve(response.data))
					.catch((error) => reject(error));
			});
		},
		updateCourse(ctx, { id, form }) {
			return new Promise((resolve, reject) => {
				axios
					.put(`/courses/${id}`, form)
					.then((response) => resolve(response.data))
					.catch((error) => reject(error));
			});
		},
		addCourse(ctx, courseData) {
			return new Promise((resolve, reject) => {
				axios
					.post(`/courses`, courseData)
					.then((response) => resolve(response))
					.catch((error) => reject(error));
			});
		},
		deleteCourse(ctx, { id }) {
			return new Promise((resolve, reject) => {
				axios
					.delete(`/courses/${id}`)
					.then((response) => resolve(response))
					.catch((error) => reject(error));
			});
		},
		fetchCourseEnrollers(ctx, { id, params: queryParams }) {
			return new Promise((resolve, reject) => {
				axios
					.get(`/courses/${id}/enrollers`, { params: queryParams })
					.then((response) => resolve(response))
					.catch((error) => reject(error));
			});
		},
	},
};
