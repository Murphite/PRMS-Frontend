import React from "react";
import Sidebar from "../components/Sidebar";

const DashLayout = ({ children }) => {
    return (
        <div className="flex bg-gray-100">
            <Sidebar />

            <div>{children}</div>
        </div>
    );
};

export default DashLayout;
