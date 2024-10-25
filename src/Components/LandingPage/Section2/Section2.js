import React from 'react'
import "./Section2.css"
import deliveryimg from './../../../Assets/images/packages.jpg'
import joinus from "./../../../Assets/images/join us.jpg"
import contactus from "./../../../Assets/images/need help contact us.jpg"
const Section2 = () => {
  return (
    <div className='section2'>
      <div className='reliable-delivery'>
        <div className='div-img'>
            <img src={deliveryimg} alt="" />
        </div>
        <div className='div-text'>
          <h3>Reliable Delivery</h3>
          <h6>Check Our plans and packages. Package made just for you and your convenience!</h6>
        </div>
        <div className='div-btn'>
            <button> PACKAGES</button>
        </div>
      </div>
      <div className='join-us'>
        <div className='div-img'>
            <img src={joinus} alt="" />
        </div>
        <div className='div-text'>
            <h3>Join Us!</h3>
            <h6>Join our company and get the best dispatch services you can get in US.</h6>
        </div>
        <div className='div-btn'>
            <button>JOIN US</button>
        </div>
      </div>
      <div className='contact-us'>
      <div className='div-img'>
        <img src={contactus} alt="" />
      </div>
        <div className='div-text'>
            <h3>Need Help Contact Us</h3>
            <h6>We would clear any confusion you got. Contact us we are available 24/7 to help you.</h6>
        </div>
        <div className='div-btn'>
            <button>CONTACT US</button>
        </div>
      </div>
    </div>
  )
}

export default Section2
