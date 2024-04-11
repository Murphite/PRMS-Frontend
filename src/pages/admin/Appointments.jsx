import { useContext, useEffect, useState } from "react";

import AdminLayout from "../../layouts/AdminLayout";
import { AppContext } from "../../context/AppContext";
import { getPendingAppointments } from "../../api/admin/appointments";
import PendingAppointmentCard from "../../components/PendingAppointmentCard";

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const { accessToken } = useContext(AppContext);
    const [rerenderKey, setRerenderKey] = useState(1)

    useEffect(() => {
        async function getAppointments() {
            const res = await getPendingAppointments(accessToken);
            setAppointments(res.data.pageItems);
        }

        getAppointments();
    }, [rerenderKey]);

    return (
        <AdminLayout>
            <div className="space-y-5">
                {appointments.map(
                    ({
                        id,
                        patientName,
                        patientEmail,
                        patientImageUrl,
                        date,
                        patientBloodGroup,
                        patientHeight,
                        patientWeight,
                        primaryPhysicianName,
                        diagnosis,
                        medicationUsage,
                        patientMedicalDetails,
                        startTime,
                        endTime,
                    }) => (
                        <PendingAppointmentCard
                            key={id}
                            appointmentId={id}
                            name={patientName}
                            email={patientEmail}
                            imageUrl={patientImageUrl}
                            date={date}
                            bloodGroup={patientBloodGroup}
                            height={patientHeight}
                            weight={patientWeight}
                            primaryCarePhysician={primaryPhysicianName}
                            currentMedications={medicationUsage}
                            medicalConditions={diagnosis}
                            patientMedicalDetails={patientMedicalDetails}
                            startTime={startTime}
                            endTime={endTime}
                            triggerRerender={setRerenderKey}
                        />
                    ),
                )}
            </div>
        </AdminLayout>
    );
};

export default Appointments;
