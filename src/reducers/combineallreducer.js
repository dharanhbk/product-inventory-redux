import { combineReducers } from 'redux';
import productsReducer from './productsreducer';

const allReducers= combineReducers({
    products: productsReducer  
})

export default allReducers