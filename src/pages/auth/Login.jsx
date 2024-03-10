import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Checkbox from "../../components/Checkbox";
import GuestLayout from "../../layouts/GuestLayout";
import InputLabel from "../../components/InputLabel";
import PrimaryButton from "../../components/PrimaryButton";
import TextInput from "../../components/TextInput";
import { login } from "../../api/auth";
import { AppContext } from "../../context/AppContext";

export default function Login() {
    const { setAccessToken, setAuthUserData } = useContext(AppContext);
    const [data, setData] = useState({
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

    const submit = async (e) => {
        e.preventDefault();
        const res = await login(data.email, data.password);
        console.log(res);

        if (res.errors?.length > 0) {
            console.log(res.errors);
            setErrors({ ...errors, email: res.errors[0].message });
            return;
        }

        setAccessToken(res.data.token);
        setAuthUserData(res.data.userInfo);
        navigate("/dashboard");
    };

    return (
        <GuestLayout>
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="block w-full mt-1"
                        error={errors.email}
                        autoComplete="username"
                        isFocused={true}
                        onChange={handleChange}
                    />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="block w-full mt-1"
                        autoComplete="current-password"
                        onChange={handleChange}
                    />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="text-sm text-gray-600 ms-2">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Forgot your password?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={false}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
