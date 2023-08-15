import React from "react";
import "./EventCards.css";
import Text from "./text/Text";
const EventCard = ({ date, title, info, backgroundpath, month, price }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundpath})`,
  };
  return (
    <div className="event-color">
      <div className="event-card-container">
        <div className="event-bg" style={cardStyle}></div>

        <div className="event-card-date">
          <div className="event-date-day">
            <Text label={date} weight={"bold"} lineheight={"l13"} size={"h1"} />
          </div>{" "}
          <hr className="date-divider" />
          <div className="event-date-month2">
            <Text
              label={month}
              weight={"regular"}
              lineheight={"l13"}
              size={"h1"}
            />
          </div>
        </div>
        <div className="price-box">
          <Text
            label={`$${price}`}
            weight={"bold"}
            lineheight={"l13"}
            size={"h1"}
          />
        </div>

        <div className="info-box">
          <div className="info-text">
            <div style={{ marginBottom: "8px" }}>
              <Text label={title} weight={"medium"} lineheight={"l24"} size={"h3"} />
            </div>
            <div>
              <Text label={info} weight={"regular"} lineheight={"l22"} size={"h2"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
