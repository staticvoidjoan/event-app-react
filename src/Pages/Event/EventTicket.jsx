import React from 'react';
import ticketico from "../../assets/ticket.svg";
const EventTicket = ({ticketammount}) => {
    return (
        <div className="event-ticket">
        <div className="ticket-event-icon">
          <img src={ticketico} alt="ticket icon"  style={{width:"24px" , height:"24px"}}/>
        </div>
        <div className="ticket-info">
          <p>{ticketammount} tickets</p>
        </div>
      </div>
    );
}

export default EventTicket;
