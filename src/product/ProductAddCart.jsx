import React, { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { addToCart } from "../shoppingCart/shoppingCartReducer";
import { useToasts } from 'react-toast-notifications'
import { useHistory } from "react-router-dom";


import "./css/product-addcart.css";


export default (props) => {
  const productPrice = props.product.price;

  const dispatch = useDispatch();
  const history = useHistory();
  const { addToast } = useToasts();

  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(productPrice);
  const availableFunds = useSelector(state => state.member.funds);
  const cart = useSelector(state => state.cart);

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

  const onAddToCartClick = () => {
    const currentBalance = cart.reduce((acc, item) => {
      return acc += item.price * item.quantity;
    }, 0);

    const newBalance = currentBalance + (props.product.price * count);
    if (newBalance <= availableFunds) {
      const cartItem = {
        id: props.product.id,
        rarity: props.product.rarity,
        price: props.product.price,
        name: props.product.name,
        image: props.product.image,
        quantity: count,
      }
      dispatch(addToCart(cartItem));
      history.push("/products");

    } else {
      addToast("Not enough funds to purchase this item", {appearance: 'error', autoDismiss: true})
    }
  }

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

      <button className="add-cart__button"
              onClick={() => onAddToCartClick()}>
        <img src='/imgs/cart.svg' alt="Shopping Cart"/>
        ADD TO CART
      </button>
    </div>
  );
};
