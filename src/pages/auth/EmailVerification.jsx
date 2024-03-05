import emailVerificationImage from "../../assets/images/image001.png";

const EmailVerification = () => {
    return (
        <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50">
            <div className="bg-white    w-[539px] rounded-large">
                <div className="gap-32 p-10 ">
                    <img
                        src={emailVerificationImage}
                        alt="EmailVerification"
                        className=" h-[131px] mx-auto"
                    />
                    <h2 className="text-2xl font-semibold text-center pt-9 font-roboto">
                        Email Verification Sent!
                    </h2>
                    <p className="pt-5 text-center font-roboto">
                        We have sent a verification email to email@email.com.{" "}
                        <br /> Please check your inbox and follow the
                        instruction to reset your password
                    </p>
                    <div className="flex justify-center pt-5">
                        <button
                            className="w-full px-5 py-3 font-bold text-white bg-teal-500 rounded-full hover:bg-teal-600 focus:outline-none focus:shadow-outline "
                            style={{
                                padding: "12px 20px",
                                borderRadius: "50px",
                            }}
                        >
                            CONTINUE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailVerification;
