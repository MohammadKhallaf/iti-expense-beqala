import React from "react";
import ReactDOM from "react-dom";
import { Row, Col, Stack, Container, Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

const CustomNavItem = (props) => {
  console.log("LINK TO GO\t", props.to);
  return (
    <NavLink
    className={current =>
      ""+(current.isActive ? styles.active : null) +
      `  text-black p-3 ${styles.nav__item} ${
        props.className ? props.className : null
      } nav-link`
    }
      to={props.to || "/"}
    >
      <span className="px-3">
        <i className={`fas fa-${props.icon} fs-4`}></i>
      </span>
      <span>{props.children}</span>
    </NavLink>
  );
};

const Sidebar = () => {
  return ReactDOM.createPortal(
    <Container
      fluid="true"
      className="start-0  position-fixed mt-5 vh-100 shadow bg-white d-flex flex-column pb-5"
      style={{
        width: "15rem",
        zIndex: "1",
      }}
    >
      <Nav className=" pt-5 flex-column flex-grow-1  ">
        <CustomNavItem to="overview" icon="home">
          Overview
        </CustomNavItem>
        <CustomNavItem to="orders" icon="th-list">
          Orders
        </CustomNavItem>
        <CustomNavItem>Help</CustomNavItem>
      </Nav>
      {/* <---Footer---> */}
      <Nav className="d-flex flex-column flex-shrink-1">
        <CustomNavItem to="account" icon="cog">
          Settings
        </CustomNavItem>
      </Nav>
    </Container>,

    document.getElementById("overlay-root")
  );
};

export default Sidebar;
