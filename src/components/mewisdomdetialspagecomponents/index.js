import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./mewisdomdetailspage.scss";
import Backicon from "../../assets/svg/backicon";
import Usericon from "../../assets/svg/usericon";
import Mewisdomdata from "../../data/mewisdomdata";

export default function Mewisdomdetailspage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { item } = location.state;

  const handleBackClick = () => {
    navigate(-1);
  };

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
                <p>{item.paragraph}</p>
              </div>
              <div className="Me-nutriton-details-name-div">
                <h2 data-aos="fade-right" >{item.title2}</h2>
                <span data-aos="fade-right" >{item.title2details}</span>
              </div>
              <div className="Me-nutriton-details-ingredients-div">
                <h3 data-aos="fade-right" >{item.title3}</h3>
                <ul data-aos="fade-right" >
                  <li>{item.title3detials1}</li>
                  <li>{item.title3detials2}</li>
                  <li>{item.title3detials3}</li>
                </ul>
              </div>
              <div className="Me-nutriton-details-process-div">
                <h4 data-aos="fade-right" >{item.process}</h4>
                <ul data-aos="fade-right" >
                  <li>{item.proccessuse1}</li>
                  <li>{item.proccessuse2}</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="Me-nutritions-details-recommended-card-main">
              {Mewisdomdata.slice(0, 4).map((recommendedItem) => (
                <div className="Me-nutrition-card" key={recommendedItem.id}>
                  <div className="Me-nutrition-card-image">
                    <img
                      src={recommendedItem.image}
                      alt={recommendedItem.title}
                      data-aos="flip-left"
                    />
                  </div>
                  <div className="Me-nutrition-card-details-main">
                    <h2 data-aos="fade-right" >{recommendedItem.title}</h2>
                    <p data-aos="fade-right" >{recommendedItem.minititle}</p>
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
