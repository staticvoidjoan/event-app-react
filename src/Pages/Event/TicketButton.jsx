import React from 'react'
import ticketico from "../../assets/ticket.svg";
import Text from '../../components/Text Components/Text';
export default function TicketButton() {
  return (
    <button className="tickets-button">
    <div>
      <img
        src={ticketico}
        alt="ticket icon"
        className="ticket-icon"
        style={{ width: "24px", height: "24px" }}
      />
    </div>
    <div className="ticket-text">
      <Text label={`Tickets`} size={"h2"} weight={"regular"} lineheight={"l22"} />
    </div>
  </button>
  )
}
