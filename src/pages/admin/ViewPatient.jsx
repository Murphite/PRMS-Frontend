import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import PatientCard from "../../components/PatientCard";
import DashLayout from "./../../layouts/DashLayout";

import note from "../../assets/vectors/note.svg";
import calendar from "../../assets/vectors/appointment-calendar.svg";
import patientProfile from "../../assets/vectors/patient-profile.svg";
import healthProfile from "../../assets/vectors/health-profile.svg";
import { getPatientDetails } from "../../api/admin/patient";
import { AppContext } from "../../context/AppContext";

const ViewPatient = () => {
    const { id } = useParams();
    const { accessToken } = useContext(AppContext);
    const [patient, setPatient] = useState(null);
    // const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchPatient() {
            const res = await getPatientDetails(accessToken, id);
            setPatient(res.data);
        }

        // async function fetchCategories() {
        //     // var res = await getCategories();
        //     // setCategories(res.data);
        //     setTimeout(() => {
        //         setCategories([
        //             {
        //                 id: "3453",
        //                 name: "General",
        //                 img: "https://randomuser.me/api/portraits",
        //             },
        //             {
        //                 id: "344234",
        //                 name: "Dentistry",
        //                 img: "https://randomuser.me/api/portraits",
        //             },
        //         ]);
        //     }, 2000);
        // }

        fetchPatient();
        // fetchCategories();
    }, []);

    return (
        <DashLayout>
            <Container>
                {/* <div className="flex">
                    {categories.length > 0 &&
                        categories.map((category) => (
                            <div key={category.id}></div>
                        ))}
                </div> */}

                {patient !== null ? (
                    <>
                        <div className="flex justify-center mt-12">
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

                        <div className="mt-6 flex justify-center w-full">
                            <div className="w-full lg:w-[50rem] rounded-lg shadow-lg overflow-hidden bg-white px-5 pt-2 pb-5 grid grid-cols-2">
                                <div>
                                    <div className="flex mb-2 items-center">
                                        <img
                                            className="w-5"
                                            src={patientProfile}
                                            alt=""
                                        />
                                        <p className="uppercase font-medium text-xs ml-2">
                                            patient information
                                        </p>
                                    </div>

                                    <div className="mt-2 text-xs space-y-1">
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

                                <div>
                                    <div className="flex mb-2 items-center">
                                        <img
                                            className="w-5"
                                            src={healthProfile}
                                            alt=""
                                        />
                                        <p className="uppercase font-medium text-xs ml-2">
                                            Health Profile
                                        </p>
                                    </div>

                                    <div className="mt-2 text-xs space-y-1">
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
                            </div>
                        </div>

                        <div className="mt-6 flex justify-center w-full">
                            <div className="w-full lg:w-[50rem] rounded-lg shadow-lg overflow-hidden bg-white px-5 pt-2 pb-5 grid grid-cols-2">
                                <div>
                                    <div className="flex mb-2 items-center">
                                        <img
                                            className="w-5"
                                            src={calendar}
                                            alt=""
                                        />
                                        <p className="uppercase font-medium text-xs ml-2">
                                            Next Appointment
                                        </p>
                                    </div>

                                    <div className="mt-2 text-xs space-y-1">
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

                                <div>
                                    <div className="flex mb-2 items-center">
                                        <img
                                            className="w-5"
                                            src={note}
                                            alt=""
                                        />
                                        <p className="uppercase font-medium text-xs ml-2">
                                            Medical History
                                        </p>
                                    </div>

                                    <div className="mt-2 text-xs space-y-1">
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
                    </>
                ) : (
                    <div>Loading...</div>
                )}
            </Container>
        </DashLayout>
    );
};

export default ViewPatient;
