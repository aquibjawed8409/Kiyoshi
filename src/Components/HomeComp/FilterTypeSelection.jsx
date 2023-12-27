import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FilterContext } from "../../Context/FilterContext";

const FilterTypeSelection = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const { selectFilterType } = useContext(FilterContext);

  const filterType = ["AIR FILTER", "OIL FILTER", "CABIN FILTER"];


  const handleMouseEnter = (hoverIndex) =>{
    setHoverIndex(hoverIndex)
  }

  const handleMouseLeave = () =>{
    setHoverIndex(null)
  }

  return (
    <FilterSelect>
      {filterType.map((curElem, i) => {
        return (
          <div
          key={i}
            className="filter-item"
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink
              to={`/product?category=${curElem
                .toLowerCase()
                .replace(" ", "-")}`}
            >
              <div
                className="filter-type"
                onClick={() => selectFilterType(curElem)}
              >
                <img
                  src={
                    (hoverIndex === i)
                      ? `https://kiyoshi-india.com/resources/assets/img/${curElem
                          .toLowerCase()
                          .replace(" ", "")}-white.png`
                      : `https://kiyoshi-india.com/resources/assets/img/${curElem.toLowerCase().replace(" ", "")}.png`
                  }
                  alt={curElem}
                />
                <div className="filter-name">
                  <h3>{curElem}</h3>
                  <p>All Vehicles</p>
                </div>
              </div>
            </NavLink>
          </div>
        );
      })}
    </FilterSelect>
  );
};

export default FilterTypeSelection;

const FilterSelect = styled.section`
  max-width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.1);
  margin-bottom: 50px;

  .filter-item {
    cursor: pointer;
  }
  .filter-type {
    display: flex;
    align-items: center;
    padding: 4rem;
    max-width: 30rem;
    position: relative;
    text-align: center;
  }
  .filter-type img{
    height: 5rem;
    margin-right: 2rem;
  }
  .filter-type:hover{
    background-color: #da251c;
    color: white;
  }
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
  a{
    text-decoration: none;
  }
  .filter-name h3 {
    font-size: 1.9rem;
    letter-spacing: -0.03rem;
    font-weight: 600;
  }
  .filter-name p {
    font-size: 1.4rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .filter-type{
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
    }
    .filter-type img{
      margin-right: 0;
    }
   
  }
`;
