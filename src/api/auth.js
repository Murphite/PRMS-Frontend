import { useState } from "react";
import { axiosApi } from "./apiService";
import { useNavigate } from "react-router-dom";

export const login = async (email, password) => {
    try {
        const res = await axiosApi.post(`/auth/login`, {
            email,
            password,
        });

        return res.data;
    } catch (error) {
        return error;
    }
};

export const signUp = async (firstName, lastName, email, password) => {
    try {
        const res = await axiosApi.post(`/auth/register`, {
            firstName,
            lastName,
            email,
            password,
        });

        return res.data;
    } catch (error) {
        return error;
    }
};

export const adminLogin = async (email, password) => {
    try {
        const res = await axiosApi.post(`/auth/admin-login`, {
            email,
            password,
        });
        return res.data;
    } catch (error) {
        return error;
    }
};