import React, { useState } from "react";
import "./30daystrial.scss";
import Eyeicon from "../../../assets/svg/signinsvgs/eyeicon";
import { NavLink } from "react-router-dom";

export default function Trialpage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="trial-page-main-layout">
      <div className="trial-page-header">
        <h1>30 Day Free Trial</h1>
        <p>Risk Free End at Anytime.</p>
      </div>
      <div className="trial-page-body">
        <form>
          <div className="input-alignment-main">
            <label>Card Number</label>
            <div className="input-alignment" data-aos="fade-right" >
              <input
                type={showPassword ? "text" : "password"}
                placeholder={
                  showPassword ? "1234 1234 1234 1234" : "**** **** **** ****"
                }
              />
              <div
                onClick={togglePasswordVisibility}
                className="eye-icon-div-main"
              >
                <Eyeicon />
              </div>
            </div>
          </div>
          <div className="input-alignment-main">
            <label>Card Holder name</label>
            <div className="input-alignment" data-aos="fade-left" >
              <input type="text" placeholder="Card holder name" />
            </div>
          </div>
          <div className="expire-input-alignment-main">
            <div className="expire-input-alignment">
              <label>Expiry</label>
              <div className="input-alignment">
                <input type="text" placeholder="MM/YYYY" data-aos="fade-right" />
              </div>
            </div>
            <div className="expire-input-alignment">
              <label>Security code</label>
              <div className="input-alignment">
                <input type="text" placeholder="CVV" data-aos="fade-left" />
              </div>
            </div>
          </div>
          <div className="package-end-date-box-main" data-aos="fade-right">
            <p>Package end date</p>
            <span>01/05/2023</span>
          </div>
          <div className="continue-button-main">
            <NavLink to={"/"} data-aos="fade-left" >
              <button type="button">Continue</button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
