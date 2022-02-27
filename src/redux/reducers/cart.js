/**
 * Cart Reducer
 *
 *
 *
 */

import {
  ADD_ITEM,
  CART,
  CHECKOUT,
  SHOW_CART,
  USER_STORES,
} from "../actions/types";

const initialCart = {
  /* [ {
      cart_details {id, quantity, order(id),  product(id)},
      product_details {id,  category{id,name}, name, description,  brand},
      price,
      offer,
      price_after_offer
    } ]
    */
  data: [{ cart_details: {} }],
  item: [],
  show: {
    visible: false,
    store_id: 0,
  },
  checkout: {},
  stores: [],
};

const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case CHECKOUT:
      return {
        ...state,
        checkout: action.payload,
      };
    case CART:
      return {
        ...state,
        data: action.payload,
      };
    case SHOW_CART:
      return {
        ...state,
        show: {
          visible: !state.show.visible,
          store_id: action.payload,
        },
      };
    case ADD_ITEM:
      return {
        ...state,
        item: action.payload,
      };
    case USER_STORES:
      return {
        ...state,
        stores: action.payload,
      };

    default:
      return state;
  }
};
export default cartReducer;

/* 

{"checkout":
  {"order_details":
    {
      "id": Integer ,
      "orderDate":"2022-02-25T00:32:43.807149Z",
      "state":"open" | "pending",
      "user": Integer ,
      "store": Integer 
    },
    "carts":
    [
      {
        "cart_details":
          {
            "id": Integer ,
            "quantity": Integer ,
            "order": Integer ,
            "product": Integer 
          },
          "product_details":
            {
              "id": Integer ,
              "category":
                {
                  "id": Integer ,
                  "name": String
                },
                "name": String ,
                "description": String ,
                "brand": Integer 
              },
              "price": Integer ,
              "offer": Integer ,
              "price_after_offer": Integer 
            }
          ],
          "total": Integer
        }
      }



*/
