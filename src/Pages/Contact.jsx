import React, { useEffect } from 'react'
import Crouselbreadcrum from '../Components/ContactComp/Crouselbreadcrum'
import Contactaddress from '../Components/ContactComp/Contactaddress'
import Contactform from '../Components/ContactComp/Contactform';


const Contact = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div>
      <Crouselbreadcrum breadcrum = "Contact Us" background = "https://kiyoshi-india.com/resources/assets/img/main-banner2.jpg"/>
      <Contactaddress />
      <Contactform/>
    </div>
  )
}

export default Contact
