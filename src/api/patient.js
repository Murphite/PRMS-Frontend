import { axiosApi } from "../api/apiService";

export const createNewPatient = async (token, data) => {
    try {
        const res = await axiosApi.post(`/patient`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return res.data;
    } catch (error) {
        return error;
    }
};
