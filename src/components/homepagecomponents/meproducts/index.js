import React from "react";
import "./meproducts.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Sliderimage1 from "../../../assets/image/homeimage/sliderimage1.webp";
import Sliderimage2 from "../../../assets/image/homeimage/sliderimage2.webp";
import Sliderimage3 from "../../../assets/image/homeimage/sliderimage3.webp";
import Sliderimage4 from "../../../assets/image/homeimage/sliderimage4.webp";
import Sliderimage5 from "../../../assets/image/homeimage/sliderimage5.webp";

export default function Meproducts() {
  const Productslider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
  };
  return (
    <div className="me-products-section-main">
      <div className="container">
        <div className="me-products-title">
          <h3>ME products</h3>
          <p>
            All naturals, All organic ME product line keep you feeling healthy
            and energized all day.
          </p>
        </div>
      </div>
      <div className="products-slider-main">
        <Slider {...Productslider}>
          <div>
            <div className="products-slider-box">
              <div className="products-slider-image">
                <img src={Sliderimage1} alt="Sliderimage1" />
              </div>
              <div className="products-slider-box-description">
                <p>ME Energy</p>
              </div>
            </div>
          </div>
          <div>
            <div className="products-slider-box">
              <div className="products-slider-image">
                <img src={Sliderimage2} alt="Sliderimage2" />
              </div>
              <div className="products-slider-box-description">
                <p>ME Protien</p>
              </div>
            </div>
          </div>
          <div>
            <div className="products-slider-box">
              <div className="products-slider-image">
                <img src={Sliderimage3} alt="Sliderimage3" />
              </div>
              <div className="products-slider-box-description">
                <p>ME Sleep</p>
              </div>
            </div>
          </div>
          <div>
            <div className="products-slider-box">
              <div className="products-slider-image">
                <img src={Sliderimage4} alt="Sliderimage4" />
              </div>
              <div className="products-slider-box-description">
                <p>ME Oil</p>
              </div>
            </div>
          </div>
          <div>
            <div className="products-slider-box">
              <div className="products-slider-image">
                <img src={Sliderimage5} alt="Sliderimage5" />
              </div>
              <div className="products-slider-box-description">
                <p>ME Deodrant</p>
              </div>
            </div>
          </div>
          <div>
            <div className="products-slider-box">
              <div className="products-slider-image">
                <img src={Sliderimage5} alt="Sliderimage5" />
              </div>
              <div className="products-slider-box-description">
                <p>ME cleanse</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
