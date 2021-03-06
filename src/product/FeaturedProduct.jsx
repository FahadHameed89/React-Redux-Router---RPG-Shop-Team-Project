import React from 'react';
import { Link } from 'react-router-dom';
import ProductImage from './ProductImage';

import './css/featured-product.css';
import { useSelector } from 'react-redux';

export default () => {
    const products = useSelector(state => Object.values(state.products));

    const featuredProduct1 = products[16];
    const featuredProduct2 = products[24];

    return (
        <div className="featured-items">
        <article className="featured-item">
          <Link to={`/products/${featuredProduct1.id}`}>
              <ProductImage className="featured-item__img" path={featuredProduct1.image} rarity={featuredProduct1.rarity} name={featuredProduct1.name} />
              <div className="featured-item__description">
                <h2>{featuredProduct1.name}</h2>
                <p>{featuredProduct1.description}</p>
              </div>
          </Link>
        </article>
        <article className="featured-item">
          <Link to={`/products/${featuredProduct2.id}`}>
              <ProductImage className="featured-item__img" path={featuredProduct2.image} rarity={featuredProduct2.rarity} name={featuredProduct2.name} />
              <div className="featured-item__description">
                <h2>{featuredProduct2.name}</h2>
                <p>{featuredProduct2.description}</p>
              </div>
          </Link>
        </article>
      </div>
    )
}
