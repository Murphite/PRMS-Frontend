import React, { useContext, useEffect, useState } from "react";
import DoctorCard from "../../components/DoctorCard";
import MedicalCenterCard from "../../components/MedicalCenterCard";
import CategoryCard from "../../components/CategoryCard";

import { AppContext } from "../../context/AppContext";
import { getCategories } from "../../api/dashboard/getCategory";
import { getPhysiciansDetails } from "../../api/dashboard/getPhysicians";
import { getMedicalCentersDetails } from "../../api/dashboard/getMedicalCenters";

const FindDoctors = () => {
    const { accessToken } = useContext(AppContext);
    const [isFavorite, setIsFavorite] = useState(false);
    const [physicians, setPhysicians] = useState([]);
    const [medicalCenters, setMedicalCenters] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeButton, setActiveButton] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const physRes = await getPhysiciansDetails(accessToken);
            setPhysicians(physRes.data?.pageItems);

            const medRes = await getMedicalCentersDetails(accessToken);
            setMedicalCenters(medRes.data?.pageItems);

            const catRes = await getCategories(accessToken);
            setCategories(catRes.data);
        }

        fetchData();
    }, []);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    const handleButtonClick = (index) => {
        setActiveButton((prevIndex) => (prevIndex === index ? null : index));
    };

    const handleAllButtonClick = () => {
        setActiveButton(null); // Reset active button
    };

    // Filter physicians based on selected category
    const filteredPhysicians =
        activeButton === null
            ? physicians
            : physicians.filter(
                  (physician) =>
                      physician.speciality &&
                      physician.speciality.toLowerCase() ===
                          categories[activeButton]?.name.toLowerCase(),
              );

    // Filter medical centers based on selected category
    const filteredMedicalCenters =
        activeButton === null
            ? medicalCenters
            : medicalCenters.filter(
                  (medicalCenter) =>
                      medicalCenter.categories &&
                      medicalCenter.categories.includes(
                          categories[activeButton]?.name,
                      ),
              );

    return (
        <div className="max-w-screen mx-auto p-6 sm:p-5 md:p-10">
            {/* Category buttons */}
            <div className="flex justify-center mb-4 flex-wrap gap-4">
                {/* "All" button */}
                <CategoryCard
                    name="All"
                    index={null}
                    activeButton={activeButton}
                    handleButtonClick={handleAllButtonClick}
                />

                {/* Render category buttons */}
                {categories.map((category, index) => (
                    <CategoryCard
                        key={index}
                        name={
                            category.name.charAt(0).toUpperCase() +
                            category.name.slice(1)
                        } // Proper case
                        index={index}
                        activeButton={activeButton}
                        handleButtonClick={handleButtonClick}
                        className={`category-button ${activeButton === index ? "clicked" : ""}`}
                        onClick={() => handleButtonClick(index)}
                    />
                ))}
            </div>

            {/* Render doctor cards */}
            <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-4">
                {filteredPhysicians.map((physician, index) => (
                    <DoctorCard
                        key={index}
                        name={`${physician.firstName} ${physician.middleName ? physician.middleName + " " : ""}${physician.lastName}`}
                        specialty={physician.speciality}
                        hospital={physician.medicalCenterName}
                        location={`${physician.street}, ${physician.city}, ${physician.state}`}
                        rating={physician.rating || 0}
                        reviews={physician.reviewCount || 0}
                        imageSrc={physician.imageUrl}
                        isFavorite={isFavorite}
                        onFavoriteClick={handleFavoriteClick}
                    />
                ))}
            </div>

            {/* Nearby Medical Centers */}
            <div className="flex justify-between mt-6">
                <div>
                    <p className="font-roboto text-lg font-bold mb-2">
                        Nearby Medical Centers
                    </p>
                </div>
                <div>
                    <p className="font-roboto text-lg font-bold mb-2">
                        See All
                    </p>
                </div>
            </div>

            {/* Render medical center cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {filteredMedicalCenters.map((medicalCenter, index) => (
                    <MedicalCenterCard
                        key={index}
                        name={medicalCenter.name}
                        location={`${medicalCenter.city}, ${medicalCenter.state}`}
                        rating={medicalCenter.rating || 0}
                        reviews={medicalCenter.reviewCount || 0}
                        imageSrc={medicalCenter.imageUrl}
                        distance={medicalCenter.distance}
                        categories={medicalCenter.categories}
                        isFavorite={isFavorite}
                        onFavoriteClick={handleFavoriteClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default FindDoctors;
