import React, { useEffect, useState, useContext } from "react";
import Sidebar from "../../components/Sidebar";
import { getMedicationHistory } from "../../api/medicalHistory";
import { AppContext } from "./../../context/AppContext";
import PrescriptionModal from "../../components/PrescriptionModal";
import { useNavigate } from "react-router-dom";

const GetMedical = () => {
    const [medicalHistory, setMedicalHistory] = useState([]);
    const { accessToken } = useContext(AppContext);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate({ PrescriptionModal });
    };

    useEffect(() => {
        try {
            getMedicationHistory(accessToken).then((res) => {
                if (res) {
                    console.log(res, "res");
                    setMedicalHistory(res);
                }
            });
        } catch (error) {
            console.error("Error fetching medication history:", error);
        }
    }, []);
    console.log(medicalHistory, "medical");
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full max-w-screen-lg mt-24 mx-auto">
                <div className="mt-[1rem] ">
                    <p className="font-bold cursor-pointer ml-5 text-2xl">
                        Prescribed Medications History
                    </p>
                </div>
                <div className="overflow-x-auto mt-5 w-[72rem]  mx-auto ">
                    <table className="table border-collapse border border-gray-200 mx-auto">
                        <thead>
                            <tr>
                                <th className="px-8 py-2 border border-gray-200">
                                    Date
                                </th>
                                <th className="px-4 py-2 border border-gray-200">
                                    Physician
                                </th>
                                <th className="px-4 py-2 border border-gray-200">
                                    Medication
                                </th>
                                <th className="px-4 py-2 border border-gray-200">
                                    Dosage
                                </th>
                                <th className=" px-28 py-2 border border-gray-200">
                                    Instructions
                                </th>
                                <th className="px-4 py-2 border border-gray-200">
                                    Duration
                                </th>
                                <th className="px-4 py-2 border border-gray-200">
                                    Frequency
                                </th>
                                <th className="px-4 py-2 border border-gray-200">
                                    Status
                                </th>
                                <th className="px-8 py-2 border border-gray-200"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {medicalHistory.length > 0 &&
                                medicalHistory.map((category, index) => (
                                    <tr key={index}>
                                        <td className="px-8 py-2 border border-gray-200">
                                            {category.date}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-200">
                                            {category.physicianName}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-200">
                                            {category.medicationName}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-200">
                                            {category.dosage}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-200">
                                            {category.instruction}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-200">
                                            {category.duration}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-200">
                                            {category.frequency}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-200">
                                            {category.status}
                                        </td>
                                        <td
                                            className="px-8 py-2 border border-gray-200 font-bold text-green-500 cursor-pointer "
                                            onClick={handleClick}
                                        >
                                            {" "}
                                            View
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default GetMedical;
