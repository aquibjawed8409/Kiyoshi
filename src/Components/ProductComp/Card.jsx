import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FilterContext } from "../../Context/FilterContext";

const Card = ({ PartNo, MRP, Make, Model, Image }) => {
  const { getSingleProduct } = useContext(FilterContext);

  return (
    <CardContainer>
      <NavLink
        to={`/singleproduct/${PartNo}`}
        onClick={() => {
          getSingleProduct({ PartNo, MRP, Make, Model, Image });
        }}
      >
        <div>
          <figure>
            <img src={Image} alt={Model} />
          </figure>
        </div>
        <div>
          <div className="partNo">
            <h2>{PartNo}</h2>
          </div>
          <h4 className="price">
            <b>Price : </b>
            <span>Rs. {MRP}.00</span>
          </h4>
          <ul className="description">
            <li>
              <p>
                <b>Vehicle Type : </b>
                {Make}
              </p>
            </li>
            <li>
              <p>
                <b>Model : </b>
                {Model}
              </p>
            </li>
            <li>
              <p>
                <b>Part No : </b>
                {PartNo}
              </p>
            </li>
          </ul>
        </div>
      </NavLink>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.section`
  border: 1px solid gray;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 250px;
  background-color: white;
  &:hover {
    text-decoration: none;
    color: black;
  }
  figure {
    overflow: hidden;
    display: flex;
    justify-content: center;

    img {
      max-width: 100%;
      max-width: 220px;
      height: 200px;
      object-fit: cover;
      object-position: center;
      transition: 0.5s ease-in;
      &:hover {
        transform: rotate(20deg) scale(1.2);
      }
    }
  }
  .partNo {
    display: flex;
    justify-content: center;
    h2 {
      font-size: 20px;
      font-weight: 900;
      color: red;
    }
  }
  .price {
    padding-left: 20px;
    font-size: 18px;
    span {
      color: red;
    }
  }
  .description {
    margin-top: 0px;
  }
  ul {
    list-style: none;
  }
  li {
    list-style: square;
    margin-left: 30px;
    font-size: 20px;
  }
  p,
  b,
  h2,
  ul,
  li {
    color: black;
  }
  p,
  b,
  h2,
  ul,
  li:hover {
    text-decoration: none;
  }
`;
