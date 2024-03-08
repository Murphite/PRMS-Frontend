import React from "react";

const CreatePatientForm3 = ({ formData, setFormData, setStage }) => {
    return (
        <div>
            <div>
                <label>Phone Number</label>
                <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={setFormData}
                />
            </div>
            <div>
                <button className="input" type="submit">
                    Continue
                </button>
            </div>
        </div>
    );
};

export default CreatePatientForm3;
