import {
  PayPalButtons,
  PayPalHostedField,
  PayPalScriptProvider,
} from "@paypal/react-paypal-js";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import SectionCard from "../../components/user-dashboard/SectionCard";
import { PAYPAL_ACCOUNT } from "../../credits.js";
import { getCartItems, updateCheckoutState } from "../../redux/actions/cart";
import { backendAPI } from "../../store";
import axios from "axios";

const OrderCheckout = () => {
  const { t, i18n } = useTranslation();
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
          navigate("/thanks");
        })
        .catch((error) => console.log(error));
    }
  }, [done]);

  const options = {
    method: "GET",
    url: "https://currency-exchange.p.rapidapi.com/exchange",
    params: { from: "EGP", to: "USD", q: "1.0" },
    headers: {
      "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
      "x-rapidapi-key": "b7d209d89fmsh80da77fbe5be72dp1994e8jsnf7213e64ba5b",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        const orderTotal = order.total + 30.0;
        const ratio = parseFloat(response.data);
        localStorage.setItem("total", (orderTotal * ratio).toFixed(2));
        setTotal(orderTotal * ratio);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [order]);

  if (Object.keys(order).length < 1) return <>"{t("OrderCheckout.You have no items yet")}"</>;
  return (
    <Container className="pt-5" lang={i18n.language} dir={i18n.language === "ar" ? "rtl" : null}>
      <Row className="gy-4">
        <h3>{t("OrderCheckout.Store Order")}</h3>
        <SectionCard header="order details" icon="list-alt">
          {
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>{t("OrderCheckout.Name")}</th>
                  <th>{t("OrderCheckout.Category")}</th>
                  <th>{t("OrderCheckout.Price")}</th>
                  <th>{t("OrderCheckout.Qty.")}</th>
                  <th>{t("OrderCheckout.Total")}</th>
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
                      ).toFixed(2)}{" "}
                      {t("OrderCheckout.LE")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          }
        </SectionCard>
        <SectionCard header="total" icon="wallet">
          <Table responsive>
            <thead>
              <tr>
                <th>{t("OrderCheckout.Item")}</th>
                <th>{t("OrderCheckout.Cost")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t("OrderCheckout.Your Items")}</td>
                <td>
                  {order.carts
                    .map(
                      (item) =>
                        item.price_after_offer * item.cart_details.quantity
                    )
                    .reduce((prev, curr) => prev + curr, 0)}{" "}
                  {t("OrderCheckout.LE")}
                </td>
              </tr>
              <tr>
                <td>{t("OrderCheckout.Shipping")}</td>
                <td>{t("OrderCheckout.30 LE")}</td>
              </tr>
              <tr>
                <td>{t("OrderCheckout.Total")}</td>
                <td>
                  {order.carts
                    .map(
                      (item) =>
                        item.price_after_offer * item.cart_details.quantity
                    )
                    .reduce((prev, curr) => prev + curr, 0) + 30.0}{" "}
                  {t("OrderCheckout.LE")}
                </td>
              </tr>
            </tbody>
          </Table>
        </SectionCard>
        <SectionCard header="payment" icon="lock">
          <button
            className="py-2 my-2 border-0 col-12 rounded bg-info fst-italic fw-bolder h5"
            style={{ height: "3.51rem", letterSpacing: " 2px" }}
            onClick={() => {
              setPayment("cash");
              setDone(true);
            }}
          >
            {t("OrderCheckout.Cash")}
          </button>
          <PayPalScriptProvider
            options={{ "client-id": PAYPAL_ACCOUNT, currency: "USD" }}
          >
            <PayPalButtons
              style={{ layout: "vertical" }}
              fundingSource={"paypal"}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: localStorage.getItem("total"),
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  const name = details.payer.name.given_name;
                  setPayment("paypal");
                  setDone(true);
                  console.log(`Transaction completed by ${name}`);
                  localStorage.removeItem("total");
                });
              }}
            />
            <PayPalButtons
              style={{ layout: "vertical" }}
              fundingSource={"card"}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: localStorage.getItem("total"),
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  const name = details.payer.name.given_name;
                  setPayment("credit");
                  setDone(true);
                  console.log(`Transaction completed by ${name}`);
                  localStorage.removeItem("total");
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
