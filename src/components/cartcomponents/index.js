import React, { useState, useEffect } from "react";
import "./cart.scss";
import Backicon from "../../assets/svg/backicon";
import Deleteicon from "../../assets/svg/deleteicon";
import cartemptyimage from "../../assets/icon/empty-cart.png";
import { NavLink, useNavigate } from "react-router-dom";

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
        <div className="cart-back-icon-div" onClick={handleBackClick} data-aos="fade-down" >
          <Backicon />
          <h1>My Cart</h1>
        </div>
        <div className="cart-main-alignment">
          <div className="cart-items-div-main">
            {cartItems.length === 0 ? (
              <div className="cart-empty-div-main">
                <div className="cart-empty-image">
                  <img src={cartemptyimage} alt="cartemptyimage" />
                </div>
                <h1>Your Cart is Empty</h1>
                <p>Add something to make me happy :)</p>
                <NavLink to={"/meproducts"}>
                  <button>continue Shopping</button>
                </NavLink>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div className="cart-items-div" key={index}>
                  <div className="cart-items-image">
                    <img src={item.product.image} alt={item.product.title} data-aos="flip-left" />
                  </div>
                  <div className="cart-items-details">
                    <p className="cart-item-name" data-aos="fade-right" >{item.product.title}</p>
                    <span className="cart-item-price" data-aos="fade-right" >
                      {item.product.price}
                    </span>
                    <div className="cart-item-quantity">
                      <div
                        className={`cart-item-quality-decrease ${item.quantity === 1 ? "limit" : ""
                          }`}
                        onClick={() => decreaseQuantity(index)}
                        data-aos="fade-right"
                      ></div>
                      <span data-aos="fade-down" >{item.quantity}</span>
                      <div
                        className={`cart-item-quality-increase ${item.quantity === 10 ? "limit" : ""
                          }`}
                        onClick={() => increaseQuantity(index)}
                        data-aos="fade-left"
                      ></div>
                    </div>
                  </div>
                  <div
                    className="delete-items-icon"
                    onClick={() => deleteItem(index)}
                    data-aos="fade-left"
                  >
                    <Deleteicon />
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="cart-total-and-address-div-main">
            <div className="cart-total-div-main">
              <p data-aos="fade-right" >Total</p>
              <span data-aos="fade-left" >${calculateTotal()}</span>
            </div>
            <NavLink to={"/address"}>
              <button type="button" className="cart-address-button" data-aos="fade-right">
                Address
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
