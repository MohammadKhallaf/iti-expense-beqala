import React from "react";

import { Col, Container, Row, Stack } from "react-bootstrap";
import styles from "./SideDetail.module.scss";
const SideDetails = () => {
  return (
    <div className={styles.container}>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-white h-100">
        <Container className="p-3 bg-danger">
          <Stack>
            <Row className="fs-4">
              <Col xs={9}>Wallets</Col>
              <Col className={styles.icon__plus}>
                <i className="fas fa-plus"></i>
              </Col>
            </Row>
            <Row>Home Wallet Investments</Row>
          </Stack>
        </Container>
      </div>
    </div>
  );
};
export default SideDetails;
