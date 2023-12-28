import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaBars, FaPlus, FaMinus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

const NavBottom = () => {
  const [openNav, setOpenNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectList, setSelelectList] = useState("home");
  const [showNum, setShowNum] = useState(false);

  // Navlist item selected
  const select = (navlist) => {
    setSelelectList(navlist);
  };

  // Open the Navbar
  const openNavbar = () => {
    setOpenNav(true);
  };

  // Close the Navbar
  const closeNavbar = () => {
    setOpenNav(false);
  };

  // Toggle dropdown list in Mobile View
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Toggle Helpline Number
  const showNumber = () => {
    setShowNum(!showNum);
    closeNavbar()
  };
  return (
    <NavContainer>
      <div className="navbar">
        <NavLink to="/">
          <figure>
            <img
              src="https://kiyoshi-india.com/resources/assets/img/logo.png"
              alt="logo"
            />
          </figure>
        </NavLink>
        <div className={`nav-menu ${openNav ? "active" : ""}`}>
          <ul className="nav-list">
            <NavLink to="/" onClick={closeNavbar}>
              <li onClick={()=>select("home")} className={`navlist ${selectList === "home" ? "active" : ""}`}>Home</li>
            </NavLink>
            <NavLink to="/about" onClick={closeNavbar}>
              <li onClick={()=>select("about")} className={`navlist ${selectList === "about" ? "active" : ""}`}>About Us</li>
            </NavLink>
            <NavLink to="/product" onClick={closeNavbar}>
              <li onClick={()=>select("product")} className={`navlist ${selectList === "product" ? "active" : ""}`}>Products</li>
            </NavLink>
            <NavLink
              to="https://kiyoshi-india.com/resources/assets/catalogue.pdf"
              target="_blank"
              onClick={closeNavbar}
            >
              <li onClick={()=>select("catalogue")} className={`navlist ${selectList === "catalogue" ? "active" : ""}`}>Catalogue</li>
            </NavLink>
            <li className="price-list">
              <NavLink
                to="https://kiyoshi-india.com/resources/assets/Kiyoshi_Profile_with%20pricelist.pdf"
                target="_blank"
                onClick={()=>select("price-list")} className={`navlist ${selectList === "price-list" ? "active" : ""}`}
              >
                Price List
              </NavLink>
              <span>
                <RiArrowDropDownLine className="arrow-dropdown" />
              </span>
              <span>
                {showDropdown ? (
                  <FaMinus className="plus-dropdown" onClick={toggleDropdown} />
                ) : (
                  <FaPlus className="plus-dropdown" onClick={toggleDropdown} />
                )}
              </span>

              <ol className={`dropdown-Item ${showDropdown ? "active" : ""} `}>
                <NavLink
                  to="https://kiyoshi-india.com/resources/assets/two_wheeler_pricelist.pdf"
                  target="_blank"
                >
                  <li onClick={() => setShowDropdown(false)}>
                    2 Wheeler Price List
                  </li>
                </NavLink>
                <NavLink
                  to="https://kiyoshi-india.com/resources/assets/three_wheeler_pricelist.pdf"
                  target="_blank"
                >
                  <li onClick={() => setShowDropdown(false)}>
                    3 Wheeler Price List
                  </li>
                </NavLink>
                <NavLink
                  to="https://kiyoshi-india.com/resources/assets/four_wheeler_pricelist.pdf"
                  target="_blank"
                >
                  <li onClick={() => setShowDropdown(false)}>
                    4 Wheeler Price List
                  </li>
                </NavLink>
                <NavLink
                  to="https://kiyoshi-india.com/resources/assets/heavy_wheeler_pricelist.pdf"
                  target="_blank"
                >
                  <li onClick={() => setShowDropdown(false)}>
                    Heavy Wheeler Price List
                  </li>
                </NavLink>
              </ol>
            </li>

            <NavLink to="/contact" onClick={closeNavbar}>
              <li onClick={()=>select("contact")} className={`navlist ${selectList === "contact" ? "active" : ""}`}>Contact Us</li>
            </NavLink>
          </ul>
        </div>

        <div className="whatsapp-logo">
          <img
            src="	https://kiyoshi-india.com/resources/assets/img/whatsapp.png"
            alt="whatsapp logo"
          />
          <a href="tel:9212686831"> (+91) 921 268 6831</a>
        </div>
        <div className={`mobile-nav ${showNum ? "active" : ""}`}>
          <p>
            <span style={{ color: "#dc3545", fontSize: "16px" }}>
              Hotline :{" "}
            </span>
            <a href="tel:+91">(+91) 921 268 6831</a>
          </p>
        </div>

        <div className="icons">
          <BsThreeDots className="threeDots" onClick={showNumber}/>
          {openNav ? (
            <IoClose
              className={`close ${openNav ? "active" : ""}`}
              onClick={closeNavbar}
            />
          ) : (
            <FaBars
              className={`open ${openNav ? "active" : ""}`}
              onClick={openNavbar}
            />
          )}
        </div>
      </div>
    </NavContainer>
  );
};

export default NavBottom;

const NavContainer = styled.section`
  width: 90%;
  margin: 0 auto;
  position: relative;
  .navbar {
    display: flex;
    justify-content: space-between;
    .img {
      height: 50px;
      width: 150px;
    }
    .nav-list {
      display: flex;
      font-size: 16px;
      font-weight: 500;
      font-weight: 500;
      li {
        margin-right: 2rem;
        }
      }
    }
    .navlist.active {
      color: #dc3545;
    }

    a {
      color: black;
      text-decoration: none;
    }
    a:hover{
      color: black;
    }
    .dropdown-Item li:hover{
      color: #dc3545;
    }
  
  .icons {
    display: none;
  }
  .whatsapp-logo {
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    a {
      font-size: 14px;
      color: #dc3545;
      font-weight: 500;
    }
  }
  .mobile-nav {
    display: none;
  }
  @media (min-width: 1024px) {
    .dropdown-Item {
      position: absolute;
      z-index: 99;
      background-color: white;
      padding: 10px;
      visibility: hidden;
    }
    .dropdown-Item li {
      margin-bottom: 10px;
    }
    .price-list:hover .dropdown-Item {
      visibility: visible;
    }
    .plus-dropdown {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    .nav-menu {
      position: absolute;
      background-color: white;
      z-index: 500;
      top: 45px;
      right: 30px;
      left: 30px;

      overflow-y: scroll;
      max-height: 230px;

      visibility: hidden;
    }
    figure {
      margin: 0;
    }
    .navbar img {
      height: 35px;
    }

    .nav-menu.active {
      visibility: visible;
    }
    .nav-list {
      display: flex;
      gap: 0rem;
      flex-direction: column;
      li {
        margin-right: auto;
        padding: 15px;
        border-top: 1px solid #6c757d;
      }
    }

    .price-list {
      position: relative;
    }
    .arrow-dropdown {
      display: none;
    }
    .plus-dropdown {
      position: absolute;
      top: 18px;
      right: 20px;
    }
    .dropdown-Item {
      display: none;
    }
    .dropdown-Item.active {
      display: block;
    }

    .whatsapp-logo {
      display: none;
    }
    .mobile-nav {
      position: absolute;
      top: 50px;
      right: 10px;
      z-index: 1000;
      background-color: white;
      padding: 5px 10px;
      border-radius: 2px;
    }
    .mobile-nav.active {
      display: block;
      animation: render 2s ease-in-out;
    }
    @keyframes render {
      0%{
        opacity: 0;
      }
      50%{
        opacity: 0.5;
      }
      100%{
        opacity : 1
      }
    }
    .icons {
      display: block;
    }
    .threeDots {
      margin-right: 20px;
      position: relative;
    }
    .close {
      display: none;
      font-size: 30px;
      color: red;
    }
    .close.active {
      display: block;
    }
    .open.active {
      display: none;
    }



    
  }
  
`;
