import React, { useEffect, useState } from "react";
import Carousel from "../../components/CarouselComponents";
import Sidebar from "../../components/Sidebar";
import axios from "axios";

const dashBoardPage = () => {
    const [categories, setCategories] = useState([]);

    async function fetchCategories() {
        try {
            const res = await axios.get(
                "https://localhost:7183/api/v1/category",
            );
            if (res.status === 200) {
                setCategories(res.data.data.slice(0, 7));
                console.log(res.data);
            }
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    }

    async function fetchAllCategories() {
        try {
            const res = await axios.get(
                "https://localhost:7183/api/v1/category",
            );
            setCategories(res.data.data);
            console.log(res.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    }
    useEffect(() => {
        // Call fetchCategories function when the component mounts
        fetchCategories();
    }, []);
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
                        className=" font-bold cursor-pointer"
                        onClick={fetchAllCategories}
                    >
                        See all
                    </p>
                </div>
                {
                    <div className=" grid grid-cols-7   gap-10 items-center mt-5">
                        {categories.length > 0 &&
                            categories.map((category) => (
                                <div className=" flex flex-col items-center justify-center" key={category.id}>
                                    <img
                                        src={`https://localhost:7183${category.imageUrl}`}
                                    />
                                    <p className=" capitalize mt-1">
                                        {category.name}
                                    </p>
                                </div>
                            ))}
                    </div>
                }


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
