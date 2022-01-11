import React from "react";
import video from './../files/Features/v3.mp4'
import f2 from'./../files/Features/f2.jpg'

export default function SectionsCart() {
  return (
    <>
    <section className="Features">
      <div className="container ">


        <div className="row justify-content-center feature1 ">
          <div className="col-lg-4 col-md-3 col-sm-12 mx-5 ">
            <h2 className="featurette-heading my-5 pt-5">
              With Us

            </h2>
            <p className="lead my-5">
              You will find all you needs in one place with a less ccomplications
            </p>
            <p>
              <a className="btn btn-lg  btn-outline-secondary FeatureBtns">Explore</a>
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 video1 ">

            <video width="100%" height="600px" playsinline="playsinline" autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>


        <div className="row featurette">
          <div className="col-lg-4 col-md-3 order-md-2 text-center ">
            <h2 className="featurette-heading pt-5">
              you can
            </h2>
            <p className="lead my-5">
              save time and effort with just a mouse click 
            </p>
            <p>
              <a className="btn btn-lg  btn-outline-secondary FeatureBtns">Read More</a>
            </p>
          </div>
          <div className=" col-lg-6 col-md-6 order-md-1 mx-5  feature2 ">
          <img src={f2} width="100%" className="feature2img" alt="..." />
           
          </div>
        </div>



        <div className="row featurette py-5">
          <div className="col-md-7">
            <h2 className="featurette-heading pt-5">
              And lastly, this one.
            </h2>
            <p className="lead my-5">
              And yes, this is the last block of representative placeholder
              content. Again, not really intended to be actually read, simply here
              to give you a better view of what this would look like with some
              actual content. Your content.
            </p>
            <p>
              <a className="btn btn-lg  btn-outline-secondary FeatureBtns">nmnmnnmmnm</a>
            </p>
          </div>
          <div className="col-md-5">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee" />
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>
            </svg>
            
          </div>
        </div>

      </div>
      </section>
    </>
  );
}
