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
import ProductFilter from '../product/ProductFilter';

export default () => {
  return(
    <Router>
      <nav>
        <ul>
          <li><Link to="/">SignIn</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/products/king-breaker-bow">Kings Breaker Bow</Link></li>
          <li><Link to="/products/ProductFilter">ProductFilter</Link></li>
 
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/products" component={ProductList} />
        <Route path="/products/ProductFilter" component={ProductFilter} />
        <Route path="/products/:id" component={Product} />
      
       </Switch>
    </Router>
  )
}
