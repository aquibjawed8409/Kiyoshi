import React from 'react'
import styled from 'styled-components';

const Crouselbreadcrum = ({breadcrum, background}) => {
  return (
    <Aboutcontainer>
        <div className="about-container" >
        <div className="about-corousel-image" style={{backgroundImage: `url(${background})`}}>
          <div className="title">
            <div className="common-title">
              <h2>{breadcrum}</h2>
              <ul className='breadcrum'>
                <li><a href="/">Home</a></li>
                <li className='breadcrum-before'>{breadcrum}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Aboutcontainer>
  )
}

export default Crouselbreadcrum;

const Aboutcontainer = styled.section`
.about-corousel-image{
background-size: cover;
background-repeat: no-repeat;
background-position: center;
height: 36rem;
min-width: 100%;
position: relative;
}
.about-corousel-image::before{
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* z-index: -1; */
  background-color: #09101f4d;
}
.title{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36rem;
}
`
