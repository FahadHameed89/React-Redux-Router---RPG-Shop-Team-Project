import React from 'react';
import UserProfile from './UserProfile'
import './css/header.css';

export default () => {
  return (
    <header className="main-header container">
      <h1>Grimburg's Shop</h1>

      <UserProfile />
    </header>
  );
}
