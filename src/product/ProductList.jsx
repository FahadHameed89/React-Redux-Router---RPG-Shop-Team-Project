import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import FilterButton from './ProductFilter';
import ProductCard from './ProductCard';

import './css/product-list.css';

export default () => {
  const products = useSelector(state => Object.values(state.products));
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filter, setFilter] = useState("warrior");


  const saleProduct = products[0];
  const discount = {price: 500, text: "50% off"}

  const filterClicked = (filter) => {
    setFilter(filter);
  }

  useEffect(() => {
    const filtered = products.filter(x => x.role === filter || x.role === 'any');
    setFilteredProducts(filtered);

  }, [filter])

  return (
    <main className="products container">

      <div className="product-filters">
        <FilterButton filter="warrior" clicked={filterClicked} iconName="witch-hat.svg"/>
        <FilterButton filter="mage"    clicked={filterClicked} iconName="witch-hat.svg"/>
        <FilterButton filter="rogue"   clicked={filterClicked} iconName="witch-hat.svg"/>
      </div>

      <div className="product-list">
        {
          filteredProducts.map((product, index) => {
            return <ProductCard product={product} key={index}/>
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
