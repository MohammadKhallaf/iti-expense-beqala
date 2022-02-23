
import marketTest from "./../files/market.svg"
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { backendAPI } from "../store";

export default function StoreCard() {

  const stores = [
    { product: "Store", id: 1 },
    { product: "Store", id: 2 },
    { product: "Store", id: 3 },
    { product: "Store", id: 4 },
    { product: "Store", id: 5 },
    { product: "Store", id: 6 },
    { product: "Store", id: 7 },
    { product: "Store", id: 8 },
    { product: "Store", id: 9 },
    { product: "Store", id: 10 },
    { product: "Store", id: 11 },
    { product: "Store", id: 12 },
    { product: "Store", id: 13 },
    { product: "Store", id: 14 },
    { product: "Store", id: 15 },
    { product: "Store", id: 16 },
    { product: "Store", id: 17 },
    { product: "Store", id: 18 },
    { product: "Store", id: 19 },
    { product: "Store", id: 20 },
    { product: "Store", id: 21 },
    { product: "Store", id: 22 },
    { product: "Store", id: 23 },
    { product: "Store", id: 24 }
  ];

  const param = useParams();
  const [StoreResult, setStoreResult] = useState([]);

  console.log(param.name);

    useEffect(() => {
      backendAPI
        .get(`location/stores/${param.name}/`)
        .then((res) => setStoreResult(res.data.results))
        .catch((err) => console.log(err));
    }, []);
    
    console.log("API======");
    console.log(StoreResult);
    console.log("API======");

    return (
      <>
        <div className="container ">
          <div className="row " >
            {stores.map((store, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6  cardsGrid " key={index}  >
                <div className="card my-3 storeCard" style={{ width: "15rem" }} >
                  <img src={marketTest} className="card-img-top background" alt="..." />
                  <div className="card-body cardTitle">
                    <p className="card-title  cardTitle">{store.product} {store.id} </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </>
    );
  }
