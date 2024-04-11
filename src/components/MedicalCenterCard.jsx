import React, { useState } from "react";
import HospitalIcon from "../assets/vectors/find-doc-vectors/hospital.svg";
import LocationIcon from "../assets/vectors/find-doc-vectors/location2.svg";
import RatingIcon from "../assets/vectors/find-doc-vectors/rating.svg";
import RoutingIcon from "../assets/vectors/find-doc-vectors/routing2.svg";
import FavoriteIcon from "../assets/vectors/find-doc-vectors/Favorite2.svg";
import FilledFavoriteIcon from "../assets/vectors/find-doc-vectors/favorite-filled.svg";
import EmptyStarIcon from "../assets/vectors/find-doc-vectors/EmptyStarIcon.jpg";
import NoImageAvailable from "../assets/vectors/find-doc-vectors/no-image-available.jpg"; // Import fallback image

const MedicalCenterCard = ({
    imageSrc,
    name,
    location,
    rating,
    reviews,
    distance,
    categories,
}) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    const convertToKilometers = (meters) => {
        return (meters / 1000).toFixed(2);
    };

    const calculateTime = (distance) => {
        // Assuming average speed of 60 km/hour
        const averageSpeedKmPerHour = 60000;
        const timeInHours = distance / averageSpeedKmPerHour;
        // Convert hours to minutes
        const timeInMinutes = timeInHours * 60;
        // Round the time to the nearest integer
        return Math.round(timeInMinutes);
    };

    const properCase = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    // Function to check if the URL is valid or if imageSrc is empty or null
    const isValidURL = (url) => {
        if (!url || url.trim() === "") {
            return false;
        }
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    };

    return (
        <div className="relative flex flex-col overflow-hidden shadow rounded-xl">
            <img className="w-full" src={imageSrc} />
            {/* Use fallback image if imageSrc is not available */}
            <a href="#!" id="favoriteButton" onClick={handleFavoriteClick}>
                <div
                    id="favoriteIcon"
                    className="absolute top-0 right-0 flex items-center justify-center w-12 h-12 px-4 mt-3 mr-3 text-sm text-gray-200 transition duration-500 ease-in-out bg-gray-300 hover:bg-white hover:text-gray-600"
                    style={{
                        borderRadius: "100%",
                        border: "1px solid transparent",
                        backgroundColor: "rgba(31, 42, 55, 0.2)",
                    }}
                >
                    <img
                        src={isFavorite ? FilledFavoriteIcon : FavoriteIcon}
                        alt="Favorite Icon"
                        style={{ width: "40px", height: "40px" }}
                    />
                </div>
            </a>
            <div className="px-3 py-4 mb-auto">
                <div className="flex items-center justify-between">
                    <p className="mb-2 text-lg font-bold font-inter">{name}</p>
                </div>
                <div className="flex items-center">
                    <img src={LocationIcon} alt="Location Icon" />
                    <p className="text-base font-normal font-roboto ms-1 whitespace-nowrap">
                        {location}
                    </p>
                </div>
                <div className="flex items-center">
                    <p className="text-base font-normal font-roboto whitespace-nowrap">
                        {rating} &nbsp;
                    </p>
                    {[...Array(5)].map((_, index) => (
                        <img
                            key={index}
                            src={
                                index < Math.floor(rating)
                                    ? RatingIcon
                                    : EmptyStarIcon
                            }
                            alt="Rating Icon"
                            className="w-4 h-auto"
                        />
                    ))}
                    <p className="text-base font-normal ms-3 font-roboto whitespace-nowrap">
                        ({reviews} Reviews)
                    </p>
                </div>
                <hr className="mt-3 mb-3" />
                <div className="">
                    <div
                        className="flex items-center justify-between"
                        style={{ color: "#6B7280", fontSize: "1px" }}
                    >
                        <div className="flex items-center">
                            <img src={RoutingIcon} alt="Routing Icon" />
                            <p className="text-sm font-normal font-roboto ms-1 whitespace-nowrap">
                                {convertToKilometers(distance)} km/
                                {calculateTime(distance)} min
                            </p>
                        </div>
                        <div className="flex items-center">
                            <img src={HospitalIcon} alt="Hospital Icon" />
                            <p className="text-sm font-normal font-roboto ms-1 whitespace-nowrap">
                                {categories && categories.length > 1
                                    ? properCase(categories[1])
                                    : ""}
                                {/* Display proper case category */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalCenterCard;
