import React from "react";
import LocationCard from "./LocationCard";

export default function Location() {
  return (
    <>
    <section className="location " >
      <div className="container ">

        <div className="row text-start justify-content-center py-5 " >
            <h2 className="fw-bold text-center " >Select your location </h2>

            <LocationCard name={"Alexandria"} loc={require("./../files/Location/alex.jpg")} />
            <LocationCard name={"Cairo"} loc={require("./../files/Location/cairo.jpg")}  />
       
        </div>
      </div>
      </section>
    </>
  );
}
