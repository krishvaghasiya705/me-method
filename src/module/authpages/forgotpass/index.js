import React from "react";
import "./forgotpass.scss";
import Meicon from "../../../assets/svg/signinsvgs/meicon";
import signinmobileimage from "../../../assets/image/signinimage/signinmobileimage.png";
import Phoneicon from "../../../assets/svg/signinsvgs/phoneicon";

export default function Forgotpass() {
  return (
    <section className="forgot-pass-section-main">
      <div className="forgot-pass-container">
        <div className="forgot-pass-flx-main">
          <div className="signin-mobile-image-main">
            <img src={signinmobileimage} alt="signinmobileimage" />
          </div>
          <div className="forgot-pass-form-main">
            <div className="forgot-pass-form-head">
              <Meicon />
              <p>
                Enter your Mobile number and will send you a otp to reset your
                password
              </p>
            </div>
            <div className="forgot-pass-form">
              <div className="input-main">
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
              <div className="forgot-pass-button">
                <button type="submit">Get Code</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
