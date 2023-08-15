import React from "react";
import "./SuggestedCard.css";
import Text from "./Text Components/Text";
const SuggestedCard = ({ date, time, title, backgroundpath }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundpath})`,
  };
  return (
    <div className="suggestion-card-container">
      <div className="suggestion-card-background " style={cardStyle}></div>
      <div className="suggestion-text">
        <div className="suggestion-date">
          <Text
            label={`${date} - ${time}`}
            weight={"regular"}
            lineheight={"l19"}
            size={"h2"}
          />
        </div>
        <div className="suggestion-title">
          <Text label={title} weight={"bold"} lineheight={"l24"} size={"h3"} />
        </div>
      </div>
      <button className="suggestion-button">
        <Text
          label={"Tickets"}
          weight={"regular"}
          lineheight={"l22"}
          size={"h2"}
        />
      </button>
      {/* <img src={backgroundpath} alt="Suggestion Background" className='suggestion-bg' /> */}
    </div>
  );
};

export default SuggestedCard;
