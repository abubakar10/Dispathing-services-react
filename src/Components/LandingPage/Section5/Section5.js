import React from 'react'
import "./Section5.css"
import ourmission from "./../../../Assets/images/our mission 1.jpg"
const Section5 = () => {
  return (
    <div className='section5'>
      <h3>
        <span className='fancytext-prefix'>Our Mi</span>
        <span className='typed-cursor'>ss</span>
        <span className='fancytext-suffix'>ion</span>
      </h3>
      <div className='our-mission'>
        <div className='mission-text'>
            <h5>
            Logistics management is the part of supply chain management that plans, implements, and controls the efficient, effective forward, and reverse flow and storage of goods, services, and related information between the point of origin and the point of consumption. The complexity of logistics can be modeled, analyzed,visualized, and optimized by dedicated simulation software. The minimization of the use of resources is a common motivation in all logistics fiels.
            </h5>
        </div>
        <div className='mission-img'>
            <img src={ourmission} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Section5
