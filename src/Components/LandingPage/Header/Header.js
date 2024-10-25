import React from 'react'
import "./Header.css"
import logo from "./../../../Assets/images/Falconlogistics-logo 2.jpg"

const Header = () => {
  return (
    <div className="header">
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
        <a class="nav-link active text-white Active" aria-current="page" href="/about">About</a>
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
            <h1>Falcon Dispatch Services</h1>
        </div>
        <div className='text'>
            <h6>Check Our plans and packages. Package made just for you and your convenience!</h6>
        </div>
        <div className='getstarted-btn'>
            <button className='getstarted'>GET STARTED NOW</button>
        </div>
    </div>
    </div>
  )
}

export default Header
