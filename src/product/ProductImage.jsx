import React from 'react';
import image from '../img/king-breaker-bow.svg';
import rarityImg from '../img/rarity-uncommon.svg';
import './ProductImage.css'

export default ( props ) => {
    const rarity = props.rarity;
    const imgPath = props.path;
    console.log(image);
    return (
    <>
        <div className="wrapper">
            
            <div className="product-image">
            
                <div className="product-rarity">
                    <img src={rarityImg} alt="Rarity"/>
                </div>

                <div className="product-rare">
                  <p>UNCOMMON</p>  
                </div>

                <img src={image} alt="Product"/>
            </div>
        </div>
    </>          
    );
}