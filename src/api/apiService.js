import axios from "axios";

import config from "../../config";

export const axiosApi = axios.create({
	baseURL: config.API_BASE_URL,
});

axiosApi.interceptors.response.use(
	response => response,
	error => {
		console.error(error);

		if (error.code === "ECONNABORTED") {
			return new Error("Network request timed out");
		}

		if (error.response?.status === 401) {
			localStorage.removeItem("accessToken");
			localStorage.removeItem("authUserData");
			window.location = "/login";
			return Promise.reject(new Error("Unauthorized"));
		}

		if (error.response?.status === 400) {
			return Promise.reject(error.response.data);
		}

		if (error.response?.status === 500) {
			return Promise.reject(new Error("Server error"));
		}

		return Promise.reject(error);
	}
);
