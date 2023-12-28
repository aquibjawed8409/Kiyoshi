import React, { useState, useContext } from "react";
import { FilterContext } from "../../Context/FilterContext";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FilterSection = () => {
  const { getCatSelection } = useContext(FilterContext);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    getCatSelection(category);
    setSelectedCategory(category);
  };

  return (
    <FilterContainer>
      <div className="FilterCategory">
        <h3 className="category-title">Category Filter</h3>
        <div>
        
          <NavLink to="/product">
            <h3
              className={`category-name ${selectedCategory === "2-WHEELER" ? "selected" : ""}`}
              onClick={() => handleCategoryClick("2-WHEELER")}
            >
              2 Wheeler
            </h3>
          </NavLink>
          <NavLink to="/product">
            <h3
             className={`category-name ${selectedCategory === "3-WHEELER" ? "selected" : ""}`}
              onClick={() => handleCategoryClick("3-WHEELER")}
            >
              3 Wheeler
            </h3>
          </NavLink>
          <NavLink to="/product">
            <h3
              className={`category-name ${selectedCategory === "4-WHEELER" ? "selected" : ""}`}
              onClick={() => handleCategoryClick("4-WHEELER")}
            >
              4 Wheeler
            </h3>
          </NavLink>
          <NavLink to="/product">
            <h3
              className={`category-name ${selectedCategory === "HEAVY-WHEELER" ? "selected" : ""}`}
              onClick={() => handleCategoryClick("HEAVY-WHEELER")}
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
  width: 26.5rem;
  @media (max-width: 968px) {
    width: 100%;
  }
  .FilterCategory {
    cursor: pointer;
    max-width: 120rem;
    width: 28rem;
    margin: 7rem auto;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.3);
  }
  a {
    text-decoration: none;
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
    h3:hover {
      text-decoration: none;
    }
    &:hover {
      background-color: #da251c;
      color: white;
      transition: all 1s ease-in-out;
    }
  }
  .category-name.selected {
    background-color: #ffe1df;
    color: black;
  }

  /* .........Media Query ............... */
  @media (max-width: 1200px) {
    .FilterCategory {
      max-width: 120rem;
      width: 24rem;
      h3 {
        font-size: 15px;
      }
    }
  }
  @media (max-width: 968px) {
    .FilterCategory {
      text-align: center;
      width: 100%;
      h3 {
        font-size: 18px;
      }
    }
    .category-title {
      justify-content: center;
    }
  }
`;
