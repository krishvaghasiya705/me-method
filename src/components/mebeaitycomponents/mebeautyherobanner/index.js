import React from "react";
import "./mebeautyherobanner.scss";
import Mebeautyherobannerimage from "../../../assets/image/mebeautyherobannerimage.webp";
import mebeautyherobannermobileimage from "../../../assets/image/mebeautyherobannermobileimage.webp";

export default function Mebeautyherobanner({ title, minititle }) {
  return (
    <div className="me-beauty-herobanner-main">
      <div className="me-beauty-herobanner-image">
        <img src={Mebeautyherobannerimage} alt="Mebeautyherobannerimage" />
      </div>
      <div className="me-beauty-herobanner-image-mobile">
        <img
          src={mebeautyherobannermobileimage}
          alt="mebeautyherobannermobileimage"
        />
      </div>
      <div className="me-beauty-herobanner-content-main">
        <div className="container1">
          <h1>{title}</h1>
          <p>{minititle}</p>
        </div>
      </div>
    </div>
  );
}
