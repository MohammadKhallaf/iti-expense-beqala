import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import StoreCard from "../../components/StoreCard";
import FallbackImage from "./../../files/market.png";

import { backendAPI } from "../../store";
import "./Stores.css";
export default function Stores() {
  // const [data, setData] = useState({});
  // const [filtered, setFilter] = useState();
  // useEffect(() => {
  //   backendAPI.get("store/store/").then((response) => {
  //     console.log(response.data);
  //     setData(response.data);
  //   });
  // }, []);

  return (
    <>
      <hr></hr>
      <div className="container text-center  mt-5">
        <nav aria-label="breadcrumb ">
          <ol className="breadcrumb ">
            <li className="breadcrumb-item mx-1 bcItem">
              <a className="text-light" href="#">
                <i className="fas fa-home"></i>{" "}
              </a>
            </li>
            <li
              className="text-light mx-1 breadcrumb-item active bcItem px-3"
              style={{ filter: "brightness(0.95)" }}
            >
              Stores
            </li>
          </ol>
        </nav>
        <h3 className="text-start">Available stores</h3>
        <div className="row">
          <StoreCard />
          {/* {Object.keys(data).length &&
            data.map((values, index) => {
              // address: "20 Salama Moussa St., AL LABAN"
              // category_name:
              //    id: 3
              //    name: "SuperMarket"
              // city: "Alexandria"
              // description: "Best Store. Best Quality"
              // email: "zahran@gmail.com"
              // id: 7
              // name: "Zahran"
              // phone: "(+20)0112-704-4823"
              // user_account: 1
              const {
                id,
                city,
                description: discreption,
                name: title,
              } = values;
              return (
                <div className="col-md-6 col-lg-4 me-3" key={index}>
                  <div
                    className="card m-2"
                    style={{ width: "15rem", height: "28rem" }}
                    id="card"
                  >
                    <img
                      src={FallbackImage}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p>City: {city}</p>
                      <p className="card-text">{discreption}</p>
                    </div>
                  </div>
                </div>
              );
            })} */}
          <hr></hr>
        </div>
      </div>
    </>
  );
}
