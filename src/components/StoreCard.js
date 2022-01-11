import React from "react";
import marketTest from "./../files/fresh-market-logo-test.jpg"

export default function StoreCard() {
  const stores = [
    "name1",
    "name1",
    "name1",
    "name1",
    "name1",
    "name1",
    "name1",
    "name1",
    "name1",
    "name1",
    "name1",
    "name1",
    "name1",
    "name1",
    "name1",
    "name1",
    "name1",
    "name1",
    "name1",
    "name1",
    "name1",
    "name1",
    "name1",
    "name1",
  ];

  return (
    <>
      {stores.map((store) => (
        <div class="card m-2" style={{ width: "18rem" }}>
          <img src={marketTest} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">{store}</p>
          </div>
        </div>
      ))}
    </>
  );
}
