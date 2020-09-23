import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './css/product-list.css';

export default () => {
  const products = useSelector(state => Object.values(state.products));

  return (
    <div className="product-list">
      {
        products.map((product) => {
          return (
            <article key={product.id}>
              <Link to={`/products/${product.id}`}>
                <span>{product.name}</span>
              </Link>
            </article>
          );
        })
      }
    </div>
  );
}
