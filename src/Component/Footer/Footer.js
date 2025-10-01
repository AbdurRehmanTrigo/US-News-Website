import React from "react";

import { FaRegEnvelope } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: " #929fba" }}
    >
      <div className="container p-4 pb-0">
        <section className="">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                News Television Network
              </h6>
              <p>
                NEWS brings you 24/7 Live Streaming, Headlines, Bulletins, Talk
                Shows, Infotainment, and much more. Watch minute-by-minute
                updates of current affairs and happenings from USA and all
                around the world!
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>
                <a className="text-white">ColaNext</a>
              </p>
              <p>
                <a className="text-white">Infogistic</a>
              </p>
              <p>
                <a className="text-white">Stelallience</a>
              </p>
              <p>
                <a className="text-white">ZoneTechnology</a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <FaHome /> DHA phase8
              </p>
              <p>
                <FaRegEnvelope /> news@gmail.com
              </p>
              <p>
                <FaPhone /> + 92-300-4246911
              </p>
              <p>
                <FaPrint /> +1-212-9876543
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Follow us
              </h6>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#3b5998" }}
                href="https://www.facebook.com/"
                role="button"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#55acee" }}
                href="https://www.google.co.uk/"
                role="button"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: " #dd4b39" }}
                href="https://www.google.co.uk/"
                role="button"
              >
                <i className="fab fa-google"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#ac2bac" }}
                href="https://www.instagram.com/"
                role="button"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#0082ca" }}
                href="https://pk.linkedin.com/"
                role="button"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#333333" }}
                href="https://github.com/"
                role="button"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <a className="text-white" href="https://www.geo.tv/">
          News Television Network. All Rights Reserved.
        </a>
      </div>
    </footer>
  );
}
