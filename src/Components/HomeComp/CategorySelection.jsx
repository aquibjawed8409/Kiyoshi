import React, { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../Context/FilterContext";
import Card from "../ProductComp/Card";
import styled from "styled-components";
import AOS from 'aos'
import 'aos/dist/aos.css';


const CategorySelection = () => {
  useEffect(()=>{
    AOS.init({duration : 1500, offset : 200})
  },[])
  const { filter_products, getSpecialCat } = useContext(FilterContext);
  const [selectCategory, setSelectCategory] = useState(null);

  const handleCategoryClick = (category) => {
    getSpecialCat(category);
    setSelectCategory(category);
  };
  return (
    <SpecialCategory>
      <div className="category_section">
        <h2>Category Selection</h2>
        <div className="category_btn">
          <button
            className={selectCategory === "2-WHEELER" ? "active" : ""}
            onClick={() => handleCategoryClick("2-WHEELER")}
          >
            2 Wheeler
          </button>
          <button
            className={selectCategory === "3-WHEELER" ? "active" : ""}
            onClick={() => handleCategoryClick("3-WHEELER")}
          >
            3 Wheeler
          </button>
          <button
            className={selectCategory === "4-WHEELER" ? "active" : ""}
            onClick={() => handleCategoryClick("4-WHEELER")}
          >
            4 Wheeler
          </button>
          <button
            className={selectCategory === "HEAVY-WHEELER" ? "active" : ""}
            onClick={() => handleCategoryClick("HEAVY-WHEELER")}
          >
            {" "}
            Heavy Wheeler
          </button>
        </div>
      </div>
      <div className="card_render" data-aos="zoom-in">
        {filter_products.length === 0 ? (
          <p className="empty-message">No Data to be Shown</p>
        ) : (
          filter_products.map((curElem, i) => {
            return <Card key={i} {...curElem} />;
          })
        )}
      </div>
    </SpecialCategory>
  );
};

export default CategorySelection;

const SpecialCategory = styled.section`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;

  .category_section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 20px;
    .category_btn {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      text-align: center;
      width: 60%;
      justify-content: space-between;
      font-size: 18px;
      button {
        border: none;
        outline: none;
        background: none;
        margin-bottom: 20px;
      }
    }
  }
  .active {
    color: #da251c;
  }
  .card_render {
    display: flex;
    justify-content: center;
    width: 90%;
    margin: auto;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    .empty-message {
      font-size: 3rem !important;
      margin-left: 10rem;
      margin-top: 3rem;
      margin-bottom: 3rem;
    }

    @media (max-width: 768px) {
      .card_render {
        width: 100%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        margin-left: 200px;
      }
      .category_section h2 {
        font-size: 3.5rem;
        text-align: center;
      }
      .category_section .category_btn {
        width: 100%;
      }
      .category_btn button {
        font-size: 1rem;
      }
    }
  }
`;
