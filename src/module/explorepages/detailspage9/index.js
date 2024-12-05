import React, { useState } from "react";
import "./detailspage9.scss";
import { NavLink } from "react-router-dom";

export default function Detailspage9() {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };
  return (
    <div className="details-page-nine-main">
      <div className="details-page-nine-main-alignment">
        <div className="posture-buttons-main-alignment">
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
              <span>Anxious thoughts</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "worrying" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("worrying")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "worrying"}
                onChange={() => handleGenderChange("worrying")}
              />
              <span>Worrying</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "difficulty" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("difficulty")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "difficulty"}
                onChange={() => handleGenderChange("difficulty")}
              />
              <span>Difficulty Sleeping</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "moodswings" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("moodswings")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "moodswings"}
                onChange={() => handleGenderChange("moodswings")}
              />
              <span>Mood Swings</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "isolation" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("isolation")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "isolation"}
                onChange={() => handleGenderChange("isolation")}
              />
              <span>Isolation</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "binge" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("binge")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "binge"}
                onChange={() => handleGenderChange("binge")}
              />
              <span>Binge Eating & Drinking</span>
            </div>
          </div>
          <div className="next-and-previus-button-div-main">
            <NavLink to={"/explore8"}>
              <button className="previus-button">Previous</button>
            </NavLink>
            <NavLink to={"/explore10"}>
              <button className="next-button">Next</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
