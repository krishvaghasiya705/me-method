import React, { useState } from "react";
import "./detailspage5.scss";
import { NavLink } from "react-router-dom";

export default function Detailspage5() {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };
  return (
    <div className="details-page-five-main">
      <div className="details-page-five-main-alignment">
        <div className="posture-buttons-main-alignment">
          <div
            className={`button-input-main ${
              selectedGender === "prayer" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("prayer")}
            data-aos="fade-right"
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "prayer"}
                onChange={() => handleGenderChange("prayer")}
              />
              <span>Prayer/ Meditation</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "breathwork" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("breathwork")}
            data-aos="fade-left"
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "breathwork"}
                onChange={() => handleGenderChange("breathwork")}
              />
              <span>Breathwork</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "prayer" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("morningcalm")}
            data-aos="fade-right"
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "morningcalm"}
                onChange={() => handleGenderChange("morningcalm")}
              />
              <span>Morning Calm Rituals</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "nightcalm" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("nightcalm")}
            data-aos="fade-left"
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "nightcalm"}
                onChange={() => handleGenderChange("nightcalm")}
              />
              <span>Night Calm Rituals</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "watertherapy" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("watertherapy")}
            data-aos="fade-right"
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "watertherapy"}
                onChange={() => handleGenderChange("watertherapy")}
              />
              <span>Water Therapy</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "naturewalk" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("naturewalk")}
            data-aos="fade-left"
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "naturewalk"}
                onChange={() => handleGenderChange("naturewalk")}
              />
              <span>Nature’s Walk</span>
            </div>
          </div>
          <div className="next-and-previus-button-div-main">
            <NavLink to={"/explore4"} data-aos="fade-right" >
              <button className="previus-button">Previous</button>
            </NavLink>
            <NavLink to={"/explore6"} data-aos="fade-left" >
              <button className="next-button">Next</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
