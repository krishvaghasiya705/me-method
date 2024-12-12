import React, { useState } from "react";
import "./mefitnessmain.scss";
import Filterdropdownicon from "../../../assets/svg/filterdropdownicon";
import Fitnessdata from "../../../data/fitnessdata/fitnessdata";
import { useNavigate } from "react-router-dom";

export default function Mefitnessmain() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("Newest");
  const [activeButton, setActiveButton] = useState("meSeries");
  const [expandedItems, setExpandedItems] = useState({});
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [activeIntensity, setActiveIntensity] = useState("");

  const options = ["Newest", "1 Month", "3 Month"];
  const categories = [
    "ALL",
    "SCULPT",
    "BARRE",
    "CORE",
    "HIIT",
    "PILATES",
    "STRETCHING",
    "STRENGTH",
    "WALKING",
  ];
  const intensityLevels = ["Beginner", "Moderate", "Intermediate", "Advanced"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleIntensityChange = (intensity) => {
    setActiveIntensity(intensity === activeIntensity ? "" : intensity);
  };

  const toggleReadMore = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleReadMoreClick = (item) => {
    toggleReadMore(item.id);
    navigate("/mefitnessdetails", { state: { item } });
  };

  const filterAndSortData = () => {
    let filteredData = [...Fitnessdata];

    // Filter by category
    if (activeCategory !== "ALL") {
      filteredData = filteredData.filter(
        (item) => item.category === activeCategory
      );
    }

    // Filter by intensity
    if (activeIntensity) {
      filteredData = filteredData.filter(
        (item) => item.intensity === activeIntensity
      );
    }

    // Filter by ME Series/ME Fitness
    filteredData = filteredData.filter((item) =>
      activeButton === "meSeries"
        ? item.type === "series"
        : item.type === "fitness"
    );

    // Sort data
    switch (selected) {
      case "Newest":
        filteredData.sort((a, b) => b.id - a.id);
        break;
      case "1 Month":
        filteredData = filteredData.filter((item) => item.duration <= 30);
        break;
      case "3 Month":
        filteredData = filteredData.filter((item) => item.duration <= 90);
        break;
      default:
        break;
    }

    return filteredData;
  };

  const filteredData = filterAndSortData();
  console.log(Fitnessdata);

  return (
    <>
      <div className="me-fitness-main-section">
        <div className="container1">
          <div className="me-fitness-main-head">
            <div className="me-fitness-head-filtering-types">
              {categories.map((category) => (
                <span
                  key={category}
                  className={activeCategory === category ? "active" : ""}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </span>
              ))}
            </div>
            <div className="me-fitness-sort-div-main">
              <span>Sort By:</span>
              <div
                className="me-fitness-filter-div-main"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span>{selected}</span>
                <Filterdropdownicon />
                {isOpen && (
                  <div className="dropdown-menu">
                    {options.map((option) => (
                      <div
                        key={option}
                        className="dropdown-item"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelect(option);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="me-fitness-main-head2-main">
          <div className="container1">
            <div className="me-fitness-main-head2">
              <div className="intensity-div-main">
                <div className="intensity-text">
                  <span>INTENSITY:</span>
                </div>
                <div className="intensity-radios-div-main">
                  {intensityLevels.map((intensity) => (
                    <div key={intensity} className="intensity-radio-div">
                      <input
                        type="radio"
                        checked={activeIntensity === intensity}
                        onChange={() => handleIntensityChange(intensity)}
                      />
                      <span>{intensity}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="me-fitness-toggle-button-div-main">
                <div
                  className={`me-fitness-toggle-button ${
                    activeButton === "meSeries" ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick("meSeries")}
                >
                  <span>ME Series</span>
                </div>
                <div
                  className={`me-fitness-toggle-button ${
                    activeButton === "meFitness" ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick("meFitness")}
                >
                  <span>ME Fitness</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container1">
          <div className="me-fitness-cards-main-alignment">
            {filteredData.map((item) => (
              <div key={item.id} className="me-fitness-cards-main">
                <div className="me-fitness-cards-image-div">
                  <img src={item.image} alt={item.image} />
                </div>
                <div className="me-fitness-cards-details-div">
                  <div className="me-fitness-cards-details-head">
                    <h1>{item.title}</h1>
                    <span>{item.minititle}</span>
                    <span style={{ display: "none" }}>{item.count}</span>
                  </div>
                  <div className="me-fitness-cards-details-body">
                    <p className={expandedItems[item.id] ? "expanded" : ""}>
                      {item.paragraph}
                      <span onClick={() => handleReadMoreClick(item)}>
                        {expandedItems[item.id] ? "READ LESS" : item.readmore}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
