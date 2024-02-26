import DashImg from "../assets/images/home.png";
import CalImg from "../assets/images/calender.png";
import DocImg from "../assets/images/healthdoctors.png";
import MapImg from "../assets/images/map.png";
import FavImg from "../assets/images/lovely.png";
import ProfImg from "../assets/images/profile.png";
import Logimg from "../assets/images/logout.png";
import HomeImg from "../assets/images/Health.png";
import {Link} from "react-router-dom";
import { useState } from "react";


const Sidebar = () => {
    const [selectedPage,setSelectedPage]=useState('Dashboard')
    function handleSelect(page){
        setSelectedPage(page)
    }
    const links = [[
        { id: 1, title: "Dashboard", comp: "/", icon: DashImg },
        { id: 2, title: "Appointment", comp: "Appointment", icon: CalImg },
        { id: 3, title: "Doctors", comp: "Doctors", icon: DocImg },
        { id: 4, title: "Map", comp: "Map", icon: MapImg },
        { id: 5, title: "Favorite", comp: "Favorite", icon: FavImg },
      ],
      [
        { id: 6, title: "Profile", comp: "Profile", icon: ProfImg },
        { id: 7, title: "Logout", comp: "Logout", icon: Logimg },
      ],]
      
      
  return (
    <aside className="p-4">
      <div className="border-b-2 px-2 border-b-gray-200 mb-6 pb-4">
        <img src={HomeImg} alt="Home Logo" />
      </div>

      <ul className="flex flex-col gap-4">
        <p className="text-gray-400 text-md md-4">Overview</p>
        {links[0].map((items) => {
          return (
            <Link 
              to={items.comp}
              key={items.id}
              className={`flex gap-4 px-2 py-3 rounded-lg cursor-pointer ${
                selectedPage === items.title
                  ? "bg-[#009688]/[0.1] text-[#009688] font-bold"
                  : ""
              }`}
              onClick={() => handleSelect(items.title)}
            >
              <img src={items.icon} alt={items.title} />
              <p>{items.title}</p>
            </Link>
          );
        })}

        <p className="text-gray-400 text-md">Others</p>
        {links[1].map((items) => {
          return (
            <Link
              key={items.id}
              to={items.comp}
              className={`flex gap-4 px-2 py-3 rounded-lg cursor-pointer ${
                selectedPage === items.title
                  ? "bg-[#009688]/[0.1] text-[#009688] text-bold"
                  : ""
              }`}
              onClick={() => handleSelect(items.title)}
            >
              <img src={items.icon} alt={items.title} />
              <p>{items.title}</p>
            </Link>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
