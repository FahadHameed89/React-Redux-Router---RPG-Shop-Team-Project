import React from "react";
import "./css/ProductFilter.css";

// FOR SVG https://www.w3schools.com/html/html5_svg.asp
// Scale SVG https://css-tricks.com/scale-svg/
//Put image inside SVG https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_Image_Tag

function ProductFilter(props) {
  const filter = props.filter     || '';
  const clicked = props.clicked;
  const iconName = props.iconName || '';
  const isActive = props.active && 'active';


  return (
    <div className={`product-filter-container ${isActive}`} onClick={() => { clicked(filter) } }>
      <svg
        className="svg-filter-button"
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg">

        <circle className="out-circle" cx="40" cy="40" r="38" />
        <circle className="in-circle" cx="40" cy="40" r="34" />
        <polygon className="up-triangle" points=" 40,13 36,5 44,5 " />
        <polygon className="up-triangle" points=" 40,67 36,75 44,75 " />

        <image href={`/imgs/filter-icons/${iconName}`} x="17" y="17" height="45px" width="45px" />
      </svg>

      <p className="filter-string">{filter}</p>
    </div>
  );
}

export default ProductFilter;
