import React from "react";
import "./homeherobanner.scss";
import Startsvg from "../../../assets/svg/homesvgs/startsvg";
import Yoursvg from "../../../assets/svg/homesvgs/yoursvg";
import Youismeicon from "../../../assets/svg/homesvgs/youismeicon";
import Becauseicon from "../../../assets/svg/homesvgs/becauseicon";

// import Homeherobannerimage from "../../../assets/image/homeimage/herobanner.png";

export default function Homeherobanner() {
  return (
    <section className="home-herobanner">
      <div className="container">
        <div className="home-herobanner-main">
          {/* <div className="home-herobanner-image">
            <img src={Homeherobannerimage} alt="Homeherobannerimage" />
          </div> */}
          <div className="home-herobanner-content">
            <p>
              Unlimited ME Fitness, ME Nutrition, ME Beauty, and ME Wisdom for
              <span> $19/month</span> or <span>$199/year</span>. Get start with
              your <span>30 days Free Trial</span>
            </p>
            <button type="button" area-lable="homepage">
              START YOUR FREE TRAIL
            </button>
          </div>
        </div>
        <div className="home-herobanner-text-div-main">
          <div className="home-herobanner-text-div">
            <div className="your-text-main">
              <Yoursvg />
            </div>
            <div className="wellness-text">
              <h1>Wellness Journey</h1>
              <Startsvg />
            </div>
            <div className="because-text">
              <Becauseicon />
            </div>
            <div className="youisme-text">
              <Youismeicon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
