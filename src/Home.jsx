import React from 'react'
import Carousel from './Components/Carousel'
import CategorySelection from './CategorySelection'
import Facility from './Facility'
import Certificate from './Certificate'
import FilterTypeSelection from './Components/FilterTypeSelection'
import styled from 'styled-components'
const Home = () => {
  return (
    <HomeContainer>
   <div className='home-page'>
       {/* <Carousel/> */}
       {/* <FilterTypeSelection/> */}
     {/* <CategorySelection /> */}
     {/* <Facility/> */}
     {/* <Certificate /> */}
   </div>
    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.section`
.home-page{
  width: 100%;
  margin: auto;

  @media (max-width: 768px){
    width: 100%;
  margin: auto;
  font-size: 10px;
  }
}
`