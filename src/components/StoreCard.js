
import marketTest from "./../files/market.svg"
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { backendAPI } from "../store";

export default function StoreCard() {

  const param = useParams();
  const [StoreResult, setStoreResult] = useState([]);

  console.log(param.name);

  useEffect(() => {
    backendAPI
      .get(`location/stores/${param.name}/`)
      .then((res) => {
        setStoreResult(res.data)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container ">
        <div className="row " >
          {StoreResult.map((store, index) => (
            <Link className="col-lg-3 col-md-6 col-sm-6  cardsGrid " to={`/products/${store.id}`} style={{ textDecoration: 'none' }} key={store.id}>
              <div >
                <div className="card my-3 storeCard" style={{ width: "15rem" }} >
                  <img src={marketTest} className="card-img-top background" alt="..." />
                  <div className="card-body cardTitle">
                    <p className="card-title  cardTitle">{store.name}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </>
  );
}
