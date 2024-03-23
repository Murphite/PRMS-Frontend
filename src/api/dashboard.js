import { axiosApi } from "./apiService";

export const getCategories = async (id, name, imageUrl) => {
    try {
        const res = await axiosApi.get(`/category`, {
            id,
            name,
            imageUrl,
        });

        return res.data;
    } catch (error) {
        return error;
    }
};
