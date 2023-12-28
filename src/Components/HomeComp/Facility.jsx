import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css';

const imageNumber = [1, 2, 3, 4, 5, 6, 7, 8];

const Facility = () => {
  useEffect(()=>{
    AOS.init({duration : 1500, offset : 200})
  }, [])
  return (
    <FacilityContainer>
      <h2 className="content-heading">
        Factories / Infrastructure / Testing Facility
      </h2>

      <div className="facility-image">
        {imageNumber.map((curImg, i) => {
          return (
            <div key={i} className="image" data-aos="slide-left">
              <img
                src={`https://kiyoshi-india.com/resources/assets/img/gallery/gallery-${curImg}.jpg`}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </FacilityContainer>
  );
};

export default Facility;

const FacilityContainer = styled.section`
  background-color: #f5f4f4;
  padding: 6rem 0;

  .facility-image {
    margin: 5rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5rem;
    max-width: 120rem;
    .image::before{
        width: 100%;
    content: "";
    position: absolute;
    height: 100%;
    background-color: #000;
    left: 0;
    top: 0;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
    }
    img {
      width: 25rem;
    }

    @media (max-width: 768px) {
      .facility-image {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
    }
  }
`;
