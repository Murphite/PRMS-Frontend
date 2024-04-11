import Sidebar from "../components/Sidebar";
import Navbar from "../components/DashNavbar";
import Container from "../components/Container";

const DashLayout = ({ children }) => {
    return (
        <div className="flex w-full bg-gray-100">
            <Sidebar />

            <div className="w-full">
                <Navbar />
                <div className="mt-6">
                    <Container>{children}</Container>
                </div>
            </div>
        </div>
    );
};

export default DashLayout;
