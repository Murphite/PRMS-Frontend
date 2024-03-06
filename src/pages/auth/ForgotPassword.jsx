import React, { useState } from "react";
import image from "../../assets/images/frame.png";
import TextInput from "../../components/TextInput";
import { forgotPassword } from "../../api/auth";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError(null);

            const response = await forgotPassword(email);

            if (response) {
            } else {
                setError("Password reset failed.");
            }
        } catch (error) {
            console.error("Error:", error);
            setError("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full h-screen grid grid-cols-[60%_40%]">
            <div className="flex flex-col items-center justify-center bg-color">
                <div className="text-center text-white w-96">
                    <h2 className="text-3xl font-bold">
                        Forgot Your Password?
                    </h2>
                    <p className="my-6 text-xs">
                        No worries! Enter your email address, and we'll send you
                        a link to reset your password. Regain access to your
                        account and continue your wellness journey with us.
                    </p>
                </div>
                <div>
                    <img className="h-[350px]" src={image} alt="frame" />
                </div>
            </div>
            <div className="flex flex-col items-center mt-16">
                <h2 className="text-3xl font-bold">Forgot Password</h2>
                <div className="w-full px-4">
                    {error && (
                        <p className="text-red-600 font-bold mb-4">{error}</p>
                    )}
                    <form className="w-full mt-4" onSubmit={handleFormSubmit}>
                        <div className="mt-4">
                            <TextInput
                                className="w-full"
                                variant="bordered"
                                color="success"
                                label="Email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <br />
                        <span className="flex justify-center mt-6">
                            <button
                                type="submit"
                                className={`w-64 px-10 py-2 text-white bg-color rounded-xl ${
                                    loading && "opacity-50 cursor-not-allowed"
                                }`}
                                disabled={loading}
                            >
                                {loading ? "LOADING..." : "CONTINUE"}
                            </button>
                        </span>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;
