import { Col, Row } from "react-bootstrap";
import styles from "./SingleTransaction.module.scss";

const SingleTransaction = (props) => {
const {color} = props;

  return (
    <Row
      fluid="true"
      className={`bg-white ${styles.container} py-3 px-2 mb-3 shadow-sm`}
    >
      <Col xs={1} className="d-flex justify-content-center align-items-center ">
        <div
          className={`${styles.trans__icon} bg-${color} d-flex justify-content-center align-items-center bg-opacity-25`}
        >
          <i className={`fas fa-coffee text-${color}`}></i>
        </div>
      </Col>
      <Col>
        <div className="fw-bold fs-5">Resturants and cofee</div>
        <div className="text-muted">17 April 2022</div>
      </Col>
      <Col xs={2} className="d-flex justify-content-center align-items-center">
        <div> -15L.E </div>
      </Col>
      <Col xs={1} className="d-flex justify-content-center align-items-center">
        <div
          className={`${styles.trans__icon} bg-${color} d-flex justify-content-center align-items-center bg-opacity-25`}
        >
          <i  className={`fas fa-bookmark text-${color}`}></i>
        </div>
      </Col>
      
    </Row>
  );
};

export default SingleTransaction;
