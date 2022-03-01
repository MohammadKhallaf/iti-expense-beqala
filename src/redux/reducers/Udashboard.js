import { ALL_ORDERS, OPEN_ORDERS } from "../actions/types";

const initial_user_states = {
  all: [],
  open: [],
};

const userDashReducer = (state = initial_user_states, action) => {
  switch (action.type) {
    //   get all orders
    case ALL_ORDERS:
      return {
        ...state,
        all: action.payload,
      };
    case OPEN_ORDERS:
      return {
        ...state,
        open: action.payload,
      };
    default:
      return state;
  }
};
export default userDashReducer;
