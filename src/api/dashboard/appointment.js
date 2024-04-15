import { axiosApi } from "../apiService";

export const Physicianz = async (token) => {
    try {
        const res = await axiosApi.get(`/patient/appointment`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return res.data;
    } catch (error) {
        return error;
    }
};

export const Upcoming = async (token) => {
    try {
        const res = await axiosApi.get(`/patient/appointment?status=upcoming`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return res.data;
    } catch (error) {
        return error;
    }
};

export const Cancelled = async (token) => {
    try {
        const res = await axiosApi.get(
            `/patient/appointment?status=cancelled`,
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

export const Completed = async (token) => {
    try {
        const res = await axiosApi.get(
            `/patient/appointment?status=completed`,
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
