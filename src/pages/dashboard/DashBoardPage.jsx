import { useContext, useEffect, useState } from "react";

import Carousel from "../../components/CarouselComponents";
import {
    getCategories,
    getMedicalCenters,
    getPhysicians,
} from "../../api/dashboard";
import DashLayout from "../../layouts/DashLayout";
import { AppContext } from "./../../context/AppContext";

import MedicalCenterCard from "../../components/MedicalCenterCard";

const DashBoardPage = () => {
    const [categories, setCategories] = useState([]);
    const [medicalCentres, setMedicalCentres] = useState([]);
    const [physicians, setPhysicians] = useState([]);
    const { accessToken } = useContext(AppContext);

    async function fetchCategories() {
        try {
            const res = await getCategories();
            setCategories(res.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    }

    async function fetchPhysicians() {
        try {
            const res = await getPhysicians(accessToken);
            setPhysicians(res.data.pageItems);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    }

    async function fetchMedicalCenters() {
        try {
            const res = await getMedicalCenters(accessToken);
            setMedicalCentres(res.data.pageItems);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    }

    useEffect(() => {
        fetchCategories();
        fetchMedicalCenters();
        fetchPhysicians();
    }, []);

    // console.log(medicalCentres);

    return (
        <DashLayout>
            <div className="mt-24">
                <div className="justify-items-center">{<Carousel />}</div>
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
                                <p className="mt-1 text-sm capitalize">
                                    {category.name}
                                </p>
                            </div>
                        ))}
                </div>

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

                <div className="mt-14">
                    <div className="flex justify-between mb-4">
                        <p className="font-bold ">Nearby Medical Centre</p>
                        <p className="text-gray-500 cursor-pointer">see all</p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2">
                        {medicalCentres &&
                            medicalCentres.length > 0 &&
                            medicalCentres.map((medicalCenter, index) => (
                                <MedicalCenterCard
                                    key={index}
                                    name={medicalCenter.name}
                                    location={`${medicalCenter.city}, ${medicalCenter.state}`}
                                    rating={medicalCenter.rating || 0}
                                    reviews={medicalCenter.reviewCount || 0}
                                    imageSrc={medicalCenter.imageUrl}
                                    distance={medicalCenter.distance}
                                    categories={medicalCenter.categories}
                                    // isFavorite={isFavorite}
                                    // onFavoriteClick={handleFavoriteClick}
                                />
                            ))}
                    </div>
                </div>

                <div className=" mt-14">
                    <div className="flex justify-between mb-4">
                        <p className="font-bold ">Nearby Physicians</p>
                        <p className="text-gray-500 cursor-pointer">see all</p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2">
                        {physicians &&
                            physicians.length > 0 &&
                            physicians.map((physician, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-2"
                                >
                                    <img
                                        className="object-cover object-center w-16 rounded-lg aspect-square"
                                        src={physician.imageUrl}
                                    />
                                    <div className="">
                                        <p className="font-semibold">
                                            {physician.title}{" "}
                                            {physician.firstName},{" "}
                                            {physician.lastName}
                                        </p>
                                        <p className="text-gray-500">
                                            {physician.speciality}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </DashLayout>
    );
};

export default DashBoardPage;
