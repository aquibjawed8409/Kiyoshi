import React from "react";
import styled from "styled-components";
import { BsWhatsapp } from "react-icons/bs";

const NavBottom = () => {
  return (
    <NavContainer>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container row">
          <div className="col-3">
            <a className="navbar-brand" href="/">
              <img
                src="https://kiyoshi-india.com/resources/assets/img/logo.png"
                alt="logo"
              />
            </a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          </div>
         
          <div className="collapse navbar-collapse col-7" id="navbarNav">
            <ul className="navbar-nav d-flex justify-content-between gap-5 mr-10">
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/product">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://kiyoshi-india.com/resources/assets/catalogue.pdf" target="_blank">
                  Catalogue
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pricelist
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="https://kiyoshi-india.com/resources/assets/Kiyoshi_Profile_with%20pricelist.pdf" target="_blank">
                      Download All
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://kiyoshi-india.com/resources/assets/two_wheeler_pricelist.pdf" target="_blank">
                      2 Wheeler price List
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://kiyoshi-india.com/resources/assets/three_wheeler_pricelist.pdf" target="_blank">
                      3 Wheeler price List
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://kiyoshi-india.com/resources/assets/four_wheeler_pricelist.pdf" target="_blank">
                      4 Wheeler price List
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://kiyoshi-india.com/resources/assets/heavy_vehicale_pricelist.pdf" target="_blank">
                      Heavy Vehicle price List
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="whatsapp-number col-3">
            <span>
              <img
                src="https://kiyoshi-india.com/resources/assets/img/whatsapp.png"
                alt="whatsapp"
                className="mr-2"
              />
              <a href="" className="number">
                (+91) 9212686831
              </a>
            </span>
          </div>
        </div>
      </nav>
    </NavContainer>
  );
};

export default NavBottom;

const NavContainer = styled.section`
  .nav-link {
    font-size: 1.6rem;
    font-weight: 500;
    color: #09101f;
  }
  .nav-link:hover {
    color: red;
  }
  .number {
    color: #da251c;
    font-size: 1.6rem;
  }
`;
