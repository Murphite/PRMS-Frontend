import { axiosApi } from "../apiService";

export const getPrescriptionDetails = async (token, patientUserId) => {
    try {
        const res = await axiosApi.get(`/admin/prescription/${patientUserId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            name,
            dosage,
            frequency,
            diagnosis,
            duration,
            instruction
        });

        return res.data;
    } catch (error) {
        return error;
    }
};
