import React from 'react';
import image from '../img/angelic-potion.svg';
import './ProductImage.css'

export default ( props ) => {
    const rarity = props.rarity;
    const imgPath = props.path;
    return (
    <>
        <div className="wrapper">
            
            <div className="product-image">

                <div className="product-rare">
                    <p>{rarity}</p>  
                </div>

                <img src={imgPath} alt="Product"/>
            </div>
        </div>
    </>          
    );
}
