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

export const getPhysiciansDetails = async (token) => {
    try {
        const res = await axiosApi.get(`/physician`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return res.data;
    } catch (error) {
        return error;
    }
};

export const getMedicalCentersDetails = async (token) => {
    try {
        const res = await axiosApi.get(`/medical-centers`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return res.data;
    } catch (error) {
        return error;
    }
};
