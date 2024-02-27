import React from "react";
import Sidebar from "../components/Sidebar";

const DashLayout = ({ children }) => {
    return (
        <div>
            <Sidebar />

            <div>{children}</div>
        </div>
    );
};

export default DashLayout;
