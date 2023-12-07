import React, { useContext, useState } from 'react';
import { FilterContext } from '../Context/FilterContext';
import styled from 'styled-components';
import Card from './Card';

const FilterProduct = () => {
  const { selected_filters } = useContext(FilterContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 

  // Calculate the indexes of the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = selected_filters.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <ProductSection>
      {currentItems.length === 0 ? (
        <p className="empty-message">No Data to be Shown</p>
      ) : (
        <>
          {currentItems.map((curElem, i) => (
            <Card key={i} {...curElem} />
          ))}
          <Pagination>
            {Array.from({ length: Math.ceil(selected_filters.length / itemsPerPage) }).map((_, index) => (
              <PageButton key={index} onClick={() => paginate(index + 1)}>
                {index + 1}
              </PageButton>
            ))}
          </Pagination>
        </>
      )}
    </ProductSection>
  );
};

export default FilterProduct;

const ProductSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;

  .empty-message {
    font-size: 3rem !important;
    margin-left: 30rem;
  }
`;

const Pagination = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const PageButton = styled.button`
  padding: 8px 12px;
  margin: 0 4px;
  background-color: gray;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
  &:hover {
    background-color: #0056b3;
  }
`;






// import React, { useContext } from 'react'
// import { FilterContext } from '../Context/FilterContext'
// import styled from 'styled-components'
// import Card from './Card'

// const FilterProduct = () => {

//     const {selected_filters} = useContext(FilterContext)
//     // console.log(all_filters)

//   return (
//     <ProductSection>
//       {
//         selected_filters.length === 0 ? (<p className="empty-message">No Data to be Shown</p>): selected_filters.map((curElem,i)=>{
//             return <Card key={i} {...curElem}/>
//         })
//       }
//     </ProductSection>
//   )
// }

// export default FilterProduct

// const ProductSection = styled.section`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 20px;
//     flex-wrap: wrap;
//     justify-content: space-between;
//     margin-top: 20px;

// .empty-message{
//     font-size: 3rem !important;
//     margin-left: 30rem;
//   }
// `
