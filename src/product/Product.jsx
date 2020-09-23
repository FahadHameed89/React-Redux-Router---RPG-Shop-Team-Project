import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import "./css/product.css"
import ProductImage from './ProductImage';
import ProductStats from './ProductStats';
import ProductDescription from './ProductDescription';

export default () => {
  const { id } = useParams();
  const product = useSelector(state => state.products[id])

  return (
    <main className="product-detail">
      <ProductImage rarity={product.rarity} path={product.image} />
      <p>Add To Cart Component</p>

      <header>
        <h2 className="product__name">{product.name}</h2>
        <p className="product__role">{product.role}</p>
      </header>

      <div className="product__quote">
        <p>{product.quote}</p>
      </div>

      <div className="flex-row">
        <ProductDescription className="w-50" description={product.description} />

        <div className="w-50">
          <h3>Stats</h3>
          <ProductStats stats={product.stats} />
        </div>
      </div>
    </main>
  );
}
