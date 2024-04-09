// CarouselComponent.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponents = () => {
    const settings = {
        infinite: true,
        speed: 400,
        width: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };

    return (
        <div className="mx-auto">
            <Slider {...settings}>
                <div className="flex ">
                    <div className="w-[44rem] mx-auto">
                        <img className="" src="src/assets/vectors/caro1.svg" />
                    </div>
                </div>
                <div className="flex">
                    <div className="w-[44rem] mx-auto">
                        <img className="" src="src/assets/vectors/caro2.svg" />
                    </div>
                </div>
                <div className="flex ">
                    <div className="w-[44rem] mx-auto">
                        <img className="" src="src/assets/vectors/caro3.svg" />
                    </div>
                </div>
                <div className="flex ">
                    <div className="w-[44rem] mx-auto">
                        <img className="" src="src/assets/vectors/caro4.svg" />
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default CarouselComponents;
