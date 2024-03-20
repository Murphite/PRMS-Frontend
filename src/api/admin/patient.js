import { axiosApi } from "../apiService";

export const getPatientDetails = async (token, patientId) => {
    try {
        const res = await axiosApi.get(`/admin/patient/${patientId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return res.data;
    } catch (error) {
        return error;
    }
};
