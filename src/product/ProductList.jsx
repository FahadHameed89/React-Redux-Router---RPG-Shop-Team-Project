import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { filterBy } from './filteredProductReducer';
import FilterButton from './ProductFilter';
import ProductCard from './ProductCard';

import './css/product-list.css';

export default () => {
  const dispatch = useDispatch();
  const products = useSelector(state => Object.values(state.products));

  const filteredProducts = useSelector(state => state.filteredProducts.products);
  const currentFilter = useSelector(state => state.filteredProducts.filter);

  const filterButtons = [
    { filter: 'warrior',  icon: 'helmet1.svg' },
    { filter: 'mage',     icon: 'witch-hat.svg' },
    { filter: 'rogue',    icon: 'dagger.svg' },
    { filter: 'trinkets', icon: 'ring.svg' },
    { filter: 'potions',  icon: 'poison.svg' },
  ]

  const filterClicked = (filter) => {
    dispatch(filterBy(filter, products))
  }

  // We want this effect to only run once so that redux
  // gets an initial set of products.
  // There has to be a better way.
  useEffect(() => {
    if(filteredProducts.length === 0) {
      dispatch(filterBy("warrior", products))
    }
     //Very strange, requirement just to stop an eslint warning
  }, [dispatch, filteredProducts.length, products])

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
    </main>
  );
}
