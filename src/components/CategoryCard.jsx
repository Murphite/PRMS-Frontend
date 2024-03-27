import React from "react";
import "./finddoctors-style.css";

const CategoryCard = ({ name, index, activeButton, handleButtonClick }) => {
    const handleClick = () => {
      handleButtonClick(index);
    };
  
    return (
      <div className={`category-card ${activeButton === index ? "clicked" : ""}`}>
        <button
          type="button"
          className={`category-button ${
            activeButton === index ? "clicked" : ""
          }`}
          onClick={handleClick}
          data-twe-ripple-init
        >
          {name}
        </button>
      </div>
    );
  };
  
  export default CategoryCard;