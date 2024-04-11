import React from "react";

const CategoryCard = ({ name, index, activeButton, handleButtonClick }) => {
    const handleClick = () => {
        handleButtonClick(index);
    };

    const buttonClass = activeButton === index ? "clicked" : "";

    const buttonStyle = {
        border: "2px solid rgba(0, 150, 136, 1)",
        color: activeButton === index ? "#fff" : "rgba(0, 150, 136, 1)",
        backgroundColor:
            activeButton === index ? "rgba(0, 150, 136, 1)" : "transparent",
        padding: "6px 20px",
        margin: "0 5px",
        fontSize: "14px",
        fontWeight: "500",
        cursor: "pointer",
        transition: "all 0.3s ease",
        borderRadius: "20px",
        fontFamily: "Roboto",
    };

    const hoverStyle = {
        backgroundColor: activeButton === index ? "rgba(0, 150, 136, 1)" : "",
    };

    return (
        <div className={`category-card ${buttonClass}`}>
            <button
                type="button"
                className={`category-button ${buttonClass}`}
                onClick={handleClick}
                style={{
                    ...buttonStyle,
                    ...(activeButton !== index && hoverStyle),
                }}
            >
                {name}
            </button>
        </div>
    );
};

export default CategoryCard;
