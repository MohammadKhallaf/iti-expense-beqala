import React from "react";

export default function LocationCard(props) {
  return (
    <>
      <div className="card text-center m-5" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <a href="#" className="btn btn-primary">
            Select
          </a>
        </div>
      </div>
    </>
  );
}
