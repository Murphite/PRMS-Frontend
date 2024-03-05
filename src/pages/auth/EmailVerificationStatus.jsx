import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import emailVerificationImage from "../../assets/images/image001.png";
import { verifyEmail } from "../../api/auth";

const EmailVerification = ({ email, token }) => {
    const [verificationStatus, setVerificationStatus] = useState({
        isLoading: true,
        error: null,
    });

    useEffect(() => {
        const handleVerification = async () => {
            try {
                const res = await verifyEmail(email, token);
                console.log(res);

                if (res.success) {
                    console.log("Email verified successfully!");
                    setVerificationStatus({ isLoading: false, error: null, success: true });
                } else {
                    console.error("Verification failed:", res.error);
                    setVerificationStatus({ isLoading: false, error: res.error, success: false });
                }
            } catch (error) {
                console.error("Error verifying email:", error);
                setVerificationStatus({ isLoading: false, error, success: false });
            }
        };

        handleVerification();
    }, [email, token]);

    return (
        <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50">
            <div className="bg-white w-[539px] rounded-large">
                <div className="gap-32 p-10 ">
                    <img
                        src={emailVerificationImage}
                        alt="EmailVerification"
                        className="h-[131px] mx-auto"
                    />
                    <h2 className="text-2xl font-semibold text-center pt-9 font-roboto">
                        {verificationStatus.success ? "Email Verified Successfully!" : "Email Verification Failed!"}
                    </h2>
                    {verificationStatus.success ? (
                        <p className="pt-5 text-center font-roboto">
                            Your email ({email}) has been verified successfully.
                        </p>
                    ) : (
                        <p className="pt-5 text-center font-roboto text-red-500">
                            Email verification was not successful.
                        </p>
                    )}
                    <div className="flex justify-center pt-5">
                        <button
                            className="w-full px-5 py-3 font-bold text-white bg-teal-500 rounded-full hover:bg-teal-600 focus:outline-none focus:shadow-outline"
                            style={{
                                padding: "12px 20px",
                                borderRadius: "50px",
                            }}
                            disabled={verificationStatus.isLoading}
                        >
                            {verificationStatus.isLoading ? "Verifying..." : "CONTINUE"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

EmailVerification.propTypes = {
    email: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
};

export default EmailVerification;
