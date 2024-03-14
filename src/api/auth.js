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

export const signUp = async (
    firstName,
    lastName,
    phoneNumber,
    email,
    username,
    password,
) => {
    try {
        const res = await axiosApi.post(`/auth/register`, {
            firstName,
            lastName,
            phoneNumber,
            email,
            username,
            password,
        });

        return res.data;
    } catch (error) {
        return error;
    }
};
