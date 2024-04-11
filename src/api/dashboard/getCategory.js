import { axiosApi } from "../apiService";

export const getCategories = async (token) => {
    try {
        const res = await axiosApi.get(`/category`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return res.data;
    } catch (error) {
        return error;
    }
};
