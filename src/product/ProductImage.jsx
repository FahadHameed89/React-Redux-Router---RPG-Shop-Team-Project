import React from 'react';
import './css/product-image.css'

export default ( props ) => {
    const rarity = props.rarity;
    const imgPath = `/imgs/products/${props.path}`;
    return (
        <div className={`product__image ${rarity}`}>
            <div className="product__image-rarity">
                <p>{rarity}</p>
            </div>
            <img src={imgPath} alt="Product"/>
        </div>
    );
}
