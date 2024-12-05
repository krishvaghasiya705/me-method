import React, { useState } from "react";
import "./joinnowpage.scss";
import Joinnowmenimage from "../../../assets/image/joinnowmenimage.webp";
import { NavLink } from "react-router-dom";

export default function Joinnow() {
  const [activePlan, setActivePlan] = useState(null); // Track the active plan

  const handlePlanClick = (plan) => {
    setActivePlan(plan); // Set the selected plan
  };

  return (
    <div className="join-now-section-main">
      <div className="joinnow-men-image-div">
        <img src={Joinnowmenimage} alt="Joinnowmenimage" />
      </div>
      <div className="joinnow-details-div-main">
        <div className="joinnow-details-title">
          <h1>Join Now</h1>
          <p>Get on The MEmethod</p>
        </div>
        <div className="joinnow-details-body">
          {/* Free Trial Plan */}
          <div
            className={`joinow-priced-box-main ${
              activePlan === "free" ? "joinow-priced-box-main-active" : ""
            }`}
            onClick={() => handlePlanClick("free")}
          >
            <div className="joinow-priced-box-head">
              <span>Free Trial</span>
            </div>
            <div className="joinow-priced-box-body">
              <span>30 Days</span>
            </div>
          </div>

          {/* Monthly Plan */}
          <div
            className={`joinow-priced-box-main ${
              activePlan === "monthly" ? "joinow-priced-box-main-active" : ""
            }`}
            onClick={() => handlePlanClick("monthly")}
          >
            <div className="joinow-priced-box-head">
              <span>Monthly</span>
            </div>
            <div className="joinow-priced-box-body">
              <span>$9</span>
            </div>
          </div>
          <div
            className={`joinow-priced-box-main ${
              activePlan === "yearly" ? "joinow-priced-box-main-active" : ""
            }`}
            onClick={() => handlePlanClick("yearly")}
          >
            <div className="joinow-priced-box-head">
              <span>Yearly</span>
            </div>
            <div className="joinow-priced-box-body">
              <span>$99</span>
            </div>
          </div>

          <div className="continue-button-main">
            <NavLink to={"/"}>
              <button type="button">Continue</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
