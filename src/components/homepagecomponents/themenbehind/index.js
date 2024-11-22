import React from "react";
import "./themenbehind.scss";
import themenimage from "../../../assets/image/homeimage/themenimage.webp";
import Meicon from "../../../assets/svg/homesvgs/meicon";
import Isyouicon from "../../../assets/svg/homesvgs/isyouicon";
import borderline from "../../../assets/image/homeimage/borderline.png";
import pattern2 from "../../../assets/image/homeimage/pattern2.png";

export default function Themenbehind() {
  return (
    <div className="the-men-behind-section-main">
      <div className="container">
        <div className="the-men-behind-main-flx">
          <div className="the-men-behind-image-div">
            <img src={themenimage} alt="themenimage" />
            <div className="me-is-you-div-ticket">
              <Meicon />
              <Isyouicon />
            </div>
          </div>
          <div className="the-men-behind-content-main">
            <h4>The man behind the MEmethod</h4>
            <p>
              The MEmethod is built on the belief that achieving balance in your
              life can be accomplished through simple daily habits. With mental
              health and spiritual health being the fastest-growing categories
              in the US wellness market, we have made it our mission to help you
              simplify your daily routines so that you can look and feel your
              best every day.
            </p>
            <div className="content-bottom-line">
              <img src={borderline} alt="borderline" />
            </div>
          </div>
        </div>
      </div>
      <div className="pattern-div">
        <img src={pattern2} alt="pattern2" />
      </div>
    </div>
  );
}
