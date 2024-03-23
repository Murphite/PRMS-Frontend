import { axiosApi } from "./apiService";

export const createPrescription = async (token, patientUserId, data) => {
    try {
        const res = await axiosApi.post(
            `/admin/prescription/${patientUserId}`,
            data,
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
