import { useState } from "react";
import adminimage from "../../assets/resetlogo.png";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { resetPassword } from "../../api/auth"; // Import the resetPassword function

export default function ResetPassword() {
    const [passwordType, setPasswordType] = useState("password");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const email = "user@example.com";
            const token = "reset_token_here";

            // Call resetPassword function with email, token, and newPassword
            const response = await resetPassword(email, token, password);

            console.log(response);
        } catch (error) {
            console.error("Error:", error);
            setError("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="AdminPage flex overflow-y-hidden gap-x-40px">
            <div className="Admin w-3/5 h-screen p-[151px 149px 187px 149px] bg-teal-600">
                <div className="Intro w-[516px]   pt-[99px] mx-auto gap-x-4">
                    <p className="New font-[roboto] font-medium text-4xl tracking-normal text-center leading-[60px] text-white ">
                        Reset Password?
                    </p>
                    <p className="WordsTwo font-[roboto] text-base font-normal leading-6 tracking-normal text-center text-white ">
                        Reset your password for your account security. Your
                        health <br />
                        and happiness are just a click away.
                    </p>
                </div>

                <img
                    className="images-design  bg-teal-600  p-24 w-3/5 mx-auto "
                    src={adminimage}
                />
            </div>

            <div className="AdminLogin w-[40%] bg-white">
                <p className="sign-in font-[roboto] text-4xl font-medium leading-15 tracking-normal text-center text-black pt-24 ">
                    Reset Password
                </p>

                <div className="container p-5">
                    <form onSubmit={handleFormSubmit}>
                        <div className="cred px-[24px] border border-solid border-teal-600 bg-teal-100 bg-opacity-50 py-[8px] w-full my-[20px] rounded-[8px]">
                            <label className="text-[#009688] block pb-1">
                                Password
                            </label>
                            <div className="flex items-center justify-between">
                                <input
                                    type={passwordType}
                                    placeholder="***********"
                                    required
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="bg-transparent font-[roboto] focus:outline-none w-full placeholder:text-black"
                                />
                                {passwordType !== "text" ? (
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
                                )}
                            </div>
                        </div>
                        <div className="cred px-[24px] border border-solid border-teal-600 bg-teal-100 bg-opacity-50 py-[8px] w-full my-[20px] rounded-[8px]">
                            <label className="text-[#009688] block pb-1">
                                Confirm Password
                            </label>
                            <div className="flex items-center justify-between">
                                <input
                                    type={passwordType}
                                    placeholder="***********"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    className="bg-transparent font-[roboto] focus:outline-none w-full placeholder:text-black"
                                />
                                {passwordType !== "text" ? (
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
                                )}
                            </div>
                        </div>

                        <div className="text-center w-[70%] mx-auto mt-10">
                            <button
                                type="submit"
                                className="bg-[#009688] py-2 px-[20px] w-full text-white rounded-full font-[roboto]"
                                disabled={loading}
                            >
                                {loading ? "Loading..." : "Continue"}
                            </button>
                        </div>
                        {error && (
                            <p className="text-red-600 font-bold mt-4">
                                {error}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
