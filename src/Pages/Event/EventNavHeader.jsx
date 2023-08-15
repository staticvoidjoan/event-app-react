import React from "react";
import backico from "../../assets/back.svg";
import Text from "../../components/Text Components/Text";
export default function EventNavHeader({ title }) {
  return (
    <div className="event-title">
      <div className="back-icon-container">
        <img src={backico} alt="go back" className="back-icon" />
      </div>
      <div className="top-title-container">
        <div className="event-title-style">
          <Text label={title} size={"h4"} weight={"bold"} lineheight={"l27"} />
        </div>
      </div>
      <div></div>
    </div>
  );
}
