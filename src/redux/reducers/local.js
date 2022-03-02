import { LOC_ADD_ITEM } from "../actions/types";
const initialState = {
  data: [],
};

const localReducer = (state = initialState, action) => {
  switch (action.type) {
    // case LOC_ADD_ITEM:
    //     break;

    default:
      return state;
  }
};
export default localReducer;
