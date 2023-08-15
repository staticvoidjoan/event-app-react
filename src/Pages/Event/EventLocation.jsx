import React from 'react'
import locationicon from "../../assets/location.svg"
import Text from '../../components/text/Text'
export default function EventLocation({city,country}) {
  return (
    <div className="event-location">
    <div className="location-icon">
      <img src={locationicon} alt="location"  style={{width:"24px" , height:"24px"}}/>
    </div>
    <div className="location-info">
      <Text label={`${city}, ${country}`} size={"h2"} weight={"regular"} lineheight={"l22"} />
    </div>
  </div>
  )
}
