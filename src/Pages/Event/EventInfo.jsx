import React from "react";
import TicketButton from "./TicketButton";
import Bold16px22px from "../../components/Text Components/bold16px22px";
import Regular16px22px from "../../components/Text Components/regular16px22px";

import Text from "../../components/Text Components/Text";

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
