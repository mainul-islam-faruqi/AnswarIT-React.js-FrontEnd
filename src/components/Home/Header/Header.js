import React from "react";
import "./Header.scss";
import image1 from "../../../Image/header/1.1.jpg";
import image2 from "../../../Image/header/1.2.jpg";
import image3 from "../../../Image/header/1.3.jpg";
import image4 from "../../../Image/header/1.4.jpg";
import image5 from "../../../Image/header/1.5.jpg";
import { useLocation } from "react-router-dom";

const Header = () => {
  let { pathname } = useLocation();
  return (
    <div id="header" className="">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={image1}
              className="d-block w-100 carousel-img"
              style={{ height: "600px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={image2}
              className="d-block w-100"
              style={{ height: "600px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={image3}
              className="d-block w-100"
              style={{ height: "600px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={image4}
              className="d-block w-100"
              style={{ height: "600px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={image5}
              className="d-block w-100"
              style={{ height: "600px" }}
              alt="..."
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleFade"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {pathname === "/" && (
        <section class="page-top">
          <div class="container">
            <div class="row">
              <div class="col-md-12"></div>
            </div>
          </div>
        </section>
      )}

      <p className="header-text">
        Answar iT is a global IT and Engineering solutions provider whose
        business focus is in Development, Outsourcing, and Consulting. We are a
        Global Technology company with Customer Focus as one of our Core Values.
        We are Agile. We are always present with the right solutions at the
        right place and the right time to meet your requirements. Our offerings
        are IP oriented, tried and tested over time. We strive to ensure that
        our Clients are the front runners and equipped with latest technologies.
      </p>
    </div>
  );
};

export default Header;
