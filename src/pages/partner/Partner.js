import React from "react";
import Footer from "../../components/Footer";
import NewPartner from "../../components/NewPartner";
import PartnerFeatures2 from "../../components/PartnerFeatures2";

export default function Partner() {
  return (
    <>
      <div className=" partner row">
        <div className="col-6 float-end">
          <h3 className="text-center p-5 m-5 ">
            Reach new customers, get more sales
          </h3>
        </div>
        <div className="bg-light shadow-lg col-4 float-start">
          <NewPartner/>
        </div>
      </div>
      <PartnerFeatures2 />
      <Footer />
    </>
  );
}
