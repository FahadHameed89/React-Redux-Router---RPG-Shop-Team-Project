import React, { useState } from "react";
import { useSelector, connect } from "react-redux";
import { addToCart, removeOne, removeAll, addOne } from "./shoppingCartReducer";
import "./ShoppingCart.css";

//https://www.robinwieruch.de/javascript-map-array
//https://www.robinwieruch.de/react-remove-item-from-list

const initialState = [
  {
    id: "king-breaker-bow",
    quantity: 8,
    price: 100,
    name: "king breaker bow",
    image: "king-breaker-bow.svg",
  },
  {
    id: "sharp-ring",
    quantity: 5,
    price: 100,
    name: "Sharp ring",
    image: "sharp-ring.svg",
  },
  {
    id: "oxhornhelmet",
    quantity: 2,
    price: 100,
    name: "ox-horn-helmet",
    image: "ox-horn-helmet.png",
  },
  {
    id: "fairy-staff",
    quantity: 1,
    price: 100,
    name: "Fairy staff",
    image: "fairy-staff.svg",
  },
  {
    id: "sun-cloak",
    quantity: 1,
    price: 100,
    name: "sun cloak",
    image: "sun-cloak.svg",
  },
];

function ShoppingCart(props) {
  const productsInCart = useSelector((state) => Object.values(state.cart));

  let subTotal = 0;

  /*  calcualting subtotal*/
  for (const element of productsInCart) {
    subTotal = element.price * element.quantity + subTotal;
  }

  /* --------on button checkout populating my redux state --------- */
  const CheckOut = (event) => {
    event.preventDefault();
    props.dispatch(addToCart(initialState));
  }; //end checkout fn
  /* ---------- ---------------------------------------------------*/

  return (
    <div id="checkout-page">
      <h2>Your Shopping Cart</h2>
      {productsInCart.map((cartItem) => {
        return (
          <ul className="products-listing">
            <li id="image-p">
              <img src={`/imgs/products/${cartItem.image}`} alt="" />
            </li>
            <li id="price-p">Unit Price: {cartItem.price}</li>
            <li id="remove-q">
              <input
                type="button"
                value="-"
                onClick={() => props.dispatch(removeOne(cartItem.id))}
              ></input>
            </li>
            <li id="quantity-p"> {cartItem.quantity}</li>
            <li id="add-q">
              <input
                type="button"
                value="+"
                onClick={() => props.dispatch(addOne(cartItem.id))}
              ></input>
            </li>
            <li id="name-p">{cartItem.name}</li>

            <li id="remove-all">
              <input
                type="button"
                value="Remove Item"
                onClick={() => props.dispatch(removeAll(cartItem.id))}
              ></input>
            </li>
          </ul>
        );
      })}

      <ul id="sub-total">
        <li>Subtotal:</li>
        <li>
          <input type="text" value={`${subTotal} g`} readOnly></input>
        </li>
      </ul>

      <input type="submit" value="Checkout" onClick={CheckOut}></input>
    </div>
  );
}

export default connect((state) => {
  return { someResult: state };
})(ShoppingCart);
