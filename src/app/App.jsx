import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Header from './Header';
import Masthead from './Masthead';
import ProductList from '../product/ProductList';
import Product from '../product/Product';
import SignIn from '../signIn/SignIn';
import Cart from '../shoppingCart/ShoppingCart';

export default () => {
  return(
    <Router>


      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/products">
          <Header />
          <Masthead className="masthead-products"/>
          <ProductList />
        </Route>

        <Route path="/products/:id">
          <Header />
          <Masthead className="masthead-product">
            <nav className="shop-nav">
              <Link to="/products">
                <img src="/imgs/left-arrow.svg" alt="" role="presentation" />
                Shop
              </Link>
            </nav>
          </Masthead>
          <Product/>
        </Route>

        <Route path="/checkout" component={Cart} />
      </Switch>
    </Router>
  )
}
