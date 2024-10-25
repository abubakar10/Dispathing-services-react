import React from 'react'
import "./Section6.css"
import portfolio1 from "./../../../Assets/images/portfolio 1.jpg"
import portfolio2 from "./../../../Assets/images/portfolio 2.jpg"
import portfolio3 from "./../../../Assets/images/portfolio 3.jpg"
import portfolio4 from "./../../../Assets/images/portfolio 4.jpg"
import divider from "./../../../Assets/images/divider-removebg-preview.png"
const Section6 = () => {
  return (
    <div className="section6">
       <h2>Portfolio</h2>
       <div className='divider'>
            <img src={divider} alt="" />
        </div>
       <div className='portfolio'>
        <div className='image'>
            <img src={portfolio1} alt="" />
        </div>
        <div className='image'>
            <img src={portfolio2} alt="" />    
        </div>
        <div className='image'>
           <img src={portfolio3} alt="" />
        </div>
        <div className='image'>
            <img src={portfolio4} alt="" />
         </div>
         </div>
         <div className='explore-btn'>
          <button>EXPLORE MORE</button>
         </div>
    </div>
  )
}

export default Section6
