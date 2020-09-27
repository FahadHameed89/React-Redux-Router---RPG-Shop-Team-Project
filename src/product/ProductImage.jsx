import React from 'react';
import './css/product-image.css'

export default ( props ) => {
    const className = props.className || '';
    const rarity = props.rarity;
    const imgPath = `/imgs/products/${props.path}`;
    const name =  props.name;

    return (
        <div className={`product__image ${rarity.toLowerCase()} ${className}`}>
            <div className="product__image-rarity">
                <p>{rarity}</p>
            </div>
            <img src={imgPath} alt={`${name}`}/>
        </div>
    );
}
