import React from 'react'
import { useTranslation } from "react-i18next";
import Bakery from "./../files/services/Bakery.jpg"
import Pharmacy from "./../files/services/Pharmacy.jpg"
import Supermaket from "./../files/services/Supermarket.jpg"

export default function Services() {
  const { t, i18n } = useTranslation();
    return ( 
        <>
        <div id='home-services' className="container marketing  text-center py-5 service" lang={i18n.language} dir={i18n.language === "ar" ? "rtl" : null}>
        <h2 className="my-3" >{t("Services.Our Services")}</h2>
        <div className="row text-center py-5">
          <div className="col-lg-4">
          <img className="bd-placeholder-img rounded-circle " width="200" height="200" src ={Supermaket} role="img" />
    
            <h2 className="my-3" >{t("Services.Supermarket")}</h2>
          </div>
          <div className="col-lg-4">
            <img className="bd-placeholder-img rounded-circle "  width="200" height="200" src ={Bakery} role="img" />
    
            <h2 className="my-3" >{t("Services.Bakery")}</h2>
          </div>
          <div className="col-lg-4">
          <img className="bd-placeholder-img rounded-circle " width="200" height="200" src ={Pharmacy} role="img" />
    
            <h2 className="my-3" >{t("Services.Pharmacy")}</h2>
          </div>
        </div>
        </div>
        </>
    )
}
