import React, {useEffect} from 'react'
import Carousel from '../Components/HomeComp/Carousel'
import CategorySelection from '../Components/HomeComp/CategorySelection'
import Facility from '../Components/HomeComp/Facility'
import Certificate from '../Components/HomeComp/Certificate'
import FilterTypeSelection from '../Components/HomeComp/FilterTypeSelection'
import styled from 'styled-components'
const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <HomeContainer>
   <div className='home-page'>
       <Carousel title={"Best Quality Filters For Your Vehicle"} subHead = {`Replace shops with "Manufacturer"`} height={"530px"}/>
       <FilterTypeSelection/>
     <CategorySelection />
     <Facility/>
     <Certificate />
   </div>
    </HomeContainer>


  )
}

export default Home

const HomeContainer = styled.section`
.home-page{
  width: 100%;
  margin: auto;
  overflow: hidden;

  @media (max-width: 768px){
    width: 100%;
  margin: auto;
  font-size: 10px;
  }
}
`