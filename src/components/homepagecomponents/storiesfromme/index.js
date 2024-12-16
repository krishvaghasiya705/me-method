import React from "react";
import "./storiesfromme.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import storiesimage1 from "../../../assets/image/homeimage/storiesimage1.webp";
import storiesimage2 from "../../../assets/image/homeimage/storiesimage2.webp";
import storiesimage3 from "../../../assets/image/homeimage/storiesimage3.webp";

export default function Storiesfromme() {
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <div className="stories-from-me-section-main">
      <div className="container">
        <div className="stories-from-title">
          <h5 data-aos="fade-up">Stories from ME Users</h5>
        </div>
        <div className="storie-slider-main">
          <Slider {...setting}>
            <div>
              <div className="stories-slider-card">
                <div className="stories-card-details-box">
                  <p data-aos="fade-up" >
                    Lorem ipsum dolor sit amet consectetur. A vel viverra
                    ullamcorper laoreet consectetur lectus pretium. Vulputate
                    integer eu varius sagittis
                  </p>

                  <span data-aos="fade-up" >Jerry V. Wallace</span>
                </div>
                <div className="stories-card-image-div">
                  <div className="stories-card-image">
                    <img src={storiesimage1} alt="storiesimage1" data-aos="fade-up" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="stories-slider-card">
                <div className="stories-card-details-box">
                  <p data-aos="fade-up">
                    Lorem ipsum dolor sit amet consectetur. A vel viverra
                    ullamcorper laoreet consectetur lectus pretium. Vulputate
                    integer eu varius sagittis
                  </p>

                  <span data-aos="fade-up">Refugio J. Knipe</span>
                </div>
                <div className="stories-card-image-div">
                  <div className="stories-card-image">
                    <img src={storiesimage2} alt="storiesimage2" data-aos="fade-up" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="stories-slider-card">
                <div className="stories-card-details-box">
                  <p data-aos="fade-up">
                    Lorem ipsum dolor sit amet consectetur. A vel viverra
                    ullamcorper laoreet consectetur lectus pretium. Vulputate
                    integer eu varius sagittis
                  </p>

                  <span data-aos="fade-up">Betty R. Ross</span>
                </div>
                <div className="stories-card-image-div">
                  <div className="stories-card-image">
                    <img src={storiesimage3} alt="storiesimage3" data-aos="fade-up" />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
