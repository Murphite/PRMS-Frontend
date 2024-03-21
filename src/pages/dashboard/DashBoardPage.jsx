import React, { useEffect, useState } from "react";
import Carousel from "../../components/CarouselComponents";
import Sidebar from "../../components/Sidebar";
import { getCategories } from "../../api/dashboard";

const DashBoardPage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            const res = await getCategories();

            
                setCategories(res.data.data);
                console.log(res.data);
                setCategories([
                    {
                        id: "040ce726-cd6e-4661-bd0b-4ea439b7748c",
                        name: "general",
                        imageUrl:
                            "https://localhost:7183/assets/vectors/general.svg",
                    },
                    {
                        id: "30f73c7d-99df-4494-b61a-b6d72ed0c0b7",
                        name: "gastroenterologist",
                        imageUrl:
                            "https://localhost:7183/assets/vectors/gastroenterologist.svg",
                    },
                    {
                        id: "33d11ab6-371a-4c93-a83d-3354f1da6d9a",
                        name: "neurology",
                        imageUrl:
                            "https://localhost:7183/assets/vectors/neurology.svg",
                    },
                    {
                        id: "6e614970-320a-47c0-9bcc-335df547c7bb",
                        name: "pulmonologist",
                        imageUrl:
                            "https://localhost:7183/assets/vectors/pulmonologist.svg",
                    },
                    {
                        id: "a07b88cb-d55a-4d27-8404-edf72998acb0",
                        name: "dentistry",
                        imageUrl:
                            "https://localhost:7183/assets/vectors/dentistry.svg",
                    },
                    {
                        id: "b68e9680-ee8f-4bd2-bb97-dd0040fe9bcf",
                        name: "vaccination",
                        imageUrl:
                            "https://localhost:7183/assets/vectors/vaccination.svg",
                    },
                    {
                        id: "cc639542-7d1e-4bcd-b619-10e2215d7c20",
                        name: "laboratories",
                        imageUrl:
                            "https://localhost:7183/assets/vectors/laboratories.svg",
                    },
                    {
                        id: "de204673-f286-40c3-988b-d1bf146e5490",
                        name: "cardiologist",
                        imageUrl:
                            "https://localhost:7183/assets/vectors/cardiologist.svg",
                    },
                ]);

             
            }

            // async function fetchAllCategories() {
            //     const res = await getCategories();
    
                
            //         setCategories(res.data.data);
            //         console.log(res.data);
            //         setCategories([
            //             {
            //                 id: "040ce726-cd6e-4661-bd0b-4ea439b7748c",
            //                 name: "general",
            //                 imageUrl:
            //                     "https://localhost:7183/assets/vectors/general.svg",
            //             },
            //             {
            //                 id: "30f73c7d-99df-4494-b61a-b6d72ed0c0b7",
            //                 name: "gastroenterologist",
            //                 imageUrl:
            //                     "https://localhost:7183/assets/vectors/gastroenterologist.svg",
            //             },
            //             {
            //                 id: "33d11ab6-371a-4c93-a83d-3354f1da6d9a",
            //                 name: "neurology",
            //                 imageUrl:
            //                     "https://localhost:7183/assets/vectors/neurology.svg",
            //             },
            //             {
            //                 id: "6e614970-320a-47c0-9bcc-335df547c7bb",
            //                 name: "pulmonologist",
            //                 imageUrl:
            //                     "https://localhost:7183/assets/vectors/pulmonologist.svg",
            //             },
            //             {
            //                 id: "a07b88cb-d55a-4d27-8404-edf72998acb0",
            //                 name: "dentistry",
            //                 imageUrl:
            //                     "https://localhost:7183/assets/vectors/dentistry.svg",
            //             },
            //             {
            //                 id: "b68e9680-ee8f-4bd2-bb97-dd0040fe9bcf",
            //                 name: "vaccination",
            //                 imageUrl:
            //                     "https://localhost:7183/assets/vectors/vaccination.svg",
            //             },
            //             {
            //                 id: "cc639542-7d1e-4bcd-b619-10e2215d7c20",
            //                 name: "laboratories",
            //                 imageUrl:
            //                     "https://localhost:7183/assets/vectors/laboratories.svg",
            //             },
            //             {
            //                 id: "de204673-f286-40c3-988b-d1bf146e5490",
            //                 name: "cardiologist",
            //                 imageUrl:
            //                     "https://localhost:7183/assets/vectors/cardiologist.svg",
            //             },
            //         ]);
    
                 
            //     }

            
        
                // fetchAllCategories();
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
                        className="text-gray-500 cursor-pointer"
                        onClick={getCategories}
                        
                    >
                        See all
                    </p>
                </div>
                {
                    <div className=" grid grid-cols-8   gap-10 items-center mt-5 cursor-pointer">
                        {categories.length > 0 &&
                            categories.map((category) => (
                                <div
                                    className=" flex flex-col items-center justify-center"
                                    key={category.id}
                                >
                                    <img src={category.imageUrl} />
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

export default DashBoardPage;
