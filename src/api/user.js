import { axiosApi } from "../api/apiService";

export const getUserDetails = async (token) => {
    try {
        const res = await axiosApi.get(`/user`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return res.data;
    } catch (error) {
        return error;
    }
};
