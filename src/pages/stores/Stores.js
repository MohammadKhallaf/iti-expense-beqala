import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import StoreCard from "../../components/StoreCard";
import './Stores.css'
export default function Stores() {
  return (
    <>
      <hr></hr>
      <div className="container text-center  mt-5">
        <nav aria-label="breadcrumb ">
          <ol className="breadcrumb ">
            <li className="breadcrumb-item mx-1 bcItem">
              <a className="text-light" href="#"> <i className="fas fa-home"></i> </a>
            </li>
            <li className="text-light mx-1 breadcrumb-item active bcItem px-3" style={{filter: "brightness(0.95)"}} >
              Stores
            </li>
          </ol>
        </nav>
        <h3 className="text-start">Available stores</h3>
        <div className="row">
          <StoreCard />
          <hr></hr>
        </div>
      </div>
    </>
  );
}
