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

export const getMedicalCenters = async (token) => {
    try {
        const res = await axiosApi.get(
            `/medical-centers?pageSize=4&pageNumber=1`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );

        return res.data;
    } catch (error) {
        return error;
    }
};

export const getPhysicians = async (token) => {
    try {
        const res = await axiosApi.get(`/physician?pageSize=4&pageNumber=1`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return res.data;
    } catch (error) {
        return error;
    }
};
