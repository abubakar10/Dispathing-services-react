import React, {useState} from 'react'
import {questions} from "./api";
import MyAccordian from './MyAccordian';
import "./AboutSection2.css"
const AboutSection2 = () => {
    const [data,setData]=useState(questions);
  return (
    <div className='about-section2'>
      
     <div className='choose-us'>
          <h2>Why Choose Us</h2>
       {
         data.map((curElem)=>{
           const {id} = curElem
             return <MyAccordian key={id} {... curElem}/>
         })
       }

      {/* <div className='accordion'></div> */}
      </div>
    </div>
  )
}

export default AboutSection2

