import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  Image,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CART, CHECKOUT, SHOW_CART } from "../../redux/actions/types";
import { backendAPI } from "../../store";

import FallbackImage from "../../files/market.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getCartItems } from "../../redux/actions/cart";
/**
 * ## Cart Component
 * <== Modal ==>
 * ### |<== to front end
 * ```
 *  - id => ?
 *  - price
 *  - quantity (+ / -)
 *  - title
 *  - image
 *  - market ( filter ) => generate depend on it
 *  - serial key
 * ```
 * ### |==> to backend
 * axios.post('/addtocart',{
 *            })
 *  - BE: # STORE_ID, USER_ID, ORDER_ID, PRODUCT_ID
 *
 */
const Cart = (props) => {
  /*<== Modal ==> */
  // get the input of each item
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [initial, setInitial] = useState(true);
  const [isLoading, setLoading] = useState(false);

  /*<== Store states ==>*/
  const itemData = useSelector((state) => state.cart.data); //holds "item in cart "updates
  const show = useSelector((state) => state.cart.show);
  const item = useSelector((state) => state.cart.item);
  const order = useSelector((state) => state.cart.checkout);

  const navigate = useNavigate();

  /**
   * Control the quantity of the product in the cart
   * @param operation the operator (ADD,DEL,ZERO,EVENT)\
   * ADD => increase the quantity of the product\
   * DEL => decrease the quantity of the product\
   * ZERO => delete the product\
   * EVENT => read the quantity of the product
   *
   *
   */
  const quantityHandler = (operation) => {
    // read the existing data state into another variable
    let all_data = order.carts;
    console.log("First", all_data);

    // get the required fields
    const {
      index, // input index
      op, // option
      id: { user: userID, product: productID, store: storeID },
    } = operation;

    //TODO: link them with the backend
    switch (op) {
      // <|--add one--|>
      case "ADD":
        console.log("ADD", index);
        all_data[index].cart_details.quantity++;
        console.log("After", all_data);
        break;
      // <|--delete one--|>
      case "DEL":
        console.log("DEL");
        all_data[index].cart_details.quantity--;
        console.log("After", all_data);
        break;
      // <|--remove all--|>
      case "ZERO":
        all_data[index].cart_details.quantity = 0;
        
        console.log("ZERO", productID);
        break;
      case "CHANGE":
        console.log("CHANGE");
        all_data[index].cart_details.quantity = parseInt(operation.value);
        break;
      default:
        console.log(operation);
    }
    // [... data ] => don't mutate
    dispatch({ type: CART, payload: [...all_data] });
    console.log("item data index", itemData[index]);
    const cartItemData = {
      product_id: itemData[index].product_details.id,
      user_id: 1, //!hard-coded
      store_id: 5, //! hard-coded
      quantity: itemData[index].cart_details.quantity,
    };
    setLoading(true)
    backendAPI
      .put("cart/", cartItemData)
      .then((response) => console.log("put request, response =>", response))
      .then(res=>{dispatch(getCartItems)
      setLoading(false)});
  };

  const ckeckoutHandler = () => {
    dispatch({ type: SHOW_CART });
    navigate("/");
  };

  useEffect(() => {
    // < get the cart items in the initial page load>
    if (initial) {
      // get the chcekout data
      dispatch(getCartItems);

      setInitial(false);
    }

    console.log("data in use effect", itemData);
  }, [order, dispatch]);

  // re-render the cart whenever an update is done on the cart => add item
  useEffect(() => {
    dispatch(getCartItems);

    console.log("data in use effect", itemData);
  }, [item]);

  return (
    <Modal
      size="xl"
      // show
      show={show}
      onHide={() => {
        dispatch({ type: SHOW_CART });
      }}
      fullscreen="md-down"
      contentClassName="bg-transparent border-0 shadow-lg"
    >
      <Modal.Body
        className="bg-light "
        style={{ borderRadius: "1rem", overflow: "hidden", padding: "0" }}
      >
        <div className="p-3 d-md-none">
          <Button
            className="d-md-none rounded-circle"
            onClick={() => {
              dispatch({ type: SHOW_CART });
            }}
          >
            X
          </Button>
        </div>
        <Row>
          {/* Shopping Cart */}
          <Col xs={12} lg={9} className="py-5 px-3 px-md-5">
            <Row className="d-flex align-items-center pb-5">
              <Col xs={12} md={9}>
                <h1>Shopping Card</h1>
              </Col>
              <Col xs={12} md={3}>
                {console.log(Object.keys(order).length)}
                {Object.keys(order).length && (
                  <h6 className="text-muted">{order.carts.length} Items</h6>
                )}
              </Col>
            </Row>

            {/* <==={ Rendering the list }===> */}
            {Object.keys(order).length &&
              order.carts.map((item, index) => {
                /*
                item:{
                  cart_details:{id,quantitiy,order(order_id),product},
                  product_details:{id,name,description,brand,category}
                }
                */
                // remove the item from the list
                // if (item.cart_details.quantity < 1) return false;
                return (
                  <Row key={index} className="gap-3 py-3">
                    <hr />
                    <Col
                      xs="12"
                      md={2}
                      style={{ overflow: "hidden", height: "100px" }}
                    >
                      {/* <| PRODUCT IMAGE |> */}
                      <Image
                        src={item.product_img || FallbackImage}
                        rounded
                        width={"100%"}
                        height={"auto"}
                        style={{ objectFit: "cover" }}
                      />
                    </Col>
                    <Col md="2">
                      {/* <| PRODUCT CATEGORY |> */}
                      <h6 className="text-muted fs-6">
                        {item.product_details.category_name}
                      </h6>
                      {/* <| PRODUCT TITLE |> */}
                      <h6>{item.product_details.name}</h6>
                    </Col>
                    <Col xs={12} md={3} className="d-flex align-items-center">
                      {/* <| QUANTITY CONTROL |> */}
                      <InputGroup>
                        {/* <| decrease the quantity |> */}
                        <button
                          className="btn btn-link"
                          disabled={isLoading}
                          onClick={quantityHandler.bind(this, {
                            index,
                            op: "DEL",
                            id: {
                              // user: item.user_id,
                              // store: item.order_details.store,
                              product: item.product_details.id,
                            },
                          })}
                        >
                          <i
                            className="fas fa-minus"
                            style={{ fontSize: "0.1rem" }}
                          ></i>
                          {/* <| decrease the quantity |> */}
                        </button>
                        {/* <| input quantity |> */}
                        <FormControl
                          width="100%"
                          type="number"
                          min="0"
                          disabled={isLoading}
                          ref={inputRef}
                          value={item.cart_details.quantity}
                          onChange={(event) =>
                            quantityHandler({
                              index,
                              op: "CHANGE",
                              value: event.target.value,
                              id: {
                                // user: item.user_id,
                                // store: item.store_id,
                                product: item.product_details.id,
                              },
                            })
                          }
                        />
                        {/* <| increase the quantity |> */}
                        <button
                          className="btn btn-link"
                          disabled={isLoading}
                          onClick={quantityHandler.bind(this, {
                            index,
                            op: "ADD",
                            id: {
                              // user: item.user_id,
                              // store: item.store_id,
                              product: item.product_details.id,
                            },
                          })}
                        >
                          <i
                            className="fas fa-plus"
                            style={{ fontSize: "0.1rem" }}
                          ></i>
                        </button>
                      </InputGroup>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                      {(
                        item.cart_details.quantity * item.price_after_offer
                      ).toFixed(2)}
                    </Col>

                    {/* DELETE Button */}
                    <Col
                      xs="12"
                      md="1"
                      className="d-flex justify-content-center"
                    >
                      {/* <| remove the product from the list |> */}

                      <button
                        className="btn btn-link"
                        disabled={isLoading}
                        onClick={quantityHandler.bind(this, {
                          index,
                          op: "ZERO",
                          id: {
                            // user: item.user_id,
                            // store: item.store_id,
                            product: item.product_details.id,
                          },
                        })}
                      >
                        <i className="fas fa-trash-alt text-muted"></i>
                      </button>
                    </Col>
                  </Row>
                );
              })}
            <hr />
          </Col>
          {/* Summary */}
          <Col className="bg-dark text-light py-5 px-md-3 d-flex flex-column justify-content-between">
            <Container fluid="true">
              <h2 className="text-lg-center pb-md-5 ">Summary</h2>
              <Row className="pt-lg-5 d-flex align-items-center">
                <Col>
                  <h3>Total</h3>
                </Col>
                <Col className="text-white">
                  <span>
                    {" "}
                    {Object.keys(order).length && order.total.toFixed(2)}{" "}
                  </span>
                  <span>LE</span>
                </Col>
              </Row>
            </Container>
            <Row className="d-flex justify-content-center p-4">
              <Button onClick={ckeckoutHandler} disabled={isLoading}>
                Checkout
              </Button>
            </Row>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default Cart;
