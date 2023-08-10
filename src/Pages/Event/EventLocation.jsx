import React from 'react'
import locationicon from "../../assets/location.svg"

export default function EventLocation({city,country}) {
  return (
    <div className="event-location">
    <div className="location-icon">
      <img src={locationicon} alt="location"  style={{width:"24px" , height:"24px"}}/>
    </div>
    <div className="location-info">
      <p>{city}, {country}</p>
    </div>
  </div>
  )
}
