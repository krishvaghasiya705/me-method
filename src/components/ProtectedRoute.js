import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isVerified = localStorage.getItem("isOtpVerified") === "true";

  if (!isVerified) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;
