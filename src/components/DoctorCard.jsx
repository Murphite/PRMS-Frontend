import React, { useState } from "react";
import HospitalIcon from "../assets/vectors/find-doc-vectors/hospital.svg";
import LocationIcon from "../assets/vectors/find-doc-vectors/location2.svg";
import FilledStarIcon from "../assets/vectors/find-doc-vectors/rating.svg";
import HalfFilledStarIcon from "../assets/vectors/find-doc-vectors/HalfFilledStarIcon.svg";
import EmptyStarIcon from "../assets/vectors/find-doc-vectors/EmptyStarIcon.jpg";
import FavoriteIcon from "../assets/vectors/find-doc-vectors/favorite.svg";
import FilledFavoriteIcon from "../assets/vectors/find-doc-vectors/favorite-filled.svg";
import LineIcon from "../assets/vectors/find-doc-vectors/Line.svg";
import "./finddoctors-style.css";

const DoctorCard = ({
    name,
    specialty,
    hospital,
    location,
    rating,
    reviews,
    imageSrc,
}) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    const renderRatingIcon = () => {
        if (rating === 0) {
            return <img src={EmptyStarIcon} alt="Rating Icon" />;
        } else if (rating < 5) {
            return (
                <div className="relative">
                    <img
                        src={FilledStarIcon}
                        alt="Star Icon"
                        className="w-4 h-auto absolute left-0 top-0"
                        style={{ width: `${Math.floor(rating)}0%` }}
                    />
                    <img
                        src={HalfFilledStarIcon}
                        alt="Half Filled Star Icon"
                        className="w-4 h-auto absolute left-0 top-0"
                        style={{
                            width: "50%",
                            marginLeft: `${Math.floor(rating)}0%`,
                        }}
                    />
                </div>
            );
        } else {
            return (
                <img
                    src={FilledStarIcon}
                    className="empty-star-icon"
                    alt="Rating Icon"
                />
            );
        }
    };

    return (
        <div className="block bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface p-4 rounded-lg">
            <div className="flex border-white shadow-lg p-3 border-6 rounded-lg doctor-card">
                <div className="flex flex-col items-center justify-center min-w-[10px] lg:w-1/5 md:w-1/4 mr-4">
                    <div className="image">
                        <img
                            className="w-full h-auto mb-1"
                            src={imageSrc}
                            alt="Doctor"
                        />
                    </div>
                </div>

                <div className="lg:w-4/5 md:w-3/4 flex flex-col leading-9">
                    <div className="flex items-center justify-between">
                        <p className="font-inter text-lg font-bold mb-2 doctor-name text-sm md:text-base lg:text-lg">
                            {name}
                        </p>
                        <img
                            style={{
                                justifyContent: "flex-end",
                                cursor: "pointer",
                            }}
                            src={isFavorite ? FilledFavoriteIcon : FavoriteIcon}
                            alt="Favorite Icon"
                            onClick={handleFavoriteClick}
                            className="favorite-icon"
                        />
                    </div>
                    <hr />
                    <p className="font-roboto font-normal text-base mt-2 text-sm md:text-base lg:text-lg">
                        {specialty}
                    </p>
                    <div className="flex items-center">
                        <img src={HospitalIcon} alt="Hospital Icon" />
                        <p className="font-roboto font-normal text-base ms-2 whitespace-nowrap text-sm md:text-base lg:text-lg">
                            {hospital}
                        </p>
                    </div>
                    <div className="flex items-center">
                        <img src={LocationIcon} alt="Location Icon" />
                        <p className="font-roboto font-normal text-base ms-2 whitespace-normal text-sm md:text-base lg:text-lg">
                            {location}
                        </p>
                    </div>
                    <div className="flex items-center">
                        {renderRatingIcon()}
                        <p className="font-roboto font-normal text-base ms-2 text-sm md:text-base lg:text-lg">
                            {rating}
                        </p>
                        <img className="ms-3" src={LineIcon} alt="Line Icon" />
                        <p className="font-roboto font-normal text-base flex ms-2 whitespace-nowrap text-sm md:text-base lg:text-lg">
                            {reviews}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;
