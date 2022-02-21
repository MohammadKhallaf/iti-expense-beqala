import React from 'react';
import { Button, Col, Row, Stack } from "react-bootstrap";
import styles from "./SingleCategory.module.scss";
const SingleCatgory = (props) => {
  return (
    <Col className={`${styles.container} col-3`}>
      <Stack className={"justify-content-around"} direction="horizontal">
        <Button
          className={`w-100 m-3 py-3 rounded-3 shadow-sm`}
          variant={props.color}
        >
          <Row>
            <Col className="d-flex justify-content-center align-items-center">
              
              <i className={`fas fa-${props.icon} fs-2`} style={{ width: "50px" }} ></i>

            </Col>
            <Col>
              <Stack>
                <span>{props.cat}</span>
                <span>$15354 </span>
              </Stack>
            </Col>
          </Row>
        </Button>
      </Stack>
    </Col>
  );
};
export default SingleCatgory