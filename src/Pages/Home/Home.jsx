import React, {useState, useEffect} from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

//Components
import SearchBar from "../../layout/SearchBar";
import SuggestedCard from "../../components/SuggestedCard";
import AllButton from "../../components/AllButton";
import EventCard from "../../components/EventCard";

//Text Components
import Text from "../../components/text/Text";
import {
  allButtonsData,
  suggestedCardsData,
  eventCardsData,
} from "./DummyData";
const Home = () => {
  let eventNumber = 150;
  const navigate = useNavigate();
  let singleClick = true;

  const [selectedButton, setSelectedButton] = useState(allButtonsData[0]);
  useEffect(()=>{
    console.log("selectedButton:", selectedButton);
  },[selectedButton])


  const handleEventCardClick = () => {
    setTimeout(() => {
      navigate(`/event`);
    }, 150);
  };
  return (
    <>
    <div className="search-bar-container">
      <SearchBar />

    </div>
      <div className="home-container">
        <div className="suggested-home-tittle">
          <div style={{marginBottom:"16px", marginTop:"16px"}}>
            <Text label={"Suggested"} size={"h3"} weight={"regular"} lineheight={"l24"}/>
          </div>
          
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
        <div style={{marginBottom:"16px", marginTop:"16px"}}>
            <Text label={"Upcoming Events"} size={"h3"} weight={"regular"} lineheight={"l24"} />
          </div>
        </div>
        <div className="button-row">
          {allButtonsData.map((buttonName, index) => (
            <AllButton  buttonName={buttonName}
            key={index}
            selected={selectedButton === buttonName}
            onClick={() => setSelectedButton(buttonName)}/>
          ))}
        </div>
        <div className="total-events">
          <Text label={`Total events: ${eventNumber}`} size={"h1"} weight={"regular"} lineheight={"l19"} color={"gray"} />
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
