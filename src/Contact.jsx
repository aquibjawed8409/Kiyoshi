import React from 'react'
import Crouselbreadcrum from './Crouselbreadcrum'
import Contactaddress from './Contactaddress'
import Contactform from './Contactform'

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
