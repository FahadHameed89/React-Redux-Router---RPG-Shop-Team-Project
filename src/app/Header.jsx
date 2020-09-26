import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile'
import ShoppingCartIcon from '../shoppingCart/ShoppingCartIcon'

import './css/header.css';

export default () => {
  const credit = useSelector(state => state.member.funds)
  const balance = useSelector(state => state.cart.reduce((acc, x)=> acc + (x.price * x.quanity), 0))

  return (
    <header className="main-header container">
      <div className="header-group">
        <ShoppingCartIcon />
        <div className="total-credit">
          <img src='/imgs/balance-icon.svg' alt="Balance Icon" />
          <p>{balance}</p>
        </div>
      </div>

      {/**
        * Accessibility Citation
        * https://stackoverflow.com/questions/665037/replacing-h1-text-with-a-logo-image-best-method-for-seo-and-accessibility
        */}
      <h1 className="shop-sign">
        <Link to="/products">
          <img src="/imgs/shop-logo.png" alt="Grimburg's Shop of Armour :amp; Potions"/>
        </Link>
      </h1>

      <div className="header-group">
        <div className="total-credit">
          <img src='/imgs/gold.svg' />
          <p>{credit}</p>
        </div>
        <UserProfile />
      </div>
    </header>
  );
}
