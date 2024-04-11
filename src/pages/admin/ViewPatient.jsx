import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import PatientCard from "../../components/PatientCard";

import note from "../../assets/vectors/note.svg";
import plus from "../../assets/vectors/plus.svg";
import calendar from "../../assets/vectors/appointment-calendar.svg";
import patientProfile from "../../assets/vectors/patient-profile.svg";
import healthProfile from "../../assets/vectors/health-profile.svg";
import { getPatientDetails } from "../../api/admin/patient";
import { AppContext } from "../../context/AppContext";
import { createPrescription } from "../../api/prescription";
import ShowErrorList from "../../components/ShowErrorList";
import AdminLayout from "../../layouts/AdminLayout";

const ViewPatient = () => {
    const { id } = useParams();
    const { accessToken } = useContext(AppContext);
    const [patient, setPatient] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [data, setData] = useState({
        name: "",
        dosage: "",
        frequency: "",
        diagnosis: "",
        duration: "",
        instruction: "",
    });
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        async function fetchPatient() {
            const res = await getPatientDetails(accessToken, id);
            setPatient(res.data);
        }

        fetchPatient();
    }, []);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submit = async (e) => {
        e.preventDefault();

        try {
            const res = await createPrescription(accessToken, id, data);

            if (res.isSuccessful)
                alert(res.message || "Prescription added successfully");

            if (Object.keys(res?.errors)?.length > 0) {
                setErrors(res.errors);
            }
        } catch (error) {}
    };

    return (
        <AdminLayout>
            <Container>
                {patient !== null ? (
                    <div className="pb-8">
                        <div className="flex justify-center mt-12">
                            <div className="w-96">
                                <PatientCard
                                    date={patient.appointmentDate}
                                    startTime={patient.appointmentStartTime}
                                    endTime={patient.appointmentEndTime}
                                    userImg={patient.image}
                                    fullName={patient.fullName}
                                    email={patient.email}
                                    noOfVisits={patient.noOfVisits}
                                />
                            </div>
                        </div>

                        <div className="flex justify-center mt-6 mr-24">
                            <div className="grid w-full grid-cols-2 gap-5">
                                <div className="p-5 overflow-hidden bg-white rounded-lg shadow">
                                    <div className="flex items-center mb-2">
                                        <img
                                            className="w-5"
                                            src={patientProfile}
                                            alt=""
                                        />
                                        <p className="ml-2 text-sm font-medium uppercase">
                                            patient information
                                        </p>
                                    </div>

                                    <div className="mt-2 space-y-1 text-sm">
                                        <div className="flex">
                                            <p className="mr-1 text-gray-400">
                                                Name:{" "}
                                            </p>
                                            <p className="font-medium">
                                                {patient.fullName}
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <p className="mr-1 text-gray-400">
                                                Date:{" "}
                                            </p>
                                            <p className="font-medium">
                                                {patient.appointmentDate}
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <p className="mr-1 text-gray-400">
                                                Gender:{" "}
                                            </p>
                                            <p className="font-medium">
                                                {patient.gender}
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <p className="mr-1 text-gray-400">
                                                Contact:{" "}
                                            </p>
                                            <p className="font-medium">
                                                <span>{patient.email}</span>
                                                <br />
                                                <span>{patient.phone}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5 overflow-hidden bg-white rounded-lg shadow">
                                    <div className="flex items-center mb-2">
                                        <img
                                            className="w-5"
                                            src={healthProfile}
                                            alt=""
                                        />
                                        <p className="ml-2 text-sm font-medium uppercase">
                                            Health Profile
                                        </p>
                                    </div>

                                    <div className="mt-2 space-y-1 text-sm">
                                        <div className="flex">
                                            <p className="mr-1 text-gray-400">
                                                Height:{" "}
                                            </p>
                                            <p className="font-medium">
                                                {patient.height}
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <p className="mr-1 text-gray-400">
                                                Weight:{" "}
                                            </p>
                                            <p className="font-medium">
                                                {patient.weight}
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <p className="mr-1 text-gray-400">
                                                Blood Type:{" "}
                                            </p>
                                            <p className="font-medium">
                                                {patient.bloodGroup}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5 overflow-hidden bg-white rounded-lg shadow">
                                    <div className="flex items-center mb-2">
                                        <img
                                            className="w-5"
                                            src={calendar}
                                            alt=""
                                        />
                                        <p className="ml-2 text-sm font-medium uppercase">
                                            Next Appointment
                                        </p>
                                    </div>

                                    <div className="mt-2 space-y-1 text-sm">
                                        <div className="flex">
                                            <p className="mr-1 text-gray-400">
                                                Date:{" "}
                                            </p>
                                            <p className="font-medium">
                                                {patient.appointmentDate}
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <p className="mr-1 text-gray-400">
                                                Time:{" "}
                                            </p>
                                            <p className="font-medium">
                                                {patient.appointmentStartTime} -{" "}
                                                {patient.appointmentEndTime}
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <p className="mr-1 text-gray-400">
                                                Doctor:{" "}
                                            </p>
                                            <p className="font-medium">
                                                {patient.physicianName}
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <p className="mr-1 text-gray-400">
                                                Location:{" "}
                                            </p>
                                            <p className="font-medium">
                                                {patient.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5 overflow-hidden bg-white rounded-lg shadow">
                                    <div className="flex items-center mb-2">
                                        <img
                                            className="w-5"
                                            src={note}
                                            alt=""
                                        />
                                        <p className="ml-2 text-sm font-medium uppercase">
                                            Medical History
                                        </p>
                                    </div>

                                    <div className="mt-2 space-y-1 text-sm">
                                        <div className="flex">
                                            <p className="mr-1 text-gray-400">
                                                Primary Care Physician:{" "}
                                            </p>
                                            <p className="font-medium">
                                                {patient.primaryCarePhysician}
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <p className="mr-1 text-gray-400">
                                                Current Medications:{" "}
                                            </p>
                                            <p className="font-medium">
                                                {patient.currentMedications}
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <p className="mr-1 text-gray-400">
                                                Allergies:{" "}
                                            </p>
                                            <p className="font-medium">
                                                {patient.allergies}
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <p className="mr-1 text-gray-400">
                                                Medical Conditions:{" "}
                                            </p>
                                            <p className="font-medium">
                                                {patient.medicalConditions}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="flex justify-center w-full mt-6">
                            <div className="w-full lg:w-[50rem] rounded-lg shadow-lg overflow-hidden bg-white px-5 pt-2 pb-5 grid grid-cols-2"></div>
                        </div> */}

                        <div className="flex justify-end mt-5">
                            <button
                                className="flex items-center text-base"
                                onClick={() =>
                                    setShowForm((prevState) => !prevState)
                                }
                            >
                                <span>
                                    <img
                                        className="w-4 mr-1"
                                        src={plus}
                                        alt=""
                                    />
                                </span>
                                Add Prescription
                            </button>
                        </div>

                        {showForm && (
                            <div className="w-64">
                                {errors != null && (
                                    <ShowErrorList errors={errors} />
                                )}

                                <form className="mt-2" onSubmit={submit}>
                                    <div className="mb-2">
                                        <label
                                            className="block mb-1 text-base"
                                            htmlFor="name"
                                        >
                                            {/* <img src={ } alt="" /> */}
                                            <span>Name of Medication</span>
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            className="block w-full px-3 py-1 text-base border border-teal-100 rounded-md shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:outline-none"
                                            value={data.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label
                                            className="block mb-1 text-base"
                                            htmlFor="dosage"
                                        >
                                            {/* <img src={ } alt="" /> */}
                                            <span>Dosage</span>
                                        </label>
                                        <input
                                            id="dosage"
                                            name="dosage"
                                            type="text"
                                            className="block w-full px-3 py-1 text-base border border-teal-100 rounded-md shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:outline-none"
                                            value={data.dosage}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label
                                            className="block mb-1 text-base"
                                            htmlFor="diagnosis"
                                        >
                                            {/* <img src={ } alt="" /> */}
                                            <span>Diagnosis</span>
                                        </label>
                                        <input
                                            id="diagnosis"
                                            name="diagnosis"
                                            type="text"
                                            className="block w-full px-3 py-1 text-base border border-teal-100 rounded-md shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:outline-none"
                                            value={data.diagnosis}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label
                                            className="block mb-1 text-base"
                                            htmlFor="frequency"
                                        >
                                            {/* <img src={ } alt="" /> */}
                                            <span>Frequency</span>
                                        </label>
                                        <input
                                            id="frequency"
                                            name="frequency"
                                            type="text"
                                            className="block w-full px-3 py-1 text-base border border-teal-100 rounded-md shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:outline-none"
                                            value={data.frequency}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label
                                            className="block mb-1 text-base"
                                            htmlFor="duration"
                                        >
                                            {/* <img src={ } alt="" /> */}
                                            <span>Duration</span>
                                        </label>
                                        <input
                                            id="duration"
                                            name="duration"
                                            type="text"
                                            className="block w-full px-3 py-1 text-base border border-teal-100 rounded-md shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:outline-none"
                                            value={data.duration}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label
                                            className="block mb-1 text-base"
                                            htmlFor="instruction"
                                        >
                                            {/* <img src={ } alt="" /> */}
                                            <span>Instruction</span>
                                        </label>
                                        <textarea
                                            cols={3}
                                            id="instruction"
                                            name="instruction"
                                            type="text"
                                            className="block w-full px-3 py-1 text-base border border-teal-100 rounded-md shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:outline-none"
                                            value={data.instruction}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center px-3 py-2 text-white bg-teal-500 rounded-md"
                                        >
                                            Add Prescription
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </Container>
        </AdminLayout>
    );
};

export default ViewPatient;
