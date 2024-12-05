import React, { useState } from "react";
import "./detailspage7.scss";
import { NavLink } from "react-router-dom";

export default function Detailspage7() {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };
  return (
    <div className="details-page-seven-main">
      <div className="details-page-seven-main-alignment">
        <div className="posture-buttons-main-alignment">
          <div
            className={`button-input-main ${
              selectedGender === "great" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("great")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "great"}
                onChange={() => handleGenderChange("great")}
              />
              <span>Great</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "stressed" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("stressed")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "stressed"}
                onChange={() => handleGenderChange("stressed")}
              />
              <span>Stressed Out</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "indifferent" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("indifferent")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "indifferent"}
                onChange={() => handleGenderChange("indifferent")}
              />
              <span>Indifferent</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "lowenergy" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("lowenergy")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "lowenergy"}
                onChange={() => handleGenderChange("lowenergy")}
              />
              <span>Low Energy</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "anxious" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("anxious")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "anxious"}
                onChange={() => handleGenderChange("anxious")}
              />
              <span>Anxious</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "motivated" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("motivated")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "motivated"}
                onChange={() => handleGenderChange("motivated")}
              />
              <span>Motivated</span>
            </div>
          </div>
          <div className="next-and-previus-button-div-main">
            <NavLink to={"/explore6"}>
              <button className="previus-button">Previous</button>
            </NavLink>
            <NavLink to={"/explore8"}>
              <button className="next-button">Next</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
