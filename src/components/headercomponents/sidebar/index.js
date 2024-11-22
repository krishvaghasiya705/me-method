import React from "react";
import "./sidebar.scss";
import Closeicon from "../../../assets/svg/closeicon";
import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, closeSidebar }) {
  return (
    <div className={`sidebar-main ${isOpen ? "sidebar-main-open" : ""}`}>
      <div className="sidebar-header">
        <div className="sidebar-close-icon" onClick={closeSidebar}>
          <Closeicon />
        </div>
      </div>
      <div className="sidebar-content-main">
        <div className="sidebar-link-div">
          <NavLink>Home</NavLink>
        </div>
        <div className="sidebar-link-div sidebar-link-div-sc">
          <NavLink>ME Products</NavLink>
        </div>
        <div className="sidebar-link-div">
          <NavLink>ME App</NavLink>
        </div>
        <div className="sidebar-link-div sidebar-link-div-sc">
          <NavLink>ME TV</NavLink>
        </div>
        <div className="sidebar-link-div">
          <NavLink>About ME</NavLink>
        </div>
      </div>
    </div>
  );
}
