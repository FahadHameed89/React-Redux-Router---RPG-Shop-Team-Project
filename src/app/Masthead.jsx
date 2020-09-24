import React from 'react';
import {
  Link,
} from 'react-router-dom';

import './css/masthead.css'

export default () => {
  return (
    <div class="masthead masthead-products container">
      <nav>
        <ul>
          <li><Link to="/">SignIn</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/products/king-breaker-bow">Kings Breaker Bow</Link></li>
        </ul>
      </nav>
    </div>
  );
}