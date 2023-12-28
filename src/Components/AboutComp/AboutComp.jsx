import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const AboutComp = ({image, contentHeading, contentTextTop, contentTextBottom, divposition, contentTextList}) => {
  useEffect(()=>{
    AOS.init({duration : 1000, offset : 150})
  },[])
    
  return (
    <Aboutcontent>
      <div className="about-content-container col-lg-6 container" style={{flexDirection : divposition}}>
        <div className="about-content-image" data-aos="fade-right">
            <img src={image} alt="" />
        </div>
        <div className="about-content-text" data-aos="zoom-out">
            <h1 className="content-heading" >{contentHeading}</h1>
            <p>{contentTextTop}</p>
            <p>{contentTextBottom}</p>

        {contentTextList}
        </div>
      </div>
    </Aboutcontent>
  )
}

export default AboutComp;

const Aboutcontent = styled.section`
margin: 7rem 0rem;
.about-content-container{
    display: flex;
    gap: 2rem;
}
.about-content-image img{
  width: 545px;
  height: auto;
} 
.about-content-image img::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    z-index: -1;
    opacity: .1;
}
.about-content-text p,
.about-content-text ul li p{
    font-size: 1.6rem;
    color: #6e727f;
    line-height: 1.8;
margin-bottom:1.5rem;
font-weight: 400;
}
.about-content-text .filter-scope{
    display: inline-block;
    margin-left: 1rem;
}

@media (max-width:768px){
  .about-content-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
  }
  .about-content-image img{
    height: auto;
    width: 100%;
}
}

`
