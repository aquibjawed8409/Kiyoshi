import React from 'react'
import AboutComp from './AboutComp'
import styled from 'styled-components'

const Certificate = () => {
  return (
    <CertificateContainer>
      <h2 className="content-heading">Quality & Certificates</h2>

      <AboutComp image = "https://kiyoshi-india.com/resources/assets/img/iso-img.jpg" contentTextTop = "More Than Anything Else The Driving Force At Kiapf Is Strict Quality Control Maintained At Every Stage Of Designing And Manufacturing Process Translate Into Zero Defect International Standard Products." contentTextBottom = "Kiapf Has Established The Quality Policy, Which Based On The Mission And Goals Of The Organization And Its Customer’S Expectations, Which Includes A Commitment To Comply With The Requirements And Continually Improve, To Satisfy The Effectiveness Of The Qms And The Customer By Supplying Zero Defect Products And Timely Delivery At Competitive Prices." divposition = "row"/>
      
    </CertificateContainer>
  )
}

export default Certificate

const CertificateContainer = styled.section`
padding-bottom: 6rem;
.content-heading{
    margin-top: 5rem;
    margin-bottom: 0px;
}
`

