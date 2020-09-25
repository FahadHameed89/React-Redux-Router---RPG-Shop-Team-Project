import React, { useState } from "react";
import { useSelector, connect } from "react-redux";
import CartItem from "./ShoppingCartItem";
import "./ShoppingCart.css";

//https://www.robinwieruch.de/javascript-map-array
//https://www.robinwieruch.de/react-remove-item-from-list

export default () => {
  const productsInCart = useSelector((state) => Object.values(state.cart));
  const allProducts = useSelector((state) => Object.values(state.products));

  let subTotal = 0;
  let cartListArray=[];
  const [cartItemsList, setCartItemsList] = useState(cartListArray);

 
/*  rpopulate cartlist array because needed to get quantity of the items too */
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
 
    setCartItemsList(newList);
  
  }//end checkout fn

  return (
    <div id="checkout-page">

    <h2>Your Cart</h2>

      {cartItemsList.map((cartItem)=>{
          //  getchangeQuantity(cartItem.quantity)

           return(

          <ul className="products-listing">
          <li id="image-p"><img src={`/imgs/products/${cartItem.image}`} alt="" /></li>
          <li id="price-p">Unit Price: {cartItem.price}</li>
          <li id="remove-q">
            <input type="button" value="-" 
            onClick={removeSingleItem}></input>
          </li>
          <li id="quantity-p"> {cartItem.quantity}</li>
          <li id="add-q">
            <input type="button" value="+" 
            onClick={removeSingleItem}></input>
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
