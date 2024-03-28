import { axiosApi } from "../apiService";

export const getMedicalCentersDetails = async (token) => {
    const localData = localStorage.getItem("accessToken");
    console.log(localData)
    try {
        const res = await axiosApi.get(`/medical-centers`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        console.log(res?.data);
        return res.data;
    } catch (error) {
        return error;
    }
};
