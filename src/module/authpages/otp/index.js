import React, { useRef, useState } from "react";
import "./otp.scss";
import Meicon from "../../../assets/svg/signinsvgs/meicon";
import signinmobileimage from "../../../assets/image/signinimage/signinmobileimage.png";
import { NavLink, useNavigate } from "react-router-dom";

export default function Otp() {
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const [isVerified, setIsVerified] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const resendOTP = () => {
    setResendLoading(true);
    // Generate a new 4-digit OTP
    const newOTP = Math.floor(1000 + Math.random() * 9000).toString();
    // Store the new OTP in localStorage
    localStorage.setItem("currentOTP", newOTP);
    // Reset OTP input fields
    setOtpValues(["", "", "", ""]);
    // Focus on first input
    inputRefs[0].current.focus();

    // Simulate API call delay
    setTimeout(() => {
      setResendLoading(false);
      alert("New OTP has been sent to your email: " + newOTP);
    }, 1500);
  };

  const verifyOTP = () => {
    const enteredOTP = otpValues.join("");
    const storedOTP = localStorage.getItem("currentOTP");

    if (enteredOTP === storedOTP) {
      setIsVerified(true);
      localStorage.setItem("isOtpVerified", "true");
      localStorage.removeItem("currentOTP"); // Clear the OTP after successful verification
      navigate("/explore1");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <section className="otp-section-main">
      <div className="otp-container">
        <div className="otp-flx-main">
          <div className="signin-mobile-image-main">
            <img src={signinmobileimage} alt="signinmobileimage" />
          </div>
          <div className="otp-form-main">
            <div className="otp-form-head">
              <Meicon />
              <p>Enter 4 digit code that you received on your email</p>
            </div>
            <div className="otp-form">
              <div className="otp-form-div">
                <div className="otp-boxes-alignment-main">
                  {[0, 1, 2, 3].map((index) => (
                    <input
                      key={index}
                      ref={inputRefs[index]}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="0"
                      className="otp-box"
                      maxLength="1"
                      value={otpValues[index]}
                      onChange={(e) => handleInput(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                    />
                  ))}
                </div>
                <button className="resend-button" onClick={resendOTP} disabled={resendLoading}>
                  {resendLoading ? "Sending..." : "Resend"}
                </button>
              </div>
              <div className="otp-button-main-div">
                <div>
                  {/* Conditional rendering based on OTP verification */}
                  {isVerified ? (
                    <NavLink to={"/explore1"}>
                      <div className="otp-button">
                        <button type="submit">Get Code</button>
                      </div>
                    </NavLink>
                  ) : (
                    <div className="otp-button">
                      <button type="submit" onClick={verifyOTP}>
                        Verify OTP
                      </button>
                    </div>
                  )}
                </div>
                <NavLink to={"/signin"}>
                  <p>Back to Sign In</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
