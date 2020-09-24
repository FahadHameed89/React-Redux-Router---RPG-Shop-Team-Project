import React from 'react';
import './css/header.css';

export default () => {
  return (
    <header className="main-header container">
      <h1>Grimburg's Shop</h1>

      <div class="user-account">
        <img src="/imgs/logged-in-user.svg" alt=""/>
      </div>
    </header>
  );
}
