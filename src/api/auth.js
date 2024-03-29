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

export const signUp = async (data) => {
    try {
        const res = await axiosApi.post(`/auth/register`, data);

        return res.data;
    } catch (error) {
        return error;
    }
};

export const forgotPassword = async (email) => {
    try {
        const res = await axiosApi.post(`/auth/forgot-password`, {
            email,
        });

        return res.data;
    } catch (error) {
        return error;
    }
};

// export const forgotPassword = async (email) => {
//     try {
//         const res = await axiosApi.post(`/auth/forgot-password`, {
//             email,
//         });

//         return res.data;
//     } catch (error) {
//         return error;
//     }
// };

export const verifyEmail = async (email, token) => {
    try {
        const res = await axiosApi.get(
            `/auth/confirm-email?email=${email}&token=${token}`,
        );

        return res.data;
    } catch (error) {
        return error;
    }
};

export const adminLogin = async (email, password) => {
    try {
        const res = await axiosApi.post(`/auth/admin-login`, {
            email,
            password,
        });
        return res.data;
    } catch (error) {
        return error;
    }
};

export const resetPassword = async (email, token, newPassword) => {
    try {
        const res = await axiosApi.post(`/auth/reset-password`, {
            email,
            token,
            newPassword,
        });
        return res.data;
    } catch (error) {
        return error.response.data;
    }
};
