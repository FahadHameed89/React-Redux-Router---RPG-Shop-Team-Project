import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { filterByRole } from './filteredProductReducer';
import FilterButton from './ProductFilter';
import ProductCard from './ProductCard';

import './css/product-list.css';

export default () => {
  const dispatch = useDispatch();
  const products = useSelector(state => Object.values(state.products));

  const filteredProducts = useSelector(state => state.filteredProducts.products);
  const currentFilter = useSelector(state => state.filteredProducts.filter);

  const saleProduct = products[0];
  const discount = {price: 500, text: "50% off"}

  const filterButtons = [
    { filter: 'warrior', icon: 'witch-hat.svg' },
    { filter: 'mage', icon: 'witch-hat.svg' },
    { filter: 'rogue', icon: 'witch-hat.svg' },
  ]

  const filterClicked = (filter) => {
    dispatch(filterByRole(filter, products))
  }

  useEffect(() => {
    if(filteredProducts.length === 0) {
      dispatch(filterByRole("warrior", products))
    }
  }, [])

  return (
    <main className="products container">

      <div className="product-filters">
        {
          filterButtons.map(({filter, icon}) => {
            return (<FilterButton filter={filter} clicked={filterClicked} iconName={icon} active={filter === currentFilter} />)
          })
        }
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
