import React from "react";
import { Container, Stack, Col } from "react-bootstrap";
import React from "react";
const SectionCard = (props) => {
  return (
    <Col xs="12" lg="6" as="section">
      <Container fluid="true" className="shadow-sm p-4">
        <Stack direction="horizontal" className="pb-3">
          <div
            className=" p-3 me-3 bg-success bg-opacity-75 rounded-circle d-flex justify-content-center align-items-center"
            style={{ width: "32px", height: "32px" }}
          >
            <i className={`fas fa-${props.icon} text-white`}></i>
          </div>
          <span className="fw-bolder fs-5 text-success text-opacity-75">
            {props.header.charAt(0).toUpperCase() + props.header.slice(1)}
          </span>
        </Stack>
        {/* photo */}
        {props.children}
      </Container>
    </Col>
  );
};

export default SectionCard;
