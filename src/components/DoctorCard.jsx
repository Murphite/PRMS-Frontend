import React, { useState } from "react";
import HospitalIcon from "../assets/vectors/find-doc-vectors/hospital.svg";
import LocationIcon from "../assets/vectors/find-doc-vectors/location2.svg";
import RatingIcon from "../assets/vectors/find-doc-vectors/rating.svg";
import FavoriteIcon from "../assets/vectors/find-doc-vectors/favorite.svg";
import FilledFavoriteIcon from "../assets/vectors/find-doc-vectors/favorite-filled.svg";
import LineIcon from "../assets/vectors/find-doc-vectors/Line.svg";

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

  return (
    <div className="block bg-white shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface p-4 rounded-lg">
      <div className="flex border-white shadow-lg p-3 border-6 rounded-lg doctor-card">
        <div className="flex flex-col items-center min-w-[10px] justify-center lg:w-1/5 md:w-1/4 mr-4">
          <div className="image">
            <img className="w-40 mb-1" src={imageSrc} alt="Doctor" />
          </div>
        </div>

        <div className="lg:w-4/5 md:w-3/4 flex flex-col leading-9">
          <div className="flex items-center justify-between">
            <p className="font-inter text-lg font-bold mb-2">{name}</p>
            <img
              style={{ justifyContent: "flex-end", cursor: "pointer" }}
              src={isFavorite ? FilledFavoriteIcon : FavoriteIcon}
              alt="Favorite Icon"
              onClick={handleFavoriteClick}
              className="favorite-icon"
            />
          </div>
          <hr />
          <p className="font-roboto font-normal text-base mt-2">{specialty}</p>
          <div className="flex items-center">
            <img src={HospitalIcon} alt="Hospital Icon" />
            <p className="font-roboto font-normal text-base ms-2 whitespace-nowrap">
              {hospital}
            </p>
          </div>
          <div className="flex items-center">
            <img src={LocationIcon} alt="Location Icon" />
            <p className="font-roboto font-normal text-base ms-2 whitespace-nowrap">
              {location}
            </p>
          </div>
          <div
            className="flex items-center"
            style={{ color: "#6B7280", fontSize: "1px" }}
          >
            <img src={RatingIcon} alt="Rating Icon" />
            <p className="font-roboto font-normal text-base ms-2">{rating}</p>
            <img className="ms-3" src={LineIcon} alt="Line Icon" />
            <p className="font-roboto font-normal text-base flex ms-2 whitespace-nowrap">
              {reviews}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
