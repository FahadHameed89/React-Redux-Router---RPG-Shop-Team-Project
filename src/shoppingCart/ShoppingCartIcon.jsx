import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import './css/cart-icon.css'

export default (props) => {
  const quantity = useSelector(state => state.cart.length)

  return (
    <div className="cart-icon__container">
      <Link to="/checkout">
      { quantity > 0 &&
        <div className="cart-icon__quantity">
          <span>{quantity}</span>
        </div>
      }
        <img src="/imgs/cart.svg" alt="Shopping Cart"/>
      </Link>
    </div>
  )
}
