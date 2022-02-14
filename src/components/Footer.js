import React from "react";

export default function Footer() {
  return (
    <>
      <footer className=" text-center text-white"   style={{ backgroundColor: "#83bba8" }}>
        <div className="container p-3 ">
          <section className="m-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </section>
        </div>
        <div
          className="text-center p-1"
          style={{ backgroundColor: "#49685e" }}
        >
          © 2020 Copyright:
          <a className="text-white" style={{ textDecoration:'none'}} href="https://github.com/MohammadKhallaf/iti-expense-beqala">
            Team 5
          </a>
        </div>
      </footer>
    </>
  );
}
