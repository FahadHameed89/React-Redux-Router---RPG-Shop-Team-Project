import React, { useState } from "react";
import { useSelector, connect } from "react-redux";
import CartItem from "./ShoppingCartItem";
import "./ShoppingCart.css";

//https://www.robinwieruch.de/javascript-map-array

export default () => {
  const productsInCart1 = useSelector((state) => Object.values(state.cart));
  const allProducts = useSelector((state) => Object.values(state.products));

  const [productsInCart, setProductsInCart] = React.useState(productsInCart1);

 // const [changeQuantity, getchangeQuantity] = useState(0);

  let subTotal = 0;
  let cartListArray=[];


    for (const element of productsInCart)  {
     const c = allProducts.find(xx => xx.id === element.productId);
      c["quantity"] = element.quantity; 
      subTotal = (c.price*c.quantity)+subTotal;
      cartListArray.push(c);
    }
    console.log(cartListArray);




  const CheckOut = (event) => {
    event.preventDefault();
  
  }//end checkout fn

  const removeSingleItem = (event) => {
    event.preventDefault();
  
  }//end checkout fn

  
  function DeleteProduct (id) {
  
    console.log(id);
    const newList = cartListArray.filter((item) => item.id !== id);
 
    setProductsInCart(newList);
  
  }//end checkout fn

  return (
    <div id="checkout-page">

    <h2>Your Cart</h2>

      {cartListArray.map((cartItem)=>{
          //  getchangeQuantity(cartItem.quantity)

           return(

          <ul className="products-listing">
          <li id="image-p"><img src={`/imgs/products/${cartItem.image}`} alt="" /></li>
          <li id="price-p">Unit Price: {cartItem.price}</li>
          <li id="quantity-p">Quantity: </li>
          <li id="remove-p">
            <input type="textbox" value={cartItem.quantity}
            ></input>
          </li>
          <li id="name-p">{cartItem.name}</li>
          
          <li id="remove-all">
            <input type="button" value="Remove Item" onClick={() => DeleteProduct(cartItem.id)} ></input>
          </li>
        </ul>

        );
      })}
     

      <ul id="sub-total">
        <li>Subtotal:</li>
        <li>
          <input type="text" value={`${subTotal} g`} ></input>
        </li>
      </ul>

      <input type="submit" value="Checkout" onClick={CheckOut}></input>
    </div>
  );
};
