import AdminAppointmentsTable from "../../components/AdminAppointmentsTable";
import AdminPrescriptionsTable from "../../components/AdminPrescriptionsTable";
import AdminLayout from "../../layouts/AdminLayout";

const Index = () => {
    return (
        <AdminLayout>
            <AdminPrescriptionsTable />
            <AdminAppointmentsTable />
        </AdminLayout>
    );
};

export default Index;
