

import { combineReducers } from 'redux';
import auth from './auth';
import cartReducer from './cart';
import localReducer from './local';
import userDashReducer from './Udashboard';

export default combineReducers({
    auth,
    cart :cartReducer,
    local: localReducer,
    userDash: userDashReducer
});