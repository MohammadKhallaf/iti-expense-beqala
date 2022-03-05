import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import { backendAPI } from "../store";

export default function Location() {
  const [cities, setcities] = useState([]);

  useEffect(() => {
    backendAPI
      .get("location/cities/")
      .then((response) => {
        setcities(response.data)

      })
      .catch((error) => console.log("Error Status : ", error.response.status));
  }, []);

  console.log(cities)

  return (
    <>
      <section className="location " >
        <div className="container ">

          <div className="row text-start justify-content-center py-5 " >

            <h2 className="fw-bold text-center " >Select your location </h2>
            {cities?.map((city, index) => {
              let img = city.toLowerCase();
              console.log(img)
              return (
              
                <div className="col-lg-3 col-md-6 col-sm-6 mx-5 my-5 " key={index}>
                  <LocationCard name={city}  />
                  </div>
                
              )

            })}


          </div>
        </div>
      </section>
    </>
  );
}
