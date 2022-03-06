import { Button, Modal, Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const OrderDetailModal = (props) => {
  const { order, show, onHide } = props;
  const { t, i18n } = useTranslation();
  if (Object.keys(order).length < 1) return <></>;
  return (
    <Modal
      lang={i18n.language}
      dir={i18n.language === "ar" ? "rtl" : null}
      show={show}
      onHide={onHide}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>{t("order.details")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table
          responsive
          className="align-middle text-center"
          style={{ fontSize: "16px" }}
        >
          <thead>
            <tr>
              <th>{t("cart.store")}</th>
              <th>{t("cart.date")}</th>
              <th>{t("cart.payment")}</th>
              <th>{t("cart.status")}</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{t(`category.${order.store.name}`)}</td>
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
              <td>{order.payment}</td>
              <td>{t(`order.${order.state}`)}</td>
            </tr>
          </tbody>
         
        </Table>
        
        <Table
          responsive
          className="align-middle text-center"
          style={{ fontSize: "16px" }}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Price</th>
              <th>Qty.</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {order.carts?.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.product.product.name}</td>
                  <td>
                    {new Intl.NumberFormat(
                      `${i18n.language === "ar" ? "ar" : "en"}-EG`,
                      {
                        style: "currency",
                        currency: "EGP",
                      }
                    ).format(item.product.price)}
                  </td>
                  <td>{item.quantity}</td>
                  <td>
                    {new Intl.NumberFormat(
                      `${i18n.language === "ar" ? "ar" : "en"}-EG`,
                      {
                        style: "currency",
                        currency: "EGP",
                      }
                    ).format(item.product.price * item.quantity)}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th>{t("cart.total")}</th>
              <td>
                {new Intl.NumberFormat(
                  `${i18n.language === "ar" ? "ar" : "en"}-EG`,
                  {
                    style: "currency",
                    currency: "EGP",
                  }
                ).format(
                  order.carts
                    ?.map((item) => item.product.price * item.quantity)
                    .reduce((a, b) => a + b, 0)
                )}
              </td>
            </tr>
          </tfoot>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderDetailModal;
