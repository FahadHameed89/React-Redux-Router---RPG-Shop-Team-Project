import React, { useState } from "react";
import { useSelector, connect } from "react-redux";
import CartItem from "./ShoppingCartItem";
import "./ShoppingCart.css";

//https://www.robinwieruch.de/javascript-map-array

export default () => {
  const productsInCart = useSelector((state) => Object.values(state.cart));
  const allProducts = useSelector((state) => Object.values(state.products));

  let subTotal = 0;
  let cartListArray=[];


    for (const element of productsInCart)  {
     const c = allProducts.find(xx => xx.id == element.productId);
      c["quantity"] = element.quantity; 
      subTotal = (c.price*c.quantity)+subTotal;
      cartListArray.push(c);
    }
    console.log(cartListArray);




  const CheckOut = (event) => {
    event.preventDefault();
  
  }//end checkout fn


  /*
            <div>
        <p>{cartItem.name} , {cartItem.price}</p> <img src={`/imgs/products/${cartItem.image}`} alt="" />
          </div>
  */

  return (
    <div id="checkout-page">
      {cartListArray.map((cartItem)=>{
        return(

          <ul className="products-listing">
          <li id="image-p"><img src={`/imgs/products/${cartItem.image}`} alt="" /></li>
          <li id="quantity-p">Quantity : {cartItem.quantity}</li>
          <li id="remove-p">
            <input type="button" value="x"></input>
          </li>
          <li id="name-p">{cartItem.name}</li>
          <li id="price-p">Price : {cartItem.price}</li>
          <li id="empty"></li>
          <li id="remove-all">
            <input type="submit" value="Remove All"></input>
          </li>
        </ul>

        );
      })}
     

      <ul id="sub-total">
        <li>Subtotal</li>
        <li>
          <input type="text" value={subTotal}></input>
        </li>
      </ul>

      <input type="submit" value="Checkout" onClick={CheckOut}></input>
    </div>
  );
};
