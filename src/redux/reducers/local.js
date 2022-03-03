import { LOC_ADD_ITEM, LOC_CART_LIST } from "../actions/types";
const initialState = {
  cartList: [],
};

const localReducer = (state = initialState, action) => {
  switch (action.type) {
    // case LOC_ADD_ITEM:
    //     break;
    case LOC_CART_LIST:
      return {
        ...state,
        cartList: action.payload,
      };

    default:
      return state;
  }
};
export default localReducer;
