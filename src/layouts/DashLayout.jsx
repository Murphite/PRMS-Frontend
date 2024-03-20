import React from "react";
import Sidebar from "../components/Sidebar";

const DashLayout = ({ children }) => {
    return (
        <div className="flex bg-gray-100 w-full">
            <Sidebar />

            <div className="w-full">{children}</div>
        </div>
    );
};

export default DashLayout;
