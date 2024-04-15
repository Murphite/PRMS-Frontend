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
