import React from "react";
import ReactDOM from "react-dom";
import { Row, Col, Stack, Container, Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { useTranslation } from "react-i18next";

const CustomNavItem = (props) => {
  const { t, i18n } = useTranslation();
  console.log("LINK TO GO\t", props.to);
  return (
    <NavLink
      lang={i18n.language}
      dir={i18n.language === "ar" ? "rtl" : null}
      className={(current) =>
        "" +
        (current.isActive ? styles.active : null) +
        `  text-black p-3 ${styles.nav__item} ${
          props.className ? props.className : null
        } nav-link`
      }
      to={props.to || "/"}
    >
      <span className="px-1 px-md-3">
        <i className={`fas fa-${props.icon} fs-4 `}></i>
      </span>
      <span className={`${styles.nav__text}`}>{props.children}</span>
    </NavLink>
  );
};

const Sidebar = () => {
  const { t, i18n } = useTranslation();
  return ReactDOM.createPortal(
    <div lang={i18n.language} dir={i18n.language === "ar" ? "rtl" : null}>
      <Container
        fluid="true"
        className={`${i18n.language === "ar" ? "end-0" : "start-0"}  ${
          styles.sidebar
        } position-fixed mt-5 vh-100 shadow bg-white d-flex flex-column pb-5 `}
        style={{
          width: "15rem",
          zIndex: "1",
        }}
      >
        <Nav className=" pt-5 flex-column flex-grow-1  ">
          <CustomNavItem to="overview" icon="home">
            {t("sidebar.overview", "overview")}
          </CustomNavItem>
          <CustomNavItem to="orders" icon="th-list">
            {t("sidebar.orders", "orders")}
          </CustomNavItem>
          {/* <CustomNavItem>{t("sidebar.help")}</CustomNavItem> */}
        </Nav>
        {/* <---Footer---> */}
        <Nav className="d-flex flex-column flex-shrink-1">
          <CustomNavItem to="account" icon="cog">
            {t("sidebar.settings")}
          </CustomNavItem>
        </Nav>
      </Container>
    </div>,
    document.getElementById("overlay-root")
  );
};

export default Sidebar;
