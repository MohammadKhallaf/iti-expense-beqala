import React from "react";
import { useSelector } from "react-redux";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { backendAPI } from "../../store";
import style from "./SignInReq.module.css";
import { useTranslation } from "react-i18next";

const SignInReq = () => {
  const { t, i18n } = useTranslation();
  const user = useSelector((state) => state.auth.user);
  const handleAddLocalToDB = () => {
    // get the local storage cart
    const items = Object.keys(localStorage).filter((key) =>
      key.includes("cart-")
    );
    const list_of_carts = items.map((item) =>
      JSON.parse(localStorage.getItem(item))
    );
    backendAPI.post("/cart/move/", 
      { user_id: user.id, list_of_carts },
      {headers: {
        Authorization: `JWT ${localStorage.getItem("access")}`,
      },}
    );
    /*
    1. read the local storage
    2. send data of 
    [{user_id,store_id,product_id,quantity},{...},{...}]
    */
  };
  return (
    <>
      <Container className={`text-center w-sm-50`} lang={i18n.language} dir={i18n.language === "ar" ? "rtl" : null}>
        <h1>{t("SignInReq.Account Needed")}</h1>
        <Container className={`shadow border rounded-lg p-5  ${style.wrapper}`}>
          <p>{t("SignInReq.To Procced to the checkout process, You need to be logged in")}</p>
          <Container fluid="true" className="d-flex justify-content-around">
            <Row direc>
              <Button onClick={handleAddLocalToDB}>{t("SignInReq.Login")}</Button>
              <Button>{t("SignInReq.Register")}</Button>
            </Row>
            <Row>
              <Link to="/">{t("SignInReq.Continue shopping")}</Link>
            </Row>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default SignInReq;
