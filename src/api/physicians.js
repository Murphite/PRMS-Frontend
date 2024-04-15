import { axiosApi } from "../api/apiService";
 
export const getPhysicianDetails = async (token) => {
    try {
        const res = await axiosApi.get(`/physician/:Id`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
 
        return res.data;
    } catch (error) {
        return error;
    }
};
 