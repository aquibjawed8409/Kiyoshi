import React, { useContext } from 'react'
import { FilterContext } from "./Context/FilterContext"
import Card from './Components/Card'
import styled from 'styled-components'
const CategorySelection = () => {

    const {filter_products, getSpecialCat} = useContext(FilterContext)
    // console.log(filter_products)
  return (
    <SpecialCategory>
      <div className='category_section'>
      <h2>Category Selection</h2>
        <div className="category_btn">
        <button onClick={()=>getSpecialCat("2-WHEELER")} >2 Wheeler</button>
        <button onClick={()=>getSpecialCat("3-WHEELER")} >3 Wheeler</button>
        <button onClick={()=>getSpecialCat("4-WHEELER")}  >4 Wheeler</button>
        <button onClick={()=>getSpecialCat("HEAVY-WHEELER")} >Heavy Wheeler</button>
        </div>
      </div>
      <div className='card_render'>
        {filter_products.length === 0 ? (<p className="empty-message">No Data to be Shown</p>) :
          filter_products.map((curElem)=>{
            return <Card {...curElem }/>
        })
        }
      </div>
    </SpecialCategory>
  )
}

export default CategorySelection;

const SpecialCategory = styled.section`
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;

.category_section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    .category_btn{
        display: flex;
        gap: 80px;
        font-size: 18px;
        button{
            border: none;
            outline: none;
            background: none;
            margin-bottom: 20px;
        }
    }
}
.card_render{
    display: flex;
    width: 90%;
    margin: auto;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 2rem;
    .empty-message{
    font-size: 3rem !important;
    margin-left: 40rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 768px){
    .card_render{
      width: 100%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      margin-left: 200px;
    }
  }
}
`
