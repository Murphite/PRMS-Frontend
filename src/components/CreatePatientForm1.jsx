import { useState } from "react";

import CustomInput from "./Input";

const CreatePatientForm1 = ({ formData, setFormData, setStage }) => {
    const genders = ["Male", "Female", "Others"];
    const [gender, setGender] = useState("");

    const handleAddressChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            address: { ...prevState.address, [e.target.name]: e.target.value },
        }));
    };

    const handleGenderChange = (genderIndex) => {
        setGender(genderIndex);
        setFormData((prevState) => ({
            ...prevState,
            gender: genderIndex,
        }));
    };

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    function nextForm() {
        setStage(2);
    }

    return (
        <div className="">
            <div className="space-y-4">
                <CustomInput
                    onChange={handleChange}
                    label="First Name"
                    value={formData.firstName}
                    type="text"
                    name="firstName"
                    required
                />

                <CustomInput
                    label="Last Name"
                    onChange={handleChange}
                    value={formData.lastName}
                    type="text"
                    name="lastName"
                    required
                />

                <CustomInput
                    label="Middle Name"
                    onChange={handleChange}
                    value={formData.middleName}
                    type="text"
                    name="middleName"
                />

                <CustomInput
                    type="date"
                    label="Date of Birth"
                    labelPlacement="inside"
                    placeholder="MM/DD/YYYY"
                    onChange={handleChange}
                    value={formData.dateOfBirth}
                    name="dateOfBirth"
                    required
                />

                <div>
                    <p className="mb-2 text-sm text-gray-700">GENDER</p>
                    <div className="flex justify-center space-x-5 text-center ">
                        {genders.map((x, i) => (
                            <p
                                key={x}
                                className={`border-1 border-gray-500 pt-4 hover:bg-teal-500 hover:text-gray-100 hover:border-teal-500 rounded-lg h-[3.5rem] w-[10rem] ${
                                    gender === i
                                        ? " bg-teal-500 text-white border-teal-500"
                                        : " bg-white text-gray-500"
                                }  `}
                                onClick={() => handleGenderChange(i)}
                                name="gender"
                            >
                                {x}
                            </p>
                        ))}
                    </div>
                </div>

                <p className="mt-2 text-sm text-gray-700">
                    CONTACT INFORMATION
                </p>

                <CustomInput
                    label="Phone Number"
                    onChange={handleChange}
                    value={formData.phoneNumber}
                    type="text"
                    name="phoneNumber"
                    required
                />

                <p className="text-sm text-gray-700"> ADDRESS</p>
                <CustomInput
                    label="Street"
                    onChange={handleAddressChange}
                    value={formData.address.street}
                    type="text"
                    name="street"
                    required
                />

                <CustomInput
                    label="City"
                    onChange={handleAddressChange}
                    value={formData.address.city}
                    type="text"
                    name="city"
                    required
                />

                <CustomInput
                    className="w-full bg-transparent focus:outline-none"
                    label="State"
                    onChange={handleAddressChange}
                    value={formData.address.state}
                    type="text"
                    name="state"
                    required
                />

                <CustomInput
                    className="w-full bg-transparent focus:outline-none"
                    label="Country"
                    onChange={handleAddressChange}
                    value={formData.address.country}
                    type="text"
                    name="country"
                    required
                />

                <div className="flex justify-center">
                    <button
                        className="inline-flex items-center justify-center py-2 mt-8 text-white bg-teal-600 rounded-full w-72 "
                        onClick={() => {
                            nextForm();
                        }}
                    >
                        CONTINUE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreatePatientForm1;
