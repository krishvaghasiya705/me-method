import React, { useState } from "react";
import "./mewisdomcardsmain.scss";
import Mewisdomdata from "../../../../data/mewisdomdata";

export default function Mewisdomcardsmain() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(Mewisdomdata.map((item) => item.category)),
  ];

  const filteredData =
    activeCategory === "All"
      ? Mewisdomdata
      : Mewisdomdata.filter((item) => item.category === activeCategory);

  return (
    <div className="me-wisdom-cards-main">
      <div className="container1">
        <div className="me-wisdom-cards-head">
          {categories.map((category) => (
            <span
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </span>
          ))}
        </div>
        <div className="me-wisdom-cards-grd-main">
          {filteredData.map((item, id) => (
            <div key={id} className="me-wisdom-card">
              <div className="me-wisdom-card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="me-wisdom-card-details">
                <h1>{item.title}</h1>
                <p>{item.minititle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
