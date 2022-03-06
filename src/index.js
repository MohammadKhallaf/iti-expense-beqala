import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/js/bootstrap.bundle";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./locales/i18n";
import { Container, Spinner } from "react-bootstrap";
ReactDOM.render(
  <Suspense
    fallback={
      <Container className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" role="status" variant="success" size="lg">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    }
  >
    <App />
  </Suspense>,

  document.getElementById("root")
);
