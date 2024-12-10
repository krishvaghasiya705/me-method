import React from "react";
import "./menutritionsdetails.scss";
import menutritionsdata from "../../../data/menutritionsdata/menutritionsdata";
// import nutritionimage1 from "../../../assets/image/menutritionimages/nutritionimage1.webp";
import Backicon from "../../../assets/svg/backicon";
import Usericon from "../../../assets/svg/usericon";
import { useLocation, useNavigate } from "react-router-dom";

export default function Menutritondetailspage() {
  const location = useLocation();
  const { item } = location.state;

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  console.log(menutritionsdata);
  return (
    <div className="Me-nutriton-details-page-layout-main">
      <div className="container1">
        <div className="Me-nutriton-details-page-back-button-head">
          <button type="button" onClick={handleBackClick}>
            <Backicon />
            <span>Back</span>
          </button>
        </div>
        <div className="Me-nutriton-details-page-layout">
          <div>
            <div className="Me-nutriton-details-main">
              <div className="Me-nutriton-details-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="Me-nutriton-details-head">
                <div className="Me-nutriton-details-head-title-and-view">
                  <h1>{item.title}</h1>
                  <div className="Me-nutrition-view-box">
                    <Usericon />
                    <span>{item.count}</span>
                  </div>
                </div>
                <p>{item.paragraph}</p>
              </div>
              <div className="Me-nutriton-details-name-div">
                <h2>{item.name}</h2>
                <span>{item.serve}</span>
              </div>
              <div className="Me-nutriton-details-ingredients-div">
                <h3>{item.ingredienttitle}</h3>
                <ul>
                  <li>
                    {item.ingredient1} <span>{item.ingredient1lined}</span>
                  </li>
                  <li>
                    {item.ingredient2} <span>{item.ingredient2lined}</span>
                  </li>
                  <li>{item.ingredient3}</li>
                  <li>{item.ingredient4}</li>
                  <li>
                    <span>{item.ingredient5}</span> {item.ingredient5lined}
                  </li>
                </ul>
              </div>
              <div className="Me-nutriton-details-process-div">
                <h4>Process:</h4>
                <ul>
                  <li>{item.process1}</li>
                  <li>{item.process2}</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="Me-nutritions-details-recommended-card-main">
              {menutritionsdata.slice(0, 4).map((item) => (
                <div className="Me-nutrition-card" key={item.id}>
                  <div className="Me-nutrition-card-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="Me-nutrition-card-details-main">
                    <h2>{item.title}</h2>
                    <p>{item.minititle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
