import React from "react";
import { Outlet } from "react-router-dom";
import Detailsheader from "../common/detailsheader";

export default function ExploreLayout() {
  return (
    <>
      <Detailsheader />
      <Outlet />
    </>
  );
}
