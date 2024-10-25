import React from 'react'
import "./Section4.css"
import doneicon from "./../../../Assets/icons/done.png"
import divider from "./../../../Assets/images/divider-removebg-preview.png"

const Section4 = () => {
  return (
    <div className='section4'>
        <h1>Why Choose Us</h1>
        <div className='divider'>
            <img src={divider} alt="" />
        </div>
       <h6>Our team of experienced professionals is dedicated to providing top-notch dispatching solutions for businesses of all sizes. With our cutting-edge technology, 24/7 support, and commitment to customer satisfaction, we’re the clear choice for your dispatching needs. <br />
        <br /> <img src={doneicon} alt="" />Smart Business Operation <br /> <br />
        <img src={doneicon} alt=""/> Office Overhead Saving <br /> <br />
        <img src={doneicon} alt=""/> Hunt For Perfect Dispatcher <br /> <br />
        <img src={doneicon} alt=""/> No Forced Dispatch</h6> 
        <div className='contact'>
            <button>CONTACT US</button>
        </div>      
    </div>
  )
}

export default Section4