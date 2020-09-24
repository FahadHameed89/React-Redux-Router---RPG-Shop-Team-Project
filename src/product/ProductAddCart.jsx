/**
 * This Component will Add to the cart:
 * 1. Display a Button (AddToCart) that says 'Add to Cart'.
 * 2. Display a price (PriceDisplay) passed down from props (props.price) multiplied by the CounterDisplay
 * 3. Display a counter (CounterDisplay) that...: 
 * A) starts at 1, 
 * B) can increment up and down, 
 * C) Cannot go below 1, (or above 99)
 * 
 * 4. Button Functionality:
 * A) When pressed, takes the PriceDisplay, CounterDisplay, and Item ID, and displays it elsewhere (A Shopping Cart Page)
 * B) Transition to shopping cart page will display: 
 *      [Item-ID1]   X   [CounterDisplay1]   =   [PriceDisplay1]
 *      [Item-ID2]   X   [CounterDisplay2]   =   [PriceDisplay2]
 *      TOTAL                                =    Sum of Above [PriceDisplay] elements 

 */

/**IMPORTS */
import React, { useState } from "react";
import "./css/product-addcart.css";


export default (props) => {
  const productPrice = 100; // <-- This is the default product price, which will be CHANGED based on props.price.
  const [count, setCount] = useState(1); // <-- This needs to START at 1, and not go any lower..
  const [price, setPrice] = useState(100); // <--- This is a placeholder price value to be changed based on item props.

  const update = (action) => {
    let newCount = 0;
    let newPrice = 0;

    // console.log(newCount);
    // console.log(newPrice);

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
    }

    setCount(newCount);
    setPrice(newPrice);
  };

  return (
    <div>
      <div className="wrapper">
        <div className="counter">
          <button className="downTick" onClick={() => update("-")}> - </button>
          <p className="countDisplay">{count}</p>
          <button className="upTick" onClick={() => update("+")}> + </button>
        </div>

        <div className="price">
           <img src='/imgs/gold.svg' /> 
          <p>{price}</p>
        </div>

        <div className="addToCart">
          <img src='/imgs/cart.svg' /> 
          <button> ADD TO CART </button>
          
        </div>
      </div>
    </div>
  );
};
