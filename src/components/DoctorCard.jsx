import React, { useState } from "react";
import HospitalIcon from "../assets/vectors/find-doc-vectors/hospital.svg";
import LocationIcon from "../assets/vectors/find-doc-vectors/location2.svg";
import FilledStarIcon from "../assets/vectors/find-doc-vectors/rating.svg";
import HalfFilledStarIcon from "../assets/vectors/find-doc-vectors/HalfFilledStarIcon.svg";
import EmptyStarIcon from "../assets/vectors/find-doc-vectors/EmptyStarIcon.jpg";
import FavoriteIcon from "../assets/vectors/find-doc-vectors/favorite.svg";
import FilledFavoriteIcon from "../assets/vectors/find-doc-vectors/favorite-filled.svg";
import LineIcon from "../assets/vectors/find-doc-vectors/Line.svg";
import { Link } from "react-router-dom";

const DoctorCard = ({
    physicianId,
    name,
    title,
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
                <div style={{ position: "relative" }}>
                    <img
                        src={FilledStarIcon}
                        alt="Star Icon"
                        className="absolute top-0 left-0 w-4 h-auto"
                        style={{ width: `${Math.floor(rating)}0%` }}
                    />
                    <img
                        src={HalfFilledStarIcon}
                        alt="Half Filled Star Icon"
                        className="absolute top-0 left-0 w-4 h-auto"
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
        <Link
            to={`/dashboard/physician/${physicianId}`}
            className="relative flex p-3 bg-white border-white rounded-lg shadow border-6 text-surface"
            style={{ position: "relative" }}
        >
            <div className="flex items-center justify-center w-1/3 mr-4">
                <div className="image">
                    <img
                        className="object-cover object-center w-full rounded-lg aspect-square "
                        src={imageSrc}
                        alt="Doctor"
                    />
                </div>
                <img
                    src={isFavorite ? FilledFavoriteIcon : FavoriteIcon}
                    alt="Favorite Icon"
                    onClick={handleFavoriteClick}
                    className="absolute z-10 cursor-pointer top-4 right-4"
                />
            </div>

            <div className="flex flex-col leading-9">
                <p className="font-bold font-inter doctor-name">
                    {title} {name}
                </p>
                <hr />
                <p className="mt-2 text-sm font-normal font-roboto">
                    {specialty}
                </p>
                <div className="flex items-center">
                    <img src={HospitalIcon} alt="Hospital Icon" />
                    <p className="text-sm font-normal font-roboto ms-2 whitespace-nowrap">
                        {hospital}
                    </p>
                </div>
                <div className="flex items-center">
                    <img src={LocationIcon} alt="Location Icon" />
                    <p className="text-sm font-normal whitespace-normal font-roboto ms-2">
                        {location}
                    </p>
                </div>
                <div className="flex items-center">
                    {renderRatingIcon()}
                    <p className="font-normal font-roboto ms-2">{rating}</p>
                    <img className="ms-3" src={LineIcon} alt="Line Icon" />
                    <p className="flex text-sm font-normal font-roboto ms-2 whitespace-nowrap">
                        {reviews}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default DoctorCard;
