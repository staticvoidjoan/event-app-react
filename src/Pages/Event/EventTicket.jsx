import React from 'react';
import ticketico from "../../assets/ticket.svg";

import Regular16px22px from "../../components/Text Components/regular16px22px"
const EventTicket = ({ticketammount}) => {
    return (
        <div className="event-ticket">
        <div className="ticket-event-icon">
          <img src={ticketico} alt="ticket icon"  style={{width:"24px" , height:"24px"}}/>
        </div>
        <div className="ticket-info">
          <Regular16px22px text={`${ticketammount} tickets`} />
        </div>
      </div>
    );
}

export default EventTicket;
