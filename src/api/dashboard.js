import { axiosApi } from "./apiService";

export const getCategories = async () => {
    try {
        const res = await axiosApi.get("/category");

        return res.data;
    } catch (error) {
        return error;
    }
};
