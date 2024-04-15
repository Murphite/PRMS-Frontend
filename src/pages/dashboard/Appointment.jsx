import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { AppContext } from "../../context/AppContext";
import DashNavbar from "../../components/DashNavbar";
import { Completed, Physicianz, Upcoming} from "../../api/dashboard/appointment";



const Appointment = () => {
    const { accessToken } = useContext(AppContext);
    const [physicians, setPhysicians] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [Cancelled, setCancelled] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const physRes = await Physicianz(accessToken);
            setPhysicians(physRes.data.data.result.pageItems);
        }

        async function fetchDa() {
            const physRes = await Upcoming(accessToken);
            setUpcoming(physRes.data.data.result.pageItems);
        }

        async function fetchCompleted() {
            const physRes = await Completed
            setCompleted(physRes.data.data.result.pageItems);
        }

       fetchData();
       fetchDa();
       fetchCompleted();
       
    }, []);

    const handleClick = () => {
        // Use the upcoming state variable here
        console.log(upcoming);
        // Or perform any other action you want with upcoming
    };

    const handleClickz = () => {
        // Use the upcoming state variable here
        console.log(completed);
        // Or perform any other action you want with upcoming
    };

    return (
        <div className=" flex">
            <Sidebar />
            <div className="p-6 max-w-screen sm:p-5 md:p-10 mx-auto">
                <DashNavbar />
                <div className=" flex mt-4 space-x-3 cursor-pointer ">
                        <p
                            className=" relative border border-teal-500 bg-white text-teal-500 rounded-full w-[14rem] h-[2rem]  cursor-pointer text-center justify-center hover:bg-teal-500 hover:text-white py-1"
                            onClick={handleClick}
                            
                        >
                         
                            Upcoming
                        </p>
<div>
    
</div>

                        <p className=" bg-white border border-teal-500 text-teal-500  rounded-full w-[14rem] h-[2rem]  cursor-pointer text-center  hover:bg-teal-500 hover:text-white py-1" onClick={handleClickz}>
                            {" "}
                            Completed
                        </p>
                        <p className="  bg-white border border-teal-500 text-teal-500 rounded-full w-[14rem] h-[2rem]  cursor-pointer text-center  hover:bg-teal-500 hover:text-white py-1">
                            {" "}
                            Cancelled
                        </p>
                    </div>
                <div className=" grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 w-[67rem] mt-10 space-x-4">
                   

                    {physicians &&
                        physicians.length > 0 &&
                        physicians.map((physician, index) => (
                            <div
                                key={index}
                                className=" items-center  space-x-3  rounded-lg border "
                            >
                                <div className="flex space-x-2  ">
                                    <img
                                        className="object-cover object-center w-32 rounded-lg aspect-square"
                                        src={physician.physicianImageUrl}
                                    />
                                    <div className=" mt-3">
                                        <p className="font-semibold">
                                            {physician.name}
                                        </p>
                                        <p className="text-gray-500 mt-1">
                                            {physician.physicianMedicalCenter}
                                        </p>
                                        <p className="text-gray-500 mt-1">
                                            {physician.physicianSpeciality}
                                        </p>
                                        <p className="text-gray-500 mt-1">
                                            {physician.physicianAddress}
                                        </p>
                                    </div>
                                </div>
                                <div className=" flex mt-5 space-x-5 justify-center">
                                    <p
                                        className=" relative bg-gray-200 text-teal-500 rounded-full w-[14rem] h-[2rem]  cursor-pointer text-center justify-center py-1"
                                        onClick={"#"}
                                    >
                                        {" "}
                                        Cancel
                                    </p>
                                    <p className=" bg-teal-500 text-white rounded-full w-[14rem] h-[2rem]  cursor-pointer text-center py-1  ">
                                        {" "}
                                        Reschedule
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Appointment;
