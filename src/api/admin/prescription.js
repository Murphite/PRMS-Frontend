import { axiosApi } from "../apiService";

export const getPrescriptions = async (
    token,
    pageSize = 10,
    pageNumber = 1,
) => {
    try {
        const res = await axiosApi.get(
            `admin/prescription?pageSize=${pageSize}&pageNumber=${pageNumber}`,
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
