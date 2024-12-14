import React from "react";
import { useLocation } from "react-router-dom";
import Mebeautyherobanner from "../../../components/mebeautycomponents/mebeautyherobanner";
import Mebeautycardsmain from "../../../components/mebeautycomponents/mebeautycardsmain";
import Mebeautycardssecondmain from "../../../components/mebeautycomponents/mebeautycardssecondmain";

export default function Mebeauty() {
  const location = useLocation();

  let title, minititle, cardsComponent;

  // Set titles and cards component based on the current URL
  if (location.pathname === "/mebeauty") {
    title = "ME beauty";
    minititle = "FIND A PROGRAM TO ACHIEVE YOUR GOALS";
    cardsComponent = <Mebeautycardsmain />;
  } else if (location.pathname === "/meproducts") {
    title = "ME Products";
    minititle = "FIND A PROGRAM TO ACHIEVE YOUR GOALS";
    cardsComponent = <Mebeautycardssecondmain />;
  }

  return (
    <>
      <Mebeautyherobanner title={title} minititle={minititle} />
      {cardsComponent}
    </>
  );
}
