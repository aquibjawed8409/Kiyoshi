import React, { useContext } from "react";
import { FilterContext } from "../Context/FilterContext";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FilterSection = () => {
  const { getCatSelection } = useContext(FilterContext);

  return (
    <FilterContainer>
      <div className=" ">
        <h3 className="category-title">Category Filter</h3>
        <div>
          <NavLink to="/product">
            <h3
              className="category-name"
              onClick={() => getCatSelection("2-WHEELER")}
            >
              2 Wheeler
            </h3>
          </NavLink>
          <NavLink to="/product">
            <h3
              className="category-name"
              onClick={() => getCatSelection("3-WHEELER")}
            >
              3 Wheeler
            </h3>
          </NavLink>
          <NavLink to="/product">
            <h3
              className="category-name"
              onClick={() => getCatSelection("4-WHEELER")}
            >
              4 Wheeler
            </h3>
          </NavLink>
          <NavLink to="/product">
            <h3
              className="category-name"
              onClick={() => getCatSelection("HEAVY-WHEELER")}
            >
              Heavy Vehicles
            </h3>
          </NavLink>
        </div>
      </div>
    </FilterContainer>
  );
};

export default FilterSection;

const FilterContainer = styled.section`
  .FilterCategory {
    cursor: pointer;
    max-width: 120rem;
    width: 25rem;
    margin: 7rem auto;
  }
  .category-title {
    display: flex;
    align-items: center;
    background-color: #da251c;
    color: white;
    padding: 2rem 7rem;
    margin-bottom: 0;
  }
  .category-name {
    padding: 2rem 7rem;
    border-bottom: 1px solid gray;
    background-color: white;
    margin-bottom: 0;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #da251c;
      color: white;
      transition: all 1s ease-in-out;
    }
  }

  /* .........Media Query ............... */
  @media (max-width: 968px) {
    .FilterCategory {
      text-align: center;
      width: 100%;
    }
  }
`;
