import React from "react";

const CreatePatientForm1 = ({ formData, setFormData, setStage }) => {
    return (
        <div>
            <div>
                <label>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={setFormData}
                />
            </div>
            <div>
                <button className="input" onClick={() => setStage(2)}>
                    Continue
                </button>
            </div>
        </div>
    );
};

export default CreatePatientForm1;
