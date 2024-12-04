import React, { useState } from "react";
import "./forgotpass.scss";
import Meicon from "../../../assets/svg/signinsvgs/meicon";
import signinmobileimage from "../../../assets/image/signinimage/signinmobileimage.png";
import Phoneicon from "../../../assets/svg/signinsvgs/phoneicon";
import { NavLink, useNavigate } from "react-router-dom";

export default function Forgotpass() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const generateOTP = () => {
    const otp = Math.floor(1000 + Math.random() * 9000);
    localStorage.setItem("currentOTP", otp.toString());
    return otp;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber === "7874982802") {
      const otp = generateOTP();
      console.log("Generated OTP:", otp);
      navigate("/otp");
    } else {
      alert("Please enter valid phone number: 7874982802");
    }
  };

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
                <input
                  type="number"
                  placeholder="00000 00000"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <div className="country-code-selcetor-div">
                  <div className="country-code-selcetor">
                    <select>
                      <option value="+1 (US/Canada)">+1</option>
                      <option value="+44 (UK)">+44</option>
                      <option value="+91 (India)">+91</option>
                      <option value="+86 (China)">+86</option>
                      <option value="+81 (Japan)">+81</option>
                      <option value="+49 (Germany)">+49</option>
                      <option value="+33 (France)">+33</option>
                      <option value="+61 (Australia)">+61</option>
                      <option value="+7 (Russia)">+7</option>
                      <option value="+55 (Brazil)">+55</option>
                      <option value="+34 (Spain)">+34</option>
                      <option value="+39 (Italy)">+39</option>
                      <option value="+82 (South Korea)">+82</option>
                      <option value="+31 (Netherlands)">+31</option>
                      <option value="+65 (Singapore)">+65</option>
                      <option value="+64 (New Zealand)">+64</option>
                      <option value="+52 (Mexico)">+52</option>
                      <option value="+971 (UAE)">+971</option>
                      <option value="+966 (Saudi Arabia)">+966</option>
                      <option value="+27 (South Africa)">+27</option>
                    </select>
                  </div>
                </div>
                <div className="email-icon">
                  <Phoneicon />
                </div>
              </div>
              <NavLink to={"/otp"}>
                <div className="forgot-pass-button">
                  <button type="submit" onClick={handleSubmit}>
                    Send OTP
                  </button>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
