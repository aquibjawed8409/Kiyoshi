// import React, { useState, useEffect } from "react";
// import styled from "styled-components";

// const FilterSelection = () => {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("2-WHEELER");

//   useEffect(() => {
//     fetch("Filter.json")
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//         const filtered = data.filter((item) => item.Make === "2-WHEELER");
//         setFilteredData(filtered);
//       });
//   }, []);

//   const handleClick = (category) => {
//     setSelectedCategory(category);
//     const filtered = data.filter((item) => item.Make === category);
//     // {(!filtered )? "No Data to be Shown" : setFilteredData(filtered)}
//     setFilteredData(filtered);
//   };
//   return (
//     <FilterContainer>
//       <div className="FilterCategory">
//         <h3 className="category-title">Category Filter</h3>
//         <div>
//           <h3
//             className="category-name"
//             onClick={() => getCatSelection("2-WHEELER")}
//           >
//             2 Wheeler
//           </h3>
//           <h3
//             className="category-name"
//             onClick={() => getCatSelection("3-WHEELER")}
//           >
//             3 Wheeler
//           </h3>
//           <h3
//             className="category-name"
//             onClick={() => getCatSelection("4-WHEELER")}
//           >
//             4 Wheeler
//           </h3>
//           <h3
//             className="category-name"
//             onClick={() => getCatSelection("HEAVY-WHEELER")}
//           >
//             Heavy Vehicles
//           </h3>
//         </div>
//       </div>
//       <div className="FilterCard">

//       {filteredData.length === 0 ? (<p className="empty-message">No Data to be Shown</p>): (
//         filteredData.map((val, i) => {
//           return (
//             <div className="card" key={i}>
//               <div className="image-center">
//                 <img src={val.Image} alt="" />
//               </div>
//               <h2>{val.PartNo}</h2> 
//               <h3>
//                 <b>Price: </b>
//                 <span>{val.MRP}.00</span>
//               </h3>
//               <ul>
//                 <li>
//                   <b>Vehicle Type : </b>
//                   {val.Make}
//                 </li>
//                 <li>
//                   <b>Model : </b>
//                   {val.Model}
//                 </li>
//                 <li>
//                   <b>Part No : </b>
//                   {val.PartNo}
//                 </li>
//               </ul>
//             </div>
//           );
//         }))}
//       </div>
//     </FilterContainer>
//   );
// };

// export default FilterSelection;

// const FilterContainer = styled.section`
//   background-color: #f8f9fa;
//   display: flex;

//   .FilterCategory {
//     cursor: pointer;
//     max-width: 120rem;
//     margin: 7rem auto;
//   }
//   .category-title {
//     display: flex;
//     align-items: center;
//     background-color: #da251c;
//     color: white;
//     padding: 2rem 7rem;
//     margin-bottom: 0;
//   }
//   .category-name {
//     padding: 2rem 7rem;
//     border-bottom: 1px solid gray;
//     background-color: white;
//     margin-bottom: 0;
//     transition: all 0.2s ease-in-out;
//     &:hover {
//       background-color: #da251c;
//       color: white;
//     }
//   }
//   .FilterCard{
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     align-items: center;
//     gap: 3.3rem;
//     margin: 2rem 0;
//     max-width: 82rem;
//     margin: 2rem auto;
//   }
//   .empty-message{
//     font-size: 3rem !important;
//   }
//   .card {
//     display: flex;
//     align-items: center;
//     justify-content: start; 
//     width: 25rem;
//     max-height: 40rem;
//     overflow: hidden;
//     padding: 1rem;
//     .image-center {
//       overflow: hidden;
//       img {
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//         transition: all 0.2s ease;
//         padding: 1rem;
//         &:hover {
//           transform: scale(1.1);
//           width: 100%;
//         }
//       }
//     }
//     h2 {
//       font-size: 2.5rem;
//       font-weight: 900;
//       color: #da251c;
//       margin: 2rem 0;
//       letter-spacing: -1px;
//     }
//     span{
//       color: #da251c;
//       font-weight: 700;
//     }
//     ul {
//       font-size: 1.5rem;
//       align-items: flex-start;
//       li {
//         list-style: square;
//       }
//     }
//   }
// `;
