import React from "react";
import "./signup.scss";
import { NavLink } from "react-router-dom";
import Emailicon from "../../assets/svg/signinsvgs/emailicon";
import Eyeicon from "../../assets/svg/signinsvgs/eyeicon";
import signinmobileimage from "../../assets/image/signinimage/signinmobileimage.png";
import Usericon from "../../assets/svg/signinsvgs/usericon";
import Phoneicon from "../../assets/svg/signinsvgs/phoneicon";

export default function Signup() {
  return (
    <section className="sign-up-section-main">
      <div className="sign-up-container">
        <div className="sign-up-flx-main">
          <div className="signup-mobile-image-main">
            <img src={signinmobileimage} alt="signinmobileimage" />
          </div>
          <div className="sign-up-form-main">
            <div className="sign-up-form-head">
              <h1>CREATE AN ACCOUT</h1>
              <p>Please enter your personal information and create password </p>
            </div>
            <div className="sign-up-form">
              <div className="input-main">
                <input type="text" placeholder="Name" />
                <div className="email-icon">
                  <Usericon />
                </div>
              </div>
              <div className="input-main">
                <input type="email" placeholder="Email ID" />
                <div className="email-icon">
                  <Emailicon />
                </div>
              </div>
              <div className="input-main input-main-sc">
                <input type="number" placeholder="00000 00000" />
                <div className="country-code-selcetor-div">
                  <div className="country-code-selcetor">
                    <select>
                      <option value="1">1+</option>
                      <option value="2">91+</option>
                    </select>
                  </div>
                </div>
                <div className="email-icon">
                  <Phoneicon />
                </div>
              </div>
              <div className="input-main">
                <input type="password" placeholder="Password" />
                <div className="email-icon">
                  <Eyeicon />
                </div>
              </div>
              <div className="input-main">
                <input type="password" placeholder="Confirm Password" />
                <div className="email-icon">
                  <Eyeicon />
                </div>
              </div>
              <div className="confirmation-list-div-main">
                <div className="confirmation-list-div">
                  <div className="checkbox"></div>
                  <p>
                    I Confirm that i have read and agree to the
                    <NavLink to={"/"}> terms of use</NavLink> and
                    <NavLink to={"/"}> privacy policy</NavLink>
                  </p>
                </div>
                <div className="confirmation-list-div">
                  <div className="checkbox"></div>
                  <p>
                    I agree to receive newsletter and product updates from
                    MEmethod
                  </p>
                </div>
              </div>
              <div className="sign-up-button">
                <button type="submit">Sign Up</button>
              </div>
              <div className="didnt-have-acc-link-main">
                <p>
                  Already have an account?
                  <NavLink to={"/signup"}> Sign In</NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
