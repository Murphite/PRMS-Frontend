import { useContext, useEffect, useState } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
} from "@nextui-org/react";

import { AppContext } from "../context/AppContext";
import { getPrescriptions } from "../api/admin/prescription";
import { getAppointments } from "../api/admin/appointments";

const AdminAppointmentsTable = () => {
    const { accessToken } = useContext(AppContext);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        async function appointments() {
            const res = await getAppointments(accessToken, 5);
            setAppointments(res.data.pageItems);
        }

        appointments();
    }, []);

    return (
        <div className="my-8">
            <div className="flex items-center justify-between mb-4">
                <p className="text-xl font-semibold">
                    Overview of scheduled appointments
                </p>

                <p className="text-gray-500">See all</p>
            </div>

            <div>
                <Table isStriped>
                    <TableHeader>
                        <TableColumn>DATE</TableColumn>
                        <TableColumn>TIME SLOT</TableColumn>
                        <TableColumn>PATIENT NAME</TableColumn>
                        <TableColumn>DOCTOR ASSIGNED</TableColumn>
                        <TableColumn>STATUS</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {appointments.map(
                            ({
                                id,
                                scheduledDate,
                                timeSlot,
                                firstName,
                                lastName,
                                physicianName,

                                status,
                            }) => (
                                <TableRow key={id}>
                                    <TableCell>{scheduledDate}</TableCell>
                                    <TableCell>{timeSlot} </TableCell>
                                    <TableCell>
                                        {firstName + " " + lastName}
                                    </TableCell>
                                    <TableCell>{physicianName}</TableCell>
                                    <TableCell>{status}</TableCell>
                                </TableRow>
                            ),
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default AdminAppointmentsTable;
