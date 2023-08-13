import React from "react";
import "./EventCards.css";
import Medium18px24px from "./Text Components/medium18px24px";
import Regular16px22px from "./Text Components/regular16px22px";
import Bold14px13px from "./Text Components/bold14px13px";
import Regular14px13px from "./Text Components/regular14px13px";
const EventCard = ({ date, title, info, backgroundpath, month, price }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundpath})`,
  };
  return (
    <div className="event-color">

     
    <div className="event-card-container">
    <div className="event-bg" style={cardStyle}></div>

      <div className="event-card-date">
        <div className="event-date-day"> <Bold14px13px text={date}/></div> <hr className="date-divider"/>
        <div className="event-date-month"><Regular14px13px text={month}/></div>
      </div>
      <div className="price-box">
        <Bold14px13px text={`$${price}`}/>
      </div>

      <div className="info-box">
        <div className="info-text">
          <div style={{marginBottom:"8px"}}>
            <Medium18px24px text={title} />
          </div>
          <div>
            <Regular16px22px text={info} />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default EventCard;
