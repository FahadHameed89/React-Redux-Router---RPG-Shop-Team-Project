import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './Header';
import Masthead from './Masthead';
import ProductList from '../product/ProductList';
import Product from '../product/Product';
import SignIn from '../signIn/SignIn';
import AddCart from '../product/ProductAddCart';
import ProductAddCart from '../product/ProductAddCart';

import ProductCard from '../product/ProductCard'

export default () => {
  return(
    <Router>
      <Header />
      <Masthead />
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/products" component={ProductList} />
        <Route path="/products/:id" component={ProductAddCart} />
      </Switch>
    </Router>
  )
}
