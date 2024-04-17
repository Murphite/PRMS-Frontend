import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CreatePatientForm1 from "../../components/CreatePatientForm1";
import CreatePatientForm2 from "../../components/CreatePatientForm2";
import CreatePatientForm3 from "../../components/CreatePatientForm3";
import Container from "../../components/Container";
import { createNewPatient } from "../../api/patient";
import { AppContext } from "./../../context/AppContext";
import { getUserDetails } from "../../api/user";

const CreatePatient = () => {
    const { accessToken } = useContext(AppContext);
    const navigate = useNavigate();
    const [formStage, setFormStage] = useState(1);

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        middleName: "",
        dateOfBirth: "",
        gender: "",
        address: {
            street: "",
            city: "",
            state: "",
            country: "",
        },
        weight: "",
        height: "",
        bloodGroup: "",
        medications: [],
        medicalDetails: [],
        primaryPhysicianName: "",
        primaryPhysicianEmail: "",
        primaryPhysicianPhoneNo: "",
        emergencyContactPhoneNo: "",
        emergencyContactName: "",
        emergencyContactRelationship: "",
    });

    useEffect(() => {
        async function fetchData() {
            const res = await getUserDetails(accessToken);

            setData((prevState) => ({
                ...prevState,
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                email: res.data.email,
                address: {
                    ...prevState.address,
                    street: res.data.address.street,
                    city: res.data.address.city,
                    state: res.data.address.state,
                    country: res.data.address.country,
                },
            }));
        }

        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await createNewPatient(accessToken, data);
            console.log(res);

            if (res.isSuccessful) {
                navigate("/dashboard");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <div className="relative flex w-full mt-32 mb-12">
                <div className="grid w-full grid-cols-3 px-10 text-lg">
                    <div className="relative flex items-center">
                        <div>
                            <svg
                                className="flex items-center justify-center w-8 leading-none bg-green-500 border rounded-full aspect-square"
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
                            className={`border w-full ${
                                formStage > 1
                                    ? " border-green-500"
                                    : "border-gray-200"
                            }`}
                        />
                        <div className="absolute text-center -bottom-8 -left-10">
                            <p className="text-xs text-gray-400">
                                PERSONAL DETAILS
                            </p>
                        </div>
                    </div>
                    <div className="relative flex items-center">
                        <hr
                            className={`border w-1/2 ${
                                formStage > 1
                                    ? " border-green-500"
                                    : "border-gray-200"
                            }`}
                        />
                        {formStage > 1 ? (
                            <svg
                                className="flex items-center justify-center w-8 leading-none bg-green-500 border rounded-full aspect-square"
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
                                className={`border w-8 text-gray-500 text-xs aspect-square leading-none flex justify-center items-center rounded-full ${
                                    formStage > 1
                                        ? "border-green-500"
                                        : "border-gray-200"
                                }`}
                            >
                                2
                            </p>
                        )}
                        <hr
                            className={`border w-1/2 ${
                                formStage > 2
                                    ? "border-green-500"
                                    : "border-gray-200"
                            }`}
                        />
                        <div className="absolute text-center -bottom-8 left-12">
                            <p className="ml-5 text-xs text-gray-400">
                                MEDICAL HISTORY
                            </p>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-end">
                        <hr
                            className={`border w-full ${
                                formStage > 2
                                    ? "border-green-500"
                                    : "border-gray-200"
                            }`}
                        />

                        {formStage > 2 ? (
                            <svg
                                className="flex items-center justify-center w-8 leading-none bg-green-500 border rounded-full aspect-square"
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
                                className={`border w-8 text-xs text-gray-500 aspect-square leading-none flex justify-center items-center rounded-full ${
                                    formStage > 2
                                        ? " border-green-500"
                                        : "border-gray-200"
                                }`}
                            >
                                3
                            </p>
                        )}
                        <div className="absolute text-center -right-2 -bottom-8">
                            <p className="ml-10 text-xs text-gray-400">
                                OTHERS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-8 mt-24 mb-4 sm:mx-12 md:mx-16 lg:mx-56">
                <form onSubmit={handleSubmit}>
                    {formStage === 1 && (
                        <CreatePatientForm1
                            formData={data}
                            setFormData={setData}
                            setStage={setFormStage}
                        />
                    )}
                    {formStage === 2 && (
                        <CreatePatientForm2
                            formData={data}
                            setFormData={setData}
                            setStage={setFormStage}
                        />
                    )}
                    {formStage === 3 && (
                        <CreatePatientForm3
                            formData={data}
                            setFormData={setData}
                            setStage={setFormStage}
                        />
                    )}
                </form>
            </div>
        </Container>
    );
};

export default CreatePatient;
