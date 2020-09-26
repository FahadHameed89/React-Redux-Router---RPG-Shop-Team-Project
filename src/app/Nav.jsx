import React from 'react';
import { Link } from 'react-router-dom';

export default () => {

    return (
    <nav className="shop-nav">
        <Link to="/products">
            <img src="/imgs/left-arrow.svg" alt="" role="presentation" />
            Shop
        </Link>
    </nav>
    )
}