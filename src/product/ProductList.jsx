import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import FilterButton from './ProductFilter';
import ProductCard from './ProductCard';

import './css/product-list.css';

export default () => {
  const products = useSelector(state => Object.values(state.products));

  const saleProduct = products[0];
  const discount = {price: 500, text: "50% off"}

  return (
    <main className="products container">
      
      <div className="product-filters">
        <FilterButton filter="warrior"/>
        <FilterButton filter="mage"/>
        <FilterButton filter="rogue"/>
      </div>

      <div className="product-list">
        {
          products.map((product) => {
            return <ProductCard product={product} />
          })
        }
      </div>

      <aside className="sidebar">
        <h2>Buy Now!</h2>
        <ProductCard product={saleProduct} discount={discount} />
      </aside>
    </main>
  );
}
