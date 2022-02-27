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
  const data = useSelector((state) => state.cart.data);
  const order = useSelector((state) => state.cart.checkout);
  const openCheckouts = useSelector((state) => state.cart.stores);

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const showCart = () => {
    setShow(true);
    dispatch({ type: SHOW_CART });
  };
  const showHandler = () => {
    console.log("show");
    setShow((prevState) => !prevState);
  };

  useEffect(() => {
    dispatch(getOpenCheckouts(1));
  }, []);

  /* just reload when there is an update to the stores */
  useEffect(() => {}, [openCheckouts]);

  return (
    <div className="position-relative">
      <InputGroup className="p-0">
        <SplitButton
          variant="outline-transparent"
          onClick={showCart}
          title={
            <div className="position-relative">
              <i className="fas fa-shopping-basket fs-4 text-success"></i>
              <Badge
                pill
                bg="transparent"
                className="border text-black position-absolute translate-middle top-0 start-100"
              >
                {Object.keys(openCheckouts).length &&
                  openCheckouts.length | null}
              </Badge>
            </div>
          }
          alignLeft>
          {/* <--| selector to choose between stores |--> */}
          {openCheckouts.map((item, index) => (
            <Dropdown.Item
              onClick={() =>
                dispatch({ type: SHOW_CART, payload: item.store.id })
              }
              key={index}
              className="position-relative"
            >
              {item.store.name}
              <Badge pill bg="transparent" className="border text-black ms-1">
                {Object.keys(item).length && item.carts.length | 0}
              </Badge>
            </Dropdown.Item>
          ))}
        </SplitButton>
      </InputGroup>
    </div>
  );
};

export default BasketButton;
