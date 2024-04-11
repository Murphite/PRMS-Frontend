import Navbar from "../components/DashNavbar";
import Container from "../components/Container";
import AdminSidebar from "../components/AdminSidebar";

const AdminLayout = ({ children }) => {
    return (
        <div className="flex w-full min-h-screen bg-gray-50">
            <AdminSidebar />

            <div className="w-full">
                <div className="ml-64">
                    <Navbar />
                </div>
                <div className="my-6 ml-64">
                    <Container>{children}</Container>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
