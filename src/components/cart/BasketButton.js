import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Badge, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import { SHOW_CART } from "../../redux/actions/types";

const BasketButton = () => {
  const data = useSelector((state) => state.cart.data);
  const order = useSelector((state) => state.cart.checkout);

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

  return (
    <div className="position-relative">
      <Button className="p-0 border-0 bg-transparent " onClick={showCart}>
        <i className="fas fa-shopping-basket fs-4 text-success"></i>
      </Button>
      <Badge
        pill
        bg="transparent"
        className="border text-black position-absolute translate-middle top-0 start-100"
      >
        {Object.keys(order).length && order.carts.length | 0}
      </Badge>
    </div>
  );
};

export default BasketButton;
