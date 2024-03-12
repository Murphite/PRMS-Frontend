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
                        <img src="src/assets/images/Tab 01.png" onClick={"#"} />
                    </div>
                    <div className=" cursor-pointer">
                        <img
                            src="src/assets/images/Tab 02 (1).png"
                            onClick={"#"}
                        />
                    </div>
                    <div className=" cursor-pointer">
                        <img src="src/assets/images/Tab 03.png" onClick={"#"} />
                    </div>
                    <div className=" cursor-pointer">
                        <img src="src/assets/images/Tab 04.png" onClick={"#"} />
                    </div>
                    <div className=" cursor-pointer">
                        <img src="src/assets/images/Tab 05.png" onClick={"#"} />
                    </div>
                    <div className=" cursor-pointer">
                        <img src="src/assets/images/Tab 06.png" onClick={"#"} />
                    </div>
                    <div className=" cursor-pointer">
                        <img src="src/assets/images/Tab 07.png" onClick={"#"} />
                    </div>
                    <div className=" cursor-pointer">
                        <img src="src/assets/images/Tab 08.png" onClick={"#"} />
                    </div>
                </div>
                <div className=" flex space-x-10 mt-10 ml-32 ">
                    <div className=" cursor-pointer">
                        <img
                            src="src/assets/images/Frame 1000001042.png"
                            onClick={"#"}
                        />
                    </div>
                    <div className=" cursor-pointer">
                        <img
                            src="src/assets/images/Frame 1000001043.png"
                            onClick={"#"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default dashBoardPage;
