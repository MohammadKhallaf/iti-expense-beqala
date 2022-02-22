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
import { useDispatch } from "react-redux";
import { CART } from "../../redux/actions/types";
import store from "../../redux/store";
import { backendAPI } from "../../store";
/**
 * ## Cart Component
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
  // test case
  const [data, setData] = useState([]);
  // const data = store.getState().cart;
  let currentValue;
  const storeSub = store.subscribe(() => {
    let previousValue = currentValue;
    currentValue = store.getState().cart.data;
    setData(currentValue);

    if (previousValue !== currentValue) {
      console.log("changed from", previousValue, "to", currentValue);
    }
  });
  useEffect(() => {
    if (initial) {
      backendAPI.get("/cart").then((response) => {
        console.log("put into data", response.data);
        dispatch({ type: CART, payload: response.data });
      });
      // .catch((error) => alert(error));

      setInitial(false);
    }
    console.log(data);
  }, [data, initial]);

  return (
    <Modal
      size="xl"
      show={props.show}
      onHide={props.showFn}
      fullscreen="md-down"
      contentClassName="bg-transparent border-0 shadow-lg"
    >
      <Modal.Body
        className="bg-light "
        style={{ borderRadius: "1rem", overflow: "hidden", padding: "0" }}
      >
        <Row>
          {/* Shopping Cart */}
          <Col xs={12} lg={9} className="py-5 px-3 px-md-5">
            <Row className="d-flex align-items-center pb-5">
              <Col xs={12} md={9}>
                <h1>Shopping Card</h1>
              </Col>
              <Col xs={12} md={3}>
                hh
                <h6 className="text-muted">{console.log(data)}</h6>
              </Col>
            </Row>

            {/* <==={ Rendering the list }===> */}
            {data &&
              data.map((item, index) => {
                return (
                  <Row key={index} className="gap-3 py-3">
                    <hr />
                    <Col
                      xs="12"
                      md={2}
                      style={{ overflow: "hidden", height: "100px" }}
                    >
                      <Image
                        src={item.img}
                        rounded
                        width={"100%"}
                        height={"auto"}
                        style={{ objectFit: "cover" }}
                      />
                    </Col>
                    <Col md="2">
                      <h6 className="text-muted fs-6">{item.category}</h6>
                      <h5>{item.title}</h5>
                    </Col>
                    <Col xs={12} md={3} className="d-flex align-items-center">
                      <InputGroup>
                        <button className="btn btn-link">
                          <i
                            className="fas fa-minus"
                            style={{ fontSize: "0.1rem" }}
                          ></i>
                        </button>
                        <FormControl
                          width="100%"
                          type="number"
                          min="0"
                          ref={inputRef}
                        />
                        <button className="btn btn-link">
                          <i
                            className="fas fa-plus"
                            style={{ fontSize: "0.1rem" }}
                          ></i>
                        </button>
                      </InputGroup>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                      1000$
                    </Col>

                    {/* DELETE Button */}
                    <Col
                      xs="12"
                      md="1"
                      className="d-flex justify-content-center"
                    >
                      <button className="btn btn-link">
                        <i class="fas fa-trash-alt text-muted"></i>
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
                <Col className="text-white">1500$</Col>
              </Row>
            </Container>
            <Row className="d-flex justify-content-center p-4">
              <Button>Checkout</Button>
            </Row>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default Cart;
