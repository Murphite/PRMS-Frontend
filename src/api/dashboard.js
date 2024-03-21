import { axiosApi } from "./apiService";

export const getCategories = async (Id, Name, ImageUrl) => {
    try {
        const res = await axiosApi.get(`/category`, {
            params: {
                Id: Id,
                Name: Name,
                ImageUrl: ImageUrl,
            },
        });

        return res.data;
    } catch (error) {
        return error;
    }
};
