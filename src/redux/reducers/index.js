import { combineReducers } from 'redux';
import auth from './auth';
import cartReducer from './cart';

export default combineReducers({
    auth,
    cart :cartReducer
});