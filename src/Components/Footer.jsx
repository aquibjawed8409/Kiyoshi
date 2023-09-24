import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter,FaLocationDot } from "react-icons/Fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";


import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
    {/* Top Footer */}
      <div className="top-footer-area ">
        <div className="container">
          <div className="top-footer-content">
            <span>Special Offer For Subscription</span>
            <h3>To get best offer..</h3>
            <p>Please subscribe our regular news letters, discount offers..</p>
          <form class="row g-3 d-flex align-items-center">
            <input type="text" className="footer-email-input" placeholder="Enter Your Email Address" required/>
            <button type="submit" className="footer-submit">subscribe now</button>
          </form>
          </div>
        </div>
      </div>

      {/* Middle Footer */}
      <div className="middle-footer-area">
        <div className="container d-flex justify-content-start">
          <div className="middle-footer-content row ">
            <div className="col-lg-3 justify-content-start">
              <div className="footer-details">
                <a href="/" ><img src="https://kiyoshi-india.com/resources/assets/img/logo-2.png" alt="logo" className="mb-4"/></a>
                <p>Kiyoshi is a popular brand name in Filtration. Our factory is fully equipped setup to cater the demand for filters of different shapes and category (Two wheeler, Three wheeler, Four Wheeler and Heavy Vehicles).</p>
                <ul className="footer-social d-flex ">
                  <li className="icon-bg"><a href="https://www.facebook.com/" className="icons "><FaFacebookF className="icons "/></a></li>
                  <li className="icon-bg"><a href="https://www.twitter.com/" className="icons "><FaTwitter className="icons "/></a></li>
                  <li className="icon-bg"><a href="https://www.linkedin.com/" className="icons "><FaLinkedinIn className="icons "/></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h2 className="footer-title">General Info</h2>
                <div className="footer-image-area">
                  <span className="footer-image1 bg1 footer-bg-img mb-2"></span>
                  <span className="footer-image1 bg2 footer-bg-img mb-2"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
            <h2 className="footer-title">Quick Links</h2>
            <div className="quick-links">
              <ul>
                <li><span className="icons"><MdKeyboardDoubleArrowRight/></span><a href="/" className="text-white links-text">Home</a></li>
                <li><span className="icons"><MdKeyboardDoubleArrowRight/></span><a href="/about" className="text-white links-text"> About Us</a></li>
                <li><span className="icons"><MdKeyboardDoubleArrowRight/></span><a href="/products" className="text-white links-text"> Products</a></li>
                <li><span className="icons"><MdKeyboardDoubleArrowRight/></span> <a href="https://kiyoshi-india.com/resources/assets/catalogue.pdf"  className="text-white links-text">Catalogue</a></li>
                <li><span className="icons"><MdKeyboardDoubleArrowRight/></span> <a href="https://kiyoshi-india.com/resources/assets/Kiyoshi_Profile_with%20pricelist.pdf" className="text-white links-text">Price List</a></li>
                <li><span className="icons"><MdKeyboardDoubleArrowRight/></span> <a href="/contact" className="text-white links-text">Contact Us</a></li>
              </ul>
            </div>
            </div>
            <div className="col-lg-3  col-md-6">          
              <h2 className="footer-title">Connect Us</h2>
              <div className="connect ">
                <div className="d-flex mb-4 position-relative">
                  <div className="icons mr-4"><BsFillTelephoneFill className="position-absolute"/></div>
                    <div className="ml-5">
                      <h3>Phone</h3>
                      <p>(+91) 921 268 6831</p>
                    </div>
                </div>

                <div className="d-flex mb-4 position-relative">
                  <div className="icons mr-4"><HiOutlineMail className="position-absolute"/></div>
                    <div className="ml-5">
                      <h3>Email</h3>
                      <p>info@kiyoshi-india.com</p>
                    </div>
                </div>

                <div className="d-flex mb-4 position-relative">
                  <div className="icons mr-4"><FaLocationDot className="position-absolute"/></div>
                    <div className="ml-5">
                      <h3>Address</h3>
                      <p>182/205, Sector 17/18 Divider Roard,Hanuman Mandir Gali, Gurugram(122015),Haryana</p>
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
          <div className="copyright">Copyright © 2021 “Kiyoshi India Automotive Parts & Filters Pvt. Ltd.”</div>
          <div className="credit">Designed by <span>OLIX SOFTWARE</span></div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.section`
.top-footer-area{
  background-image: url(https://kiyoshi-india.com/resources/assets/img/newsletter-img.jpg);
  height: 60vh;
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
    form{
      position: relative;
      align-items: center;
    }
    form input{
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
    form button{
      position: absolute;
      right: .5rem;
      height: 52px;
      border: none;
      outline: none;
      background-color: #da251c;
      font-size: 1.6rem;
      color: #fff;
      padding: 0px 30px;
      text-transform: capitalize;
    }
    form button:hover{
      background-color: #da250c;
    }

    /* Middle Footer css */

    .middle-footer-area{
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
    .middle-footer-area::before{
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
    .footer-details p{
      font-weight: 400;
      font-size: 1.5rem;
    }
    .footer-social{
      gap: 15px;
      align-items: center;
      text-align: center;
      margin-top: 20px;
      .icon-bg{
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background-color: white;
        transition: .2s ease-in-out;
      }
      .icon-bg:hover{
        background-color: red;
        /* transition: all.5s ease-in-out; */
        transform: translateY(-2px);
        color: white;
      }
      .icon-bg:hover .icon-bg .icons{
        color: white;
      }
    }
    .footer-image1{
      width: 200px;
    height: 111px;
    display: inline-block;
    border-radius: 5px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .footer-image1.bg1{
    background-image: url(https://kiyoshi-india.com/resources/assets/img/footer-img1.png);
  }
  .footer-image1.bg2{
    background-image: url(https://kiyoshi-india.com/resources/assets/img/footer-img2.png);
  }
    .footer-bg-img{
      width: 20rem;
      height: 11rem;
      background-repeat: no-repeat;
      color: white;
    }
    .links-text{
      font-size: 1.6rem;
      text-decoration: none;

    }
    .quick-links ul li a{
      display: inline-block;
    color: #fff;
    font-weight: 500;
    position: relative;
    }
    .quick-links ul li a:hover{
      color: red;
    }
    .quick-links ul li a:hover::before{
      width: 100%;
    }
    .quick-links ul li a::before{
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
    .connect .icons{
      font-size: 30px;
      top: 0;
      left: 0;
      /* align-items: center;
      justify-content: center;
      text-align: center; */
    }

    /* Bottom Footer CSS */

    .bottom-footer-area{
      min-height: 12vh;
      font-size: 1.6rem;
    }
    .credit{
      font-weight: 600;
      span{
        color: red;
        font-size: 1.8rem;
      }
    }
    
`;
