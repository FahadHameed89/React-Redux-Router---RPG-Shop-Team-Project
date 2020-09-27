import React, { useState } from "react";
import { useSelector, connect } from "react-redux";
import { addToCart, removeOne, removeAll, addOne } from "./shoppingCartReducer";

import ProductImage from "../product/ProductImage";
import "./ShoppingCart.css";

//https://www.robinwieruch.de/javascript-map-array
//https://www.robinwieruch.de/react-remove-item-from-list

const initialState = [
  {
    id: "king-breaker-bow",
    rarity: "legendary",
    quantity: 8,
    price: 100,
    name: "king breaker bow",
    image: "king-breaker-bow.svg",
  },
  {
    id: "sharp-ring",
    rarity: "common",
    quantity: 5,
    price: 100,
    name: "Sharp ring",
    image: "sharp-ring.svg",
  },
  {
    id: "oxhornhelmet",
    rarity: "common",
    quantity: 2,
    price: 100,
    name: "ox-horn-helmet",
    image: "ox-horn-helmet.png",
  },
  {
    id: "fairy-staff",
    rarity: "common",
    quantity: 1,
    price: 100,
    name: "Fairy staff",
    image: "fairy-staff.svg",
  },
  {
    id: "sun-cloak",
    rarity: "common",
    quantity: 1,
    price: 100,
    name: "sun cloak",
    image: "sun-cloak.svg",
  },
];

export default (props) => {
  const item = props.item;

  return (
    <li className="cart-item">
      <ProductImage rarity={item.rarity} path={item.image} name={item.name} />

      <div>
        {item.price}
      </div>
      <div>
        <div className="add-cart__counter">
          <button className="add-cart__counter--downtick"> - </button>
          <p>{item.quantity}</p>
          <button className="add-cart__counter--uptick"> + </button>
        </div>
      </div>
      <div>
        <input
          type="button"
          value="Remove Item" />
      </div>
    </li>
  )
}
