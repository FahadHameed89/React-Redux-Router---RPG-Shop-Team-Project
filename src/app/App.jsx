import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Header from './Header';
import ProductList from '../product/ProductList';
import Product from '../product/Product';
import SignIn from '../signIn/SignIn';

export default () => {
  return(
    <Router>
      <Header />
      <nav>
        <ul>
          <li><Link to="/">SignIn</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/products/king-breaker-bow">Kings Breaker Bow</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/products" component={ProductList} />
        <Route path="/products/:id" component={Product} />
      </Switch>
    </Router>
  )
}
