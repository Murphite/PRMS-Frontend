import { useEffect, useState } from "react";
import { Input, Button } from "@nextui-org/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import adminimage from "../../assets/vectors/adminframe.svg";

const inputStyles = {
    input: ["text-black"],
    inputWrapper: ["border-solid", "border-2", "rounded-md", "border-teal-500"],
};

export default function RegularSignUp() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
        useState(false);

    const togglePasswordVisibility = () =>
        setIsPasswordVisible(!isPasswordVisible);
    const toggleConfirmPasswordVisibility = () =>
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

    return (
        <section className=" space-y-5 flex flex-col lg:flex-row ">
            <div className=" flex flex-col w-full  space-y-6 bg-[#009688] p-5 lg:space-y-36 lg:flex-col-reverse lg:w-3/5 items-center justify-center h-full">
                <div className=" flex flex-col items-center">
                    <img
                        src={adminimage}
                        alt="images of doctors"
                        className="max-w-52 lg:max-w-full lg:pt-12 lg:pb-32"
                    />
                </div>
                <div className="flex flex-col items-center space-y-4 text-gray-100 md:max-w-lg">
                    <h2 className=" text-2xl text-center font-bold lg:text-4xl">
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
            <div className=" py-6 px-3  mb-3 w-full items-center justify-center md:px-4 lg:w-2/5 lg:px-5">
                <form action="" method="post" className="">
                    <div className="w-full flex flex-col gap-2 lg:pt-20">
                        <h2 className="text-3xl font-medium lg:text-4xl lg:text-center lg:pb-8">
                            Create Account
                        </h2>
                        <div className="flex w-full flex-wrap md:flex-nowrap mb-2 md:mb-6 gap-4">
                            <Input
                                size="sm"
                                type="text"
                                label="First Name"
                                color="success"
                                classNames={inputStyles}
                            />
                        </div>
                        <div className="flex w-full flex-wrap md:flex-nowrap mb-2 md:mb-6 gap-4">
                            <Input
                                size="sm"
                                type="text"
                                label="Last Name"
                                classNames={inputStyles}
                                color="success"
                            />
                        </div>
                        <div className="flex w-full flex-wrap md:flex-nowrap mb-2 md:mb-6 gap-4">
                            <Input
                                size="sm"
                                type="email"
                                label="Email"
                                classNames={inputStyles}
                                color="success"
                            />
                        </div>
                        <PhoneNumberValidation />
                        <div className="flex w-full flex-wrap md:flex-nowrap mb-2 md:mb-6 gap-4">
                            <Input
                                label="Password"
                                endContent={
                                    <button
                                        className="focus:outline-none"
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {isPasswordVisible ? (
                                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                        ) : (
                                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                        )}
                                    </button>
                                }
                                type={isPasswordVisible ? "text" : "password"}
                                classNames={inputStyles}
                                color="success"
                            />
                        </div>
                        <div className="  flex w-full flex-wrap md:flex-nowrap mb-2 md:mb-6 gap-4">
                            <Input
                                label="Confirm Password"
                                endContent={
                                    <button
                                        className="focus:outline-none"
                                        type="button"
                                        onClick={
                                            toggleConfirmPasswordVisibility
                                        }
                                    >
                                        {isConfirmPasswordVisible ? (
                                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                        ) : (
                                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                        )}
                                    </button>
                                }
                                type={
                                    isConfirmPasswordVisible
                                        ? "text"
                                        : "password"
                                }
                                classNames={inputStyles}
                                color="success"
                            />
                        </div>
                        <div className="flex justify-center align-middle">
                            <Button
                                radius="full"
                                className=" bg-teal-600 text-white shadow-lg md:w-80 md:mt-6"
                            >
                                CREATE ACCOUNT
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

const PhoneNumberValidation = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [valid, setValid] = useState(true);

    const handleChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
    };

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

        return phoneNumberPattern.test(phoneNumber);
    };

    return (
        <div className="">
            <label className="flex w-full flex-wrap border-2 bg-teal-100 rounded-sm md:flex-wrap mb-2 md:mb-6 gap-4">
                <PhoneInput
                    country={"ng"}
                    value={phoneNumber}
                    onChange={handleChange}
                    inputProps={{
                        required: true,
                    }}
                    inputStyle={{
                        width: "100%",
                        borderRadius: "4px",
                        border: "2px solid #66bcb3",
                        backgroundColor: "#EAFAF1",
                        padding: "6px 12px",
                        paddingLeft: "45px",
                        height: "48px",
                    }}
                    containerStyle={{ width: "100%" }}
                    dropdownStyle={{
                        zIndex: "100",
                        backgroundColor: "#EAFAF1",
                    }}
                />
            </label>
            {!valid && <p>Please enter a valid phone number.</p>}
        </div>
    );
};

const EyeSlashFilledIcon = (props) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
    >
        <path
            d="M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z"
            fill="currentColor"
        />
        <path
            d="M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z"
            fill="currentColor"
        />
        <path
            d="M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z"
            fill="currentColor"
        />
        <path
            d="M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z"
            fill="currentColor"
        />
        <path
            d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
            fill="currentColor"
        />
    </svg>
);

const EyeFilledIcon = (props) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
    >
        <path
            d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z"
            fill="currentColor"
        />
        <path
            d="M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z"
            fill="currentColor"
        />
    </svg>
);
