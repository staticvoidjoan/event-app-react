import React from 'react';
import ticketico from "../../assets/ticket.svg";
import Text from '../../components/text/Text';
const EventTicket = ({ticketammount}) => {
    return (
        <div className="event-ticket">
        <div className="ticket-event-icon">
          <img src={ticketico} alt="ticket icon"  style={{width:"24px" , height:"24px"}}/>
        </div>
        <div className="ticket-info">
          <Text label={`${ticketammount} tickets`} size={"h2"} weight={"regular"} lineheight={"l22"} />
        </div>
      </div>
    );
}

export default EventTicket;
