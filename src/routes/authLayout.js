import React from "react";
import { Outlet } from "react-router-dom";
import Scrollrestore from "../common/scrollrestore";

export default function Authlayout() {
  return (
    <>
      <Scrollrestore />
      <Outlet />
    </>
  );
}
