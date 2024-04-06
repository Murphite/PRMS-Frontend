import { axiosApi } from "../api/apiService";

export const getSinglePhysicianDetails = async (token, physicianId) => {
    try {
        const res = await axiosApi.get(`/physician/${physicianId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return res.data;
    } catch (error) {
        return error;
    }
};
