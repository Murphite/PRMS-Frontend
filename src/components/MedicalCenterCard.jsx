import React, { useState } from "react";
import HospitalIcon from "../assets/vectors/find-doc-vectors/hospital.svg";
import LocationIcon from "../assets/vectors/find-doc-vectors/location2.svg";
import RatingIcon from "../assets/vectors/find-doc-vectors/rating.svg";
import RoutingIcon from "../assets/vectors/find-doc-vectors/routing2.svg";
import FavoriteIcon from "../assets/vectors/find-doc-vectors/Favorite2.svg";
import FilledFavoriteIcon from "../assets/vectors/find-doc-vectors/favorite-filled.svg";
import EmptyStarIcon from "../assets/vectors/find-doc-vectors/EmptyStarIcon.jpg";
import "./finddoctors-style.css";

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

    const properCase = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div className="rounded overflow-hidden shadow-lg flex flex-col relative">
            <img className="w-full" src={imageSrc} alt="" />
            <a href="#!" id="favoriteButton" onClick={handleFavoriteClick}>
                <div
                    id="favoriteIcon"
                    className="text-sm absolute top-0 right-0 bg-gray-300 px-4 text-gray-200  h-12 w-12 flex items-center justify-center mt-3 mr-3 hover:bg-white hover:text-gray-600 transition duration-500 ease-in-out"
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
            <div className="px-6 py-4 mb-auto">
                <div className="flex items-center justify-between">
                    <p className="font-inter text-lg font-bold mb-2">{name}</p>
                </div>
                <div className="flex items-center">
                    <img src={LocationIcon} alt="Location Icon" />
                    <p className="font-roboto font-normal text-base ms-2 whitespace-nowrap">
                        {location}
                    </p>
                </div>
                <div className="flex items-center">
                    <p className="font-roboto font-normal text-base whitespace-nowrap">
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
                    <p className="ms-3 font-roboto font-normal text-base whitespace-nowrap">
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
                            <p className="font-roboto font-normal text-base ms-2 whitespace-nowrap">
                                {convertToKilometers(distance)} km/40min{" "}
                                {/* Convert distance to kilometers */}
                            </p>
                        </div>
                        <div className="flex items-center">
                            <img src={HospitalIcon} alt="Hospital Icon" />
                            <p className="font-roboto font-normal text-base ms-2 whitespace-nowrap">
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
