import { axiosApi } from "./apiService";

export const getMedicationHistory = async (token) => {
    try {
        const res = await axiosApi.get(`/patient/medication`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (res.data){
            console.log(res.data, " ttt")
            return res.data.data.data.pageItems
        }
        
    } catch (error) {
        console.log("Error fetching medication history:", error);
        throw error;
    }
};
