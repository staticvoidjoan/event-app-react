import React from "react";
import "./SuggestedCard.css";
import Regular14px19px from "../components/Text Components/regular14px19px"
import Bold18px24px from "../components/Text Components/bold18px24px"
import Regular16px22px from "./Text Components/regular16px22px";
const SuggestedCard = ({ date, time, title, backgroundpath }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundpath})`,
  };
  return (
    <div className="suggestion-card-container" >
      <div className="suggestion-card-background " style={cardStyle}></div>
      <div className="suggestion-text"> 
        <div className="suggestion-date">
          <Regular14px19px text={`${date} - ${time}`} />
            
        
        </div>
        <div className="suggestion-title">
          <Bold18px24px text={title}/>
        </div>
      </div>
      <button className="suggestion-button"><Regular16px22px text={"Tickets"}/></button>
      {/* <img src={backgroundpath} alt="Suggestion Background" className='suggestion-bg' /> */}
    </div>
  );
};

export default SuggestedCard;
