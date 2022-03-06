import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import { useTranslation } from "react-i18next";
import { backendAPI } from "../store";
import GeoMap from "./map/GeoMap";

export default function Location() {
  const [cities, setcities] = useState([]);
  const { t, i18n } = useTranslation();
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
        <div className="container "  lang={i18n.language} dir={i18n.language === "ar" ? "rtl" : null}>

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
         
        </div>
        
      </section>
    </>
  );
}
