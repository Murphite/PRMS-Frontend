import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import adminimage from "../../assets/images/adminpng.png";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AppContext } from "../../context/AppContext";
import { login } from "../../api/auth";
import CustomInput from "../../components/Input";
import Container from "../../components/Container";
import ShowErrorList from "../../components/ShowErrorList";

const RegularLogin = () => {
    const [passwordType, setPasswordType] = useState("password");
    const { setAccessToken } = useContext(AppContext);
    const [data, setData] = useState({
        email: "",
        password: "",
        remember: false,
    });
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setData({ ...data, [name]: value });
    };

    const submit = async (e) => {
        e.preventDefault();
        const res = await login(data.email, data.password);

        if (res.errors?.length > 0) {
            setErrors(res.errors);
            return;
        }

        setAccessToken(res.data.token);
        navigate("/dashboard");
    };

    return (
        <div className="flex flex-col space-y-5 lg:flex-row">
            <div className=" flex flex-col w-full  space-y-6 bg-[#009688] p-5 lg:space-y-36 lg:flex-col-reverse lg:w-1/2 items-center justify-center h-full">
                <div className="flex flex-col items-center ">
                    <img
                        src={adminimage}
                        alt="images of doctors"
                        className="max-w-52 lg:max-w-full lg:pt-12 lg:pb-32"
                    />
                </div>
                <div className="flex flex-col items-center space-y-4 text-gray-100 md:max-w-lg">
                    <h2 className="text-2xl font-bold text-center lg:text-4xl">
                        Start Your Wellness Journey!
                    </h2>
                    <p className="text-center">
                        Ready for a healthier and happier you? Join us now!
                        Create your account for personalized health insights,
                        activity tracking, nutrition guidance, mental wellness
                        support, and more. Your well-being starts here.
                    </p>
                </div>
            </div>

            <div className="items-center justify-center w-full px-3 py-6 mb-3 md:px-4 lg:w-1/2 lg:px-5">
                <Container>
                    <p className="mt-12 mb-12 text-4xl font-medium tracking-normal text-center text-gray-900 leading-15 ">
                        Sign In
                    </p>

                    {errors && (
                        <div className="mb-3">
                            {<ShowErrorList errors={errors} />}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-4">
                        <CustomInput
                            id="email"
                            name="email"
                            type="email"
                            label="Email"
                            required
                            onChange={handleChange}
                        />

                        <CustomInput
                            type={passwordType}
                            name="password"
                            label="Password"
                            onChange={handleChange}
                            endContent={
                                passwordType !== "text" ? (
                                    <FaEyeSlash
                                        cursor={"pointer"}
                                        fontSize={"20px"}
                                        onClick={() => setPasswordType("text")}
                                    />
                                ) : (
                                    <FaEye
                                        cursor={"pointer"}
                                        fontSize={"20px"}
                                        onClick={() =>
                                            setPasswordType("password")
                                        }
                                    />
                                )
                            }
                            required
                        />
                        <Link
                            to="/forgot-password"
                            className="block text-[#009688] cursor-pointer"
                        >
                            Forgot Password?
                        </Link>

                        <div className=" w-[70%] mx-auto">
                            <button className="bg-[#009688] py-2 w-full text-white rounded-full font-[roboto]">
                                Sign In
                            </button>
                        </div>
                    </form>
                </Container>
            </div>
        </div>
    );
};

export default RegularLogin;
