import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import ProductList from '../product/ProductList';
import Product from '../product/Product';
import SignIn from '../signIn/SignIn';

import ProductCard from '../product/ProductCard'

export default () => {
  return(
    <Router>
      <nav>
        <ul>
          <li><Link to="/">SignIn</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/card">card</Link></li>
          <li><Link to="/products/king-breaker-bow">Kings Breaker Bow</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/products" component={ProductList} />
        <Route path="/products/:id" component={Product} />
        <Route path="/card" component={ProductCard} />
      </Switch>
    </Router>
  )
}
