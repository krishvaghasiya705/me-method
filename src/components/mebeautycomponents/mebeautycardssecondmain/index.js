import React, { useState } from "react";
import "./mebeautycardssecondmain.scss";
import Mebeutydetail from "../../../data/mebeutydata";
import { NavLink } from "react-router-dom";
import Searchicon from "../../../assets/svg/searchicon";
import Carticon from "../../../assets/carticon";
import Carticon2 from "../../../assets/svg/carticon2";

export default function Mebeautycardssecondmain() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all"); // New state for category

  const filteredProducts = Mebeutydetail.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  console.log(Mebeutydetail);
  return (
    <div className="me-products-cards-main">
      <div className="me-products-cards-head">
        <div className="container">
          <div className="me-products-cards-head-filters-main">
            {[
              "all",
              "Facial Cleansing Oil",
              "Face Serum",
              "Under Eye",
              "Hair Oil",
              "Pomade",
              "Fragrance",
              "Natural Deodorant",
              "Beauty Sleep Supplement",
            ].map((category) => (
              <span
                key={category}
                className={selectedCategory === category ? "active" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="me-products-cards-searchbar-main">
        <div className="container1">
          <div className="me-products-cards-searchbar-flx">
            <div className="me-products-cards-searchbar">
              <input
                type="search"
                placeholder="Search Product"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="search-icon">
                <Searchicon />
              </div>
            </div>
            <div className="cart-icon-and-div">
              <NavLink to={"/cart"}>
                <Carticon />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="me-products-cards-div-main">
        <div className="container1">
          <div className="me-products-cards-grd-main">
            {filteredProducts.map((item, id) => (
              <NavLink
                to={"/meproductsdetialspage"}
                key={id}
                state={{ product: item }}
              >
                <div className="me-products-card-main">
                  <div className="me-products-card-image">
                    <img src={item.image} alt={item.title} data-aos="flip-left" />
                  </div>
                  <div className="me-products-card-details">
                    <div>
                      <p data-aos="fade-right" >{item.title}</p>
                      <span data-aos="fade-right" >{item.price}</span>
                    </div>
                    {/* <div className="me-product-cart-icon" onClick={(e) => { e.stopPropagation(); }}> */}
                    <div className="me-product-cart-icon" data-aos="fade-left">
                      <Carticon2 />
                    </div>
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
