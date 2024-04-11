import React, { useState, useEffect } from "react";
import { getPrescriptionDetails } from "../api/admin/prescriptionService";

const PrescriptionOverviewTableAdmin = () => {
    const [prescriptions, setPrescriptions] = useState([]);

    useEffect(() => {
        const fetchPrescriptions = async (token, patientUserId) => {
            try {
                const data = await getPrescriptionDetails(token, patientUserId);
                setPrescriptions(data);
            } catch (error) {
                console.error("Error fetching prescription details:", error);
            }
        };
        fetchPrescriptions();
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case "Approved":
                return "text-green-500";
            case "Rejected":
                return "text-red-500";
            case "Pending Review":
                return "text-yellow-500";
            default:
                return "text-black";
        }
    };

    return (
        <div className="w-full p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">
                    Overview of prescribed medications
                </h2>
                <p className="text-sm text-gray-400">See All</p>
            </div>
            <table className="w-full bg-gray-50">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-center text-gray-400">
                            DATE
                        </th>
                        <th className="px-4 py-2 text-center text-gray-400">
                            PATIENT NAME
                        </th>
                        <th className="px-4 py-2 text-center text-gray-400">
                            MEDICATION
                        </th>
                        <th className="px-4 py-2 text-center text-gray-400">
                            DOSAGE
                        </th>
                        <th className="px-4 py-2 text-center text-gray-400">
                            INSTRUCTIONS
                        </th>
                        <th className="px-4 py-2 text-center text-gray-400">
                            STATUS
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* {prescriptions.map((prescription, index) => (
                        <tr
                            key={index}
                            className={
                                index % 2 === 0 ? "bg-white" : "bg-gray-50"
                            }
                        >
                            <td className="px-4 py-2 text-center">
                                {prescription.date}
                            </td>
                            <td className="px-4 py-2 text-center">
                                {prescription.patientName}
                            </td>
                            <td className="px-4 py-2 text-center">
                                {prescription.medication}
                            </td>
                            <td className="px-4 py-2 text-center">
                                {prescription.dosage}
                            </td>
                            <td className="px-4 py-2 text-center">
                                {prescription.instructions}
                            </td>
                            <td
                                className={`px-4 py-2 font-bold ${getStatusColor(
                                    prescription.status,
                                )} text-center`}
                            >
                                {prescription.status}
                            </td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
        </div>
    );
};

export default PrescriptionOverviewTableAdmin;
