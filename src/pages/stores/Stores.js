import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import StoreCard from "../../components/StoreCard";

export default function Stores() {
  return (
    <>
      <Navbar />
      <hr></hr>
      <div className="container text-center mt-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Stores
            </li>
          </ol>
        </nav>
        <h3 className="text-start">Available stores</h3>
        <div className="row ">
          <StoreCard />
          <hr></hr>
        </div>
      </div>
      <Footer />
    </>
  );
}
