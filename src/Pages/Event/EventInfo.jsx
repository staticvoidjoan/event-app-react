import React from "react";
import TicketButton from "./TicketButton";
import Text from "../../components/text/Text";

const EventInfo = ({ title, info }) => {
  return (
    <div className="event-page-info">
      <div className="event-about-title">
        <Text
          label={`About ${title}`}
          size={"h2"}
          weight={"bold"}
          lineheight={"l22"}
        />
      </div>
      <div className="info-body">
        <div className="event-info-describtion">
          <Text
            label={info}
            size={"h2"}
            weight={"regular"}
            lineheight={"l22"}
          />
        </div>

        <TicketButton />
      </div>
    </div>
  );
};

export default EventInfo;
