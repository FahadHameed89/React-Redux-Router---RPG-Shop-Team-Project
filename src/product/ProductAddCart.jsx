import React, { useState } from "react";
import "./css/product-addcart.css";


export default (props) => {
  const productPrice = props.product.price;

  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(100);

  const update = (action) => {
    let newCount = 0;
    let newPrice = 0;

    switch (action) {
      case "+":
        if (count !== 0) {
          newCount = count + 1;
          newPrice = newCount * productPrice;
        }
        break;
      case "-":
        if (count !== 1) {
        newCount = count - 1;
        newPrice = newCount * productPrice;
        }
        else {
          newCount = count;
          newPrice = newCount * productPrice;

        }
        break;
      default:
        // Added to satisfy ESLint
    }

    setCount(newCount);
    setPrice(newPrice);
  };

  return (
    <div className="add-cart">
      <div className="add-cart__counter">
        <button className="add-cart__counter--downtick" onClick={() => update("-")}> - </button>
        <p>{count}</p>
        <button className="add-cart__counter--uptick" onClick={() => update("+")}> + </button>
      </div>

      <div className="add-cart__price">
        <img src='/imgs/gold.svg' alt="Gold Coins"/>
        <p>{price}</p>
      </div>

      <button className="add-cart__button">
        <img src='/imgs/cart.svg' alt="Shopping Cart"/>
        ADD TO CART
      </button>
    </div>
  );
};
