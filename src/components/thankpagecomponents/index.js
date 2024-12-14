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
          <div className="thank-page-components-head">
            <NavLink to={"/"}>
              <Meicon />
            </NavLink>
          </div>
          <div className="thanks-message-title">
            <h1>Thank You!</h1>
          </div>
          <div className="thanks-pop-up-image">
            <img src={Popupimage} alt="Popupimage" />
          </div>
          <div className="thanks-message-pera">
            <p>
              Your order has been placed! You will receive an email receipt
              shortly.
            </p>
          </div>
          <NavLink to={"/"}>
            <button type="button" className="done-button">
              Done
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
