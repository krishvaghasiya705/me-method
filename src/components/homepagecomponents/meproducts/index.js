import React from "react";
import "./meproducts.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Meproductsdata from "../../../data/meproductsdata/meproductsdata";

export default function Meproducts() {
  const Productslider = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  console.log(Meproductsdata)
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
          {Meproductsdata.map((item) => (
            <div key={item.id}>
              <div className="products-slider-box">
                <div className="products-slider-image">
                  <img src={item.image} alt={item.image} />
                </div>
                <div className="products-slider-box-description">
                  <p>{item.itemname}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
