import React from 'react'

import backico from "../../assets/back.svg";

export default function EventNavHeader({title}) {
  return (
    <div className="event-title">
    <div className="back-icon-container">
      <img src={backico} alt="go back" className="back-icon" />
    </div>
    <div className="top-title-container">
      <h3 className='event-title-style'>{title}</h3>
    </div>
  </div>
  )
}
