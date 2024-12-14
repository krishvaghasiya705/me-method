import React, { useState, useEffect } from "react";
import "./cart.scss";
import Backicon from "../../assets/svg/backicon";
import Deleteicon from "../../assets/svg/deleteicon";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  const increaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity < 10) {
      updatedCartItems[index].quantity += 1;
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  const decreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => {
        const price = parseFloat(item.product.price.replace(/[$,]/g, ""));
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const deleteItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <section className="cart-section-main">
      <div className="container1">
        <div className="cart-back-icon-div" onClick={handleBackClick}>
          <Backicon />
          <h1>My Cart</h1>
        </div>
        <div className="cart-main-alignment">
          <div className="cart-items-div-main">
            {cartItems.map((item, index) => (
              <div className="cart-items-div" key={index}>
                <div className="cart-items-image">
                  <img src={item.product.image} alt={item.product.title} />
                </div>
                <div className="cart-items-details">
                  <p className="cart-item-name">{item.product.title}</p>
                  <span className="cart-item-price">{item.product.price}</span>
                  <div className="cart-item-quantity">
                    <div
                      className={`cart-item-quality-decrease ${
                        item.quantity === 1 ? "limit" : ""
                      }`}
                      onClick={() => decreaseQuantity(index)}
                    ></div>
                    <span>{item.quantity}</span>
                    <div
                      className={`cart-item-quality-increase ${
                        item.quantity === 10 ? "limit" : ""
                      }`}
                      onClick={() => increaseQuantity(index)}
                    ></div>
                  </div>
                </div>
                <div
                  className="delete-items-icon"
                  onClick={() => deleteItem(index)}
                >
                  <Deleteicon />
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total-and-address-div-main">
            <div className="cart-total-div-main">
              <p>Total</p>
              <span>${calculateTotal()}</span>
            </div>
            <button type="button" className="cart-address-button">
              Address
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
