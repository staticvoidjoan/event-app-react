import React from "react";
import TicketButton from "./TicketButton";

const EventInfo = ({ title, info }) => {
  return (
    <div className="event-page-info">
      <h4 className="event-about-title">About {title}</h4>
      <div className="event-info-describtion"></div>
      <p className={{marginBottom: "0px"}}>{info}</p>
      <TicketButton />
    </div>
  );
};

export default EventInfo;
