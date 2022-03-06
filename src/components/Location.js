import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import { backendAPI } from "../store";
import GeoMap from "./map/GeoMap";

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
      <section id="home-location" className="location " >
        <div className="container ">

          <div className="row text-center justify-content-center py-5 " >

            <h2 className="fw-bold text-center loc-card-h1" >Select your location </h2>
            {cities?.map((city, index) => {
              let img = city.toLowerCase();
              console.log(img)
              return (

                <div className="col-lg-3 col-md-6 col-sm-6 mx-5 my-5  text-center justify-content-center  loc-card" key={index}>
                  <LocationCard name={city} />


                </div>

              )

            })}
           

          </div>
          <button
              type="submit"
              className="btn btn-lg  bg-light subs  my-4"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
              onClick={()=>{localStorage.setItem("location__show", true)
            return <GeoMap />
            }}
            >
              sum
            </button>
        </div>
        
      </section>
    </>
  );
}
