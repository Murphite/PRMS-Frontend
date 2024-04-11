import { axiosApi } from "../apiService";

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
