import React from 'react'
import Crouselbreadcrum from '../Components/ContactComp/Crouselbreadcrum'
import Contactaddress from '../Components/ContactComp/Contactaddress'
import Contactform from '../Components/ContactComp/Contactform'

const Contact = () => {
  return (
    <div>
      <Crouselbreadcrum breadcrum = "Contact Us" background = "https://kiyoshi-india.com/resources/assets/img/main-banner2.jpg"/>

      <Contactaddress/>
      <Contactform/>
    </div>
  )
}

export default Contact
