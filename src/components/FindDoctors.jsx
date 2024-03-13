import React, { useState } from "react";
import Doc1 from "../assets/vectors/find-doc-vectors/doc-1.svg";
import Doc2 from "../assets/vectors/find-doc-vectors/doc-2.svg";
import Doc3 from "../assets/vectors/find-doc-vectors/doc-3.svg";
import Doc4 from "../assets/vectors/find-doc-vectors/doc-4.svg";
import Doc5 from "../assets/vectors/find-doc-vectors/doc-5.svg";
import Doc6 from "../assets/vectors/find-doc-vectors/doc-6.svg";
import MC1 from "../assets/vectors/find-doc-vectors/mc-1.svg";
import MC2 from "../assets/vectors/find-doc-vectors/mc-2.svg";
import MC3 from "../assets/vectors/find-doc-vectors/mc-3.svg";
import MC4 from "../assets/vectors/find-doc-vectors/mc-4.svg";
import DoctorCard from "./DoctorCard";
import MedicalCenterCard from "./MedicalCenterCard";

export default function App() {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const [activeButton, setActiveButton] = useState(null);
  const categories = [
    "All",
    "Gastroenterologist",
    "Cardiologist",
    "Dentist",
    "Dermatologist",
    "Neurologist",
    "Psychiatrist",
  ];

  const handleButtonClick = (index) => {
    setActiveButton((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="max-w-screen mx-auto p-6 sm:p-5 md:p-10">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              type="button"
              className={`category-button ${
                activeButton === index ? "clicked" : ""
              }`}
              onClick={() => handleButtonClick(index)}
              data-twe-ripple-init
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2">
          <DoctorCard
            name="Dr. David Patel"
            specialty="Cardiologist"
            hospital="Olad Hospital"
            location="52, Sagamu Road, Ikorodu."
            rating="5"
            reviews="1,872 Reviews"
            imageSrc={Doc1}
            isFavorite={isFavorite}
            onFavoriteClick={handleFavoriteClick}
          />
          <DoctorCard
            name="Dr. Jessica Turner"
            specialty="Gynecologist"
            hospital="Bambalina Clinic"
            location="21, Benson Adedipe Street, Ikorodu."
            rating="4.9"
            reviews="127 Reviews"
            imageSrc={Doc2}
            isFavorite={isFavorite}
            onFavoriteClick={handleFavoriteClick}
          />
          <DoctorCard
            name="Dr. Michael Johnson"
            specialty="Orthopedic Surgery"
            hospital="Ikorodu Medical Centre"
            location="32, Ota-Ona Road, Ikorodu."
            rating="4.7"
            reviews="5,223 Reviews"
            imageSrc={Doc3}
            isFavorite={isFavorite}
            onFavoriteClick={handleFavoriteClick}
          />
          <DoctorCard
            name="Dr. Emily Walker"
            specialty="Pediatrics"
            hospital="Alpha Clinic"
            location="11, Shogbamu Street, Ikorodu."
            rating="5"
            reviews="405 Reviews"
            imageSrc={Doc4}
            isFavorite={isFavorite}
            onFavoriteClick={handleFavoriteClick}
          />
          <DoctorCard
            name="Dr. Emily Walker"
            specialty="Pediatrics"
            hospital="St. Clare's Clinic"
            location="33, Ladega Street, Ikorodu."
            rating="4.7"
            reviews="405 Reviews"
            imageSrc={Doc5}
            isFavorite={isFavorite}
            onFavoriteClick={handleFavoriteClick}
          />
          <DoctorCard
            name="Dr. Emily Walker"
            specialty="Pediatrics"
            hospital="Rockville Hospital"
            location="17, Abeokuta Expressway, Ikd."
            rating="5"
            reviews="405 Reviews"
            imageSrc={Doc6}
            isFavorite={isFavorite}
            onFavoriteClick={handleFavoriteClick}
          />
        </div>

        <div class="flex justify-between mt-6">
          <div>
            <p class="font-roboto text-lg font-bold mb-2">
              Nearby Medical Centers
            </p>
          </div>
          <div>
            <p class="font-roboto text-lg font-bold mb-2">See All</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <MedicalCenterCard
            imageSrc={MC1}
            name="Ikorodu General Hospital"
            location="Ikorodu, Lagos State."
            rating={5.0}
            reviews={58}
          />
          <MedicalCenterCard
            imageSrc={MC2}
            name="Perfect Trust Clinic"
            location="3, Adewale Crescent, Omitoro, Ikd."
            rating={5.0}
            reviews={108}
          />
          <MedicalCenterCard
            imageSrc={MC3}
            name="LifeCare Hospital"
            location="2, Oba Omolaja Ogunlewe Road, Ikd."
            rating={5.0}
            reviews={58}
          />
          <MedicalCenterCard
            imageSrc={MC4}
            name="Nuradeen Clinic"
            location="2, Babatunde Shogbamu Street, Ikd."
            rating={5.0}
            reviews={108}
          />
        </div>
      </div>
    </>
  );
}
