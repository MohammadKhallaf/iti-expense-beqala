import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "react-bootstrap";
import Cart from "./Cart";

const BasketButton = () => {
  const [show, setShow] = useState(false);
  const showCart = () => {
    setShow(true);
  };
  const showHandler = () => {
    console.log("show");
    setShow((prevState) => !prevState);
  };

  return (
    <>
      <Cart showFn={showHandler} show={show} />
      {ReactDOM.createPortal(
        <div className="fixed-bottom p-5">
          <Button
            className="rounded-pill p-2 bg-success border"
            onClick={showCart}
          >
            <i class="fas fa-shopping-basket fs-4"></i>
          </Button>
        </div>,

        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default BasketButton;
