import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function PartnerFeatures() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <section id="home-partner" className="partner ">
        <div className="container  " lang={i18n.language} dir={i18n.language === "ar" ? "rtl" : null}>
          <div className="row text-center justify-content-center py-4">
            <h1>{t("PartnerFeatures.Are you a shop owner?")}</h1>
            <h3>{t("PartnerFeatures.Interested in joining our exclusive network?")}</h3>
            <p>
              <Link className="btn btn-lg btn-outline-secondary my-4" to='/partner'>{t("PartnerFeatures.Partner with us")}</Link>
            </p>

          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-12 col-sm-12 ">
              <div className="row justify-content-center">
                <div className="col-lg-2 col-md-2 col-sm-2 my-2 mx-2">
                  <i className="fas fa-users icon"></i>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 text-start">
                  <p>{t("PartnerFeatures.Join tech era and keep up with the flow")}</p>
                </div>
              </div>

            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 pt-2 ">
              <div className="row justify-content-center ">
                <div className="col-lg-2 col-md-2 col-sm-2 mb-2 mx-2 ">
                  <i className="fas fa-chart-line icon"></i>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 mt-2 text-start">
                  <p>{t("PartnerFeatures.Raise your sales")}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="row justify-content-center">
                <div className="col-lg-2 col-md-2 col-sm-2 my-3 mx-2">
                  <i className="fas fa-sitemap icon"></i>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 text-start">
                  <p>{t("PartnerFeatures.Organize your products and keep it simple to the customer")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
