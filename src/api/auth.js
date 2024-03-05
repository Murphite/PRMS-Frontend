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

export default function adminLogin() {
    const { setAccessToken, setAuthUserData } = userContext.AppContext;
    const { data, setData } = useState({
        email: "",
        password: "",
        remember: false,
    });
    const [errors, setErrors] = useState({
        email: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setData({ ...data, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await adminLogin(data.email, data.password);

        if (res.error?.length > 0) {
            console.log(res.errors);
            setErrors({ ...errors, email: res.errors[0].message });
            return;
        }

        setAccessToken(res.data.accessToken);
        setAuthUserData(res.data.userInfo);
        navigate("/dashboard");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
                {errors.email && <div>{errors.email}</div>}
            </div>
        </form>
    );
}
