import React, { useState } from 'react'
import "./MyAccordian.css"
const MyAccordian = ({question,answer}) => {
    const [show,setShow] = useState(false);
  return (
    <div className='my-accordian'>
     <div className='main-heading'>
          <div className='sub-heading1'>
           <button className='question' onClick={()=> setShow(!show)}><h5>{question}</h5></button>
           <button className='signs' onClick={()=> setShow(!show)}>{show? "➖" : "➕"}</button>
          </div>
          <div className='sub-heading2'>
            {show && <p className='answers'>{answer}</p>}
          </div>
      </div>
    </div>
  )
}

export default MyAccordian
