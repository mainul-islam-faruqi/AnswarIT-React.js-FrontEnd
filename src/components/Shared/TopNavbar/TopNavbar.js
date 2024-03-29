import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import PrintIcon from '@material-ui/icons/Print';
import React from 'react';
import "./TopNavbar.scss";

const TopNavbar = () => {
    return (
      <div className="topnavbar">
        <nav
          class="navbar navbar-expand-md navbar-light text-white p-1"
          style={{ backgroundColor: "#5c10e3" }}
        >
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#"
            aria-controls=""
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse top-nav " style={{}} id="">
            <a
              class="navbar-brand font-italic"
              href="#"
              style={{ color: "white" }}
            >
              Blockchain Development Company in Bangladesh 
            </a>
            <ul class="navbar-nav ml-auto" style={{ color: "white" }}>
              <li class="nav-item active">
                <a class="nav-link text-white" href="#">
                  <PhoneIcon /> <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  <MailIcon />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  <PrintIcon />
                </a>
              </li>
              <li class="nav-item last-child">
                <a class="nav-link text-white">
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
};

export default TopNavbar;