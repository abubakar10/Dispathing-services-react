import React from 'react'
import "./Section1.css"
import trucklogo from "./../../../Assets/icons/truck-dispatching.png"
import loadlogo from "./../../../Assets/icons/load-planning.png"
import carrierlogo from "./../../../Assets/icons/carrier-selection.png"
import billinglogo from "./../../../Assets/icons/billing.png"
import tracklogo from "./../../../Assets/icons/tracking-and-monitoring.png"
import supportlogo from "./../../../Assets/icons/24-support.png"
import ratenegotiationlogo from "./../../../Assets/icons/rate-negotiation.png"
import companylogo from "./../../../Assets/icons/company-formation.png"
const Section1 = () => {
  return (
    <div className='services'>
    <h1>Services</h1>
      <div className='div1-services'>
        <div className='truck-logo'>
            <a href=""><img src={trucklogo} alt="" /></a>
            <h6><a href="">Truck Dispatching</a></h6>
        </div>
        <div className='load-logo'>
            <a href=""><img src={loadlogo} alt="" /></a>
            <h6><a href="">Load Planning</a></h6>
        </div>
      </div>
      <div className='div2-services'>
        <div className='carrier-logo'>
          <a href=""><img src={carrierlogo} alt="" /></a>
          <h6><a href="">Carrier Slection</a></h6>
        </div>
        <div className='billing-logo'>
          <a href=""><img src={billinglogo} alt="" /></a>
          <h6><a href="">Billing</a></h6>
        </div>
      </div>
      <div className='div3-services'>
        <div className='tracking'>
          <img src={tracklogo} alt="" />
          <h6>Tracking & <br />Monitoring</h6>
        </div>
        <div className='support'>
          <img src={supportlogo} alt="" />
          <h6>24/7 Support</h6>
        </div>
        <div className='rate'>
          <img src={ratenegotiationlogo} alt="" />
          <h6>Rate Negotiation</h6>
        </div>
        <div className='company'>
          <img src={companylogo} alt="" />
          <h6>Company <br />Formation</h6>
        </div>
      </div>
    </div>
  )
}

export default Section1
