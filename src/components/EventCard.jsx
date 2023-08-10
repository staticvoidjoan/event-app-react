import React from "react";
import "./EventCards.css";
const EventCard = ({ date, title, info, backgroundpath, month, price }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundpath})`,
  };
  return (
    <div className="event-card-container" style={cardStyle}>
      <div className="event-card-date">
        <div className="event-date-day">{date}</div>
        <div className="event-date-month">{month}</div>
      </div>
      <div className="price-box">
        <p>${price}</p>
      </div>

      <div className="info-box">
        <div className="info-text">
          <h2 className="event-card-title">{title}</h2>
          <p className="event-card-info">{info}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
