import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

//Components
import SearchBar from "../../layout/SearchBar";
import SuggestedCard from "../../components/SuggestedCard";
import AllButton from "../../components/AllButton";
import EventCard from "../../components/EventCard";
import {
  allButtonsData,
  suggestedCardsData,
  eventCardsData,
} from "./DummyData";
const Home = () => {
  let eventNumber = 150;
  const navigate = useNavigate();
  let singleClick = true;

  const handleEventCardClick = (index) => {
      setTimeout(() => {
        navigate(`/event`);
      }, 150);

  };
  return (
    <>
      <SearchBar />
      <div className="home-container">
        <div className="suggested-home-tittle">
          <h3>Suggested</h3>
        </div>
        <div className="suggestion-row">
          {suggestedCardsData.map((card, index) => (
            <SuggestedCard
              key={index}
              date={card.date}
              time={card.time}
              title={card.title}
              backgroundpath={card.backgroundpath}
            />
          ))}
        </div>
        <div className="suggested-home-tittle">
          <h3>Upcoming Events</h3>
        </div>
        <div className="button-row">
          {allButtonsData.map((buttonName, index) => (
            <AllButton buttonName={buttonName} key={index} />
          ))}
        </div>
        <div className="total-events">
          <p>Total Events: {eventNumber}</p>
        </div>
        <div className="event-column" onClick={() => handleEventCardClick()}>
          {eventCardsData.map((card, index) => (
          
           <EventCard
             key={index}
             date={card.date}
             month={card.month}
             title={card.title}
             info={card.info}
             price={card.price}
             backgroundpath={card.backgroundpath}
           />
       
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
