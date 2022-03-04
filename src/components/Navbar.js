import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/actions/auth";
import BasketButton from "./cart/BasketButton";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Navbar = ({ logout, isAuthenticated, user, manager }) => {
  const { i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
  };
  const logout_user = () => {
    logout();
  };

  const guestLinks = () => (
    <Fragment>
      <li className="nav-item list-unstyled">
        <Link className="nav-link navItem" to="/login">
          <i className="fas fa-user navicon"></i>
          Login
        </Link>
      </li>
      <li className="nav-item list-unstyled">
        <Link className="nav-link navItem" to="/register">
          Sign Up
        </Link>
      </li>
    </Fragment>
  );

  const authLinksUser = () => (
    <>
      <li className="nav-item list-unstyled">
        <Link className="nav-link navItem" to="/UserDashboard">
          Your account
        </Link>
      </li>
      <li className="nav-item list-unstyled">
        <a className="nav-link navItem" href="#!" onClick={logout_user}>
          Logout
        </a>
      </li>
    </>
  );

  const authLinksManager = () => (
    <>
      <li className="nav-item list-unstyled">
        <a className="nav-link navItem" href="#!" onClick={logout_user}>
          Logout
        </a>
      </li>
    </>
  );

  const authLinks = () => <>{manager ? authLinksManager() : authLinksUser()}</>;

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light navfixed sticky-top bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">
            ExpenseBeqala
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link navItem" to="/contactus">
                  contact us
                </Link>
              </li>
            </ul>
            <li className="nav-item "></li>
            {isAuthenticated && user ? authLinks() : guestLinks()}
          </div>
          <Button
            onClick={toggleLanguage}
            variant="outline-success"
            className="p-1 py-0"
          >
            {i18n.language === "ar" ? "عربي" : "en"}
          </Button>
          <BasketButton />
        </div>
      </nav>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  manager: state.auth.manager,
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(Navbar);
