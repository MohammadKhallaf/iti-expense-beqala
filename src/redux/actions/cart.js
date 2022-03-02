import { backendAPI } from "../../store";
import { ADD_ITEM, CHECKOUT, USER_STORES } from "./types";

/**
 *
 * Load the data in the shopping cart
 * @returns checkout state
 */
export const getCartItems = (user_id, store_id) => {
  return function (dispatch) {
    if (!user_id || !store_id) return;
    // initial store id = 0 ,where is no any stores are required
    if (store_id === 0) return;
    backendAPI
      .get("cart/", {
        params: {
          user_id,
          store_id,
        },
      })
      .then((response) => {
        dispatch({ type: CHECKOUT, payload: response.data.checkout });
      })
      .catch((error) => console.log("Error Status : ", error.response.status));
  };
};

/**
 *
 * @param {Integer} user_id
 * @param {Integer} store_id
 * @param {Integer} product_id
 * @param {Integer} quantity
 * @returns
 */

export const addToCard = (user_id, store_id, product_id, quantity) => {
  return function (dispatch) {
    backendAPI
      .post("cart/", {
        user_id,
        store_id,
        product_id,
        quantity,
      })
      .then((response) => {
        dispatch({ type: ADD_ITEM, payload: response.data });
      })
      .then(()=>{ // get the updated checkouts
        dispatch(getOpenCheckouts(user_id))
      })
      .catch((error) => console.log(error));
  };
};

/**
 *
 * @param {Integer} user_id
 * @param {Integer} store_id
 * @param {String} state
 * @returns update the checkout state
 */
export const updateCheckoutState = (user_id, store_id, state) => {
  return function (dispatch) {
    backendAPI
      .put("cart/update/checkout/", {
        user_id,
        store_id,
        state,
      })
      .then((response) => {
        console.log("update==>", response.data);
        alert("added");
        dispatch(getOpenCheckouts(user_id))
      })
      
      .catch((error) => console.log(error));
  };
};
// <===================================================>
/**
 *
 * @param {Integer} user_id
 * @returns {Array} array of open checkout carts
 */
export const getOpenCheckouts = (user_id) => {
  console.log("getting the open checkouts =>", localStorage.getItem("access"));
  return function (dispatch) {
    backendAPI
      .get("/user/open-stores/", {
        params: { user_id },
        headers: {
          Authorization: `JWT ${localStorage.getItem("access")}`,
        },
      })
      .then((response) => {
        dispatch({ type: USER_STORES, payload: response.data });
      })
      .catch((error) => console.log("Error Status : ", error.response.status));
  };
};
