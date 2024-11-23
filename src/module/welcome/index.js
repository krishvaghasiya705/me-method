import React from "react";
import "./welcome.scss";

import meisyouicon from "../../assets/image/signinimage/meisyouicon.png";
import { NavLink } from "react-router-dom";

export default function Welcomeapge() {
  return (
    <div className="signin-section-main">
      <div className="signin-box-main">
        <div className="signin-page-main-logo">
          <img src={meisyouicon} alt="meisyouicon" />
        </div>
        <p>Heath-Wellness app for All</p>
        <div className="login-page-buttons-flx">
          <NavLink to={"/"}>
            <button type="button">Join Us</button>
          </NavLink>
          <NavLink to={"/"}>
            <button type="button">Explore</button>
          </NavLink>
          <NavLink to={"/signin"}>
            <button type="button">Login</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
