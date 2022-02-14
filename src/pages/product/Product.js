import React from "react";
import Category from "../../components/Category";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Product() {
  return (
    <>
    
      <hr></hr>
      <div className="container text-center mt-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Stores</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
            Products
            </li>
          </ol>
        </nav>
        <h3 className="text-start">Available Products</h3>
        <div className="row">
          <Category />
          <hr></hr>
        </div>
      </div>
      
    </>
  );
}
