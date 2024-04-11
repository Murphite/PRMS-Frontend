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

const AdminPrescriptionsTable = () => {
    const { accessToken } = useContext(AppContext);
    const [prescriptions, setPrescriptions] = useState([]);

    useEffect(() => {
        async function prescriptions() {
            const res = await getPrescriptions(accessToken, 5);
            setPrescriptions(res.data.pageItems);
        }

        prescriptions();
    }, []);

    return (
        <div className="my-8">
            <div className="flex items-center justify-between mb-4">
                <p className="text-xl font-semibold">
                    Overview of prescribed medications
                </p>

                <p className="text-gray-500">See all</p>
            </div>

            <div>
                <Table isStriped>
                    <TableHeader>
                        <TableColumn>DATE</TableColumn>
                        <TableColumn>PATIENT NAME</TableColumn>
                        <TableColumn>MEDICATION</TableColumn>
                        <TableColumn>DOSAGE</TableColumn>
                        <TableColumn>INSTRUCTIONS</TableColumn>
                        <TableColumn>STATUS</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {prescriptions.map(
                            ({
                                medicationId,
                                date,
                                patientName,
                                medicationName,
                                dosage,
                                instructions,
                                medicationStatus,
                            }) => (
                                <TableRow key={medicationId}>
                                    <TableCell>{date}</TableCell>
                                    <TableCell>{patientName}</TableCell>
                                    <TableCell>{medicationName}</TableCell>
                                    <TableCell>{dosage}</TableCell>
                                    <TableCell>
                                        {instructions.length > 50
                                            ? instructions.substring(0, 50) +
                                              "..."
                                            : instructions}
                                    </TableCell>
                                    <TableCell>{medicationStatus}</TableCell>
                                </TableRow>
                            ),
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default AdminPrescriptionsTable;
