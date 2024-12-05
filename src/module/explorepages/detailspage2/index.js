import React, { useState } from "react";
import "./detailspage2.scss";

import Buttonicon1 from "../../../assets/icon/buttonicon1.png";
import Buttonicon2 from "../../../assets/icon/buttonicon2.png";
import Buttonicon3 from "../../../assets/icon/buttonicon3.png";
import Buttonicon4 from "../../../assets/icon/buttonicon4.png";
import Buttonicon5 from "../../../assets/icon/buttonicon5.png";
import { NavLink } from "react-router-dom";

export default function Detailspage2() {
  // Track active buttons
  const [activeButtons, setActiveButtons] = useState([]);

  // Toggle active state for a button
  const toggleButtonActive = (buttonName) => {
    setActiveButtons((prevActiveButtons) => {
      if (prevActiveButtons.includes(buttonName)) {
        return prevActiveButtons.filter((item) => item !== buttonName); // Remove if already active
      } else {
        return [...prevActiveButtons, buttonName]; // Add to active list if not active
      }
    });
  };

  return (
    <div className="details-page-two-main">
      <div className="details-page-two-main-alignment">
        <div className="all-buttons-alignment-div-main">
          <div className="all-buttons-alignment-div">
            <button
              className={`wealth-button ${
                activeButtons.includes("Fitness") ? "wealth-button-active" : ""
              }`}
              type="button"
              onClick={() => toggleButtonActive("Fitness")}
            >
              <img src={Buttonicon1} alt="Button_Icons" />
              <span>Fitness</span>
            </button>
            <button
              className={`wealth-button ${
                activeButtons.includes("Mindfulness")
                  ? "wealth-button-active"
                  : ""
              }`}
              type="button"
              onClick={() => toggleButtonActive("Mindfulness")}
            >
              <img src={Buttonicon2} alt="Button_Icons" />
              <span>Mindfulness</span>
            </button>
            <button
              className={`wealth-button ${
                activeButtons.includes("Stress-Management")
                  ? "wealth-button-active"
                  : ""
              }`}
              type="button"
              onClick={() => toggleButtonActive("Stress-Management")}
            >
              <img src={Buttonicon3} alt="Button_Icons" />
              <span>Stress-Management</span>
            </button>
            <button
              className={`wealth-button ${
                activeButtons.includes("Travel Wellness")
                  ? "wealth-button-active"
                  : ""
              }`}
              type="button"
              onClick={() => toggleButtonActive("Travel Wellness")}
            >
              <img src={Buttonicon4} alt="Button_Icons" />
              <span>Travel Wellness</span>
            </button>
            <button
              className={`wealth-button ${
                activeButtons.includes("Positive Self-Talk")
                  ? "wealth-button-active"
                  : ""
              }`}
              type="button"
              onClick={() => toggleButtonActive("Positive Self-Talk")}
            >
              <img src={Buttonicon5} alt="Button_Icons" />
              <span>Positive Self-Talk</span>
            </button>
          </div>
          <div className="all-buttons-alignment-div">
            <button
              className={`wealth-button ${
                activeButtons.includes("Nutrition")
                  ? "wealth-button-active"
                  : ""
              }`}
              type="button"
              onClick={() => toggleButtonActive("Nutrition")}
            >
              <img src={Buttonicon1} alt="Button_Icons" />
              <span>Nutrition</span>
            </button>
            <button
              className={`wealth-button ${
                activeButtons.includes("Self-care")
                  ? "wealth-button-active"
                  : ""
              }`}
              type="button"
              onClick={() => toggleButtonActive("Self-care")}
            >
              <img src={Buttonicon2} alt="Button_Icons" />
              <span>Self-care</span>
            </button>
            <button
              className={`wealth-button ${
                activeButtons.includes("Corporate wellness")
                  ? "wealth-button-active"
                  : ""
              }`}
              type="button"
              onClick={() => toggleButtonActive("Corporate wellness")}
            >
              <img src={Buttonicon3} alt="Button_Icons" />
              <span>Corporate wellness</span>
            </button>
            <button
              className={`wealth-button ${
                activeButtons.includes("Active Date Ideas")
                  ? "wealth-button-active"
                  : ""
              }`}
              type="button"
              onClick={() => toggleButtonActive("Active Date Ideas")}
            >
              <img src={Buttonicon4} alt="Button_Icons" />
              <span>Active Date Ideas</span>
            </button>
            <button
              className={`wealth-button ${
                activeButtons.includes("Positive Body Image")
                  ? "wealth-button-active"
                  : ""
              }`}
              type="button"
              onClick={() => toggleButtonActive("Positive Body Image")}
            >
              <img src={Buttonicon5} alt="Button_Icons" />
              <span>Positive Body Image</span>
            </button>
          </div>
        </div>
        <div className="next-button-main">
          <NavLink to={"/explore3"}>
            <button type="button">Next</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
