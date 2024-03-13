import React from "react";
import Carousel from "../../components/CarouselComponents";
import Sidebar from "../../components/Sidebar";
import CarouselComponents from "../../components/CarouselComponents";

const dashBoardPage = () => {
    return (
        <div className=" flex">
            <Sidebar />
            <div className=" w-[80rem] h-[63rem] mt-24 border border-solid border-teal-600 ">
                <div className=" ml-72 justify-items-center">
                    <Carousel />
                </div>
                <div className=" mt-[1rem] flex space-x-[67rem]">
                    <p className=" font-bold cursor-pointer ml-5">
                        Categories{" "}
                    </p>
                    <p className="text-gray-500 cursor-pointer ml-5">See all</p>
                </div>
                <div className=" mt-[2rem] flex relative  space-x-16 ml-16">
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
                </div>
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
            </div>
        </div>
    );
};

export default dashBoardPage;
