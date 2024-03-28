import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { getMedicationHistory } from "../../api/medicalHistory";


const GetMedical = () => {
    const [medicalHistory, setMedicalHistory] = useState([]);

    useEffect(() => {
        async  function fetchApplicationData ()  {
            try {
                const response = await getMedicationHistory();
                setMedicalHistory(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching medication history:", error);
            }
        };

        fetchApplicationData();
    }, []);

    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full max-w-screen-lg mx-auto mt-24">

                <div className="mt-[1rem] ">
                    <p className="font-bold cursor-pointer ml-5 text-2xl">Prescribed Medications History</p>
                    
                </div>
                <div className="overflow-x-auto mt-5">
                    <table className="table border-collapse border border-gray-200 w-full">
                        <thead>
                            <tr>
                                <th className="px-8 py-2 border border-gray-200">Date</th> 
                                <th className="px-4 py-2 border border-gray-200">Physician</th>
                                <th className="px-4 py-2 border border-gray-200">Medication</th>
                                <th className="px-4 py-2 border border-gray-200">Dosage</th>
                                <th className="px-4 py-2 border border-gray-200">Instructions</th>
                                <th className="px-4 py-2 border border-gray-200">Status</th>
                                <th className="px-8 py-2 border border-gray-200"></th>
                            </tr>
                        </thead>
                        <tbody>
                           
                           
                            {medicalHistory.length > 0 &&
                            medicalHistory.map((category) => (
                                <tr key={category.id}>
                                    <td className="px-8 py-2 border border-gray-200">{category.dateCreated}</td> 
                                    <td className="px-4 py-2 border border-gray-200">{category.Physician}</td>
                                    <td className="px-4 py-2 border border-gray-200">{category.Medication}</td>
                                    <td className="px-4 py-2 border border-gray-200">{category.Dosage}</td>
                                    <td className="px-4 py-2 border border-gray-200">{category.Instructions}</td>
                                    <td className="px-4 py-2 border border-gray-200">{category.Status}</td>
                                    <td className="px-8 py-2 border border-gray-200 font-bold text-green-500 cursor-pointer " onClick={"#"}> View</td>
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

