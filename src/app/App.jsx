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
import AddCart from '../product/ProductAddCart';
import ProductAddCart from '../product/ProductAddCart';

export default () => {
  return(
    <Router>
      <nav>
        <ul>
          <li><Link to="/">SignIn</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/products/ProductAddCard">Test Branch</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/products" component={ProductList} />
        <Route path="/products/:id" component={ProductAddCart} />
      </Switch>
    </Router>
  )
}
