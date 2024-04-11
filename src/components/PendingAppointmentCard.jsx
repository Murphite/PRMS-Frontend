import { useContext } from "react";

import calendar from "../assets/vectors/calendar.svg";
import note from "../assets/vectors/note.svg";
import healthProfile from "../assets/vectors/health-profile.svg";
import { updateAppointmentStatus } from "../api/admin/appointments";
import { AppContext } from "../context/AppContext";

const PendingAppointmentCard = ({
    appointmentId,
    date,
    startTime,
    endTime,
    imageUrl,
    name,
    email,
    height,
    weight,
    bloodGroup,
    primaryCarePhysician,
    currentMedications,
    medicalConditions,
    triggerRerender,
}) => {
    const { accessToken } = useContext(AppContext);

    const updateAppointment = async (status) => {
        try {
            const res = await updateAppointmentStatus(
                accessToken,
                appointmentId,
                status,
            );

            if (res.isSuccessful) {
                triggerRerender(prevState => prevState+1)
            }
        } catch (error) {
            console.error(error);
        }
    };

    const cancelAppointment = async () => {};

    return (
        <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex items-center mb-3">
                <img className="w-5 mr-1" src={calendar} alt="" />
                <p className="text-sm text-gray-400">
                    {date}, {startTime} - {endTime}
                </p>
            </div>

            <div className="grid grid-cols-12">
                <div className="flex flex-col items-center justify-center col-span-2 border-r border-gray-100">
                    <img
                        className="object-cover object-center w-24 rounded-full aspect-square"
                        src={imageUrl}
                        alt=""
                    />
                    <p className="mt-2 text-sm">{name}</p>
                    <p className="text-sm text-gray-400">{email}</p>
                </div>

                <div className="col-span-2 ml-2 border-r border-gray-100">
                    <div className="flex items-center mb-2">
                        <img className="w-5" src={healthProfile} alt="" />
                        <p className="ml-2 text-sm font-medium uppercase">
                            Health Profile
                        </p>
                    </div>

                    <div className="mt-3 space-y-3 text-sm">
                        <div className="flex">
                            <p className="mr-1 text-gray-400">Height: </p>
                            <p className="font-medium">
                                {parseFloat(height).toFixed(2)} cm
                            </p>
                        </div>
                        <div className="flex">
                            <p className="mr-1 text-gray-400">Weight: </p>
                            <p className="font-medium">
                                {parseFloat(weight).toFixed(2)} kg
                            </p>
                        </div>
                        <div className="flex">
                            <p className="mr-1 text-gray-400">Blood Type: </p>
                            <p className="font-medium">{bloodGroup}</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-6 mx-2 overflow-hidden border-r border-gray-100">
                    <div className="flex items-center mb-2">
                        <img className="w-5" src={note} alt="" />
                        <p className="ml-2 text-sm font-medium uppercase">
                            Medical History
                        </p>
                    </div>

                    <div className="mt-2 space-y-3 text-sm">
                        <div className="flex">
                            <p className="mr-1 text-gray-400">
                                Primary Care Physician:{" "}
                            </p>
                            <p className="font-medium">
                                {primaryCarePhysician ?? "N/A"}
                            </p>
                        </div>
                        <div className="flex truncate">
                            <p className="mr-1 text-gray-400">
                                Current Medications:{" "}
                            </p>
                            <p className="font-medium">
                                {currentMedications.map(({ name, dosage }) => (
                                    <span key={name}>
                                        {name}: {dosage},{" "}
                                    </span>
                                ))}
                            </p>
                        </div>

                        <div className="flex">
                            <p className="mr-1 text-gray-400">
                                Medical Conditions:{" "}
                            </p>
                            <p className="font-medium">
                                {medicalConditions.map((medicalCondition) => (
                                    <span key={medicalCondition}>
                                        {medicalCondition},{" "}
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center col-span-2 ml-2 space-y-6">
                    <button onClick={() => updateAppointment(1)} className="inline-flex items-center justify-center w-24 py-3 text-sm font-semibold text-teal-600 duration-200 bg-teal-300 rounded-full hover:bg-teal-400 hover:text-teal-800">
                        Confirm
                    </button>
                    <button onClick={() => updateAppointment(2)} className="inline-flex items-center justify-center w-24 py-3 text-sm font-semibold text-red-600 duration-200 rounded-full bg-red-50 hover:bg-red-200">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PendingAppointmentCard;
