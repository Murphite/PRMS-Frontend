import { axiosApi } from "../apiService";

export const getCategories = async (token) => {
    try {
        const res = await axiosApi.get(`/category`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI2YTVlZTI5OS1lYzYxLTQ0OGUtOTE1OC02MGQxOThlMzUxMTQiLCJzdWIiOiI2YTVlZTI5OS1lYzYxLTQ0OGUtOTE1OC02MGQxOThlMzUxMTQiLCJuYW1lIjoiRmVsaXggTWVkaHVyc3QiLCJlbWFpbCI6IkZlbGl4MzBAaG90bWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsIm5iZiI6MTcxMTQ1NDk1MSwiZXhwIjoxNzEyMDU5NzUxLCJpYXQiOjE3MTE0NTQ5NTEsImlzcyI6IioiLCJhdWQiOiIqIn0.INWR01lrHvmoRJx1v6NjejviYI_yR70AOVvHsrH66eY`,
            },
        });

        console.log(res?.data);
        return res.data;
    } catch (error) {
        return error;
    }
};
