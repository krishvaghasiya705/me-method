import React from "react";
import "./thankpagecomponents.scss";
import Meicon from "../../assets/svg/signinsvgs/meicon";
import Popupimage from "../../assets/icon/popupimage.webp";
import { NavLink } from "react-router-dom";

export default function Thankpagecomponents() {
  return (
    <div className="thank-page-components-main">
      <div className="container1">
        <div className="thank-page-components">
          <div className="thank-page-components-head" data-aos="fade-up" >
            <NavLink to={"/"}>
              <Meicon />
            </NavLink>
          </div>
          <div className="thanks-message-title">
            <h1 data-aos="fade-up" >Thank You!</h1>
          </div>
          <div className="thanks-pop-up-image">
            <img src={Popupimage} alt="Popupimage" data-aos="fade-up" />
          </div>
          <div className="thanks-message-pera">
            <p data-aos="fade-right" >
              Your order has been placed! You will receive an email receipt
              shortly.
            </p>
          </div>
          <NavLink to={"/"} data-aos="fade-right">
            <button type="button" className="done-button">
              Done
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
