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

 /**IMPORTS */
 import React from 'react';
 import {useSelector, useDispatch} from 'react-redux';

 /**ACTIONS */
 export const increment = (number) => {
    return {
        type: 'INCREMENT',
        payload: number
    };
};
export const decrement = (number) => {
    return {
        type: 'DECREMENT',
        payload: number
    };
};

 /**REDUCERS */
const counterReducer = (state = 0, action) => {
    switch(action.type){
        case "INCREMENT":
            return state + action.payload;
        case "DECREMENT":
            return state - action.payload;
        default: 
            return state;
    }
}

 
 export default ( props ) => {

    const counter = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();

    return (
        <>
      <div className="Counter">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(7))}>+7</button>
      <button onClick={() => dispatch(increment(1))}>+1</button>
      <button onClick={() => dispatch(decrement(1))}>-1</button>
      <button onClick={() => dispatch(decrement(5))}>-5</button>



    </div>
      <p>Price Element</p>
      <button>Add To Cart</button> 
      </>
    );
  }
  