import React from 'react'
import "./Footer.css"
import logo from "./../../../Assets/images/Falconlogistics-logo 2.jpg"
import facebook from "./../../../Assets/icons/icons8-facebook-50.png"
import twitter from "./../../../Assets/icons/icons8-twitter-50.png"
import instagram from "./../../../Assets/icons/icons8-instagram-50.png"
import linkedin from "./../../../Assets/icons/icons8-linked-in-50.png"
import google from "./../../../Assets/icons/icons8-google-50.png"

const Footer = () => {
  return (
    <div className='footer-contents'>
    <div className='footer'>
        <div className='footer-div1'>
            <div className="logo">
               <a href="/"><img src={logo} alt="Falcon Logistics" /></a>
            </div>
            <div className='text'>
                <p>If you’re looking for the best dispatch service for owner operators & independent truckers, you’ve come to the right place.</p>
            </div>
            <div className='icons'>
                <div className='icon'>
                    <a href="#"><img src={facebook} alt="" /></a>
                </div>
                <div className='icon'>
                    <a href=""><img src={twitter} alt="" /></a>
                </div>
                <div className='icon'>
                    <a href=""><img src={instagram} alt="instagram" /></a>
                </div>
                <div className='icon'>
                    <a href=""><img src={linkedin} alt="" /></a>
                </div>
                <div className='icon'>
                    <a href=""><img src={google} alt="" /></a>
                </div>
            </div>

        </div>
        <div className='footer-div2'>
            <h4>Company</h4>
              <div className='links'>
                <a href="">Home</a>
              </div>
              <div className='links'>
                <a href="">About</a>
              </div>
              <div className='links'>
                <a href="">Agreement</a>
              </div>
              <div className='links'>
                <a href="">Packages and Prices</a>
              </div>
              <div className='links'>
                <a href="">Contact</a>
              </div>

        </div>
        <div className='footer-div3'>
            <h4>Get In Touch</h4>
            <p>312 SW Greenwich Drive Lees Summit MO 64082 <br />(636) 638-3311</p>
            <p>Support@Falcondispatchservices.com</p>
            
        </div>
        
     </div>
     <h6>Copyright © 2024 Falcon Dispatch Services | Powered by Lg Dispatch Services</h6>
    </div>
  )
}

export default Footer