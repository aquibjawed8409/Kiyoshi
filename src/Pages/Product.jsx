import React from 'react'
import styled from 'styled-components'
import Carousel from '../Components/HomeComp/Carousel'
import FilterProduct from '../Components/ProductComp/FilterProduct';
import FilterSection from '../Components/ProductComp/FilterSection';
import FilterTypeSelection from '../Components/HomeComp/FilterTypeSelection';

const Product = () => {
  return (
    <ProductContainer>
    <Carousel title={"Shop"} breadcrumHome={"Product"} breadcrum={"|  shop"} height={"380px"}/>
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
overflow: hidden;
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
