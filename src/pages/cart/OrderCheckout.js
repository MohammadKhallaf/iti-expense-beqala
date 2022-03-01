import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import SectionCard from "../../components/user-dashboard/SectionCard";
import { PAYPAL_ACCOUNT } from "../../credits.js";
import { getCartItems, updateCheckoutState } from "../../redux/actions/cart";
import { backendAPI } from "../../store";

const OrderCheckout = () => {

  const order = useSelector((state) => state.cart.checkout);
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (done) {
      backendAPI
        .put("cart/update/checkout/", {
          user_id: order.order_details.user,
          store_id: order.order_details.store,
          state: "pending",
        })
        .then((response) => {
          console.log("update==>", response.data);
          navigate("/thanks")
        })
        .catch((error) => console.log(error));
    }
  }, [done]);

  return (
    <Container className="pt-5">
      <Row className="gy-4">
        <SectionCard header="order details">
          {(Object.keys(order).length && (
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {order.carts.map((item, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{item.product_details.name}</td>
                    <td>{item.product_details.category_name}</td>
                    <td>
                      <span
                        style={{ textDecorationLine: "line-through" }}
                        className="text-muted fs-6"
                      >
                        {item.price}
                      </span>
                      <p>{item.price_after_offer.toFixed(2)}</p>
                    </td>
                    <td>{item.cart_details.quantity}</td>
                    <td>
                      {(
                        item.price_after_offer * item.cart_details.quantity
                      ).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )) ||
            "You have no items yet"}
        </SectionCard>
        <SectionCard header="payment">
          <PayPalScriptProvider
          // options={{ "client-id": PAYPAL_ACCOUNT, currency: "EGP" }}
          >
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: order.total.toFixed(2),
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  const name = details.payer.name.given_name;
                  alert(`Transaction completed by ${name}`);
                  setDone(true);
                });
              }}
            />
          </PayPalScriptProvider>
        </SectionCard>
      </Row>
    </Container>
  );
};

export default OrderCheckout;
