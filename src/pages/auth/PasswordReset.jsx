import emailVerificationImage from "../../assets/images/image001.png";

const PasswordReset = () => {
    return (
        <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50">
            <div className="bg-white    w-[539px] rounded-large">
                <div className="gap-32 p-10 ">
                    <img
                        src={emailVerificationImage}
                        alt="PasswordReset"
                        className=" h-[131px] mx-auto"
                    />
                    <h2 className="text-2xl font-semibold text-center pt-9 font-roboto">
                        Password Reset Successful!
                    </h2>
                    <p className="pt-5 text-center font-roboto">
                        Congratulations! Your password has been successfully
                        reset. <br />
                        You can now login with your new credentials.
                    </p>
                    <div className="flex justify-center pt-5">
                        <button
                            className="w-full px-5 py-3 font-bold text-white bg-teal-500 rounded-full hover:bg-teal-600 focus:outline-none focus:shadow-outline "
                            style={{
                                padding: "12px 20px",
                                borderRadius: "50px",
                            }}
                        >
                            LOGIN
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasswordReset;
