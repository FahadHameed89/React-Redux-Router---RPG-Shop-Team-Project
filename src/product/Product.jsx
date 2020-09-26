import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import "./css/product.css"
import ProductImage from './ProductImage';
import ProductStats from './ProductStats';
import ProductDescription from './ProductDescription';
import ProductEffect from './ProductEffect';
import ProductAddToCart from './ProductAddCart';


export default () => {
  const { id } = useParams();
  const product = useSelector(state => state.products[id])

  return (
    <main className="product-detail container">
      <div className="product-image-container">
      <ProductImage rarity={product.rarity} path={product.image} />
      </div>

      <header>
        <h2 className="product__name">{product.name}</h2>
        <p className="product__role">{product.role}</p>
      </header>

      <ProductAddToCart product={product} />

      <div className="product__quote">
        <p>{product.quote}</p>
      </div>

      <div className="flex-row">
        <ProductDescription className="w-50" description={product.description} />
        <div className="w-50">
          <ProductEffect effect={product.effect} />
          <ProductStats stats={product.stats} />
        </div>
      </div>
    </main>
  );
}
