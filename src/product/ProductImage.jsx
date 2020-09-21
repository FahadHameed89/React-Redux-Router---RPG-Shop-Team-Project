import React from 'react';
import image from '../img/alchemy-ring.svg';
import rarity from '../img/rarity-uncommon.svg';


function ProductImage() {
    console.log(image);
    return (
        <>
        <div className="wrapper">
            <div style={{ maxWidth: 250 }} className="product-image">
                <img src={image} alt="Product"/>
            </div>

            <div style={{ maxWidth: 250 }} className="product-rarity">
                <img src={rarity} alt="Rarity"/>
            </div>
        </div>
          </>  
        
    );
}

export default ProductImage;

