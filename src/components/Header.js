import React from "react";
import { useTranslation } from "react-i18next";
import left from "./../files/Header/leftp.jpg"
import right from "./../files/Header/rightp.jpg"
import middle from "./../files/Header/middlep.jpg"


export default function Header() {
  const { t, i18n } = useTranslation();
  return (
    <div id="myCarousel" className="carousel slide "  data-bs-ride="carousel" lang={i18n.language} dir={i18n.language === "ar" ? "rtl" : null}>
      <div className="carousel-indicators ">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner" >
        <div className="carousel-item active">
          <img
            alt=""
            className="bd-placeholder-img"
            width="100%"
            height="70%"
            src={right}
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />

          <div className="container mt-5 ">
            <div className="row">
              <div className="col-12 ">
                <div className="carousel-caption text-start mb-5 intro ">
                  <h2 >Want your Groceries Rightaway</h2>
                  <p >
                    we will make sure you find the nearest store to your location.
                  </p>
                  <p>
                    <a className="btn btn-lg rounded btn-outline-secondary" href="#home-location">
                      Explore
                    </a>
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
        <div className="carousel-item">
          <img
            alt=""
            className="bd-placeholder-img"
            width="100%"
            height="70%"
            src={middle}
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />

          <div className="container mt-5">
            <div className="row">
              <div className="col-12 ">
                <div className="carousel-caption mb-5 intro">
                  <h2 >Tired of using Several Applications <br></br> to get your Daily Supplies.</h2>
                  <p >
                    our services are in continuously expanding.
                  </p>
                  <p>
                    <a className="btn btn-lg rounded btn-outline-secondary" href="#home-services">
                      Explore
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            alt=""
            className="bd-placeholder-img"
            width="100%"
            height="70%"
            src={left}
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />

          <div className="container mt-5">
            <div className="row">
              <div className="col-12 ">
                <div className="carousel-caption text-end mb-5 intro">
                  <h2 >Want to raise your Business<br></br> a Milestone up.</h2>
                  <p >
                    we will provide you with an easy and manageable system.
                  </p>
                  <p>
                    <a className="btn btn-lg rounded btn-outline-secondary" href="#home-partner">
                      Explore
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
