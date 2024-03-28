import { axiosApi } from "./apiService";

export const getMedicationHistory = async () => {
    try {
        const response = await axiosApi.get(`#`);
        return response.data;
    } catch (error) {
        
        throw error; 
    }
};