import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";
import Mainlogo from "../../assets/svg/logo";
import googledownloadicon from "../../assets/icon/googledownloadicon.png";
import appstordownloadicon from "../../assets/icon/appstoredownloadicon.png";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top-content">
          <div className="me-method-links-and-logo-alignment">
            <div className="me-method-logo-footer-sc">
              <NavLink to={"/"}>
                <Mainlogo />
              </NavLink>
            </div>
            <div className="footer-link-div">
              <NavLink to={"/"}>Contact ME</NavLink>
              <NavLink to={"/"}>METV</NavLink>
              <NavLink to={"/"}>About ME</NavLink>
              <div className="term-links-main-sc">
                <NavLink to={"/"}>Terms</NavLink>|
                <NavLink to={"/"}>Privacy</NavLink>
              </div>
            </div>
          </div>
          <div className="me-method-logo-footer">
            <NavLink to={"/"}>
              <Mainlogo />
            </NavLink>
          </div>
          <div className="footer-download-div">
            <p>Download our applications</p>
            <div className="footer-download-flx">
              <img src={googledownloadicon} alt="googledownloadicon" />
              <img src={appstordownloadicon} alt="appstordownloadicon" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-div-footer-main">
        <div className="container">
          <div className="footer-copyright-flx">
            <p>© 2023 MeMethod. All Rights Reserved.</p>
            <div className="term-links-main">
              <NavLink to={"/"}>Terms</NavLink>|
              <NavLink to={"/"}>Privacy</NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
