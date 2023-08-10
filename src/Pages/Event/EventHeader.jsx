import React from 'react'
import "./Event.css"
export default function EventHeader({title,price}) {
  return (
    <div className="event-title-price">
    <div>
      <h3 className='event-title-style'>{title}</h3>

    </div>
      <div className='event-price-box'>
            <p>${price}</p>
        </div>
    </div>
  )
}
