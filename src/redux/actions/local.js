import { CHECKOUT, LOC_CART_LIST } from "./types";
import { backendAPI } from "../../store";

/**
 * adds the product to the local storage
 * @param cartObject
 *  store\
 *  product\
 *  quantity: 1
 *
 */
export const addToLocalCart = (cartObject) => (dispatch) => {
  // case 1 : there is no previous cart
  // case 2 : there is a previous cart - with different product
  // case 3 : there is a previous cart - with same product
  const {
    store: { id: store_id },
    product,
    product: { id: product_id },
    quantity,
  } = cartObject;
  const reqObj = JSON.parse(localStorage.getItem(`cart-${store_id}`)); // []

  // there is a cart for that store
  if (reqObj != null) {
    const productList = reqObj; // []
    const ourProduct = reqObj.filter(
      (item) => item.product.id === product_id
    )[0];

    if (ourProduct) {
      // if the product is in the list
      const index = reqObj.findIndex((item) => item.product.id === product_id);
      const newQuantity = ourProduct.quantity + 1;

      const newProductObj = {
        ...ourProduct,
        quantity: newQuantity,
      };
      productList.splice(index, 1, newProductObj);
    } else {
      // case 2.1: array => product is not existed in the array
      productList.push(cartObject);
    }

    localStorage.setItem(`cart-${store_id}`, JSON.stringify(productList));
  } else {
    // if there is no any carts for that store
    localStorage.setItem(`cart-${store_id}`, JSON.stringify([cartObject]));
  }

  // <------------ Done Updating the cart ------------>

  // adding prices to  it
  // <-- get products' prices -->
  const updatedCart = JSON.parse(localStorage.getItem(`cart-${store_id}`));
  const product_priceList = updatedCart.map((item) => {
    return {
      product: item.product.id,
      store: item.store.id,
    };
  });
  // <-- adding the price to the cart -->
  backendAPI
    .get("cart/price-list/", {
      params: {
        product_store: product_priceList,
      },
    })
    .then((res) => res.data)
    .then((res) =>
      updatedCart.map((item, index) => {
        const priceIndex = res.findIndex(
          (resItem) => resItem.product.id === item.product.id
        );
        return {
          product: {
            ...item.product,
            price: res[priceIndex].price, //index of that price =>
          },
          store: {
            ...item.store,
          },
          quantity: item.quantity,
        };
      })
    )
    .then((res) =>
      localStorage.setItem(`cart-${store_id}`, JSON.stringify(res))
    );

  const items = Object.keys(localStorage).filter((key) =>
    key.includes("cart-")
  );
  dispatch({
    type: LOC_CART_LIST,
    payload: items,
  });
};

/**
 *
 * Load the data in the shopping cart
 * @returns checkout state => CHECKOUT: VIEW_CHECKOUT
 */
export const getLocCartItems = (store_id) => {
  return function (dispatch) {
    // initial store id = 0 ,where is no any stores are required
    if (!store_id || store_id === 0) return;
    //1. get items from local that matches that id
    // missing items=>
    //2. map them to match the API form
    //3. dispatch them to the store redux
    const cartList = JSON.parse(localStorage.getItem(`cart-${store_id}`));
    const product_priceList = cartList.map((item) => {
      return {
        product: item.product.id,
        store: item.store.id,
      };
    });
    const mappedCart = cartList.map((item, index) => {
      const newItem = {
        cart_details: {
          // id:,
          quantity: item.quantity,
          // order:,
          product: item.product.id, //product price id
        },
        product_details: {
          id: item.product.id,
          name: item.product.name,
          description: item.product.description,
          image: item.product.image,
          brand: item.product.brand,
        },
        price: item.product.price,
        // price:,
        offer: 0,
        price_after_offer: item.product.price,
      };
      return newItem;
    });
    const total = mappedCart
      .map((item) => item.price*item.cart_details.quantity)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    dispatch({ type: CHECKOUT, payload: { carts: mappedCart, total } });
  };
};
