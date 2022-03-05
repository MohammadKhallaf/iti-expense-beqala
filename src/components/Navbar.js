import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/actions/auth";
import BasketButton from "./cart/BasketButton";
import {
  Button,
  Col,
  Container,
  Nav,
  Navbar as BootstrapNavbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";
const Navbar = ({ logout, isAuthenticated, user, manager }) => {
  const { i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
  };
  const logout_user = () => {
    logout();
    window.location.reload();
  };

  return (
    <BootstrapNavbar
      expand="md"
      bg="dark"
      sticky="top"
      lang={i18n.language}
      // dir={i18n.language === "ar" ? "rtl" : null}
    >
      <Container fluid className="px-2 px-md-3 px-lg-4 px-xl-5 text-light ">
        <BootstrapNavbar.Brand
          className="text-light me-auto flex-grow-1"
          as={Link}
          to="/"
        >
          <span
            className="p-1 rounded-circle"
            // style={{ background: "var(--bs-gray-100)" }}
          >
            <img
              src={require("../files/BeqalaLogo.png")}
              alt="logo"
              height="30px"
              width="30px"
            />
          </span>
          <span className="fw-bold ps-3">ExpenseBeqala</span>
        </BootstrapNavbar.Brand>

        <BasketButton />
        <BootstrapNavbar.Toggle
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarHeader"
          aria-expanded="false"
          label="Toggle navigation"
        />

        <BootstrapNavbar.Collapse id="navbarCollapse" className="flex-grow-0">
          <Nav>
            <Button
              onClick={toggleLanguage}
              variant="outline-success"
              className="p-1 py-0"
            >
              {i18n.language === "ar" ? "عربي" : "en"}
            </Button>

            <NavDropdown
              title={<span className="text-light m-1">Account</span>}
              id="nav-dropdown"
            >
              {/* guest */}
              {!isAuthenticated ? (
                <>
                  <NavDropdown.Item as={Link} to="/login">
                    Login
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/register">
                    Register
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item
                    as={Link}
                    to={manager ? "/owner/" : "/dashboard/overview"}
                  >
                    Your Account
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Button} onClick={logout_user}>
                    Logout
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  manager: state.auth.manager,
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(Navbar);
