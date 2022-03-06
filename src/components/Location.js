import React from "react";
import LocationCard from "./LocationCard";
import { useTranslation } from "react-i18next";


export default function Location() {
  const { t, i18n } = useTranslation();

  return (
    <>
    <section className="location " >
      <div className="container " lang={i18n.language} dir={i18n.language === "ar" ? "rtl" : null}>

        <div className="row text-start justify-content-center py-5 " >
            <h2 className="fw-bold text-center " >Select your location </h2>

            <LocationCard name={"alexandria"} loc={require("./../files/Location/alex.jpg")} />
            <LocationCard name={"cairo"} loc={require("./../files/Location/cairo.jpg")}  />
            
        </div>
      </div>
      </section>
    </>
  );
}
