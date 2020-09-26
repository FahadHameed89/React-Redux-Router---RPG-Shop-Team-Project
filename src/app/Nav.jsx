import React from 'react';
import { Link } from 'react-router-dom';
import './css/nav.css'

export default () => {

    return (
    <nav className="shop-nav">
        <Link to="/products">
        <div className="arrow-container">
            <p><i className="arrow left"></i>Shop</p>
        </div>
        </Link>
    </nav>
    )
}

//<img src="/imgs/left-arrow.svg" alt="" role="presentation" />