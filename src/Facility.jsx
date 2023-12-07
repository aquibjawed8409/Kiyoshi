import React from 'react'
import styled from 'styled-components'

const Facility = () => {
  return (
    <FacilityContainer>
      <h2 className="content-heading">Factories/Infrastructure/Testing Facility</h2>

      <div className="facility-image">
        <div>
            <img src="https://kiyoshi-india.com/resources/assets/img/gallery/gallery-1.jpg" alt="" />
        </div>
        <div>
            <img src="https://kiyoshi-india.com/resources/assets/img/gallery/gallery-2.jpg" alt="" />
        </div>
        <div>
            <img src="https://kiyoshi-india.com/resources/assets/img/gallery/gallery-3.jpg" alt="" />
        </div>
        <div>
            <img src="https://kiyoshi-india.com/resources/assets/img/gallery/gallery-4.jpg" alt="" />
        </div>
        <div>
            <img src="https://kiyoshi-india.com/resources/assets/img/gallery/gallery-5.jpg" alt="" />
        </div>
        <div>
            <img src="https://kiyoshi-india.com/resources/assets/img/gallery/gallery-6.jpg" alt="" />
        </div>
        <div>
            <img src="https://kiyoshi-india.com/resources/assets/img/gallery/gallery-7.jpg" alt="" />
        </div>
        <div>
            <img src="https://kiyoshi-india.com/resources/assets/img/gallery/gallery-8.jpg" alt="" />
        </div>
      </div>
      
    </FacilityContainer>
  )
}

export default Facility

const FacilityContainer = styled.section`

background-color: #f5f4f4;
padding: 6rem 0;

.facility-image{
    margin: 5rem auto;
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;
    max-width: 120rem;
    justify-content: center;
/* margin: auto; */
    img{
        width: 25rem;
    }

    @media (max-width: 768px){
        .facility-image{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }
    }
}
`
