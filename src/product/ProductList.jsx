import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import FilterButton from './ProductFilter';
import ProductCard from './ProductCard';

import './css/product-list.css';

export default function() {
  const products = useSelector(state => Object.values(state.products));
  const [filteredProducts, setFilteredProducts] = useState(products);
  

  const saleProduct = products[0];
  const discount = {price: 500, text: "50% off"}

  const filterClicked = function(filter) {
    console.log(filter + "hi");
    // const newProducts = this.products.map(x => x.role === "warrior");
    // this.setFilteredProducts(newProducts);
  }

  return (
    <main className="products container">
      
      <div className="product-filters">
        <FilterButton filter="warrior" clicked={filterClicked} iconName="witch-hat.svg"/>
        <FilterButton filter="mage"    clicked={filterClicked} iconName="witch-hat.svg"/>
        <FilterButton filter="rogue"   clicked={filterClicked} iconName="witch-hat.svg"/>
      </div>

      <div className="product-list">
        {
          filteredProducts.map((product) => {
            return <ProductCard product={product} />
          })
        }
      </div>

      <aside className="sidebar">
        <h2>Buy Now!</h2>
        <ProductCard product={saleProduct} discount={discount} />
      </aside>
    </main>
  );
}
