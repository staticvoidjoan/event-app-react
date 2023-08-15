import React from "react";
import "./Event.css";
import Text from "../../components/Text Components/Text";
export default function EventHeader({ title, price }) {
  return (
    <div className="event-title-price">
      <div>
        <div className="event-title-style">
          <Text size={"h4"} weight={"bold"} label={title} lineheight={"l27"} />
        </div>
      </div>
      <div className="event-price-box">
        <Text
          size={"h1"}
          weight={"bold"}
          label={`$${price}`}
          lineheight={"l13"}
        />
      </div>
    </div>
  );
}
