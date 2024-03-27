import { axiosApi } from "../apiService";

export const getPhysiciansDetails = async (token) => {
    try {
        const res = await axiosApi.get(`/physician`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI2YTVlZTI5OS1lYzYxLTQ0OGUtOTE1OC02MGQxOThlMzUxMTQiLCJzdWIiOiI2YTVlZTI5OS1lYzYxLTQ0OGUtOTE1OC02MGQxOThlMzUxMTQiLCJuYW1lIjoiRmVsaXggTWVkaHVyc3QiLCJlbWFpbCI6IkZlbGl4MzBAaG90bWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsIm5iZiI6MTcxMTM3Mzk2OCwiZXhwIjoxNzExOTc4NzY4LCJpYXQiOjE3MTEzNzM5NjgsImlzcyI6IioiLCJhdWQiOiIqIn0.7GR__V-cAIuW7VTa8uZ2eyNvodgpSqtkUd9fDbnM73A`,
            },
        });

        console.log(res?.data)
        return res.data;
    } catch (error) {
        return error;
    }
};
