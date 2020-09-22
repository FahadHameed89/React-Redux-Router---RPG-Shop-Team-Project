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

 import React from 'react';

 export default () => {

    return (
      <p>I am the ProductAddCart component</p>
    );
  }
  