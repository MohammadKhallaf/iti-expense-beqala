import React from "react";
import LocationCard from "./LocationCard";

export default function Location() {
  return (
    <>
    <section className="location " >
      <div className="container ">

        <div className="row text-start justify-content-center py-5 " >
            <h2 className="fw-bold " >You can find us in </h2>

            <LocationCard name={"alex"} loc={require("./../files/Location/alex.jpg")} />
            <LocationCard name={"cairo"} loc={require("./../files/Location/cairo.jpg")}  />
            
        </div>
      </div>
      </section>
    </>
  );
}
