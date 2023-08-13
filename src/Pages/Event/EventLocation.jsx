import React from 'react'
import locationicon from "../../assets/location.svg"
import Regular16px22px from "../../components/Text Components/regular16px22px"
export default function EventLocation({city,country}) {
  return (
    <div className="event-location">
    <div className="location-icon">
      <img src={locationicon} alt="location"  style={{width:"24px" , height:"24px"}}/>
    </div>
    <div className="location-info">
      <Regular16px22px text={`${city}, ${country}`} />
    </div>
  </div>
  )
}
