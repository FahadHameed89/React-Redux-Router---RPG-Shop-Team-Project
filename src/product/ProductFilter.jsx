import React from "react";
import './css/ProductFilter.css'


// FOR SVG https://www.w3schools.com/html/html5_svg.asp
//https://css-tricks.com/scale-svg/
//https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_Image_Tag



function ProductFilter(){

    const path="/imgs/filter-icons/witch-hat.svg";
    const path1="/imgs/filter-icons/witch-hat-yellow.svg";
    const filter='Wizards';


  

return(
    <div className= "product-filter-container">
        {/* <p>hello </p>
        <img class='witch-hat' src='/imgs/filter-icons/witch-hat.svg'></img>
         */}
<svg className='svg-filter-button' viewBox="0 0 80 80" preserveAspectRatio="xMidYMid meet">    
  <circle className='out-circle'cx="40" cy="40" r="38"  />
  <circle className='in-circle' cx="40" cy="40" r="34"  />
  <polygon className='up-triangle' points=" 40,13 36,5 44,5 "  />
  <polygon className='up-triangle' points=" 40,67 36,75 44,75 "  />   
 <image href={path} x="15" y="15" height="45px" width="45px" />
</svg>

<p className='filter-string'>{filter}</p>
  
    
</div>

);


}

export default ProductFilter;