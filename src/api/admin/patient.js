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

export const getPatients = async (token, pageSize = 10, pageNumber = 1) => {
    try {
        const res = await axiosApi.get(
            `admin/patient?pageSize=${pageSize}&pageNumber=${pageNumber}`,
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
