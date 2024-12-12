import React from "react";
import { useLocation } from "react-router-dom";
import Mebeautyherobanner from "../../../components/mebeaitycomponents/mebeautyherobanner";
import Mebeautycardsmain from "../../../components/mebeaitycomponents/mebeautycardsmain";

export default function Mebeauty() {
  const location = useLocation();

  let title, minititle;
  if (location.pathname === "/mebeauty") {
    title = "ME beauty";
    minititle = "FIND A PROGRAM TO ACHIEVE YOUR GOALS";
  } else if (location.pathname === "/meproducts") {
    title = "ME Products";
    minititle = "FIND A PROGRAM TO ACHIEVE YOUR GOALS";
  }

  return (
    <>
      <Mebeautyherobanner title={title} minititle={minititle} />
      <Mebeautycardsmain />
    </>
  );
}
