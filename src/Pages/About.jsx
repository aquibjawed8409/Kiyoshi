import React ,{useEffect} from "react";
import styled from "styled-components";
import AboutComp from "../Components/AboutComp/AboutComp";
import { TiTick } from "react-icons/ti";
import Crouselbreadcrum from "../Components/ContactComp/Crouselbreadcrum";

const About = () => {
  
  const scope = [
    "OIL FILTER",
    "AIR FILTER",
    "FUEL FILTER",
    "CABIN FILTER",
    "PROTO SAMPLE MANUFACTURING",
  ];

  const filterscope = scope.map((filterType, index) => {
    return (
      <ul key={index}>
        <li>
          <TiTick className="icons" />
          <p className="filter-scope">{filterType}</p>
        </li>
      </ul>
    );
  });
  return (
    <AboutSection>
      <Crouselbreadcrum
        breadcrum="About Us"
        background="https://kiyoshi-india.com/resources/assets/img/main-banner4.jpg"
      />

      <div >
      <AboutComp
        image="https://kiyoshi-india.com/resources/assets/img/about-company.jpg"
        contentHeading="About Kiyoshi"
        contentTextTop="Kiyoshi is a popular brand name in Filtration. Our factory is fully equipped setup to cater the demand for filters of different shapes and category (Two wheeler, Three wheeler, Four Wheeler and Heavy Vehicles). We cater a wide range of products for the various vehicles. We provide the best oil, petrol, diesel, air and cabin filtration solutions to protect engines and reduce fuel consumption. Kiyoshi has its own product development, R&D with ISO standard in quality checks. Our overall quality goal is to develop, produce a quality product and services to exceed our customers expectations."
        contentTextBottom="From last couples of years we had shown our capability in different manufacturing sectors and serving companies in automobile & agricultural.Below are some of the area which we are serving the customers."
        contentTextList={filterscope}
        divposition="row"
      />
      </div>

      <div >
      <AboutComp
        image="https://kiyoshi-india.com/resources/assets/img/mission.jpg"
        contentHeading="Our Vision & Mission"
        contentTextTop="Our vision is to be globally reputed engineered metal and filter products company by manufacturing best quality product by utilizing high innovation technology at low manufacturing cost, this will allow us to have strong and enduring relationship with our esteemed customers.To keep our vision in mind our mission is to deliver significant business value to our customers worldwide through effectve design selection and deployement of best in class solution and technologies enabling them to reduce operating and supply chain costs improves safety and increase overall profitability always cognizant of environment impact"
        divposition="row-reverse"
      />
      </div>

      <div>
      <AboutComp
        image="https://kiyoshi-india.com/resources/assets/img/about-iso.jpg"
        contentHeading="Quality Is Our Moto"
        contentTextTop="To achieve our goal, we have our own standard room which contain all standard measuring equipments including oil test ring, min and max pore, paper bursting machine, hardness tester, height gauge,vernier caliper etc."
        divposition="row"
      />
      </div>
    </AboutSection>
  );
};

export default About;

const AboutSection = styled.section``;
