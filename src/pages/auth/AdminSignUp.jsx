import React, { useEffect, useState } from "react";
import adminimage from "../../assets/vectors/adminframe.svg";
import flag from "../../assets/vectors/Group.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const AdminSignUp = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [confirmPasswordType, setConfirmPasswordType] =
        useState("confirmPassword");
    const HospitalList = [
        "Olad Hospital",
        "LifeCare Hospital",
        "Nuradeen Hospital",
        "Rockville Hospital",
    ];
    const [hospitalDropDown, setHospitalDropDown] = useState(false);
    const [hospital, setHospital] = useState("");
    const MedicalDivisionList = [
        "Cardiologist",
        "Dentist",
        "Optometrist",
        "Dermatologist",
    ];
    const [MedicalDivisionDropDown, setMedicalDivisionDropDown] =
        useState(false);
    const [MedicalDivision, setMedicalDivision] = useState("");
    const [showCountry, setShowCountry] = useState(false);
    const [selectCountry, setSelectCountry] = useState(flag);
    const handlePhoneChange = (value) => {
        setPhoneNumber(value);
    };
    const [countryFlags, setCountryFlag] = useState([]);
    async function getCountryFlags() {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        if (response.ok) {
            setCountryFlag(data);
        }
    }
    useEffect(() => {
        getCountryFlags();
    }, []);

    return (
        <div className="flex overflow-y-hidden AdminPage gap-x-40px">
            <div className="Admin w-2.5/5 p-[151px 149px 187px 149px] bg-teal-600">
                <div className="Intro w-[516px]   pt-[99px] mx-auto gap-x-4">
                    <p className="Words font-medium text-3xl tracking-normal text-center leading-[60px] text-white ">
                        Start Your Wellness Journey!
                    </p>
                    <p className="WordsTwo text-base font-normal leading-6 tracking-normal text-center text-white ">
                        Ready for a healthier and happier you? Join us now!
                        Create your account <br /> for personalized health
                        insights, activity tracking, nutrition guidance, <br />{" "}
                        mental wellness support, and more. Your well-being
                        starts here.
                    </p>
                </div>
                <img
                    className="w-4/5 p-24 mx-auto bg-teal-600 images-design "
                    src={adminimage}
                />
            </div>
            <div className="AdminLogin w-[50%] bg-white">
                <p className="sign-in text-3xl font-medium leading-15 tracking-normal text-center text-black pt-24 ">
                    Create Account
                </p>
                <div className="container p-5">
                    <div className="cred px-[24px] border border-solid border-teal-600 py-[0px] w-full my-[20px] rounded-[8px] relative bg-teal-100 bg-opacity-50">
                        <label className="text-[#009688] block pb-1">
                            Hospital
                        </label>
                        <div className="flex items-center justify-between ">
                            <input
                                type="text"
                                placeholder="Olad Hospital"
                                value={hospital}
                                required
                                class="text-black  p-[4px 24px] rounded-[8px] bg-transparent outline-none w-full"
                            />
                            <MdKeyboardArrowDown
                                cursor={"pointer"}
                                fontSize={"20px"}
                                onClick={() =>
                                    setHospitalDropDown(!hospitalDropDown)
                                }
                            />
                            {hospitalDropDown && (
                                <div className="absolute bg-white p-5 w-[100%] left-0 top-[72px]  ">
                                    {HospitalList.map((hospital) => (
                                        <p
                                            className="my-2 cursor-pointer"
                                            onClick={() => {
                                                setHospital(hospital);
                                                setHospitalDropDown(false);
                                            }}
                                        >
                                            {hospital}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="cred px-[24px] border border-solid border-teal-600 py-[0px] w-full my-[20px] rounded-[8px] relative bg-teal-100 bg-opacity-50">
                        <label className="text-[#009688] block pb-1">
                            Medical Division
                        </label>
                        <div className="flex items-center justify-between ">
                            <input
                                type="text"
                                placeholder="Cardiologist"
                                value={MedicalDivision}
                                required
                                class="text-black  p-[4px 24px] rounded-[8px] bg-transparent outline-none w-full"
                            />
                            <MdKeyboardArrowDown
                                cursor={"pointer"}
                                fontSize={"20px"}
                                onClick={() =>
                                    setMedicalDivisionDropDown(
                                        !MedicalDivisionDropDown,
                                    )
                                }
                            />
                            {MedicalDivisionDropDown && (
                                <div className="absolute bg-white p-5 w-[100%] left-0 top-[72px]  ">
                                    {MedicalDivisionList.map(
                                        (MedicalDivision) => (
                                            <p
                                                className="my-2 cursor-pointer"
                                                onClick={() => {
                                                    setMedicalDivision(
                                                        MedicalDivision,
                                                    );
                                                    setMedicalDivisionDropDown(
                                                        false,
                                                    );
                                                }}
                                            >
                                                {MedicalDivision}
                                            </p>
                                        ),
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="cred px-[24px] py-[2px]  border border-solid border-teal-600 w-full my-[10px] rounded-[8px] bg-teal-100 bg-opacity-50">
                        <label className="text-[#009688] block pb-1">
                            First name
                        </label>
                        <input
                            type="text"
                            placeholder="Your first name"
                            class="bg-transparent focus:outline-none w-full"
                            required
                        />
                    </div>
                    <div className="cred px-[24px] py-[2px]  border border-solid border-teal-600 w-full my-[10px] rounded-[8px] bg-teal-100 bg-opacity-50">
                        <label className="text-[#009688] block pb-1">
                            Last name
                        </label>
                        <input
                            type="text"
                            placeholder="Your Last name"
                            class="bg-transparent focus:outline-none w-full"
                            required
                        />
                    </div>
                    <div className="cred px-[24px] py-[2px]  border border-solid border-teal-600 w-full my-[10px] rounded-[8px] bg-teal-100 bg-opacity-50">
                        <label className="text-[#009688] block pb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="xyz@gmail.com"
                            class="bg-transparent focus:outline-none w-full"
                            required
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="relative flex items-center gap-4 border border-solid border-teal-600 rounded-[8px] py-[8px] px-2 bg-teal-100 bg-opacity-50">
                            <img
                                src={selectCountry}
                                className="w-[50px] h-[25px]"
                            />
                            <IoIosArrowDown
                                onClick={() => setShowCountry(!showCountry)}
                            />
                            {showCountry && (
                                <div className="absolute top-[50px] left-0 h-[300px] overflow-y-scroll w-[60px]">
                                    {countryFlags &&
                                        countryFlags.map((flag) => (
                                            <>
                                                <img
                                                    src={flag.flags.svg}
                                                    alt=""
                                                    onClick={() => {
                                                        setSelectCountry(
                                                            flag.flags.svg,
                                                        );
                                                        setShowCountry(false);
                                                    }}
                                                    className="w-[40px] h-[50px] my-2 cursor-pointer"
                                                />
                                            </>
                                        ))}
                                </div>
                            )}
                        </div>
                        <input className="border border-solid border-teal-600 rounded-[8px] py-[8px] px-[24px] w-full bg-teal-100 bg-opacity-50" />
                    </div>
                    <div className="cred px-[24px] border border-solid border-teal-600 bg-teal-100 bg-opacity-50 py-[2px] w-full my-[20px] rounded-[8px]">
                        <label className="text-[#009688] block pb-1">
                            Password
                        </label>
                        <div className="flex items-center justify-between">
                            <input
                                type={passwordType}
                                placeholder="***************"
                                required
                                class="bg-transparent focus:outline-none w-full"
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
                                    onClick={() => setPasswordType("password")}
                                />
                            )}
                        </div>
                    </div>
                    <div className="cred px-[24px] border border-solid border-teal-600 bg-teal-100 bg-opacity-50 py-[2px] w-full my-[20px] rounded-[8px]">
                        <label className="text-[#009688] block pb-1">
                            Confirm Password
                        </label>
                        <div className="flex items-center justify-between">
                            <input
                                type={confirmPasswordType}
                                placeholder="***************"
                                required
                                class="bg-transparent focus:outline-none w-full"
                            />
                            {confirmPasswordType !== "text" ? (
                                <FaEyeSlash
                                    cursor={"pointer"}
                                    fontSize={"20px"}
                                    onClick={() =>
                                        setConfirmPasswordType("text")
                                    }
                                />
                            ) : (
                                <FaEye
                                    cursor={"pointer"}
                                    fontSize={"20px"}
                                    onClick={() =>
                                        setConfirmPasswordType(
                                            "confirmPassword",
                                        )
                                    }
                                />
                            )}
                        </div>
                    </div>
                    <div className="text-center w-[70%] mx-auto mt-10">
                        <button className="bg-[#009688] py-2 px-[20px] w-full text-white rounded-full font-[roboto]">
                            Create Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AdminSignUp;
