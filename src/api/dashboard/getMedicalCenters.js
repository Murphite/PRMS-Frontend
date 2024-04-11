import { axiosApi } from "../apiService";

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
