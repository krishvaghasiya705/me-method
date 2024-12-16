import React from "react";
import "./paymentdetailscomponent.scss";
import Backicon from "../../assets/svg/backicon";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Paymentdetailscomponent() {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const calculatedTotal = storedCartItems
      .reduce((total, item) => {
        const price = parseFloat(item.product.price.replace(/[$,]/g, ""));
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
    setTotal(calculatedTotal);
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div className="add-payment-components-main">
      <div className="container1">
        <div className="payment-back-icon-div" onClick={handleBackClick}>
          <Backicon />
          <h1>Payment details</h1>
        </div>
        <div className="add-payment-component-alignment">
          <form>
            <div>
              <label>Card Number</label>
              <input type="number" placeholder="**** **** **** ****" />
            </div>
            <div className="expiry-and-cvv-div-main">
              <div>
                <label>Expiry Date</label>
                <input type="number" placeholder="MM/YY" />
              </div>
              <div>
                <label>CVV</label>
                <input type="number" placeholder="CVV" />
              </div>
            </div>
            <div>
              <label>Holder Name</label>
              <input type="text" placeholder="Holder Name" />
            </div>
          </form>
          <div className="cart-total-and-payment-div-main">
            <div className="cart-total-div-main">
              <p>Total</p>
              <span>${total}</span>
            </div>
            <NavLink to={"/thankpage"}>
              <button type="button" className="cart-payment-button">
                Place order
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}