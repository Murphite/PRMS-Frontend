import { axiosApi } from "./apiService";

export const getMedicationHistory = async (
    patientId,
    physicianName,
    medication,
    dosage,
    instructions,
    status,
    dateCreated,
) => {
    try {
        const response = await axiosApi.get("/medicationhistory", {
            patientId,
            physicianName,
            medication,
            dosage,
            instructions,
            status,
            dateCreated,
        });

        return response.data;
    } catch (error) {
        return error;
    }
};
