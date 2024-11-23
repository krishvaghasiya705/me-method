import React from "react";
import "./signin.scss";
import { NavLink } from "react-router-dom";
import Meicon from "../../assets/svg/signinsvgs/meicon";
import Emailicon from "../../assets/svg/signinsvgs/emailicon";
import Eyeicon from "../../assets/svg/signinsvgs/eyeicon";
import signinmobileimage from "../../assets/image/signinimage/signinmobileimage.png";

export default function Signin() {
  return (
    <section className="sign-in-section-main">
      <div className="sign-in-container">
        <div className="sign-in-flx-main">
          <div className="signin-mobile-image-main">
            <img src={signinmobileimage} alt="signinmobileimage" />
          </div>
          <div className="sign-in-form-main">
            <div className="sign-in-form-head">
              <Meicon />
            </div>
            <div className="sign-in-form">
              <div className="input-main">
                <input type="email" placeholder="Email ID" />
                <div className="email-icon">
                  <Emailicon />
                </div>
              </div>
              <div className="input-main-sc-alignment">
                <div className="input-main-sc">
                  <input type="password" placeholder="Password" />
                  <div className="email-icon">
                    <Eyeicon />
                  </div>
                </div>
                <div className="forgot-passord-link">
                  <NavLink to={"/"}>Forgot Password?</NavLink>
                </div>
              </div>
              <div className="sign-in-button">
                <button type="submit">Sign In</button>
              </div>
              <div className="didnt-have-acc-link-main">
                <p>
                  Don’t have an account? <NavLink to={"/signup"}>Sign Up</NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
