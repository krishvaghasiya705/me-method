import React from "react";
import { Outlet } from "react-router-dom";
import Detailsheader from "../common/detailsheader";
import Scrollrestore from "../common/scrollrestore";

export default function ExploreLayout() {
  return (
    <div style={{ height: "100vh" }}>
      <Scrollrestore />
      <Detailsheader />
      <Outlet />
    </div>
  );
}
