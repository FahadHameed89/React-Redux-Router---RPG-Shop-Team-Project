import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductImage from './ProductImage';

import './css/product-image.css'
import './css/product-list.css';


export default (props) => {
    const product = props.product
    
    return (
      <article className="product-card" key={product.id}>
        <Link to={`/products/${product.id}`}>
            {/* <div className={`product__image ${product.rarity}`}>
                <div className="product__image-rarity">
                    <p>{product.rarity}</p>
                </div>
                <img className="product__cardlist" src={`/imgs/products/${product.image}`} alt="" />
            </div> */}

            <ProductImage path={product.image} rarity={product.rarity} />
            <span>{product.name}</span>
        </Link>
      </article>
    )
}
