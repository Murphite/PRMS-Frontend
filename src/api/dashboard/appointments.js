import { axiosApi } from "../apiService";

export const getAppointments = async (
    token,
    physicianUserId,
    startDate,
    endDate,
) => {
    try {
        const res = await axiosApi.get(
            `/appointment/physician/${physicianUserId}?startDate=${startDate}&endDate=${endDate}`,
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
