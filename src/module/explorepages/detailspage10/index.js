import React, { useState } from "react";
import "./detailspage10.scss";
import { NavLink } from "react-router-dom";

export default function Detailspage10() {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };
  return (
    <div className="details-page-ten-main">
      <div className="details-page-ten-main-alignment">
        <div className="posture-buttons-main-alignment">
          <div
            className={`button-input-main ${
              selectedGender === "wfh" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("wfh")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "wfh"}
                onChange={() => handleGenderChange("wfh")}
              />
              <span>Work from Home</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "wfo" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("wfo")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "wfo"}
                onChange={() => handleGenderChange("wfo")}
              />
              <span>Work from Office</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "hybridwork" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("hybridwork")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "hybridwork"}
                onChange={() => handleGenderChange("hybridwork")}
              />
              <span>Hybrid Work</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "wfsu" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("wfsu")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "wfsu"}
                onChange={() => handleGenderChange("wfsu")}
              />
              <span>Work from School/ University</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "wfcs" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("wfcs")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "wfcs"}
                onChange={() => handleGenderChange("wfcs")}
              />
              <span>Work from Coffee Shop</span>
            </div>
          </div>
          <div className="next-and-previus-button-div-main">
            <NavLink to={"/explore9"}>
              <button className="previus-button">Previous</button>
            </NavLink>
            <NavLink to={"/joinnow"}>
              <button className="next-button">Next</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
