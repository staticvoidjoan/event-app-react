import React from "react";
import TicketButton from "./TicketButton";
import Bold16px22px from "../../components/Text Components/bold16px22px"
import Regular16px22px from "../../components/Text Components/regular16px22px"

const EventInfo = ({ title, info }) => {
  return (
    <div className="event-page-info">
      <div className="event-about-title">
        <Bold16px22px text={`About ${title}`}/>
        </div>
        <div className="info-body">

      <div className="event-info-describtion">
        <Regular16px22px text={info} />
      </div>
  
    
      <TicketButton />
        </div>
    </div>
  );
};

export default EventInfo;
