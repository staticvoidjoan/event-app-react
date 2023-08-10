import React from "react";
import background from "../../assets/concert2.jpeg";
import ticketico from "../../assets/ticket.svg";

import "./Event.css";

import { useNavigate } from "react-router-dom";
import EventHeader from "./EventHeader";
import EventCalendar from "./EventCalendar";
import EventLocation from "./EventLocation";
import EventTicket from "./EventTicket";
import EventNavHeader from "./EventNavHeader";
import EventInfo from "./EventInfo";
import { eventinfodata } from "./EventDummyData";

const Event = () => {
  const cardStyle = {
    backgroundImage: `url(${background})`,
  };

const HandleEventBackClick = () => {
    let navigate = useNavigate();
    navigate("/");
  };

  return (
    <div className="event-container">
      <div className="event-page-container">
        <div className="event-background" style={cardStyle}>
          <div onClick={HandleEventBackClick}>
          <EventNavHeader title={"Dave"} />

          </div>
        </div>
        <div className="event-middle-info">
          <EventHeader title={"Dave"} price={"45.00"} />
          <EventCalendar
            date={"02"}
            month={"September"}
            time={"10:00"}
            weekday={"Thursday"}
          />
          <EventLocation city={"Amterdam"} country={"Netherlands"} />
          <EventTicket ticketammount={"5"} />
        </div>
      </div>
      <EventInfo title={eventinfodata.title} info={eventinfodata.info} />
    </div>
  );
};

export default Event;
