import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/js/bootstrap.bundle";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./locales/i18n";
ReactDOM.render(
  <Suspense fallback="loading">
    <App />
  </Suspense>,

  document.getElementById("root")
);
