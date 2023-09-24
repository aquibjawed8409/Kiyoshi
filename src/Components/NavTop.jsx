import React from "react";
import styled from "styled-components";
import { FaLocationDot } from "react-icons/Fa6";
import { HiMail } from "react-icons/Hi";

const NavTop = () => {
  return (
    <Navigation>
      <div className="top-nav">
        <div className="container d-flex flex-row justify-content-between">
          <div className="left-content">
            <p>
              <FaLocationDot className="icons" /> 182/205, SECTOR 17/18 DIVIDER
              ROAD, HANUMAN MANDIR GALI,GURUGRAM(122015),HARYANA
            </p>
            <a href="info@kiyoshi-india.com">
              <p className="info-mail">
                <HiMail className="icons" /> INFO@KIYOSHI-INDIA.COM
              </p>
            </a>
          </div>
          <div className="right-country-logo">
            <ul className="d-flex flex-row gap-8">
              <li>
                <img
                  src="https://kiyoshi-india.com/resources/assets/img/english.png"
                  alt="English"
                  className="flags"
                />
              </li>
              <li>
                <img
                  src="https://kiyoshi-india.com/resources/assets/img/india.png"
                  alt="india"
                  className="flags"
                />
              </li>
              <li>
                <img
                  src="https://kiyoshi-india.com/resources/assets/img/russia.png"
                  alt="russia"
                  className="flags"
                />
              </li>
              <li>
                <img
                  src="https://kiyoshi-india.com/resources/assets/img/french.png"
                  alt="french"
                  className="flags"
                />
              </li>
              <li>
                <img
                  src="https://kiyoshi-india.com/resources/assets/img/spanish.png"
                  alt="spanish"
                  className="flags"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Navigation>
  );
};

export default NavTop;

const Navigation = styled.div`
  .top-nav {
    background-color: #001;
    padding-top: 10px;
    padding-bottom: 10px;
    color: white;
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .flags {
    width: 22px;
    height: 22px;
  }
  .info-mail{
    color: white;
  }
`;
