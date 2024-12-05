import React, { useState } from "react";
import "./detailspage3.scss";
import { NavLink } from "react-router-dom";

export default function Detailspage3() {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };
  return (
    <div className="details-page-three-main">
      <div className="details-page-three-main-alignment">
        <div className="posture-buttons-main-alignment">
          <div
            className={`button-input-main ${
              selectedGender === "posture" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("posture")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "posture"}
                onChange={() => handleGenderChange("posture")}
              />
              <span>Posture/ Alignment</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "flex" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("flex")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "flex"}
                onChange={() => handleGenderChange("flex")}
              />
              <span>Flexibility/ Mobility</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "strength" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("strength")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "strength"}
                onChange={() => handleGenderChange("strength")}
              />
              <span>Strength Training</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "impect" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("impect")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "impect"}
                onChange={() => handleGenderChange("impect")}
              />
              <span>Low-Impact Cardio</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "hiit" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("hiit")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "hiit"}
                onChange={() => handleGenderChange("hiit")}
              />
              <span>HIIT Cardio</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "yoga" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("yoga")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "yoga"}
                onChange={() => handleGenderChange("yoga")}
              />
              <span>Yoga/ Pilates</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "recovery" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("recovery")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "recovery"}
                onChange={() => handleGenderChange("recovery")}
              />
              <span>Recovery</span>
            </div>
          </div>
          <div className="next-and-previus-button-div-main">
            <NavLink to={"/explore2"}>
              <button className="previus-button">Previous</button>
            </NavLink>
            <NavLink to={"/explore4"}>
              <button className="next-button">Next</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
