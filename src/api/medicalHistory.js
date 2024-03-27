import { axiosApi } from "./apiService";

export const getMedicationHistory = async () => {
    try {
        const response = await axiosApi.get("/medicationhistory");
        return response.data;
    } catch (error) {
        console.error("Error fetching medication history:", error);
        throw error; 
    }
};