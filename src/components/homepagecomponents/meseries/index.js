import React from "react";
import "./meseries.scss";

import Arrownext from "../../../assets/svg/homesvgs/arrownext";
import Pattern1 from "../../../assets/image/homeimage/pattern1.png";
import meseriesfitness from "../../../assets/image/homeimage/meseriesfitness.webp";
import meseriesnutritions from "../../../assets/image/homeimage/meseriesnutrition.webp";
import meseriesbeauty from "../../../assets/image/homeimage/meseriesbeauty.webp";
import meseriesmindfulness from "../../../assets/image/homeimage/meseriesmindfulness.webp";
import { NavLink } from "react-router-dom";

export default function Meseries() {
  return (
    <div className="me-series-section-main">
      <div className="me-series-pattern-image-div">
        <img src={Pattern1} alt="Pattern1" />
      </div>
      <div className="me-series-container">
        <div className="me-series-title">
          <h2>ME SERIES</h2>
          <p>
            We provide a diverse range of short and long form content on topics
            related to wellness and personal growth that can help you need a
            healthy lifestyle.
          </p>
        </div>
        <div className="me-series-grd-items-main">
          <NavLink to={"/mefitness"}>
            <div className="me-series-grd-item">
              <div className="me-series-grd-item-image-div">
                <img src={meseriesfitness} alt="meseriesfitness" />
              </div>
              <div className="me-series-grd-items-details">
                <p>me fitness</p>
                <Arrownext />
              </div>
            </div>
          </NavLink>
          <NavLink to={"/menutrition"}>
            <div className="me-series-grd-item">
              <div className="me-series-grd-item-image-div">
                <img src={meseriesnutritions} alt="meseriesnutritions" />
              </div>
              <div className="me-series-grd-items-details">
                <p>me nutrition</p>
                <Arrownext />
              </div>
            </div>
          </NavLink>
          <NavLink to={"/mebeauty"}>
            <div className="me-series-grd-item">
              <div className="me-series-grd-item-image-div">
                <img src={meseriesbeauty} alt="meseriesbeauty" />
              </div>
              <div className="me-series-grd-items-details">
                <p>me beauty</p>
                <Arrownext />
              </div>
            </div>
          </NavLink>
          <NavLink to={"/mewisdom"}>
            <div className="me-series-grd-item">
              <div className="me-series-grd-item-image-div">
                <img src={meseriesmindfulness} alt="meseriesmindfulness" />
              </div>
              <div className="me-series-grd-items-details">
                <p>me mindfulness</p>
                <Arrownext />
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
