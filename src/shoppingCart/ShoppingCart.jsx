import React, { useState, useEffect } from "react";
import { useSelector, connect } from "react-redux";
import { addToCart, removeOne, removeAll, addOne } from "./shoppingCartReducer";

import ShoppingCartItem from './ShoppingCartItem';
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

function ShoppingCart(props) {
  const productsInCart = useSelector((state) => Object.values(state.cart));
  const [notEnoughMoney, setNotEnoughtMoney] = useState("");

  useEffect(() => {
    props.dispatch(addToCart(initialState));
  }, [])

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

  // function to set cap on purchase
  function AddSingleItem(id) {
    if (subTotal < 3000) {
      props.dispatch(addOne(id));
    } else {
      setNotEnoughtMoney("You Do Not Have Enough Gold");
    }
  }

  function RemoveSingleItem(id) {
    setNotEnoughtMoney(""); // clear error field
    props.dispatch(removeOne(id));
  }
  function RemoveAllItem(id) {
    setNotEnoughtMoney(""); // clear error field
    props.dispatch(removeAll(id));
  }


  return (
    <main id="checkout-page" className="container">
      <h2>Your Shopping Cart</h2>
      <ul className="cart-items">
        {productsInCart.map((cartItem) => {
          return (<ShoppingCartItem key={cartItem.id} item={cartItem} />)
          // return (
          //   <ul className="products-listing">
          //     <li id="image-p">
          //       <ProductImage rarity={cartItem.rarity} path={cartItem.image} name={cartItem.name} />

          //     </li>
          //     <li id="price-p">Unit Price: {cartItem.price}</li>
          //     <li id="remove-q">
          //       <input
          //         type="button"
          //         value="-"
          //         onClick={() => RemoveSingleItem(cartItem.id)}
          //       ></input>
          //     </li>
          //     <li id="quantity-p"> {cartItem.quantity}</li>
          //     <li id="add-q">
          //       <input
          //         type="button"
          //         value="+"
          //         onClick={() => AddSingleItem(cartItem.id)}
          //       ></input>
          //     </li>
          //     <li id="name-p">{cartItem.name}</li>

          //     <li id="remove-all">
          //       <input
          //         type="button"
          //         value="Remove Item"
          //         onClick={() => RemoveAllItem(cartItem.id)}
          //       ></input>
          //     </li>
          //   </ul>
          // );
        })}
      </ul>

      <p id="no-gold">{notEnoughMoney}</p>
      <ul id="sub-total">
        <li>Subtotal:</li>
        <li>
          <input type="text" value={`${subTotal} g`} readOnly></input>
        </li>
      </ul>

      <input type="submit" value="Checkout" onClick={CheckOut}></input>
    </main>
  );
}

export default connect((state) => {
  return { someResult: state };
})(ShoppingCart);
