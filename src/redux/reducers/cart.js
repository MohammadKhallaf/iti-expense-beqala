/**
 * Cart Reducer
 *
 *
 *
 */

import { CART } from "../actions/types";

const initialCart = [];

const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case CART:
      return {
        ...state,
        data: action.payload,
      };
      
    default:
      return state;
  }
};
export default cartReducer;
