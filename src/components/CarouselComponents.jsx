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
        <div>
            
            <Slider {...settings}>
                <div className="w-[44rem]">
                  <img src="src/assets/images/c1.png"/>
                </div>
                <div className="w-[44rem]">
                <img src="src/assets/images/c2.png"/>
                </div>
                <div className="w-[44rem]">
                <img src="src/assets/images/c3.png"/>
                </div>
                <div className="w-[44rem]">
                <img src="src/assets/images/c4.png"/>
                </div>
            </Slider>
        </div>
    );
};

export default CarouselComponents;
