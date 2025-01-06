import React from "react";
import Slider from "react-slick";

// Images
import Menu1 from "../../Assets/Images/menuCategory/menu1.png";
import Menu2 from "../../Assets/Images/menuCategory/menu2.png";
import Menu3 from "../../Assets/Images/menuCategory/menu3.png";

const MenuSlider = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className="bg-red-400 mx-3">
                        <h3>1</h3>
                        <img src={Menu1} alt="Loading" />
                    </div>
                    <div className="bg-red-400 mx-3">
                        <h3>2</h3>
                        <img src={Menu2} alt="Loading" />
                    </div>
                    <div className="bg-red-400 mx-3">
                        <h3>3</h3>
                        <img src={Menu3} alt="Loading" />
                    </div>
                    <div className="bg-red-400 mx-3">
                        <h3>4</h3>
                        <img src={Menu1} alt="Loading" />
                    </div>
                    <div className="bg-red-400 mx-3">
                        <h3>5</h3>
                        <img src={Menu2} alt="Loading" />
                    </div>
                    <div className="bg-red-400 mx-3">
                        <h3>6</h3>
                        <img src={Menu1} alt="Loading" />
                    </div>
                    <div className="bg-red-400 mx-3">
                        <h3>7</h3>
                        <img src={Menu3} alt="Loading" />
                    </div>
                    <div className="bg-red-400 mx-3">
                        <h3>8</h3>
                        <img src={Menu2} alt="Loading" />
                    </div>
                </Slider>
            </div>
        </>
    );
};
export default MenuSlider;