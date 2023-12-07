import React from 'react'
import styled from 'styled-components'
import Carousel from './Components/Carousel'
import FilterProduct from './Components/FilterProduct';
import FilterSection from './Components/FilterSection';
import FilterTypeSelection from './Components/FilterTypeSelection';

const Product = () => {
  return (
    <ProductContainer>
      {/* <Carousel/> */}
      <FilterTypeSelection/>
      <div className='product'>
        <FilterSection />
        <FilterProduct />
      </div>
    </ProductContainer>
  )
}

export default Product
const ProductContainer = styled.section`
.product{
  display: grid;
  grid-template-columns: 1fr 5fr;
  gap : 100px;
  width: 90%;
  margin: auto;
}


@media (max-width: 968px){
  .product{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 0;
  }
}
`
