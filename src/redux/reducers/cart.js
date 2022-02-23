/**
 * Cart Reducer
 *
 *
 *
 */

import { ADD_ITEM, CART, CHECKOUT, SHOW_CART } from "../actions/types";

const initialCart = { data: [], item: [], show: false, checkout: {} };

const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case CHECKOUT:
      return{
        ...state,
        checkout: action.payload
      }
    case CART:
      return {
        ...state,
        data: action.payload,
      };
    case SHOW_CART:
      return {
        ...state,
        show: !state.show,
      };
    case ADD_ITEM:
      return {
        ...state,
        item: action.payload,
      };

    default:
      return state;
  }
};
export default cartReducer;
