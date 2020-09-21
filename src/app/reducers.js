import { combineReducers } from 'redux';
import productReducer from '../product/productReducer';
import signInReducer from '../signIn/signInReducer';

export default combineReducers({
  products: productReducer,
  clans: signInReducer
})
