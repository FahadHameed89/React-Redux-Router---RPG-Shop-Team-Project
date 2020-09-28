import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications'

import Authorized from './Authorised';
import Header from './Header';
import Masthead from './Masthead';
import ProductList from '../product/ProductList';
import Product from '../product/Product';
import SignIn from '../signIn/SignIn';
import Cart from '../shoppingCart/ShoppingCart';
import Nav from './Nav';
import ScrollToTop from './ScrollToTop';

export default () => {
  return(
    <Router>
      <ScrollToTop />
      <Switch>
        <ToastProvider placement="top-right">
          <Route exact path="/" component={SignIn} />
          <Route exact path="/products">
            <Authorized />
            <Header />
            <Masthead className="masthead-products"/>
            <ProductList />
          </Route>

          <Route path="/products/:id">
            <Authorized />
            <Header />
            <Masthead className="masthead-product">
              <Nav />
            </Masthead>
            <Product/>
          </Route>

          <Route path="/checkout">
            <Authorized />
            <Header />
            <Masthead className="masthead-cart">
              <Nav />
            </Masthead>
            <Cart />
          </Route>
        </ToastProvider>
      </Switch>
    </Router>
  )
}
