import { useContext } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

import DashImg from "../assets/images/home.png";
import CalImg from "../assets/images/calender.png";
import DocImg from "../assets/images/healthdoctors.png";
import MapImg from "../assets/images/map.png";
import FavImg from "../assets/images/lovely.png";
import ProfImg from "../assets/images/profile.png";
import Logimg from "../assets/images/logout.png";
import HomeImg from "../assets/images/Health.png";
import { AppContext } from "../context/AppContext";

const Sidebar = () => {
    const { setAccessToken } = useContext(AppContext);
    const location = useLocation();
    const navigate = useNavigate();

    const links = [
        [
            { id: 1, title: "Dashboard", comp: "/dashboard", icon: DashImg },
            {
                id: 2,
                title: "Appointment",
                comp: "/dashboard/appointments",
                icon: CalImg,
            },
            {
                id: 3,
                title: "Doctors",
                comp: "/dashboard/physician",
                icon: DocImg,
            },
            // { id: 4, title: "Map", comp: "Map", icon: MapImg },
            // { id: 5, title: "Favorite", comp: "Favorite", icon: FavImg },
        ],
        [{ id: 6, title: "Profile", comp: "Profile", icon: ProfImg }],
    ];

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        setAccessToken("");
        navigate("/");
    };

    return (
        <aside className="fixed z-50 w-64 h-screen p-4 overflow-y-auto bg-white">
            <Link
                to="/"
                className="block px-2 pb-4 mb-6 border-b-2 border-b-gray-200"
            >
                <img src={HomeImg} alt="Home Logo" />
            </Link>

            <ul className="flex flex-col gap-4">
                <p className="text-gray-400 text-md md-4">Overview</p>
                {links[0].map((items) => {
                    return (
                        <Link
                            to={items.comp}
                            key={items.id}
                            className={`flex gap-4 px-2 py-3 rounded-lg cursor-pointer ${
                                location.pathname === items.comp
                                    ? "bg-[#009688]/[0.1] text-[#009688] font-bold"
                                    : ""
                            }`}
                        >
                            <img src={items.icon} alt={items.title} />
                            <p>{items.title}</p>
                        </Link>
                    );
                })}

                <p className="text-gray-400 text-md">Others</p>
                {/* {links[1].map((items) => {
                    return (
                        <Link
                            key={items.id}
                            to={items.comp}
                            className={`flex gap-4 px-2 py-3 rounded-lg cursor-pointer ${
                                location.pathname === items.comp
                                    ? "bg-[#009688]/[0.1] text-[#009688] text-bold"
                                    : ""
                            }`}
                        >
                            <img src={items.icon} alt={items.title} />
                            <p>{items.title}</p>
                        </Link>
                    );
                })} */}

                <span
                    onClick={handleLogout}
                    className="flex gap-4 px-2 py-3 rounded-lg cursor-pointer"
                >
                    <img src={Logimg} alt="logout" />
                    <p>Logout</p>
                </span>
            </ul>
        </aside>
    );
};

export default Sidebar;
