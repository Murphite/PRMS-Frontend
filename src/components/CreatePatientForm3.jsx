import { useState, useEffect } from "react";
import flag from "../../../PRMS-FE/src/assets/images/Group@3x.png";
import { IoIosArrowDown } from "react-icons/io";
import { Checkbox } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import CustomInput from "./Input";

const CreatePatientForm3 = ({ formData, setFormData, setStage }) => {
    const [submit, setContinue] = useState(false);
    const [toggleOn, setToggleOn] = useState(false);
    const navigate = useNavigate();

    function backForm() {
        setStage(2);
    }
    return (
        <div className="space-y-4 text-sm text-gray-700">
            <CustomInput
                label="Emergency Contact Name"
                type="text"
                name="otherName"
                value={formData.otherName}
                onChange={setFormData}
            />

            <CustomInput
                label="Emergency Contact Relationship"
                type="text"
                name="otherRelationship"
                value={formData.otherRelationship}
                onChange={setFormData}
            />

            <CustomInput
                label="Emergency Contact Phone Number"
                onChange={setFormData}
                value={formData.otherPhoneNumber}
                type="text"
                name="otherPhoneNumber"
            />

            <p className="mt-4 text-sm text-gray-700"> CONSENT AND AGREEMENT</p>
            <Checkbox
                onClick={() => setContinue(!submit)}
                className="relative mt-4 "
            >
                I consent to the use of my health information for the purposes
                outlined in the app's privacy policy. {submit ? "" : ""}
            </Checkbox>
            <Checkbox
                onClick={() => setToggleOn(!toggleOn)}
                className="relative mt-4 "
            >
                I consent to the use of my health information for the purposes
                outlined in the app's privacy policy.
            </Checkbox>

            <a href="#" className="block italic text-center text-teal-500 ">
                Terms & Condition
            </a>
            <a href="#" className="block italic text-center text-teal-500">
                Privacy policy
            </a>

            <div className="flex justify-center w-full">
                <button
                    className="inline-flex items-center justify-center py-2 mt-8 italic text-white bg-teal-600 rounded-full w-72 disabled:opacity-50"
                    type="submit"
                    onClick={() => nextForm()}
                    disabled={!(submit && toggleOn)}
                >
                    I agree with this
                </button>
            </div>
        </div>
    );
};

export default CreatePatientForm3;
