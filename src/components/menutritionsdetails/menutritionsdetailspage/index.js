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
          <button type="button" onClick={handleBackClick} data-aos="fade-right" >
            <Backicon />
            <span className="back-button-web-show">Back</span>
            <span className="back-button-mobile-show">
              Return to ME Nutrition
            </span>
          </button>
        </div>
        <div className="Me-nutriton-details-page-layout">
          <div>
            <div className="Me-nutriton-details-main">
              <div className="Me-nutriton-details-image">
                <img src={item.image} alt={item.title} data-aos="flip-left" />
                <div className="Me-nutrition-view-box" data-aos="fade-left" >
                  <Usericon />
                  <span>{item.count}</span>
                </div>
              </div>
              <div className="Me-nutriton-details-head">
                <div className="Me-nutriton-details-head-title-and-view">
                  <h1 data-aos="fade-right" >{item.title}</h1>
                  <div className="Me-nutrition-view-box" data-aos="fade-left" >
                    <Usericon />
                    <span>{item.count}</span>
                  </div>
                </div>
                <p data-aos="fade-right" >{item.paragraph}</p>
              </div>
              <div className="Me-nutriton-details-name-div">
                <h2 data-aos="fade-right" >{item.name}</h2>
                <span data-aos="fade-right" >{item.serve}</span>
              </div>
              <div className="Me-nutriton-details-ingredients-div">
                <h3 data-aos="fade-right" >{item.ingredienttitle}</h3>
                <ul data-aos="fade-right" >
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
                <h4 data-aos="fade-right" >Process:</h4>
                <ul data-aos="fade-right" >
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
                    <img src={item.image} alt={item.title} data-aos="flip-left" />
                  </div>
                  <div className="Me-nutrition-card-details-main">
                    <h2 data-aos="fade-right" >{item.title}</h2>
                    <p data-aos="fade-right" >{item.minititle}</p>
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
