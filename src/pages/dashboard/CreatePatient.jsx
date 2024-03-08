import { useState } from "react";
import DashLayout from "../../layouts/DashLayout";

import CreatePatientForm1 from "../../components/CreatePatientForm1";
import CreatePatientForm2 from "../../components/CreatePatientForm2";
import CreatePatientForm3 from "../../components/CreatePatientForm3";

const CreatePatient = () => {
    const [formStage, setFormStage] = useState(1);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <DashLayout>
            <div>
                <div className="flex justify-center w-full text-sm">
                    <div className="relative flex items-center">
                        <p className="border w-6 aspect-square leading-none flex justify-center items-center rounded-full border-[#7F56D9]">
                            1
                        </p>
                        <hr
                            className={`border w-52 ${
                                formStage > 1
                                    ? " border-[#7F56D9]"
                                    : "border-[#eceaf0]"
                            }`}
                        />
                        <div className="absolute text-center -bottom-12 -left-12">
                            <p className="text-sm font-medium text-purple-600">
                                Your details
                            </p>
                            <p className="text-sm text-purple-600">
                                Account Number
                            </p>
                        </div>
                    </div>
                    <div className="relative flex items-center">
                        <p
                            className={`border w-6 aspect-square leading-none flex justify-center items-center rounded-full ${
                                formStage > 1
                                    ? " border-[#7F56D9]"
                                    : "border-[#eceaf0]"
                            }`}
                        >
                            2
                        </p>
                        <hr
                            className={`border w-52 ${
                                formStage > 2
                                    ? " border-[#7F56D9]"
                                    : "border-[#eceaf0]"
                            }`}
                        />
                        <div className="absolute text-center -bottom-12 -left-12">
                            <p className="text-sm font-medium text-black">
                                Validate Customer
                            </p>
                            <p className="text-sm text-gray-500">Biometrics</p>
                        </div>
                    </div>
                    <div className="relative flex items-center">
                        <p
                            className={`border w-6 aspect-square leading-none flex justify-center items-center rounded-full ${
                                formStage > 2
                                    ? " border-[#7F56D9]"
                                    : "border-[#eceaf0]"
                            }`}
                        >
                            3
                        </p>
                        <div className="absolute text-center -bottom-12 -left-12">
                            <p className="text-sm font-medium text-black">
                                Select PIN
                            </p>
                            <p className="text-sm text-gray-500">
                                Choose a secure PIN
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20">
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
        </DashLayout>
    );
};

export default CreatePatient;
