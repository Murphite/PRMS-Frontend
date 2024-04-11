import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import DashImg from "../assets/vectors/adminSbDashboard.svg";
import AppImg from "../assets/vectors/adminSbAppointment.svg";
import PatImg from "../assets/vectors/adminSbPatients.svg";
import CalImg from "../assets/vectors/adminSbCalendar.svg";
import LogImg from "../assets/vectors/adminSbLogout.svg";
import HomeImg from "../assets/vectors/adminSbHealth.svg";
import { AppContext } from "../context/AppContext";

const AdminSidebar = () => {
    const [selectedPage, setSelectedPage] = useState("Dashboard");
    const { setAccessToken } = useContext(AppContext);
    const navigate = useNavigate();

    function handleSelect(page) {
        setSelectedPage(page);
    }

    const links = [
        [
            { id: 1, title: "Dashboard", comp: "/admin", icon: DashImg },
            {
                id: 2,
                title: "Appointment",
                comp: "/admin/appointments",
                icon: AppImg,
            },
            { id: 3, title: "Patients", comp: "/admin/patients", icon: PatImg },
            { id: 4, title: "Calendar", comp: "/admin/calendar", icon: CalImg },
        ],
        [
            // { id: 6, title: "Profile", comp: "Profile", icon: ProfImg },
            { id: 7, title: "Logout", comp: "Logout", icon: LogImg },
        ],
    ];

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        setAccessToken("");
        navigate("/");
    };

    return (
        <aside className="fixed w-64 h-screen p-4 overflow-y-auto bg-white">
            <div className="px-2 pb-4 mb-6 border-b-2 border-b-gray-200">
                <img src={HomeImg} alt="Home Logo" />
            </div>

            <ul className="flex flex-col gap-4">
                <p className="text-gray-400 text-md md-4">Overview</p>
                {links[0].map((items) => (
                    <NavLink
                        to={items.comp}
                        key={items.id}
                        className={`flex gap-4 px-2 py-3 rounded-lg cursor-pointer ${
                            location.pathname === items.comp
                                ? "bg-[#009688]/[0.1] text-[#009688] font-bold"
                                : ""
                        }`}
                        onMouseEnter={() => handleSelect(items.title)}
                        onMouseLeave={() => handleSelect(selectedPage)}
                    >
                        <img src={items.icon} alt={items.title} />
                        <p>{items.title}</p>
                    </NavLink>
                ))}

                <p className="text-gray-400 text-md">Others</p>
                {/* {links[1].map((items) => (
                    <NavLink
                        key={items.id}
                        to={items.comp}
                        className={`flex gap-4 px-2 py-3 rounded-lg cursor-pointer navlink-hover`}
                        activeClassName="navlink-active"
                        onMouseEnter={() => handleSelect(items.title)}
                        onMouseLeave={() => handleSelect(selectedPage)}
                    >
                        <img src={items.icon} alt={items.title} />
                        <p>{items.title}</p>
                    </NavLink>
                ))} */}

                <span
                    onClick={handleLogout}
                    className="flex gap-4 px-2 py-3 rounded-lg cursor-pointer"
                >
                    <img src={LogImg} alt="logout" />
                    <p>Logout</p>
                </span>
            </ul>
        </aside>
    );
};

export default AdminSidebar;
