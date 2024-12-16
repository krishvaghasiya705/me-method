import React, { useState } from "react";
import "./menutritioncards.scss";
import menutritionsdata from "../../../data/menutritionsdata/menutritionsdata";
import { useNavigate } from "react-router-dom";

export default function Menutritioncards() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleCardClick = (item) => {
    navigate("/menutritionsdetails", { state: { item } });
  };

  const filteredData =
    selectedCategory === "all"
      ? menutritionsdata
      : menutritionsdata.filter((item) => {
          const categoryKeywords = {
            Breakfast: ["breakfast", "smoothie", "oats"],
            Lunch: ["salad", "bowl", "sandwich"],
            Diner: ["dinner", "meal", "recipe"],
            beverages: ["drink", "smoothie", "juice"],
            Desserts: ["dessert", "cake", "sweet"],
            "Travel Snacks": ["snack", "quick", "portable"],
          };
          return categoryKeywords[selectedCategory].some((keyword) =>
            item.title.toLowerCase().includes(keyword)
          );
        });

  console.log(menutritionsdata);

  return (
    <div className="Me-nutrition-cards-main">
      <div className="container1">
        <div className="Me-nutrition-cards-head">
          {[
            "all",
            "Breakfast",
            "Lunch",
            "Diner",
            "beverages",
            "Desserts",
            "Travel Snacks",
          ].map((category) => (
            <span
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={selectedCategory === category ? "active" : ""}
            >
              {category}
            </span>
          ))}
        </div>
        <div className="Me-nutrition-cards-body">
          <div className="Me-nutrition-cards-body-grd">
            {filteredData.map((item) => (
              <div
                className="Me-nutrition-card"
                key={item.id}
                onClick={() => handleCardClick(item)}
              >
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
  );
}
