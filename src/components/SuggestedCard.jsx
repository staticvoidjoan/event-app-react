import React from "react";
import "./SuggestedCard.css";
const SuggestedCard = ({ date, time, title, backgroundpath }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundpath})`,
  };
  return (
    <div className="suggestion-card-container" style={cardStyle}>
      <div>
        <div className="suggestion-date">
          <h6>
            {date}-{time}
          </h6>
        </div>
        <div className="suggestion-title">
          <h3>{title}</h3>
        </div>
      </div>
      <button className="suggestion-button">Tickets</button>
      {/* <img src={backgroundpath} alt="Suggestion Background" className='suggestion-bg' /> */}
    </div>
  );
};

export default SuggestedCard;
