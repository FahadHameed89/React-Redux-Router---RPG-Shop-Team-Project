import React from 'react';
import {
  Link,
} from 'react-router-dom';

import './css/masthead.css'

export default (props) => {
  const className = props.className || '';

  return (
    <div className={`masthead ${className} container`}>
      {/* <nav>
        <ul>
          <li><Link to="/">SignIn</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/products/king-breaker-bow">Kings Breaker Bow</Link></li>
          <li><Link to="/checkout">Shopping Cart</Link></li>
        </ul>
      </nav> */}

      {props.children}
    </div>
  );
}
