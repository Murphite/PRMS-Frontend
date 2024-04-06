import { axiosApi } from "../apiService";

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

export const createAppointment = async (data) => {
    try {
        const res = await axiosApi.post(`/appointment`, data);

        return res.data;
    } catch (error) {
        return error;
    }
};
