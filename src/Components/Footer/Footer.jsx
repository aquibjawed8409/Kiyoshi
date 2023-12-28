import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaLocationDot,FaXTwitter  } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import styled from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {

useEffect(()=>{
  AOS.init({duration : 1500, offset : 200})
},[])

  return (
    <FooterContainer>
      {/* Top Footer */}
      <div className="top-footer-area">
        <div className="container">
          <div className="top-footer-content">
            <span>Special Offer For Subscription</span>
            <h3>To get best offer..</h3>
            <p>Please subscribe our regular news letters, discount offers..</p>
            <form className="row g-3 d-flex align-items-center">
              <input
                type="text"
                className="footer-email-input"
                placeholder="Enter Your Email Address"
                required
              />
              <button type="submit" className="footer-submit">
                subscribe now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Middle Footer */}
      <div className="middle-footer-area">
        <div className="container d-flex justify-content-start">
          <div className="middle-footer-content row ">
            <div className="col-lg-3 justify-content-start" data-aos="fade-right">
              <div className="footer-details">
                <NavLink to="/">
                  <img
                    src="https://kiyoshi-india.com/resources/assets/img/logo-2.png"
                    alt="logo"
                    className="mb-4"
                  />
                </NavLink>
                <p>
                  Kiyoshi is a popular brand name in Filtration. Our factory is
                  fully equipped setup to cater the demand for filters of
                  different shapes and category (Two wheeler, Three wheeler,
                  Four Wheeler and Heavy Vehicles).
                </p>
                <ul className="footer-social d-flex ">
                  <li className="icon-bg">
                    <NavLink
                      to="https://www.facebook.com/"
                      target="_blank"
                      className="icons "
                    >
                      <FaFacebookF className="icons " />
                    </NavLink>
                  </li>
                  <li className="icon-bg">
                    <NavLink
                      to="https://www.twitter.com/"
                      target="_blank"
                      className="icons "
                    >
                      <FaXTwitter className="icons " />
                    </NavLink>
                  </li>
                  <li className="icon-bg">
                    <NavLink
                      to="https://www.linkedin.com/"
                      target="_blank"
                      className="icons "
                    >
                      <FaLinkedinIn className="icons " />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-left">
              <div className="footer-info">
                <h2 className="footer-title">General Info</h2>
                <div className="footer-image-area">
                  <span className="footer-image1 bg1 footer-bg-img mb-2 mr-3"></span>
                  <span className="footer-image1 bg2 footer-bg-img mb-2 mr-3"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-right">
              <h2 className="footer-title">Quick Links</h2>
              <div className="quick-links">
                <ul>
                  <li>
                    <span className="icons">
                      <MdKeyboardDoubleArrowRight />
                    </span>
                    <NavLink to="/" className="text-white links-text">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <span className="icons">
                      <MdKeyboardDoubleArrowRight />
                    </span>
                    <NavLink to="/about" className="text-white links-text">
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <span className="icons">
                      <MdKeyboardDoubleArrowRight />
                    </span>
                    <NavLink to="/product" className="text-white links-text">
                      Products
                    </NavLink>
                  </li>
                  <li>
                    <span className="icons">
                      <MdKeyboardDoubleArrowRight />
                    </span>
                    <NavLink
                      to="https://kiyoshi-india.com/resources/assets/catalogue.pdf"
                      className="text-white links-text"
                      target="_blank"
                    >
                      Catalogue
                    </NavLink>
                  </li>
                  <li>
                    <span className="icons">
                      <MdKeyboardDoubleArrowRight />
                    </span>
                    <NavLink
                      to="https://kiyoshi-india.com/resources/assets/Kiyoshi_Profile_with%20pricelist.pdf"
                      className="text-white links-text"
                      target="_blank"
                    >
                      Price List
                    </NavLink>
                  </li>
                  <li>
                    <span className="icons">
                      <MdKeyboardDoubleArrowRight />
                    </span>
                    <NavLink to="/contact" className="text-white links-text">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3  col-md-6" data-aos="fade-left">
              <h2 className="footer-title">Connect Us</h2>
              <div className="connect ">
                <div className="d-flex mb-4 position-relative">
                  <div className="icons mr-4">
                    <BsFillTelephoneFill className="position-absolute" />
                  </div>
                  <div className="ml-5">
                    <h3>Phone</h3>
                    <p>(+91) 921 268 6831</p>
                  </div>
                </div>

                <div className="d-flex mb-4 position-relative">
                  <div className="icons mr-4">
                    <HiMail className="position-absolute" />
                  </div>
                  <div className="ml-5">
                    <h3>Email</h3>
                    <p>info@kiyoshi-india.com</p>
                  </div>
                </div>

                <div className="d-flex mb-4 position-relative">
                  <div className="icons mr-4">
                    <FaLocationDot className="position-absolute" />
                  </div>
                  <div className="ml-5">
                    <h3>Address</h3>
                    <p>
                      182/205, Sector 17/18 Divider Roard,Hanuman Mandir Gali,
                      Gurugram(122015),Haryana
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bottom-footer-area d-flex align-items-center">
        <div className="container d-flex justify-content-between">
          <div className="copyright">
            Copyright © 2021 “Kiyoshi India Automotive Parts & Filters Pvt.
            Ltd.”
          </div>
          <div className="credit">
            Designed by <span>OLIX SOFTWARE</span>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.section`
  // Top Footer CSS
  .top-footer-area {
    background-image: url(https://kiyoshi-india.com/resources/assets/img/newsletter-img.jpg);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
    padding: 5rem;
    line-height: 4;
  }
  .top-footer-content {
    max-width: 58.5rem;
    span {
      font-size: 1.6rem;
      font-weight: 400;
    }
    h3 {
      font-size: 3.5rem;
      font-weight: 700;
    }
    p {
      font-weight: 400;
      font-size: 1.4rem;
    }
  }
  form {
    position: relative;
    align-items: center;
  }
  form input {
    display: block;
    width: 100%;
    border: 1px solid #fff;
    padding-left: 25px;
    height: 6rem;
    background-color: transparent;
    outline: none;
    font-size: 20px;
    color: #fff;
  }
  form button {
    position: absolute;
    right: 0.5rem;
    height: 52px;
    border: none;
    outline: none;
    background-color: #da251c;
    font-size: 1.4rem;
    color: #fff;
    padding: 0px 30px;
    text-transform: capitalize;
    display: flex;
    align-items: center;
  }
  form button:hover {
    background-color: #da250c;
  }

  /* Middle Footer css */

  .middle-footer-area {
    background-image: url(https://kiyoshi-india.com/resources/assets/img/footer-bg.jpg);
    min-height: 65vh;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: #fff;
    padding: 5rem;
    line-height: 2;
    position: relative;
    z-index: 1;
  }
  .middle-footer-area::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
    background-color: #000;
    z-index: -1;
    opacity: 0.9;
  }
  .footer-details p {
    font-weight: 400;
    font-size: 1.6rem;
  }
  .footer-social {
    gap: 15px;
    align-items: center;
    text-align: center;
    margin-top: 20px;
    li{
      display: flex;
    justify-content: center;
    align-items: center;
    }
    .icon-bg {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background-color: white;
      transition: 0.2s ease-in-out;
    }
    .icon-bg:hover {
      background-color: red;
      transform: translateY(-2px);
      color: white;
    }
    .icon-bg:hover .icons {
      color: white;
    }
  }
  
  .footer-image1 {
    width: 200px;
    height: 111px;
    display: inline-block;
    border-radius: 5px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .footer-image1.bg1 {
    background-image: url(https://kiyoshi-india.com/resources/assets/img/footer-img1.png);
  }
  .footer-image1.bg2 {
    background-image: url(https://kiyoshi-india.com/resources/assets/img/footer-img2.png);
  }
  .footer-bg-img {
    width: 20rem;
    height: 11rem;
    background-repeat: no-repeat;
    color: white;
  }
  .links-text {
    font-size: 1.6rem;
    text-decoration: none;
  }
  .quick-links ul li a {
    display: inline-block;
    color: #fff;
    font-weight: 500;
    position: relative;
  }
  .quick-links ul li a:hover {
    color: red;
  }
  .quick-links ul li a:hover::before {
    width: 100%;
  }
  .quick-links ul li a::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 1px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    background-color: #da251c;
  }
  .connect h3{
    font-size: 1.6rem;
  }
  .connect .icons {
    font-size: 26px;
    top: 0;
    left: 0;
  }

  /* Bottom Footer CSS */

  .bottom-footer-area {
    min-height: 12vh;
    font-size: 1.6rem;
  }
  .bottom-footer-area .container{
    gap: 30px;
  }
  .copyright{
    font-size: 16px;
  }
  .credit {
    font-weight: 600;
    font-size: 16px;
    span {
      color: red;
      font-size: 1.8rem;
    }
  }

  @media (max-width: 600px) {
    .top-footer-area {
      min-height: 65vh;
    }
    form input{
      font-size: 14px;
    }
    form button {
      top: 7rem;
      padding: 0px 20px;
    }
    .copyright{
    font-size: 14px;
  }
  .credit {
    font-size: 14px;
    span {
      font-size: 1.4rem;
    }
  }
  }
`;
