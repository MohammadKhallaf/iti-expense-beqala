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
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import { SHOW_CART } from "../../redux/actions/types";
import { backendAPI } from "../../store";
import { getOpenCheckouts } from "../../redux/actions/cart";

const BasketButton = () => {
  const [show, setShow] = useState(false);


  const cart = useSelector((state) => state.cart);
  const order = useSelector((state) => state.cart.checkout);
  const openCheckouts = useSelector((state) => state.cart.stores);
  const user = useSelector((state) => state.auth.user);


  const dispatch = useDispatch();

  const showCart = () => {
    setShow(true);
    dispatch({ type: SHOW_CART });
  };

 
  useEffect(() => {
    if (user) dispatch(getOpenCheckouts(user.id));
    console.log(openCheckouts);
  }, [user]);

  /* update to cart => reloads all the stores */
  useEffect(() => {
  }, [
    openCheckouts]);

  return (
    <div className="position-relative">
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
                {console.log(openCheckouts)}
                {openCheckouts.length > 0 && openCheckouts.length | null}
              </Badge>
            </div>
          }
          alignLeft
        >
          
          {/* <--| selector to choose between stores |--> */}
          {openCheckouts.length > 0 &&
            openCheckouts.map((item, index) => (
              <Dropdown.Item
                onClick={() =>
                  dispatch({ type: SHOW_CART, payload: item.store.id })
                }
                key={index}
                className="position-relative"
              >
                {item.store.name}
                <Badge pill bg="transparent" className="border text-black ms-1">
                  {Object.keys(item).length > 0 && item.carts.length | 0}
                </Badge>
              </Dropdown.Item>
            ))}
        </SplitButton>
      </InputGroup>
    </div>
  );
};

export default BasketButton;
