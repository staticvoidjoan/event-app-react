import React from 'react'

import backico from "../../assets/back.svg";
import Bold20px27px from "../../components/Text Components/bold20px27px"
export default function EventNavHeader({title}) {
  return (
    <div className="event-title">
    <div className="back-icon-container">
      <img src={backico} alt="go back" className="back-icon" />
    </div>
    <div className="top-title-container">
      <div className='event-title-style'><Bold20px27px text={title}/></div>
    </div>
    <div></div> 
  </div>
  )
}
