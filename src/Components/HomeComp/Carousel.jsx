import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Carousel = ({ title, subHead, breadcrumHome, breadcrum, height }) => {
  useEffect(()=>{
    AOS.init({duration : 1500, offset: 0})
  },[])


  const slides = [
    "https://kiyoshi-india.com/resources/assets/img/main-banner1.jpg",
    "https://kiyoshi-india.com/resources/assets/img/main-banner2.jpg",
    "https://kiyoshi-india.com/resources/assets/img/main-banner3.jpg",
    "https://kiyoshi-india.com/resources/assets/img/main-banner4.jpg",
  ];

  const [curSlide, setCurrentSlide] = useState(0);

  const preSlide = () => {
    setCurrentSlide(curSlide === 0 ? slides.length - 1 : curSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(curSlide === slides.length - 1 ? 0 : curSlide + 1);
  };

  useEffect(() => {
    const autoSlide = setTimeout(() => {
      nextSlide();
    }, 4000);

    return () => {
      clearInterval(autoSlide);
    };
  }, [curSlide]);

  return (
    <CarouselContainer>
      <div
        className="carousel-image"
        style={{ transform: `translateX(${-curSlide * 100}%)` }}
      >
        {slides.map((curElem, i) => {
          return <img key={i} src={curElem} style={{ height: height }} />;
        })}
      </div>
      <div className="arrow">
        <button onClick={preSlide}>
          <FaAngleDoubleLeft />
        </button>
        <button onClick={nextSlide}>
          <FaAngleDoubleRight />
        </button>
      </div>

      <div className="carousel-content" >
        <h1 data-aos="fade-up">{title}</h1>
        <p>{subHead}</p>
        <ul className="breadcrum">
          <li>
            <a href="/product">{breadcrumHome}</a>
          </li>
          <li className="breadcrum-before"> {breadcrum}</li>
        </ul>
      </div>
    </CarouselContainer>
  );
};

export default Carousel;

const CarouselContainer = styled.section`
  position: relative;
  .carousel-image {
    display: flex;
    transition: transform 0.5s ease;
  }
  .carousel-image img {
    min-width: 100%;
  }
  .carousel-image::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #09101f4d;
  }
  .arrow {
    position: absolute;
    top: 40%;
    width: 100%;
    color: white;
    font-size: 36px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding: 0 20px;
  }

  button {
    border: none;
    outline: none;
    background: transparent;
    color: white;
    transition: 0.5s linear;
  }
  button:hover {
    transform: translateX(5px);
    color: #dc3545;
  }
  .carousel-content {
    position: absolute;
    width: 80%;
    height: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    font-weight: 900;
    h1 {
      font-size: 55px;
      margin-bottom: 15px;
    }
    p {
      font-size: 22px;
      font-family: oswald, sans-serif;
      color: #fff;
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    .carousel-content h1 {
      font-size: 30px;
    }
    .carousel-content p {
      font-size: 14px;
    }
  }
`;
