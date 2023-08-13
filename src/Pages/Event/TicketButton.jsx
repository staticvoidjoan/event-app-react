import React from 'react'
import ticketico from "../../assets/ticket.svg";
import Regular16px22px from '../../components/Text Components/regular16px22px';
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
      <Regular16px22px text={"Tickets"}/>
    </div>
  </button>
  )
}
