import React from "react";
import Navbar from "../../components/Navbar"; 
import Footer from "../../components/Footer";
import NewPartner from "../../components/NewPartner";
import PartnerFeatures2 from "../../components/PartnerFeatures2";
import './Partner.css'

export default function Partner() {
  return (
    <>
      <div className=" pt-5 partner-page row">
        <div className="col-6 pt-5 float-end">
          <h1 className="text-center p-5 m-5 ">
            Reach new customers every day, keep up with the new technologies sales
          </h1>
        </div>
        <div className="my-5 partner-form shadow-lg col-4 float-start">
          <NewPartner/>
        </div>
      </div>
 
    </>
  );
}
