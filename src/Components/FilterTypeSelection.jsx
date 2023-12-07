import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FilterContext } from "../Context/FilterContext";

const FilterTypeSelection = () => {
  const [hover, setHover] = useState(false);
  const [data, setData] = useState([]);
  const [filteredType, setFilteredType] = useState()

  const {selectFilterType} = useContext(FilterContext)

//   const filterType = [airfilter, oilfilter, cabinfilter ]
//   console.log(filterType[0])

  return (
    <FilterSelect>
      {/* <div className="filter-type"> */}
      <div className="filter-item">
        <NavLink to="/product?category=air-filter">
        <div
          className="filter-type"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={()=>selectFilterType("AIR FILTER")}
        >
          <img
            src={
              hover
                ? "https://kiyoshi-india.com/resources/assets/img/airfilter-white.png"
                : "https://kiyoshi-india.com/resources/assets/img/airfilter.png"
            }
            alt=""
          />
          <div className="filter-name">
            <h3>Air Filter</h3>
            <p>All Vehicles</p>
          </div>
        </div>
        </NavLink>
      </div>

      <div className="filter-item">
       <NavLink to="/product?category=oil-filter">
       <div
          className="filter-type"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={()=>selectFilterType("OIL FILTER")}
        >
          <img
            src={
              hover
                ? "	https://kiyoshi-india.com/resources/assets/img/oilfilter-white.png"
                : "https://kiyoshi-india.com/resources/assets/img/oilfilter.png"
            }
            alt=""
          />
          <div className="filter-name">
            <h3>Oil Filter</h3>
            <p>All Vehicles</p>
          </div>
        </div>
       </NavLink>
      </div>

      <div className="filter-item">
      <NavLink to="/product?category=cabin-filter">
      <div
          className="filter-type-1"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={()=>selectFilterType("CABIN FILTER")}
        >
          <img
            src={
              hover 
                ? "https://kiyoshi-india.com/resources/assets/img/cabinfilter-white.png"
                : "https://kiyoshi-india.com/resources/assets/img/cabinfilter.png"
            }
            alt=""
          />
          <div className="filter-name">
            <h3>Cabin Filter</h3>
            <p>All Vehicles</p>
          </div>
        </div>
      </NavLink>
      </div>
      {/* </div> */}
      
    </FilterSelect>
  );
};

export default FilterTypeSelection;

const FilterSelect = styled.section`
  max-width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-around;

  .filter-item{
    cursor: pointer;
  }
  .filter-type,
  .filter-type-1 {
    display: flex;
    align-items: center;
    padding: 4rem;
    max-width: 30rem;
    position: relative;
  }
  .filter-type img,
  .filter-type-1 img {
    height: 5rem;
    margin-right: 2rem;
  }
  .filter-type:hover, 
  .filter-type-1:hover {
    background-color: #da251c;
    color: white;
  }
  /* .filter-type:hover img{
  background-color: white;
} */
  .filter-type::after {
    content: "";
    position: absolute;
    display: block;
    border-right: 1px solid #da251c;
    top: 4rem;
    right: 0.5rem;
    width: 5rem;
    height: 5rem;
  }
  .filter-name h3 {
    font-size: 1.9rem;
    letter-spacing: -0.03rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .filter-name p {
    font-size: 1.4rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .filter-type,
  .filter-type-1{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
   }
   .filter-type img,
  .filter-type-1 img {
    margin-right: 0;

  }
  }
`;
