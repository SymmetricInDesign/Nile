import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import productsReducer from './products_reducer'
import categoriesReducer from './categories_reducer'

export default combineReducers({
  users: usersReducer,
  products: productsReducer,
  categories: categoriesReducer
});
