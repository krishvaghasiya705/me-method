import React, { useState } from "react";
import "./header.scss";
import Mainlogo from "../../assets/svg/logo";
import { NavLink } from "react-router-dom";
import Sidebar from "../../components/headercomponents/sidebar";
import Menuicon from "../../assets/svg/menuicon";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="header-main">
            <div className="header-logo">
              <NavLink to={"/"}>
                <Mainlogo />
              </NavLink>
            </div>
            <div className="header-mobile-logo">
              <div onClick={toggleSidebar}>
                <Menuicon />
              </div>
              <div className="header-mobile-link">
                <NavLink to={"/"}>ME Fitness</NavLink>
              </div>
            </div>
            <div>
              <div className="header-main-content">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/meproducts"}>ME Products</NavLink>
                <NavLink to={"/meapp"}>ME App</NavLink>
                <NavLink to={"/metv"}>ME TV</NavLink>
                <NavLink to={"/aboutme"}>About ME</NavLink>
                <NavLink to={"/cart"}>Me cart</NavLink>
              </div>
              <div className="tablet-menu-div">
                <div onClick={toggleSidebar}>
                  <Menuicon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
    </>
  );
}

export default Header;
