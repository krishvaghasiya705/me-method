import React from "react";
import { useLocation } from "react-router-dom";
import "./detailsheader.scss";

export default function Detailsheader() {
  const location = useLocation();
  const pathname = location.pathname;

  const getHeaderText = () => {
    switch (pathname) {
      case "/explore1":
        return "Please fill the below details";
      case "/explore2":
        return "What are you interested in?";
      case "/explore3":
        return "Any particular style you want to focus in Fitness?";
      case "/explore4":
        return "What type of nutrition information would you like to see more?";
      case "/explore5":
        return "What type of mindfulness practices are you more interested?";
      case "/explore6":
        return "What type of self care routines are you looking for?";
      case "/explore7":
        return "How have you been feeling lately?";
      case "/explore8":
        return "What's typically the biggest source of stress for you?";
      case "/explore9":
        return "How does stress usually show up for you?";
      case "/explore10":
        return "What is your designated work environment?";
      default:
        return "Sorry i think you missed";
    }
  };

  return (
    <header className="details-header">
      <p>{getHeaderText()}</p>
    </header>
  );
}
