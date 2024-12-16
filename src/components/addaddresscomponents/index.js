import React from "react";
import "./addaddresscomponents.scss";
import Backicon from "../../assets/svg/backicon";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Addaddresscomponents() {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const calculatedTotal = storedCartItems.reduce((total, item) => {
      const price = parseFloat(item.product.price.replace(/[$,]/g, ""));
      return total + price * item.quantity;
    }, 0).toFixed(2);
    setTotal(calculatedTotal);
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div className="add-address-components-main">
      <div className="container1">
        <div className="address-back-icon-div" onClick={handleBackClick} data-aos="fade-right" >
          <Backicon />
          <h1>Add address</h1>
        </div>
        <div className="add-address-component-alignment">
          <form>
            <input type="text" placeholder="Delivered to" data-aos="fade-right" />
            <div className="input-main" data-aos="fade-left" >
              <input
                type="number"
                placeholder="00000 00000"
              />
              <div className="country-code-selcetor-div">
                <div className="country-code-selcetor">
                  <select>
                    <option value="+1 (US/Canada)">+1</option>
                    <option value="+44 (UK)">+44</option>
                    <option value="+91 (India)">+91</option>
                    <option value="+86 (China)">+86</option>
                    <option value="+81 (Japan)">+81</option>
                    <option value="+49 (Germany)">+49</option>
                    <option value="+33 (France)">+33</option>
                    <option value="+61 (Australia)">+61</option>
                    <option value="+7 (Russia)">+7</option>
                    <option value="+55 (Brazil)">+55</option>
                    <option value="+34 (Spain)">+34</option>
                    <option value="+39 (Italy)">+39</option>
                    <option value="+82 (South Korea)">+82</option>
                    <option value="+31 (Netherlands)">+31</option>
                    <option value="+65 (Singapore)">+65</option>
                    <option value="+64 (New Zealand)">+64</option>
                    <option value="+52 (Mexico)">+52</option>
                    <option value="+971 (UAE)">+971</option>
                    <option value="+966 (Saudi Arabia)">+966</option>
                    <option value="+27 (South Africa)">+27</option>
                  </select>
                </div>
              </div>
            </div>
            <input type="number" placeholder="Pincode" data-aos="fade-right" />
            <input type="text" placeholder="House number and building" data-aos="fade-left" />
            <input type="text" placeholder="Street name" data-aos="fade-right" />
            <input type="text" placeholder="Landmark" data-aos="fade-left" />
          </form>
          <div className="cart-total-and-address-div-main">
            <div className="cart-total-div-main">
              <p data-aos="fade-right" >Total</p>
              <span data-aos="fade-left" >${total}</span>
            </div>
            <NavLink to={"/paymentdetails"}>
              <button type="button" className="cart-payment-button" data-aos="fade-right" >
                Payment
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
