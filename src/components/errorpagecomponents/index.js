import React from "react";
import "./errorpagecomponents.scss";
import { NavLink } from "react-router-dom";

export default function Errorpagecomponents() {
  return (
    <div className="error-container">
      <h1 className="error-title">Oops! Something went wrong.</h1>
      <p className="error-message">
        We couldn't find the page you're looking for.
      </p>
      <NavLink to={"/"}>
        <button className="error-button">Go Back to Home</button>
      </NavLink>
    </div>
  );
}
