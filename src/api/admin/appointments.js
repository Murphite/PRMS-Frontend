import { axiosApi } from "../apiService";

export const getAppointments = async (token, pageSize = 10, pageNumber = 1) => {
    try {
        const res = await axiosApi.get(
            `admin/appointment/physician-date-appointments?pageSize=${pageSize}&pageNumber=${pageNumber}`,
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

export const getPendingAppointments = async (
    token,
    pageSize = 10,
    pageNumber = 1,
) => {
    try {
        const res = await axiosApi.get(
            `admin/appointment?pageSize=${pageSize}&pageNumber=${pageNumber}`,
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

export const updateAppointmentStatus = async (token, appointmentId, status) => {
    try {
        const res = await axiosApi.put(
            `/appointment/${appointmentId}/status`,
            { status: status },
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
