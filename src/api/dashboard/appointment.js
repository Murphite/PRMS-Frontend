import { axiosApi } from "../apiService";

export const getAppointments = async (token, status = "") => {
    try {
        let url = "/patient/appointment";
        if (status !== "") url = `${url}?status=${status}`;

        const res = await axiosApi.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return res.data;
    } catch (error) {
        return error;
    }
};

export const getSelectedPhysicianAppointmentList = async (
    token,
    physicianUserId,
) => {
    try {
        const res = await axiosApi.get(
            `/appointment/physician/${physicianUserId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );

        console.log(res?.data);

        return res.data;
    } catch (error) {
        return error;
    }
};

export const createAppointment = async (token, data) => {
    try {
        const res = await axiosApi.post(`/appointment`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return res.data;
    } catch (error) {
        return error;
    }
};
