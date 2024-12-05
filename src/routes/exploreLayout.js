import React from "react";
import { Outlet } from "react-router-dom";
import Detailsheader from "../common/detailsheader";

export default function ExploreLayout() {
  return (
    <div style={{ height: "100vh" }}>
      <Detailsheader />
      <Outlet />
    </div>
  );
}
