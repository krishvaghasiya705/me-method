import React, { useState } from "react";
import "./detailspage4.scss";
import { NavLink } from "react-router-dom";

export default function Detailspage4() {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };
  return (
    <div className="details-page-four-main">
      <div className="details-page-four-main-alignment">
        <div className="posture-buttons-main-alignment">
          <div
            className={`button-input-main ${
              selectedGender === "breakfast" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("breakfast")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "breakfast"}
                onChange={() => handleGenderChange("breakfast")}
              />
              <span>Breakfast</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "lunch" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("lunch")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "lunch"}
                onChange={() => handleGenderChange("lunch")}
              />
              <span>Lunch</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "dinner" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("dinner")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "dinner"}
                onChange={() => handleGenderChange("dinner")}
              />
              <span>Dinner</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "snacks" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("snacks")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "snacks"}
                onChange={() => handleGenderChange("snacks")}
              />
              <span>Snacks</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "desserts" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("desserts")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "desserts"}
                onChange={() => handleGenderChange("desserts")}
              />
              <span>Desserts</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "beverages" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("beverages")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "beverages"}
                onChange={() => handleGenderChange("beverages")}
              />
              <span>Beverages</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "meal" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("meal")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "meal"}
                onChange={() => handleGenderChange("meal")}
              />
              <span>Meal Prep</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "grocery" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("grocery")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "grocery"}
                onChange={() => handleGenderChange("grocery")}
              />
              <span>Grocery Shopping</span>
            </div>
          </div>
          <div
            className={`button-input-main ${
              selectedGender === "eating" ? "button-input-main-active" : ""
            }`}
            onClick={() => handleGenderChange("eating")}
          >
            <div className="button-input-radio-div">
              <input
                type="radio"
                checked={selectedGender === "eating"}
                onChange={() => handleGenderChange("eating")}
              />
              <span>Eating Out</span>
            </div>
          </div>
          <div className="next-and-previus-button-div-main">
            <NavLink to={"/explore3"}>
              <button className="previus-button">Previous</button>
            </NavLink>
            <NavLink to={"/explore5"}>
              <button className="next-button">Next</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
