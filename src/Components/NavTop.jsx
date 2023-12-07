import React from "react";
import styled from "styled-components";
import { FaLocationDot } from "react-icons/Fa6";
import { HiMail } from "react-icons/Hi";

const NavTop = () => {
  return (
    <Navigation>
      <div className="top-nav">
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
            <ul className="country-logo">
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
    </Navigation>
  );
};

export default NavTop;

const Navigation = styled.div`
  .top-nav {
    background-color: #001;
    color: white;
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .icons{
    color: #da251c;
    font-size: 1.5rem;
  }
  .country-logo{
    display: flex;
    gap: 1.3rem;
  }
  .flags {
    width: 22px;
    height: 22px;
  }
  .info-mail{
    color: white;
  }

  @media (max-width: 768px) {
    .top-nav{
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 10px;
    }
    .left-content{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  }


  @media (max-width: 600px) {
    .top-nav{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      text-align: center;
    }
    .left-content{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 480px) {
    .top-nav{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      text-align: center;

    }
    .left-content{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      /* font-size: 19px; */
    }
  }
`;
