import { combineReducers } from 'redux';
import filterReducer from './filter_reducer';
import productsReducer from './products_reducer'
import categoriesReducer from './categories_reducer'

export default combineReducers({
  filters: filterReducer
});
