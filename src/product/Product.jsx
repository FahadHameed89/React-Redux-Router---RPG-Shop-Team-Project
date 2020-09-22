import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProductImage from './ProductImage';

export default () => {
  const { id } = useParams();
  const product = useSelector(state => state.products[id])

  return (
    <main>
      <ProductImage rarity={product.rarity} path={product.image} />
      <p>Add To Cart Component</p>
      <header>
        <h1></h1>
      </header>
      <p>Description</p>
      <p>Stats</p>
    </main>
  );
}
