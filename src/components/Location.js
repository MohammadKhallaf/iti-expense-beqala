import React from "react";
import LocationCard from "./LocationCard";

export default function Location() {
  return (
    <>
      <div className="row text-center bg-dark">
        <h2 className="text-light">Select Your Location</h2>
        <LocationCard name={"alexandria"} />
        <LocationCard name={"cairo"} />
      </div>
    </>
  );
}
