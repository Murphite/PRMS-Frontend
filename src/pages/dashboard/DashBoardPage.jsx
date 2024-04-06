import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Carousel from "../../components/CarouselComponents";
import { getCategories } from "../../api/dashboard";
import DashLayout from "../../layouts/DashLayout";

const DashBoardPage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const res = await getCategories();
                setCategories(res.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        }

        fetchCategories();
    }, []);

    return (
        <DashLayout>
            <div className="mt-24">
                <div className="justify-items-center">{/* <Carousel /> */}</div>
                <div className=" mt-[1rem] flex space-x-[67rem]">
                    <p className="ml-5 font-bold cursor-pointer ">Categories</p>
                </div>

                <div className="grid items-center grid-cols-8 gap-10 mt-5 cursor-pointer ">
                    {categories.length > 0 &&
                        categories.map((category) => (
                            <div
                                className="flex flex-col items-center justify-center "
                                key={category.id}
                            >
                                <img src={category.imageUrl} />
                                <p className="mt-1 capitalize ">
                                    {category.name}
                                </p>
                            </div>
                        ))}
                </div>

                <div className="flex mt-10 ml-32 space-x-10 ">
                    <div className="cursor-pointer ">
                        {/* <img
                            src="src/assets/vectors/Frame 1000001042.svg"
                            onClick={"#"}
                        /> */}
                        <Link to="/dashboard/patients/new">
                            <img
                                src="src/assets/vectors/Frame 1000001042.svg"
                                alt="Descriptive image alt text" // Add descriptive alt text for accessibility
                            />
                        </Link>
                    </div>
                    <div className="cursor-pointer ">
                        <img
                            src="src/assets/vectors/Frame 1000001043.svg"
                            onClick={"#"}
                        />
                    </div>
                </div>

                <div className=" mt-14">
                    <div className="flex justify-between">
                        <p className="font-bold ">Nearby Medical Centre</p>
                        <Link to="" className="text-gray-500 cursor-pointer">
                            see all{" "}
                        </Link>
                    </div>
                </div>
            </div>
        </DashLayout>
    );
};

export default DashBoardPage;
