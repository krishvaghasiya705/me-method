import React, { useState } from "react";
import "./detailspage6.scss";
import { NavLink } from "react-router-dom";

export default function Detailspage6() {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };
  return (
    <div className="details-page-six-main">
      <div className="details-page-six-main-alignment">
        <div className="posture-buttons-main-alignment">
          <div
            className={`button-input-main ${
              selectedGender === "skincare" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("skincare")}
            data-aos="fade-right"
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "skincare"}
                onChange={() => handleGenderChange("skincare")}
              />
              <span>Skincare</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "haircare" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("haircare")}
            data-aos="fade-left"
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "haircare"}
                onChange={() => handleGenderChange("haircare")}
              />
              <span>Haircare</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "sauna" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("sauna")}
            data-aos="fade-right"
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "sauna"}
                onChange={() => handleGenderChange("sauna")}
              />
              <span>Sauna/ Cold Therapy</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "general" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("general")}
            data-aos="fade-left"
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "general"}
                onChange={() => handleGenderChange("general")}
              />
              <span>General Grooming</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "lifestyle" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("lifestyle")}
            data-aos="fade-right"
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "lifestyle"}
                onChange={() => handleGenderChange("lifestyle")}
              />
              <span>Lifestyle</span>
            </div>
          </div>
          <div className="next-and-previus-button-div-main">
            <NavLink to={"/explore5"} data-aos="fade-right" >
              <button className="previus-button">Previous</button>
            </NavLink>
            <NavLink to={"/explore7"} data-aos="fade-left" >
              <button className="next-button">Next</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
