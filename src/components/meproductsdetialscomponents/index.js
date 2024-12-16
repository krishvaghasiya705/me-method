import React, { useState } from "react";
import "./meproductsdetials.scss";
import Mebeutydetail from "../../data/mebeutydata";
import Carticon2 from "../../assets/svg/carticon2";
import { NavLink, useLocation } from "react-router-dom";

export default function Meproductsdetialscomponents() {
  const location = useLocation();
  const { product } = location.state;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push({ product, quantity });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    window.location.href = "/cart";
  };

  return (
    <div className="me-products-detials-components-main">
      <div className="container1">
        <div className="me-products-detials-component-product-alignment">
          <div className="me-products-detials-component-product-image-div">
            <img src={product.image} alt={product.title} data-aos="fade-left" />
          </div>
          <div className="me-products-detials-component-product-details-div-main">
            <h1 data-aos="fade-left" >{product.title}</h1>
            <span className="product-price" data-aos="fade-right" >$49.00</span>
            <div className="product-item-quantity">
              <div
                className={`product-item-quality-decrease ${quantity === 1 ? "limit" : ""
                  }`}
                onClick={decreaseQuantity}
                data-aos="fade-right"
              ></div>
              <span data-aos="fade-down" >{quantity}</span>
              <div
                className={`product-item-quality-increase ${quantity === 10 ? "limit" : ""
                  }`}
                onClick={increaseQuantity}
                data-aos="fade-left"
              ></div>
            </div>
            <div className="buy-and-cart-button-main">
              <button className="buy-button" data-aos="fade-down" >Buy Now</button>
              <button className="cart-button" onClick={addToCart} data-aos="fade-down" >Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="me-product-details" data-aos="fade-up" >
          <h2>Details</h2>
          <p>{product.details}</p>

          <h3>Active Ingredients</h3>
          <p>{product.ingredients}</p>
        </div>
        <div className="me-products-cards-grd-main">
          {Mebeutydetail.slice(0, 3).map((item, id) => (
            <NavLink to={"/meproducts"} key={id}>
              <div className="me-products-card-main">
                <div className="me-products-card-image">
                  <img src={item.image} alt={item.title} data-aos="flip-left" />
                </div>
                <div className="me-products-card-details">
                  <div>
                    <p data-aos="fade-right">{item.title}</p>
                    <span data-aos="fade-right">{item.price}</span>
                  </div>
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
  );
}
