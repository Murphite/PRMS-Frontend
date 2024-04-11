import { useContext, useEffect, useState } from "react";

import AdminLayout from "../../layouts/AdminLayout";
import { getPatients } from "../../api/admin/patient";
import { AppContext } from "../../context/AppContext";
import PatientCard from "../../components/PatientCard";
import { Link } from "react-router-dom";

const PatientsList = () => {
    const [patients, setPatients] = useState([]);
    const { accessToken } = useContext(AppContext);

    useEffect(() => {
        async function patients() {
            const res = await getPatients(accessToken);
            setPatients(res.data.pageItems);
        }
        patients();
    }, []);

    return (
        <AdminLayout>
            <div className="px-10 py-6">
                <div className="flex justify-end mt-8">
                    {/* <button className="w-36 bg-[#009688] py-3 px-4 flex justify-between rounded-3xl">
                        <img className="h-5" src={PlusImg} alt="plus" />
                        <p className="text-sm text-white">Add Patient</p>
                    </button> */}
                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-2 xl:grid-cols-3">
                    {patients.map(
                        ({
                            userId,
                            patientId,
                            startTime,
                            endTime,
                            appointmentDate,
                            imageUrl,
                            patientName,
                            email,
                            noOfAppointments,
                        }) => (
                            <Link
                                key={patientId}
                                to={`/admin/patients/${userId}`}
                                className="block"
                            >
                                <PatientCard
                                    date={appointmentDate}
                                    startTime={startTime}
                                    endTime={endTime}
                                    userImg={imageUrl}
                                    fullName={patientName}
                                    email={email}
                                    noOfVisits={noOfAppointments}
                                />
                            </Link>
                        ),
                    )}
                </div>
            </div>
        </AdminLayout>
    );
};

export default PatientsList;
