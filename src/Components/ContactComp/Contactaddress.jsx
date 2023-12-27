import React from "react";
import styled from "styled-components";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { FiMail } from "react-icons/fi";

const Contactaddress = () => {
  return (
    <AddressContainer>
      <div className="address-container container">
        <div className="box">
          <div className="icon">
            <FiMail className="icons" />
          </div>
          <div className="address-heading">Email Here</div>
          <p>INFO@KIYOSHI-INDIA.COM</p>
          <p>NITIN@KIYOSHI-INDIA.COM</p>
        </div>

        <div className="box">
          <div className="icon">
            <HiOutlineLocationMarker className="icons" />
          </div>
          <div className="address-heading">Location Here</div>
          <p>
            182/205, SECTOR 17/18 DIVIDER ROAD, HANUMAN MANDIR GALI,
            GURUGRAM(122015),HARYANA
          </p>
        </div>
        <div className="box">
          <div className="icon">
            <BiPhoneCall className="icons" />
          </div>
          <div className="address-heading">Call Here</div>
          <p>+91-9212686831</p>
          <p>+91-9891113536</p>
        </div>
      </div>
    </AddressContainer>
  );
};

export default Contactaddress;

const AddressContainer = styled.section`
  .address-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 3rem;
    border-radius: 1rem;
    box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
    margin: 10rem 0;
    width: 30%;
    line-height: 2;
    transition: all 0.8s ease-in-out;
  }
  .box:hover {
    transform: translateY(-2rem);
  }
  .icon {
    background-color: #f5f5f5;
    border-radius: 100%;
    width: 70px;
    height: 70px;
    position: relative;
  }
  .icons {
    position: absolute;
    top: 1.9rem;
    left: 1.8rem;
    font-size: 3.5rem;
  }
  .address-heading {
    font-size: 2rem;
    font-weight: 900;
    margin-top: 1.6rem;
  }
  .box p {
    color: #6e727f;
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0px;
  }
  .box p:hover {
    color: #da251c;
    cursor: pointer;
  }


/* ............Media Query............................ */

  @media (max-width: 768px) {
    .address-heading {
    font-size: 1.5;
    font-weight: 700;
  }
    .box p {
    font-size: 1.2rem;
    }
  }

  @media (max-width: 600px) {
    .address-container {
      display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    }
    .box{
        width: 100%;
    padding: 3rem;
    margin: 2rem 0;

    }
    .address-heading {
    font-size: 2;
    font-weight: 900;
  }
    .box p {
    font-size: 1.5rem;
    }
  }
`;
