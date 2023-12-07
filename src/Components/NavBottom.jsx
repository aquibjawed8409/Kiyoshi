// import React from "react";
// import styled from "styled-components";
// import { NavLink } from "react-router-dom";

// const NavBottom = () => {
//   return (
//     <NavContainer>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container row">
//           <div className="col-3">
//             <NavLink className="navbar-brand" to="/">
//               <img
//                 src="https://kiyoshi-india.com/resources/assets/img/logo.png"
//                 alt="logo"
//               />
//             </NavLink>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//           </div>

//           <div className="collapse navbar-collapse col-7" id="navbarNav">
//             <ul className="navbar-nav d-flex justify-content-between gap-5 mr-10">
//               <li className="nav-item ">
//                 <NavLink className="nav-link active" aria-current="page" to="/">
//                   Home
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/about">
//                   About Us
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/product">
//                   Product
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   className="nav-link"
//                   to="https://kiyoshi-india.com/resources/assets/catalogue.pdf"
//                   target="_blank"
//                 >
//                   Catalogue
//                 </NavLink>
//               </li>
//               <li className="nav-item dropdown">
//                 <NavLink
//                   className="nav-link dropdown-toggle"
//                   to="/"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Pricelist
//                 </NavLink>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <NavLink
//                       className="dropdown-item"
//                       to="https://kiyoshi-india.com/resources/assets/Kiyoshi_Profile_with%20pricelist.pdf"
//                       target="_blank"
//                     >
//                       Download All
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       className="dropdown-item"
//                       to="https://kiyoshi-india.com/resources/assets/two_wheeler_pricelist.pdf"
//                       target="_blank"
//                     >
//                       2 Wheeler price List
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       className="dropdown-item"
//                       to="https://kiyoshi-india.com/resources/assets/three_wheeler_pricelist.pdf"
//                       target="_blank"
//                     >
//                       3 Wheeler price List
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       className="dropdown-item"
//                       to="https://kiyoshi-india.com/resources/assets/four_wheeler_pricelist.pdf"
//                       target="_blank"
//                     >
//                       4 Wheeler price List
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       className="dropdown-item"
//                       to="https://kiyoshi-india.com/resources/assets/heavy_vehicale_pricelist.pdf"
//                       target="_blank"
//                     >
//                       Heavy Vehicle price List
//                     </NavLink>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/contact">
//                   Contact Us
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//           <div className="whatsapp-number col-3">
//             <span className="whatsapp-cont">
//               <img
//                 src="https://kiyoshi-india.com/resources/assets/img/whatsapp.png"
//                 alt="whatsapp"
//                 className="mr-2"
//               />
//               <NavLink to="" className="number">
//                 (+91) 9212686831
//               </NavLink>
//             </span>
//           </div>
//         </div>
//       </nav>
//     </NavContainer>
//   );
// };

// export default NavBottom;

// const NavContainer = styled.section`
//   .navbar-nav {
//     gap: 2rem;
//   }
//   .nav-link {
//     font-size: 1.6rem;
//     font-weight: 500;
//     color: #09101f;
//   }
//   .nav-link:hover {
//     color: red;
//   }
//   .whatsapp-cont {
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//   }
//   .number {
//     color: #da251c;
//     font-size: 1.6rem;
//   }
// `;




import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavBottom = () => {
  return (
    <NavContainer>
      <nav className="navbar">
        <div className="container">
          <div className="brand">
            <NavLink className="navbar-brand" to="/">
              <img
                src="https://kiyoshi-india.com/resources/assets/img/logo.png"
                alt="logo"
                className="logo"
              />
            </NavLink>
          </div>

          <div className="menu-toggle">
            <input type="checkbox" id="menu-btn" />
            <label htmlFor="menu-btn" className="menu-icon">&#9776;</label>
          </div>

          <div className="menu">
            <ul>
              <li>
                <NavLink className="nav-link" activeClassName="active" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" activeClassName="active" to="/about">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" activeClassName="active" to="/product">
                  Product
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  to="https://kiyoshi-india.com/resources/assets/catalogue.pdf"
                  target="_blank"
                >
                  Catalogue
                </NavLink>
              </li>
              <li className="dropdown">
                <NavLink className="nav-link" activeClassName="active" to="/">
                  Pricelist
                </NavLink>
                <ul className="dropdown-menu">
                  {/* Dropdown menu items here */}
                </ul>
              </li>
              <li>
                <NavLink className="nav-link" activeClassName="active" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="whatsapp-number">
            <span className="whatsapp-cont">
              <img
                src="https://kiyoshi-india.com/resources/assets/img/whatsapp.png"
                alt="whatsapp"
                className="mr-2"
              />
              <NavLink to="" className="number">
                (+91) 9212686831
              </NavLink>
            </span>
          </div>
        </div>
      </nav>
    </NavContainer>
  );
};

export default NavBottom;

const NavContainer = styled.section`

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f9fa;
    padding: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .brand {
    flex: 1;
  }

  .logo {
    max-width: 100%;
    height: auto;
  }

  .menu-toggle {
    display: none;
  }

  .menu {
    display: flex;
  }

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    margin-right: 20px;
  }

  .nav-link {
    text-decoration: none;
    color: #09101f;
    font-size: 1.6rem;
    font-weight: 500;
  }

  .nav-link:hover {
    color: red;
  }

  /* Add your media queries for responsiveness */
  @media (max-width: 768px) {
    .menu {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 70px;
      left: 0;
      width: 100%;
      background-color: #f8f9fa;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .menu-toggle {
      display: block;
      cursor: pointer;
    }

    .menu-icon {
      font-size: 2rem;
      cursor: pointer;
    }

    #menu-btn:checked + .menu {
      display: flex;
    }
  }
`;
