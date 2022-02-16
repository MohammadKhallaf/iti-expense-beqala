import React from 'react'
import Login from '../pages/login/Login'
import './Navbar.css'
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navfixed fixed-top bg-light" >
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand " href="#">our brand name</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link navItem" aria-current="page" href="#">our services</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link navItem" href="#">contact us</a>
              </li>
            </ul>
            <form className=" justify-content-start d-flex">

              <input className="  me-2 search" type="search" placeholder="Search" aria-label="Search" />

              <button className="btn btn-outline-success border-0" type="submit">
                <i className="fas fa-search navicon"></i>
              </button>
            </form>
            <a className="nav-link navItem" href="/login">
              <i className="fas fa-user navicon"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
