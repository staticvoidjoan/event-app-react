import React from 'react'
import "./Event.css"
import Bold14px13px from "../../components/Text Components/bold14px13px"
import Bold20px27px from "../../components/Text Components/bold20px27px"
export default function EventHeader({title,price}) {
  return (
    <div className="event-title-price">
    <div>
      <div className='event-title-style'><Bold20px27px text={title}/></div>

    </div>
      <div className='event-price-box' >
            <Bold14px13px text={`$${price}`} />
        </div>
    </div>
  )
}
