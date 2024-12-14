import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../common/footer";
import Header from "../common/header";
import Scrollrestore from "../common/scrollrestore";

export default function DefaultLayout() {
  return (
    <>
      <Scrollrestore />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
