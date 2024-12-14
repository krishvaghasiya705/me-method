import React from "react";
import { Outlet } from "react-router-dom";
import Scrollrestore from "../common/scrollrestore";

export default function JoinLayout() {
  return (
    <div style={{ height: "100vh", overflowY: "auto" }}>
      <Scrollrestore />
      <Outlet />
    </div>
  );
}
