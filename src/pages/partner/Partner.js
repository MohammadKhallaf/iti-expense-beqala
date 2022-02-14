import React from "react";
import Navbar from "../../components/Navbar"; 
import Footer from "../../components/Footer";
import NewPartner from "../../components/NewPartner";
import PartnerFeatures2 from "../../components/PartnerFeatures2";
import './Partner.css'

export default function Partner() {
  return (
    <>
     <Navbar />
      <div className=" pt-5 partner row">
        <div className="col-6 pt-5 float-end">
          <h3 className="text-center p-5 m-5 ">
            Reach new customers, get more sales
          </h3>
        </div>
        <div className="bg-light my-5  shadow-lg col-4 float-start">
          <NewPartner/>
        </div>
      </div>
      <PartnerFeatures2 />
      <Footer />
    </>
  );
}
