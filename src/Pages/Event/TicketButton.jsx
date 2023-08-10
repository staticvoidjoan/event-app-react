import React from 'react'
import ticketico from "../../assets/ticket.svg";

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
      <p>Tickets</p>
    </div>
  </button>
  )
}
