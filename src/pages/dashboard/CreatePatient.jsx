import { useState } from "react";

import CreatePatientForm1 from "../../components/CreatePatientForm1";
import CreatePatientForm2 from "../../components/CreatePatientForm2";
import CreatePatientForm3 from "../../components/CreatePatientForm3";

const CreatePatient = () => {
    const [formStage, setFormStage] = useState(1);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        middleName: "",
        monthYear: "",
        day: "",
        address: "",
        city: "",
        state: "",
        email: "",
        gender: "",
        country: "",
        medication: "",
        dosage: "",
        frequency: "",
        weight: "",
        height: "",
        bloodGroup: "",
        heightMeasurement: "",
        weightMeasurement: "",

        primaryCarePhysician: "",
        primaryCarePhysicianEmail: "",
        primaryCarePhysicianPhoneNumber: "",
        diabetes: false,
        asthma: false,
        hypertension: false,
        other: "",
        otherName: "",
        otherRelationship: "",
        healthHabits: "",
        alcoholFrequency: "",
        alcoholDuration: "",
        physicianCountry: "",
        otherCountry: "",
        otherPhoneNumber: "",
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <div>
            <div>
                <div className="relative mt-32  flex">
                    <div className="flex justify-center w-full text-lg">
                        <div className="relative flex items-center">
                            <div>
                                <svg
                                    className="bg-teal-400 border w-12 aspect-square leading-none flex justify-center items-center rounded-full"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.0837 6.83367C15.2774 6.64927 15.5351 6.54732 15.8025 6.54935C16.07 6.55137 16.3261 6.6572 16.517 6.84452C16.7079 7.03183 16.8186 7.28597 16.8256 7.55331C16.8327 7.82065 16.7356 8.08028 16.5549 8.27742L11.0687 15.1387C10.9743 15.2403 10.8605 15.3218 10.7339 15.3784C10.6073 15.435 10.4706 15.4655 10.332 15.4681C10.1934 15.4707 10.0557 15.4452 9.92708 15.3934C9.7985 15.3415 9.6817 15.2642 9.58366 15.1662L5.94541 11.5279C5.84409 11.4335 5.76283 11.3197 5.70646 11.1932C5.6501 11.0667 5.61979 10.9301 5.61735 10.7916C5.6149 10.6532 5.64038 10.5156 5.69224 10.3872C5.74411 10.2588 5.82131 10.1422 5.91923 10.0442C6.01716 9.94632 6.13381 9.86912 6.26221 9.81725C6.39062 9.76539 6.52816 9.73991 6.66663 9.74236C6.8051 9.7448 6.94165 9.77511 7.06815 9.83147C7.19465 9.88784 7.3085 9.9691 7.40291 10.0704L10.2822 12.9483L15.0575 6.86392C15.0661 6.85333 15.0753 6.84324 15.085 6.83367H15.0837Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <hr
                                className={` w-72  border-medium ${
                                    formStage > 1
                                        ? "  border-[#25C348]"
                                        : "border-[#eceaf0]"
                                }`}
                            />
                            <div className="absolute text-center -bottom-12 -left-12">
                                <p className="text-sm text-gray-400">
                                    PERSONAL DETAILS
                                </p>
                            </div>
                        </div>
                        <div className="relative flex items-center">
                            {formStage > 1 ? (
                                <svg
                                    className="bg-teal-400 border w-12 aspect-square leading-none flex justify-center items-center rounded-full"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.0837 6.83367C15.2774 6.64927 15.5351 6.54732 15.8025 6.54935C16.07 6.55137 16.3261 6.6572 16.517 6.84452C16.7079 7.03183 16.8186 7.28597 16.8256 7.55331C16.8327 7.82065 16.7356 8.08028 16.5549 8.27742L11.0687 15.1387C10.9743 15.2403 10.8605 15.3218 10.7339 15.3784C10.6073 15.435 10.4706 15.4655 10.332 15.4681C10.1934 15.4707 10.0557 15.4452 9.92708 15.3934C9.7985 15.3415 9.6817 15.2642 9.58366 15.1662L5.94541 11.5279C5.84409 11.4335 5.76283 11.3197 5.70646 11.1932C5.6501 11.0667 5.61979 10.9301 5.61735 10.7916C5.6149 10.6532 5.64038 10.5156 5.69224 10.3872C5.74411 10.2588 5.82131 10.1422 5.91923 10.0442C6.01716 9.94632 6.13381 9.86912 6.26221 9.81725C6.39062 9.76539 6.52816 9.73991 6.66663 9.74236C6.8051 9.7448 6.94165 9.77511 7.06815 9.83147C7.19465 9.88784 7.3085 9.9691 7.40291 10.0704L10.2822 12.9483L15.0575 6.86392C15.0661 6.85333 15.0753 6.84324 15.085 6.83367H15.0837Z"
                                        fill="white"
                                    />
                                </svg>
                            ) : (
                                <p
                                    className={`border w-12 aspect-square leading-none flex justify-center items-center rounded-full ${
                                        formStage > 1
                                            ? " border-[#2cb414]"
                                            : "border-[#eceaf0]"
                                    }`}
                                >
                                    2
                                </p>
                            )}
                            <hr
                                className={`border w-72 ${
                                    formStage > 2
                                        ? " border-[#25C348] border-medium"
                                        : "border-[#eceaf0]"
                                }`}
                            />
                            <div className="absolute text-center -bottom-12 -left-12">
                                <p className="text-sm text-gray-400 ml-5">
                                    MEDICAL HISTORY
                                </p>
                            </div>
                        </div>
                        <div className="relative flex items-center">
                            {formStage > 2 ? (
                                <svg
                                    className="bg-teal-400 border w-12 aspect-square leading-none flex justify-center items-center rounded-full"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.0837 6.83367C15.2774 6.64927 15.5351 6.54732 15.8025 6.54935C16.07 6.55137 16.3261 6.6572 16.517 6.84452C16.7079 7.03183 16.8186 7.28597 16.8256 7.55331C16.8327 7.82065 16.7356 8.08028 16.5549 8.27742L11.0687 15.1387C10.9743 15.2403 10.8605 15.3218 10.7339 15.3784C10.6073 15.435 10.4706 15.4655 10.332 15.4681C10.1934 15.4707 10.0557 15.4452 9.92708 15.3934C9.7985 15.3415 9.6817 15.2642 9.58366 15.1662L5.94541 11.5279C5.84409 11.4335 5.76283 11.3197 5.70646 11.1932C5.6501 11.0667 5.61979 10.9301 5.61735 10.7916C5.6149 10.6532 5.64038 10.5156 5.69224 10.3872C5.74411 10.2588 5.82131 10.1422 5.91923 10.0442C6.01716 9.94632 6.13381 9.86912 6.26221 9.81725C6.39062 9.76539 6.52816 9.73991 6.66663 9.74236C6.8051 9.7448 6.94165 9.77511 7.06815 9.83147C7.19465 9.88784 7.3085 9.9691 7.40291 10.0704L10.2822 12.9483L15.0575 6.86392C15.0661 6.85333 15.0753 6.84324 15.085 6.83367H15.0837Z"
                                        fill="white"
                                    />
                                </svg>
                            ) : (
                                <p
                                    className={`border w-12 aspect-square leading-none flex justify-center items-center rounded-full ${
                                        formStage > 1
                                            ? " border-[#2cb414]"
                                            : "border-[#eceaf0]"
                                    }`}
                                >
                                    3
                                </p>
                            )}
                            <div className="absolute text-center -bottom-12 -left-12">
                                <p className="text-sm text-gray-400 ml-10">
                                    OTHERS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <form onSubmit={handleSubmit}>
                    {formStage === 1 && (
                        <CreatePatientForm1
                            formData={data}
                            setFormData={handleChange}
                            setStage={setFormStage}
                        />
                    )}
                    {formStage === 2 && (
                        <CreatePatientForm2
                            formData={data}
                            setFormData={handleChange}
                            setStage={setFormStage}
                        />
                    )}
                    {formStage === 3 && (
                        <CreatePatientForm3
                            formData={data}
                            setFormData={handleChange}
                            setStage={setFormStage}
                        />
                    )}
                </form>
            </div>
        </div>
    );
};

export default CreatePatient;
