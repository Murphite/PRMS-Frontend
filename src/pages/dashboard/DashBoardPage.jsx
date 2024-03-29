import { useEffect, useState } from "react";
import Carousel from "../../components/CarouselComponents";
import Sidebar from "../../components/Sidebar";
import { getCategories } from "../../api/dashboard";

const DashBoardPage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const res = await getCategories();
                setCategories(res.data);
                console.log(res.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        }

        fetchCategories();
    }, []);

    const fetchAllCategories = async () => {
        try {
            const res = await getCategories();
            setCategories(res.data);
            console.log(res.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };
    return (
        <div className="flex ">
            <Sidebar />
            <div className=" w-[80rem] h-[63rem] mt-24">
                <div className=" ml-72 justify-items-center">
                    <Carousel />
                </div>
                <div className=" mt-[1rem] flex space-x-[67rem]">
                    <p className="ml-5 font-bold cursor-pointer ">Categories</p>

                    <p
                        className="text-gray-500 cursor-pointer"
                        onClick={fetchAllCategories}
                    >
                        See all
                    </p>
                </div>
                {
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
                }

                <div className="flex mt-10 ml-32 space-x-10 ">
                    <div className="cursor-pointer ">
                        <img
                            src="src/assets/vectors/Frame 1000001042.svg"
                            onClick={"#"}
                        />
                    </div>
                    <div className="cursor-pointer ">
                        <img
                            src="src/assets/vectors/Frame 1000001043.svg"
                            onClick={"#"}
                        />
                    </div>
                </div>

                <div className=" mt-14">
                    <div className="flex space-x-[65rem]">
                        <p className="font-bold ">Nearby Medical Centre</p>
                        <p className="text-gray-500 cursor-pointer">see all </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardPage;
