import React from "react";

export default function LocationCard(props) {
  const imgURL=props.loc
  return (
    <>
    
     
      <div className="col-lg-4 col-md-6 col-sm-6 mx-5 my-5  ">
      <div className="card text-center rounded border-0  locCard"  style={{ width: "18rem" }}>
        <img src={props.loc}  height={200} className="card-img-top  " alt="..." />
        <div className="card-body locCardb " >
          <h5 className="card-title p-2">{props.name}</h5>
          <a href="#" className="btn btn-outline-secondary">
            Select
          </a>
        </div>
      </div>
      </div>
    </>
  );
}
