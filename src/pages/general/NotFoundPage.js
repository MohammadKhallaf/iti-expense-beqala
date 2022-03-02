import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Container, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// setting the delay before redirect to home page
const seconds = 5;

const Title = (props) => {
  return <> {props.title}</>;
};

/**
 *
 * @returns A modal to inform the user that a wrong page is reached
 */
const NotFoundPage = () => {
  const navigate = useNavigate();
  const [sec, setSec] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSec((prevState) => prevState - 1);
    }, 1000);
    setTimeout(() => {
      // navigate("/");
      clearInterval(interval);
    }, seconds * 1000);
  }, []);

  return (
    <Container fluid="true" className="vh-100">
      <Modal.Dialog centered className="shadow-md">
        <Modal.Header className="justify-content-center">
          <Modal.Title className="display-6">404 Not Found</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <h5>Sorry, there is no matching page</h5>
          <p>
            redirect to Home page in <span className="text-danger">{sec}</span>{" "}
            seconds
          </p>
        </Modal.Body>
      </Modal.Dialog>
    </Container>
  );
};

export default NotFoundPage;
