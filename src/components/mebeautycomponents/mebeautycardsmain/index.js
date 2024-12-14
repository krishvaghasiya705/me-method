import React, { useState } from "react";
import "./mebeautycards.scss";
import Mebeutydetail from "../../../data/mebeutydata";
import { NavLink } from "react-router-dom";

export default function Mebeautycardsmain() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? Mebeutydetail
      : Mebeutydetail.filter(
          (item) => item.category.toLowerCase() === activeFilter.toLowerCase()
        );

  const filters = [
    "all",
    "me oil",
    "me fundamentals",
    "me deodrant",
    "me pomadd",
    "me sleep",
  ];

  console.log(Mebeutydetail);

  return (
    <div className="me-beauty-cards-main">
      <div className="me-beauty-cards-head">
        <div className="container1">
          <div className="me-beauty-cards-head-filters-main">
            {filters.map((filter) => (
              <span
                key={filter}
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="me-beauty-cards-div-main">
        <div className="container1">
          <div className="me-beauty-cards-grd-main">
            {filteredItems.map((item, id) => (
              <NavLink to={"/meproducts"}>
                <div key={id} className="me-beauty-card-main">
                  <div className="me-beauty-card-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="me-beauty-card-details">
                    <p>{item.title}</p>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
