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
            <img src={product.image} alt={product.title} />
          </div>
          <div className="me-products-detials-component-product-details-div-main">
            <h1>{product.title}</h1>
            <span className="product-price">$49.00</span>
            <div className="product-item-quantity">
              <div
                className={`product-item-quality-decrease ${
                  quantity === 1 ? "limit" : ""
                }`}
                onClick={decreaseQuantity}
              ></div>
              <span>{quantity}</span>
              <div
                className={`product-item-quality-increase ${
                  quantity === 10 ? "limit" : ""
                }`}
                onClick={increaseQuantity}
              ></div>
            </div>
            <div className="buy-and-cart-button-main">
              <button className="buy-button">Buy Now</button>
              <button className="cart-button" onClick={addToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="me-product-details">
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
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="me-products-card-details">
                  <div>
                    <p>{item.title}</p>
                    <span>{item.price}</span>
                  </div>
                  <div className="me-product-cart-icon">
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
