import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Container, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


// setting the delay before redirect to home page
const seconds = 5;

const Title = (props) => {
  return <> {props.title}</>;
};

/**
 *
 * @returns A modal to inform the user that a wrong page is reached
 */
const Thanks = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [sec, setSec] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSec((prevState) => prevState - 1);
    }, 1000);
    setTimeout(() => {
      navigate("/");
      clearInterval(interval);
      window.location.reload()
    }, seconds * 1000);
  }, []);

  return (
    <Container fluid="true" className="vh-100" lang={i18n.language} dir={i18n.language === "ar" ? "rtl" : null}>
      <Modal.Dialog centered className="shadow-md">
        <Modal.Header className="justify-content-center">
          <Modal.Title className="display-6">{t("Thanks.Payment Done")}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <h5>{t("Thanks.Thank you!")}</h5>
          <p>
            {t("Thanks.redirect to Home page in")} <span className="text-danger">{sec}</span>{" "}
            {t("Thanks.seconds")}
          </p>
        </Modal.Body>
      </Modal.Dialog>
    </Container>
  );
};

export default Thanks;
