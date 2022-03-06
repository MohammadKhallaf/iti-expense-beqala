import React from "react";
import Navbar from "../../components/Navbar"; 
import Footer from "../../components/Footer";
import NewPartner from "../../components/NewPartner";
import PartnerFeatures2 from "../../components/PartnerFeatures2";
import './Partner.css'
import { useTranslation } from "react-i18next";


export default function Partner() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className=" pt-5 ppartner-page row" lang={i18n.language} dir={i18n.language === "ar" ? "rtl" : null}>
        <div className="col-6 pt-5 float-end">
          <h3 className="text-center p-5 m-5 ">
            {t("Partner.Reach new customers, get more sales")}
          </h3>
        </div>
        <div className="my-5 partner-form shadow-lg col-4 float-start">
          <NewPartner/>
        </div>
      </div>
 
    </>
  );
}
