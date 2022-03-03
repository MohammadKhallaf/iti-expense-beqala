import { backendAPI } from "../../store";
import { ALL_ORDERS } from "./types";

// import the user_id from the state

import store from "../store";

/**
 *
 * @returns All orders for the user
 */
export const getAllOrders = (user_id) => {
  return function (dispatch) {
    if (!user_id) return;
    backendAPI
      .get("/user/orders/", {
        params: { user_id },
        headers: {
          Authorization: `JWT ${localStorage.getItem("access")}`,
        },
      })
      .then((response) => {
        dispatch({ type: ALL_ORDERS, payload: response.data });
      })
      .catch((error) => console.log("Error Status : ", error.response.status));
  };
};
