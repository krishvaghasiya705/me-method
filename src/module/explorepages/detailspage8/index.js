import React, { useState } from "react";
import "./detailspage8.scss";
import { NavLink } from "react-router-dom";

export default function Detailspage8() {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };
  return (
    <div className="details-page-eight-main">
      <div className="details-page-eight-main-alignment">
        <div className="posture-buttons-main-alignment">
          <div
            className={`button-input-main ${
              selectedGender === "work" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("work")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "work"}
                onChange={() => handleGenderChange("work")}
              />
              <span>Work/ School Obligations</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "family" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("family")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "family"}
                onChange={() => handleGenderChange("family")}
              />
              <span>Family/ Relationships</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "health" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("health")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "health"}
                onChange={() => handleGenderChange("health")}
              />
              <span>Health/ Wellness</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "lackleadrship" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("lackleadrship")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "lackleadrship"}
                onChange={() => handleGenderChange("lackleadrship")}
              />
              <span>Lack Of Leadership</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "negative" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("negative")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "negative"}
                onChange={() => handleGenderChange("negative")}
              />
              <span>Negative Internal Story</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "self" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("self")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "self"}
                onChange={() => handleGenderChange("self")}
              />
              <span>Self Confident/ Self Love</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "lackspiritual" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("lackspiritual")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "lackspiritual"}
                onChange={() => handleGenderChange("lackspiritual")}
              />
              <span>Lack of Spiritual Life</span>
            </div>
          </div>
          <div className="next-and-previus-button-div-main">
            <NavLink to={"/explore7"}>
              <button className="previus-button">Previous</button>
            </NavLink>
            <NavLink to={"/explore9"}>
              <button className="next-button">Next</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
