import { combineReducers } from 'redux';
import productReducer from '../product/productReducer';
import signInReducer from '../signIn/signInReducer';
import logInReducer from '../signIn/loggedInReducer'
import shoppingCartReducer from '../shoppingCart/shoppingCartReducer'

export default combineReducers({
  products: productReducer,
  clans: signInReducer,
  member: logInReducer,
  cart: shoppingCartReducer
})
