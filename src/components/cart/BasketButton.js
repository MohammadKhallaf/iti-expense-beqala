import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  Badge,
  Button,
  Dropdown,
  DropdownButton,
  InputGroup,
  SplitButton,
  FormControl,
  Modal,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import { LOC_CART_LIST, SHOW_CART } from "../../redux/actions/types";
import { backendAPI } from "../../store";
import { getOpenCheckouts } from "../../redux/actions/cart";

const BasketButton = () => {
  // <-- component states -->
  const [show, setShow] = useState(false);
  const [isInit, setInit] = useState(true);

  //<-- store states -->
  const cart = useSelector((state) => state.cart);
  const order = useSelector((state) => state.cart.checkout);
  const openCheckouts = useSelector((state) => state.cart.stores);
  const user = useSelector((state) => state.auth.user);
  const localCartList = useSelector((state) => state.local.cartList);
  const dispatch = useDispatch();

  // TODO: delete this function
  // const showCart = () => {
  //   setShow(true);
  //   dispatch({ type: SHOW_CART });
  // };

  useEffect(() => {
    if (user) dispatch(getOpenCheckouts(user.id));
  }, [user]);

  /* update to cart => reloads all the stores */
  useEffect(() => {
    if (isInit) {
      const items = Object.keys(localStorage).filter((key) =>
        key.includes("cart-")
      );
      dispatch({
        type: LOC_CART_LIST,
        payload: items,
      });

      setInit(false);
    }
  }, [openCheckouts, localCartList, dispatch, isInit]);

  return (
    <div className="position-relative">
      <MergeModal />
      <InputGroup className="p-0">
        <SplitButton
          variant="outline-transparent"
          // onClick={showCart}
          className="p-0"
         
          title={
            <div className="position-relative">
              <i className="fas fa-shopping-basket fs-4 text-success"></i>
              <Badge
                pill
                bg="transparent"
                className="border text-black position-absolute translate-middle top-0 start-100"
              >
                {(user &&
                  openCheckouts.length > 0 &&
                  openCheckouts.length | null) ||
                  (localCartList.length > 0 && localCartList.length | null)}
              </Badge>
            </div>
          }
          alignLeft
        >
          {/* <--| selector to choose between stores |--> */}
          {(user &&
            openCheckouts.length > 0 &&
            cartList(openCheckouts, dispatch)) ||
            localList(localCartList, dispatch)}
        </SplitButton>
      </InputGroup>
    </div>
  );
};
// <-- cart list to list data from database  -->
const cartList = (openCheckouts, dispatch) => {
  if (!(openCheckouts.length > 0)) return;
  return openCheckouts.map((item, index) => (
    <Dropdown.Item
      onClick={() => dispatch({ type: SHOW_CART, payload: item.store.id })}
      key={index}
      className="position-relative"
    >
      {item.store.name}
      <Badge pill bg="transparent" className="border text-black ms-1">
        {Object.keys(item).length > 0 && item.carts.length | 0}
      </Badge>
    </Dropdown.Item>
  ));
};
// <-- cart list to list data from local  -->
const localList = (cartKeyList, dispatch) => {
  // get all carts
  return cartKeyList.map((item, index) => {
    const { name: storeName, id: storeID } = JSON.parse(
      localStorage.getItem(item)
    )[0].store;
    const numOfProduct = JSON.parse(localStorage.getItem(item)).length;
    return (
      <Dropdown.Item
        onClick={() => dispatch({ type: SHOW_CART, payload: storeID })}
        key={index}
        className="position-relative"
      >
        {storeName}
        <Badge pill bg="transparent" className="border text-black ms-1">
          {numOfProduct > 0 && numOfProduct | 0}
        </Badge>
      </Dropdown.Item>
    );
  });
};

export default BasketButton;

// <-- merging local to database -->

const MergeModal = () => {
  const user = useSelector((state) => state.auth.user);
  const items = Object.keys(localStorage).filter((key) =>
    key.includes("cart-")
  );
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const saveItemshandler = () => {
    const list_of_carts = items.map((item) =>
      JSON.parse(localStorage.getItem(item))
    );
    backendAPI
      .post(
        "/cart/move/",
        { user_id: user.id, list_of_carts },
        {
          headers: {
            Authorization: `JWT ${localStorage.getItem("access")}`,
          },
        }
      )
      .then(dismissItemshandler);
  };
  const dismissItemshandler = () => {
    items.forEach((key) => localStorage.removeItem(key));
    setShow(false);
    window.location.reload();
  };
  useEffect(() => {
    if (items.length > 0) {
      setTimeout(() => {
        setShow(true);
      }, 5000);
    }
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          There are some carts saved while you where not logged in
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={saveItemshandler}>
            Save Them
          </Button>
          <Button variant="outline-danger" onClick={dismissItemshandler}>
            Dismiss
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
