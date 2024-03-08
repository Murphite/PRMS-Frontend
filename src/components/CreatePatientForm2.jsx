import React from "react";

const CreatePatientForm2 = ({ formData, setFormData, setStage }) => {
    return (
        <div>
            <div>
                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={setFormData}
                />
            </div>
            <div>
                <button className="input" onClick={() => setStage(3)}>
                    Continue
                </button>
            </div>
        </div>
    );
};

export default CreatePatientForm2;
