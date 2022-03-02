import { PayPalButtons, PayPalHostedField, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import SectionCard from "../../components/user-dashboard/SectionCard";
import { PAYPAL_ACCOUNT } from "../../credits.js";
import { getCartItems, updateCheckoutState } from "../../redux/actions/cart";
import { backendAPI } from "../../store";
import axios from "axios";





const OrderCheckout = () => {

  const order = useSelector((state) => state.cart.checkout);
  const [done, setDone] = useState(false);
  const [payment_method, setPayment] = useState("none");
  const [currency_today, setCurrency] = useState(1);
  const [total_EGP, setTotal] = useState(0.0);


  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (done) {
      backendAPI
        .put("cart/update/checkout/", {
          user_id: order.order_details.user,
          store_id: order.order_details.store,
          state: "pending",
          payment: payment_method,
        })
        .then((response) => {
          console.log("update==>", response.data);
          navigate("/thanks");
        })
        .catch((error) => console.log(error));
    }
  }, [done]);

  const options = {
    method: 'GET',
    url: 'https://currency-exchange.p.rapidapi.com/exchange',
    params: { from: 'EGP', to: 'USD', q: '1.0' },
    headers: {
      'x-rapidapi-host': 'currency-exchange.p.rapidapi.com',
      'x-rapidapi-key': 'b7d209d89fmsh80da77fbe5be72dp1994e8jsnf7213e64ba5b'
    }
  };
  useEffect(() => {
    axios.request(options).then(function (response) {
      const orderTotal = order.total
      const ratio = parseFloat(response.data)
      console.log(orderTotal, ratio, orderTotal * ratio)
      localStorage.setItem("total",(orderTotal * ratio).toFixed(2))
      setTotal(orderTotal * ratio)
      console.log(order.total, response.data, (order.total) * (response.data))
    }).catch(function (error) {
      console.error(error);
    });
    console.log("order total = ", order.total)

  }, [order])
  // const total_payment = (order.total)*currency_today
  
  useEffect(() => {
    
  }, [total_EGP])




  return (
    <Container className="pt-5">
      
      <Row className="gy-4">
        <SectionCard header="order details" icon="list-alt">
          {(Object.keys(order).length && (
            <Table responsive>
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
                    <td>{index + 1}</td>
                    <td>{item.product_details.name}</td>
                    <td>{item.product_details.category.name}</td>
                    <td>
                      {item.product_details.offer && (
                        <span
                          style={{ textDecorationLine: "line-through" }}
                          className="text-muted fs-6"
                        >
                          {item.price}
                        </span>
                      )}

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
        <SectionCard header="total" icon="wallet"></SectionCard>
        <SectionCard header="payment" icon="lock">

          <button className="py-2 my-2 border-0 col-12 rounded bg-info fst-italic fw-bolder h5" style={{ height: "3.51rem", letterSpacing: " 2px" }}
            onClick={() => {
              setPayment("cash");
              setDone(true);

            }}
          >Cash</button>
          <PayPalScriptProvider
            options={{ "client-id": PAYPAL_ACCOUNT, currency: "USD" }}
          >
            <PayPalButtons
              style={{ layout: "vertical" }}
              fundingSource={"paypal"}
              createOrder={(data, actions) => {
                console.log(total_EGP)
                // console.log(actions)
                return actions.order.create({
                  purchase_units: [
                    {

                      amount: {
                        value: localStorage.getItem("total"),
                      },
                    }
                  ],
                });
              }}
              onClick={(e) => {
                console.log(e)

              }}
              onApprove={(data, actions) => {
                console.log(actions)
                console.log(data)
                return actions.order.capture().then((details) => {
                  console.log("details" + details)
                  const name = details.payer.name.given_name;
                  setPayment("paypal");
                  setDone(true);
                  console.log(`Transaction completed by ${name}`);
                  localStorage.removeItem("total")
                });
              }}
            />
            <PayPalButtons
              style={{ layout: "vertical" }}
              fundingSource={"card"}
              createOrder={(data, actions) => {
                // console.log(data)
                // console.log(actions)
                return actions.order.create({
                  purchase_units: [
                    {

                      amount: {
                        value: total_EGP,
                      },
                    },
                  ],
                });
              }}
              onClick={(e) => {
                console.log(e)

              }}
              onApprove={(data, actions) => {
                console.log(actions)
                console.log(data)
                return actions.order.capture().then((details) => {
                  console.log("details" + details)
                  const name = details.payer.name.given_name;
                  setPayment("credit");
                  setDone(true);
                  console.log(`Transaction completed by ${name}`);

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
