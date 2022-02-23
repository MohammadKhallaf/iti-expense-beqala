import { backendAPI } from "../../store";
import { CHECKOUT } from "./types";


/**
 * 
 * Load the data in the shopping cart 
 */
export const getCartItems = (dispatch) => {
  backendAPI
    .get("cart/", {
      params: {
        user_id: 1,
        store_id: 5,
      },
    })
    .then((response) => {
      console.log("put into data", response.data);
      dispatch({ type: CHECKOUT, payload: response.data.checkout });
    })
    .catch((error) => console.log(error))
    .then((response) => console.log(response));
};
