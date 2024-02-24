import React from "react";
import { Input } from "@nextui-org/react";
import image from "../../assets/images/frame.png";
import Container from "../../components/Container";
import TextInput from "../../components/TextInput";

const ForgotPassword = () => {
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
                    <form className="w-full mt-4">
                        <div className="mt-4 ">
                            {/* <label
                            className="mx-3 absolute text-xs text-[#009688] font-bold"
                            for="email"
                        >
                            Email
                        </label> */}
                            <TextInput
                                className="w-full"
                                variant="bordered"
                                color="success"
                                label="Email"
                                placeholder="Enter your email"
                            />
                            {/* <input
                            className="bg-color/[.08] h-[30px] w-[400px] py-5 px-3 text-xs font-bold border border-[#009688] focus:outline-none rounded-md"
                            type="email"
                        /> */}
                        </div>
                        <br />
                        <span className="flex justify-center mt-6">
                            <button className="w-64 px-10 py-2 text-white bg-color rounded-xl">
                                CONTINUE
                            </button>
                        </span>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;
