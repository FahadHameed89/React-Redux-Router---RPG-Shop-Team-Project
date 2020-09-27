import React, { useState} from "react";
import { useSelector, useDispatch} from "react-redux";
import { removeOne, removeAll, addOne } from "./shoppingCartReducer";
import { deductFunds } from "../signIn/accountReducer";

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

export default () => {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => Object.values(state.cart));
  const availableFunds = useSelector((state) => state.member.funds);

  const [notEnoughMoney, setNotEnoughtMoney] = useState("");

  let subTotal = 0;
  for (const element of productsInCart) {
    subTotal = element.price * element.quantity + subTotal;
  }

  const CheckOut = (event) => {
    event.preventDefault();

    let total = 0;
    for (const element of productsInCart) {
      total += element.price * element.quantity;
    }

    dispatch(deductFunds(total));
    dispatch(removeAll());
  };

  // function to set cap on purchase
  function AddSingleItem(id) {
    if (subTotal < availableFunds) {
      dispatch(addOne(id));
    } else {
      setNotEnoughtMoney("You Do Not Have Enough Gold");
    }
  }

  function RemoveSingleItem(id) {
    setNotEnoughtMoney(""); // clear error field
    dispatch(removeOne(id));
  }
  function RemoveAllItem(id) {
    setNotEnoughtMoney(""); // clear error field
    dispatch(removeAll(id));
  }

  if(productsInCart.length === 0) {
    return (
      <main className="checkout-page container">
        <p>
          Your cart is empty, go back to the shop add
          continue shopping.
        </p>
      </main>
    );
  }

  return (
    <main className="checkout-page container">
      <h2>Order Summary</h2>
      <ul>
        {productsInCart.map((item) => {
          return (
            <li key={item.id} className="cart-item">
              <ProductImage className="cart-item__img" rarity={item.rarity} path={item.image} name={item.name} />
              <p className="cart-item__name">{item.name}</p>
              <div className="cart-item__controls">
                <div>
                  Unit Price: {item.price}
                </div>
                <div>
                  <div className="add-cart__counter">
                    <button className="add-cart__counter--downtick"
                            onClick={() => RemoveSingleItem(item.id)}>
                      -
                    </button>

                    <p>{item.quantity}</p>
                    <button className="add-cart__counter--uptick"
                            onClick={() => AddSingleItem(item.id)}>
                        +
                    </button>
                  </div>
                </div>
                <input className="add-cart__remove-button"
                       type="button"
                       value="Remove Item"
                       onClick={() => RemoveAllItem(item.id)} />
              </div>
            </li>
          )
        })}
      </ul>

      <p id="no-gold">{notEnoughMoney}</p>
      <ul id="sub-total" className="add-cart__subtotal">
        <li>Subtotal:</li>
        <li>
          <input type="text" value={`${subTotal} g`} readOnly></input>
        </li>
      </ul>

      <input type="submit" value="Checkout" onClick={CheckOut}></input>
    </main>
  );
}
