import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeOne, removeAll, addOne } from "./shoppingCartReducer";
import { deductFunds } from "../signIn/accountReducer";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

import ProductImage from "../product/ProductImage";

import "./ShoppingCart.css";

//https://www.robinwieruch.de/javascript-map-array
//https://www.robinwieruch.de/react-remove-item-from-list

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { addToast } = useToasts();

  const productsInCart = useSelector((state) => Object.values(state.cart));
  const availableFunds = useSelector((state) => state.member.funds);

  const [notEnoughMoney, setNotEnoughtMoney] = useState("");

  const findPriceById = (id) => {
    const item = productsInCart.find((x) => x.id === id);

    return item ? item.price : 0;
  };

  const calcTotal = () => {
    let total = 0;
    for (const element of productsInCart) {
      total += element.price * element.quantity;
    }
    return total;
  };

  const CheckOut = (event) => {
    event.preventDefault();

    let total = calcTotal();

    if (total > availableFunds) {
      setNotEnoughtMoney("You Do Not Have Enough Gold");
    } else {
      dispatch(deductFunds(total));
      dispatch(removeAll());
      addToast("Thank you for your purchase!", {
        appearance: "success",
        autoDismiss: true,
      });
      history.push("/products");
    }
  };

  // function to set cap on purchase
  function AddSingleItem(id) {
    let total = calcTotal() + findPriceById(id);
    if (total < availableFunds) {
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

  if (productsInCart.length === 0) {
    return (
      <main className="checkout-page container">
        <p>Your cart is empty, go back to the shop to continue shopping !</p>
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
              <ProductImage
                className="cart-item__img"
                rarity={item.rarity}
                path={item.image}
                name={item.name}
              />
              <p className="cart-item__name">{item.name}</p>
              <div className="cart-item__controls">
                <div>Unit Price: {item.price}</div>
                <div>
                  <div className="add-cart__counter">
                    <button
                      className="add-cart__counter--downtick"
                      onClick={() => RemoveSingleItem(item.id)}
                    >
                      -
                    </button>

                    <p>{item.quantity}</p>
                    <button
                      className="add-cart__counter--uptick"
                      onClick={() => AddSingleItem(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <input
                  className="add-cart__remove-button"
                  type="button"
                  value="Remove Item"
                  onClick={() => RemoveAllItem(item.id)}
                />
              </div>
            </li>
          );
        })}
      </ul>

      <p id="no-gold">{notEnoughMoney}</p>
      <ul id="sub-total" className="add-cart__subtotal">
        <li>Subtotal:</li>
        <li>
          <input type="text" value={`${calcTotal()} g`} readOnly></input>
        </li>
      </ul>

      <input type="submit" value="Checkout" onClick={CheckOut}></input>
    </main>
  );
};
