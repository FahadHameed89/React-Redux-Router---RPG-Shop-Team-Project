import React from 'react';
import './ProductImage.css'

export default ( props ) => {
    const rarity = props.rarity;
    const imgPath = `/imgs/products/${props.path}`;
    return (
        <div className={`product-image ${rarity}`}>
            <div className="product-rarity">
                <p>{rarity}</p>
            </div>
            <img src={imgPath} alt="Product"/>
        </div>
    );
}
