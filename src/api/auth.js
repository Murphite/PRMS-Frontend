import { axiosApi } from "./apiService";

export const login = async (email, password) => {
	try {
		const res = await axiosApi.post(`/auth/login`, {
			email,
			password,
		});

		return res.data;
	} catch (error) {
		return error;
	}
};

export const signUp = async (firstName, lastName, email, password) => {
	try {
		const res = await axiosApi.post(`/auth/register`, {
			firstName,
			lastName,
			email,
			password,
		});

		return res.data;
	} catch (error) {
		return error;
	}
};

export const verifyEmail = async (email) => {
	try {
			const res = await axiosApi.post(`/auth/verify-email`, { email });

			return res.data;
	} catch (error) {
		return error;
	}
};