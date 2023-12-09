import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FilterContext } from "./Context/FilterContext";
import styled from "styled-components";
import { FaMinus, FaPlus, FaShoppingBasket } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import FilterSection from "./Components/FilterSection";
import { NavLink } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();

  const { single_product, searchFilter, text } = useContext(FilterContext);
  // console.log('Search box value:', text);

  const { PartNo, MRP, Model, Image } = single_product;

  return (
    <SingleContainer>
      <div className="about_details">
        {/* .... Product ...... */}
        <div className="product">
          <div className="product_image">
            <figure>
              <img src={Image} alt={Model} />
            </figure>
          </div>
          <div className="details">
            <h3>{PartNo}</h3>
            <h3 className="price">
              <b>Price : </b>
              <span>Rs. {MRP}.00</span>
            </h3>
            <p>{PartNo}</p>
            <p>
              <b>Availibility : </b>
              <span> In Stock</span>
            </p>
            <p className="quantity">
              <b>Quantities : </b>
              <span>
                <FaMinus className="icon" /> 1 <FaPlus className="icon" />
              </span>
            </p>
            <button>
              <FaShoppingBasket />
              Buy Now
            </button>
          </div>
        </div>
        {/* ..... Product_Description............... */}
        <div className="description">
          <h3>Description</h3>
          <hr />
          <h4>Overview</h4>
          <p>{PartNo}</p>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Company Name</b>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <b>Car / Bike / HV Model</b>
                  </td>
                  <td>{Model}</td>
                </tr>
                <tr>
                  <td>
                    <b>Zip / Kiyoshi Part No</b>
                  </td>
                  <td>{PartNo}</td>
                </tr>
                <tr>
                  <td>
                    <b>Suitable for</b>
                  </td>
                  <td>all</td>
                </tr>
                <tr>
                  <td>
                    <b>Filter Dimension in MM</b>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <b>Price</b>
                  </td>
                  <td>{MRP}.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* .. Search ... */}
      <div className="search-container">
        <h3 className="title">Search</h3>
        <hr />
        <div className="search">
          <form action="#">
            <input
              type="text"
              name="text"
              value={text}
              placeholder="Search..."
              onChange={(e) => searchFilter(e)}
            />
            <NavLink to={`/product?query=${text}`}>
              <IoMdSearch className="icon" />
            </NavLink>
          </form>
        </div>
        <FilterSection />
      </div>
    </SingleContainer>
  );
};

export default SingleProduct;

const SingleContainer = styled.section`
  display: flex;
  gap: 30rem;
  width: 90%;
  margin: 2rem auto;
  /* margin: 2rem 0; */

  .product {
    display: flex;
    gap: 3rem;

    .product_image {
      max-width: 100%;
      /* width: ; */
      padding: 1rem 15rem;
      border: 1px solid #6e727f;
    }
    .details {
      display: flex;
      gap: 2rem;
      flex-direction: column;
      h3 {
        font-size: 25px;
        color: #09101f;
        font-weight: 700;
        letter-spacing: -1px;
      }
      p {
        font-size: 16px;
      }
      span {
        color: #6e727f;
        font-weight: 400;
      }
      .icon {
        background-color: #a4a4a4;
        color: white;
        border-radius: 50%;
        padding: 6px;
        font-size: 25px;
      }
      .quantity span {
        display: flex;
        gap: 3rem;
        background-color: #f8f9fa;
      }
      .quantity {
        display: flex;
        gap: 1rem;
      }
      button {
        border: none;
        padding: 12px 30px;
        background-color: #da251c;
        color: #fff;
        border: 1px solid #da251c;
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;
        transition: 0.5s;
        display: flex;
        align-items: center;
        width: fit-content;
        gap: 1rem;
      }
    }
  }
  .description {
    margin-top: 40px;
    h3 {
      font-size: 18px;
      font-weight: 700;
      border-bottom: 3px solid red;
      width: fit-content;
      position: relative;
    }
    h3::before {
      content: "";
      position: absolute;
      left: 0;
      width: 0;
      height: 3px;
      background-color: #da251c;
      -webkit-transition: 0.5s;
      transition: 0.5s;
      bottom: -2px;
    }
    h4 {
      font-size: 20px;
      margin: 20px 0;
      font-weight: 700;
    }
    p {
      margin-bottom: 15px;
      color: #6e727f;
      font-weight: 400;
      font-size: 15px;
    }
    table {
      width: 100%;
    }
    table,
    td {
      border: 1px solid #dee2e6;
      padding: 10px;
      font-size: 1px;
    }
  }
  .search-container {
    .title {
      font-size: 18px;
      font-weight: 700;
      border-bottom: 3px solid red;
      width: fit-content;
      position: relative;
    }
    .title::before {
      content: "";
      position: absolute;
      left: 0;
      width: 0;
      height: 3px;
      background-color: #da251c;
      -webkit-transition: 0.5s;
      transition: 0.5s;
      bottom: -2px;
    }
  }
  .search {
    position: relative;
    margin-bottom: 30px;
  }
  .search input {
    background-color: transparent;
    height: 50px;
    padding: 8px 15px;
    border: 1px solid #eee;
    width: 100%;
    display: block;
    outline: 0;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    border-radius: 5px;
    font-size: 18px;
  }
  .icon {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 40px;
    color: #ff4545;
    background-color: #f8f9fa;
    padding: 5px;
    border-radius: 5px;
  }
`;
