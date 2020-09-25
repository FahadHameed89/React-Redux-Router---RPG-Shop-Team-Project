import React from 'react';
import { useSelector } from 'react-redux';
import UserProfile from './UserProfile'
import './css/header.css';

export default () => {
  const funds = useSelector (state => state.member.funds)

  return (
    <header className="main-header container">

      <h1>Grimburg's Shop</h1>

      <div className="total-funds">
          <img src='/imgs/gold.svg' /> 
          <p>{funds}</p>
        </div>
      <UserProfile />
    </header>
  );
}
