import React from 'react'
import "./AboutHeader.css"
import logo from "./../../../Assets/images/Falconlogistics-logo 2.jpg"

const AboutHeader = () => {
  return (
    <div className="about-header">
    <div className='div1'>
    <div className="logo">
        <a href="/"><img src={logo}alt="" /></a>
    </div>
    <div className="navbar">
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="/">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active text-white" aria-current="page" href="/about">About</a>
        <a class="nav-link text-white" href="#">Packages and Prices</a>
        <a class="nav-link text-white" href="#">Agreement</a>
        <a class="nav-link text-white" href="#">Contact</a>
      </div>
    </div>
  </div>
</nav>
        
    </div>
    <div className="join-btn">
        <button className="joinus">Join Us</button>
    </div>
    </div>
    <div className='div2'>
        <div className='heading'>
            <h1>About Us</h1>
        </div>
        <div className='text'>
            <h3>Falcon Dispatch Services</h3>
            <h6>The perfect choice for your next project</h6>
        </div>
        
    </div>
    </div>
  )
}

export default AboutHeader
