import React from "react";

export default function PartnerFeatures() {
  return (
    <>
      <section className="partner ">
        <div className="container  ">
          <div className="row text-center justify-content-center py-4">
            <h1>Are you a shop owner?</h1>
            <h3>Interested in joining our exclusive network?</h3>
            <p>
              <a className="btn btn-lg btn-outline-secondary my-4">Partner with us</a>
            </p>

          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <div className="row justify-content-center">
                <div className="col-lg-2 col-md-2 col-sm-2 my-2 mx-2">
                  <i class="fas fa-users icon"></i>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 text-start">
                  <p>Join tech era and keep up with the flow</p>
                </div>
              </div>

            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 pt-2 ">
              <div className="row justify-content-center ">
                <div className="col-lg-2 col-md-2 col-sm-2 mb-2 mx-2 ">
                  <i class="fas fa-chart-line icon"></i>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 mt-2 text-start">
                  <p>Raise your sales</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="row justify-content-center">
                <div className="col-lg-2 col-md-2 col-sm-2 my-3 mx-2">
                  <i class="fas fa-sitemap icon"></i>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 text-start">
                  <p>Organize your products and keep it simple to the customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
