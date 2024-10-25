import React from 'react'
import "./AboutSection1.css"
import divider from "./../../../Assets/images/divider-removebg-preview.png"
const AboutSection1 = () => {
  return (
    <div className='aboutSection1'>
      <div className='details'>
          <h3>Who Are We</h3>
          <div className='divider'>
            <img src={divider} alt="" />
          </div>
          <p>We are Falcon Dispatch Services. <br /><br /> If you’re looking for the best dispatch service for owner operators & independent truckers, you’ve come to the right place. LG Logistics Inc is a professional trucking dispatch provider</p>
        </div>
      <div className='details'>
          <h3>Our Mission</h3>
            <div className='divider'>
             <img src={divider} alt="" />
            </div>
            <p>Our mission is to provide an unparalleled level of service to our diverse clientele, a competitive advantage to our partners, a success-driven, multicultural environment for our team members and to improve each of them to achieve the highest level of success</p>

        </div>
        <div className='details'>
           <h3>Why Choose Us</h3>
           <div className='divider'>
            <img src={divider} alt="" />
           </div>
           <p>If you’re looking for the best dispatch service for owner operators & independent truckers, you’ve come to the right place.</p>
          
        </div>
    </div>
  )
}

export default AboutSection1
