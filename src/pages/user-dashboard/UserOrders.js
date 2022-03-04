import React, { useEffect, useState } from "react";
import { Tabs, Tab, Row, Table, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SectionCard from "../../components/user-dashboard/SectionCard.js";
import { getAllOrders } from "../../redux/actions/Udashboard.js";
import { useTranslation } from "react-i18next";
import OrderDetailModal from "../../components/user-dashboard/orders/OrderDetailModel.js";

/**
 * get all orders
 * sort them
 * @returns
 */
const UserOrders = () => {
  // <---states--->
  const [key, setKey] = useState("all");
  const [init, setInit] = useState(true);
  const [show, setShow] = useState(false);
  const [orderDetails, setDetails] = useState({});

  //<--store states-->
  const user = useSelector((state) => state.auth.user);
  const orders = useSelector((state) => state.userDash.all);
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  //<--side effects-->
  useEffect(() => {
    if (user) dispatch(getAllOrders(user.id));
  }, [user, dispatch]);
  useEffect(() => {
    console.log(orders);
  }, [orders]);

  //<--helper functions-->
  const viewOrderHandler = (order) => {
    console.log(order);
    setShow(true);
    setDetails(order);
  };
  const filterOrders = (item) => {
    switch (key) {
      case "pending":
        return item.state == "pending";
      case "done":
        return item.state === "done";
      default:
        return true;
    }
  };

  //<--modal functions-->]
  const hideModalHandler = () => {
    console.log(show);
    setShow(false);
    setDetails({});
  };
  return (
    <div>
      <OrderDetailModal
        order={orderDetails}
        show={show}
        onHide={hideModalHandler}
      />
      <h1 className="pb-3">{t("profile.my-orders")}</h1>
      <Row className="gy-4">
        <Tabs
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-0 pb-0 w-100 d-flex "
        >
          <Tab eventKey="all" title={t("order.all")}></Tab>
          <Tab eventKey="pending" title={t("order.pending")}></Tab>
          <Tab eventKey="done" title={t("order.done")}></Tab>
        </Tabs>
        {/* <SectionCard icon="user" header="orders" /> */}
        <Table
          responsive
          className="align-middle text-center"
          style={{ fontSize: "16px" }}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>{t("cart.store")}</th>
              <th>{t("cart.location")}</th>
              <th>{t("cart.date")}</th>
              <th>{t("cart.status")}</th>
              <th>{t("cart.total")}</th>
              <th>{t("cart.view")}</th>
            </tr>
          </thead>
          <tbody>
            {orders
              .filter((item) => item.state !== "open")
              .filter(filterOrders)
              .sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate))
              .map((order, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{t(`category.${order.store.name}`)}</td>
                    <td>
                      {t(`location.${order.carts[0].product.store.city}`)}
                    </td>
                    <td>
                      <p className="my-0">
                        {order.orderDate
                          ? new Date(order.orderDate).toLocaleDateString()
                          : "Not Provided"}
                      </p>
                      <p
                        className="text-muted my-0 fw-bold"
                        style={{ fontSize: "0.7rem" }}
                      >
                        {order.orderDate
                          ? new Date(order.orderDate).toLocaleTimeString()
                          : "Not Provided"}
                      </p>
                    </td>
                    <td>
                      <span className={`badge bg-${badgeColor(order.state)}`}>
                        {t(`order.${order.state}`)}
                      </span>
                    </td>
                    <td>
                      {new Intl.NumberFormat(
                        `${i18n.language === "ar" ? "ar" : "en"}-EG`,
                        {
                          style: "currency",
                          currency: "EGP",
                        }
                      ).format(
                        order.carts
                          .map((item) => item.quantity * item.product.price)
                          .reduce((prev, current) => prev + current, 0)
                      )}
                    </td>
                    <td>
                      <Button
                        variant="outline-success"
                        className="py-0 m-0"
                        style={{ fontSize: "0.8rem" }}
                        onClick={viewOrderHandler.bind(this, order)}
                      >
                        {t("cart.view")}
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Row>
    </div>
  );
};

export default UserOrders;

const badgeColor = (state) => {
  switch (state) {
    case "open":
      return "danger";
    case "pending":
      return "warning";
    case "done":
      return "success";
    default:
      return "transparent";
  }
};
