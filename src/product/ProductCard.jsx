import React from 'react'
import { useSelector } from 'react-redux';
import './css/product-image.css'
import './css/product-list.css';

import { Link } from 'react-router-dom';

export default () => {
    const test = useSelector(state => Object.values(state.products))
    
    return (
<div className="product-list">
{
  test.map((product) => {
    return (
      <article key={product.id}>
        <Link to={`/products/${product.id}`}>
            <div className={`product__image ${product.rarity}`}>
                <div className="product__image-rarity">
                    <p>{product.rarity}</p>
                </div>
                <img src={`/imgs/products/${product.image}`} alt="" />
            </div>
            <span>{product.name}</span>
        </Link>
      </article>
    );
  })
}
</div>
    )
}
