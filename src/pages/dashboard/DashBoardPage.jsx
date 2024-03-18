import React, { useEffect, useState } from "react";
import Carousel from "../../components/CarouselComponents";
import Sidebar from "../../components/Sidebar";
// import { getCategories } from "../../api/dashboard";


const dashBoardPage = () => {
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        try {
            const res = await fetch("https://localhost:7183/api/v1/category");
            const data = await res.json();
            setCategories(data.data)
            console.log(data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(()=>{
        getCategories()
    },[])
    return (
        <div className=" flex">
            <Sidebar />
            <div className=" w-[80rem] h-[63rem] mt-24">
                <div className=" ml-72 justify-items-center">
                    <Carousel />
                </div>
                <div className=" mt-[1rem] flex space-x-[67rem]">
                    <p className=" font-bold cursor-pointer ml-5">Categories</p>
                    <p
                        className="text-gray-500 cursor-pointer ml-5"
                        onClick={getCategories}
                    >
                        <ul class= "flex space-x-10 mt-10 ml-32">
                            {categories.map((category) => (
                                <li key={category.id}>
                                    <img src={category.imageUrl}/>
                                    <p>{category.name}</p>
                                    
                                </li>
                            ))}
                        </ul>
                        See all
                    </p>
                </div>
                {/* <div className=" mt-[2rem] flex relative  space-x-16 ml-16">
                    <div className=" cursor-pointer">
                        <img
                            src="src/assets/vectors/Tab 01.svg"
                            onClick={"#"}
                        />
                    </div>
                    <div className=" cursor-pointer">
                        <img
                            src="src/assets/vectors/Tab 02.svg"
                            onClick={"#"}
                        />
                    </div>
                    <div className=" cursor-pointer">
                        <img
                            src="src/assets/vectors/Tab 03.svg"
                            onClick={"#"}
                        />
                    </div>
                    <div className=" cursor-pointer">
                        <img
                            src="src/assets/vectors/Tab 04.svg"
                            onClick={"#"}
                        />
                    </div>
                    <div className=" cursor-pointer">
                        <img
                            src="src/assets/vectors/Tab 05.svg"
                            onClick={"#"}
                        />
                    </div>
                    <div className=" cursor-pointer">
                        <img
                            src="src/assets/vectors/Tab 06.svg"
                            onClick={"#"}
                        />
                    </div>
                    <div className=" cursor-pointer">
                        <img
                            src="src/assets/vectors/Tab 07.svg"
                            onClick={"#"}
                        />
                    </div>
                    <div className=" cursor-pointer">
                        <img
                            src="src/assets/vectors/Tab 08.svg"
                            onClick={"#"}
                        />
                    </div>
                </div> */}
                <div className=" flex space-x-10 mt-10 ml-32 ">
                    <div className=" cursor-pointer">
                        <img
                            src="src/assets/vectors/Frame 1000001042.svg"
                            onClick={"#"}
                        />
                    </div>
                    <div className=" cursor-pointer">
                        <img
                            src="src/assets/vectors/Frame 1000001043.svg"
                            onClick={"#"}
                        />
                    </div>
                </div>

                <div className="  mt-14">
                    <div className="flex space-x-[65rem]">
                        <p className=" font-bold">Nearby Medical Centre</p>
                        <p className="text-gray-500 cursor-pointer">see all </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default dashBoardPage;
