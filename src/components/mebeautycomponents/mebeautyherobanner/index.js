import React from "react";
import "./mebeautyherobanner.scss";
import Mebeautyherobannerimage from "../../../assets/image/mebeautyherobannerimage.webp";
import mebeautyherobannermobileimage from "../../../assets/image/mebeautyherobannermobileimage.webp";

export default function Mebeautyherobanner({ title, minititle }) {
  return (
    <div className="me-beauty-herobanner-main">
      <div className="me-beauty-herobanner-image">
        <img src={Mebeautyherobannerimage} alt="Mebeautyherobannerimage" data-aos="fade-leftw" />
      </div>
      <div className="me-beauty-herobanner-image-mobile">
        <img
          src={mebeautyherobannermobileimage}
          alt="mebeautyherobannermobileimage"
          data-aos="fade-left"
        />
      </div>
      <div className="me-beauty-herobanner-content-main">
        <div className="container1">
          <h1 data-aos="fade-up">{title}</h1>
          <p data-aos="fade-up">{minititle}</p>
        </div>
      </div>
    </div>
  );
}
