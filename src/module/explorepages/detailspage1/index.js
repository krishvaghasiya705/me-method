import React, { useState } from "react";
import "./detailspage1.scss";
import Maleicon from "../../../assets/svg/detailsicon/maleicon";
import Femaleicon from "../../../assets/svg/detailsicon/femaleicon";
import Personicon from "../../../assets/svg/detailsicon/personicon";
import { NavLink } from "react-router-dom";

export default function Detailspage1() {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <div className="details-page-one-main">
      <div className="details-page-one-main-alignment">
        <form>
          <input
            className="age-input"
            type="number"
            placeholder="Enter your age"
            maxLength="3"
            data-aos="fade-right"
          />
          <input className="city-input" type="text" placeholder="City" data-aos="fade-left" />
          <label>Select your gender</label>

          <div
            className={`gender-input-main ${selectedGender === "male" ? "gender-input-main-active" : ""
              }`}
            onClick={() => handleGenderChange("male")}
            data-aos="fade-right"
          >
            <div className="gender-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "male"}
                onChange={() => handleGenderChange("male")}
              />
              <span>Male</span>
            </div>
            <Maleicon />
          </div>

          <div
            className={`gender-input-main ${selectedGender === "female" ? "gender-input-main-active" : ""
              }`}
            onClick={() => handleGenderChange("female")}
            data-aos="fade-left"
          >
            <div className="gender-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "female"}
                onChange={() => handleGenderChange("female")}
              />
              <span>Female</span>
            </div>
            <Femaleicon />
          </div>

          <div
            className={`gender-input-main ${selectedGender === "other" ? "gender-input-main-active" : ""
              }`}
            onClick={() => handleGenderChange("other")}
            data-aos="fade-right"
          >
            <div className="gender-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "other"}
                onChange={() => handleGenderChange("other")}
              />
              <span>Other</span>
            </div>
            <Personicon />
          </div>

          <div className="next-button-main">
            <NavLink to={"/explore2"} data-aos="fade-left" >
              <button type="button">Next</button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
