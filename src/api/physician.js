import { axiosApi } from "./apiPhysician";

export const PhysicianInfo = async () => {
    try {
        const res = await axiosApi.get("/physician/:id");

        return res.data;
    } catch (error) {
        return error;
    }
};
