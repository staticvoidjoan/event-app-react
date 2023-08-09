import React from "react";
import background from "../../assets/concert2.jpeg";
import "./Event.css";
const Event = () => {
  const cardStyle = {
    backgroundImage: `url(${background})`,
  };
  return (
    <div className="event-container">
      <div className="event-background" style={cardStyle}>
        <div className="event-title">
          <h3>Dave</h3>
        </div>
        <div className="event-info">
          <div className="event-price">
            <h3>Dave</h3>
          </div>
          <div className="event-calendar"></div>
          <div className="event-location"></div>
          <div className="tickets"></div>
        </div>
      </div>
      <div className="event-page-info">
        <h4 className="event-about-title">About Event</h4>
        <p>
          Lorem ipsum dolor sit amet. Ea nobis corporis ad fugiat culpa ut
          quibusdam soluta aut aliquid saepe. Est explicabo neque aut molestiae
          doloribus At fugiat ipsum non cupiditate soluta sed dolorem asperiores
          aut quia perferendis sed possimus officiis.
        </p>
        <button className="tickets-button">Tickets</button>
      </div>
    </div>
  );
};

export default Event;
