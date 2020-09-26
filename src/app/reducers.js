import { combineReducers } from 'redux';
import productReducer from '../product/productReducer';
import filteredProductReducer from '../product/filteredProductReducer';
import clansReducer from '../signIn/clansReducer';
import accountReducer from '../signIn/accountReducer';
import shoppingCartReducer from '../shoppingCart/shoppingCartReducer'

export default combineReducers({
  products: productReducer,
  filteredProducts: filteredProductReducer,
  clans: clansReducer,
  member: accountReducer,
  cart: shoppingCartReducer
})
