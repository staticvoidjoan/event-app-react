import React from "react";
import "./Home.css";

//Images
import background from "../../assets/concert1.jpg";
import background2 from "../../assets/concert2.jpeg";
import background3 from "../../assets/concer3.jpeg";

//Components
import SearchBar from "../../layout/SearchBar";
import SuggestedCard from "../../components/SuggestedCard";
import AllButton from "../../components/AllButton";
import EventCard from "../../components/EventCard";

const Home = () => {
  let eventNumber = 150;
  return (
    <>
      <SearchBar />
      <div className="home-container">
        <div className="suggested-home-tittle">
          <h3>Suggested</h3>
        </div>
        <div className="suggestion-row">
          <SuggestedCard
            date={"10 Aug"}
            time={"20-00"}
            title={"Summer Groove Fest 2023"}
            backgroundpath={background2}
          />
          <SuggestedCard
            date={"24 Sep"}
            time={"19-30"}
            title={"Dave - We're all alone in this toghether UK tour 2023"}
            backgroundpath={background}
          />

          <SuggestedCard
            date={"15 Nov"}
            time={"19-00"}
            title={"Moonlit Melodies Concert"}
            backgroundpath={background3}
          />
          <SuggestedCard
            date={"10 Aug"}
            time={"20-00"}
            title={"Summer Groove Fest 2023"}
            backgroundpath={background2}
          />
          <SuggestedCard
            date={"24 Sep"}
            time={"19-30"}
            title={"Dave - We're all alone in this toghether UK tour 2023"}
            backgroundpath={background}
          />

          <SuggestedCard
            date={"15 Nov"}
            time={"19-00"}
            title={"Moonlit Melodies Concert"}
            backgroundpath={background3}
          />
        </div>
        <div className="suggested-home-tittle">
          <h3>Upcoming Events</h3>
        </div>
        <div className="suggestion-row">
          <AllButton buttonName={"All"} />
          <AllButton buttonName={"Free"} />
          <AllButton buttonName={"Limited"} />
          <AllButton buttonName={"Concert"} />
          <AllButton buttonName={"Festival"} />
        </div>
        <div className="total-events">
          <p>Total Events: {eventNumber}</p>
        </div>
        <div className="event-column">
          <EventCard
            date={"02"}
            month={"Sep"}
            title={"Dave"}
            info={"Amsterdam, Nerthladns - 10:00PM"}
            price={"200.00"}
            backgroundpath={background}
          />
          <EventCard
            date={"09"}
            month={"Aug"}
            title={"Summer Music Festival"}
            info={"Central Park, New York - 5:00PM"}
            price={"200.00"}
            backgroundpath={background2}
          />
          <EventCard
            date={"02"}
            month={"Sep"}
            title={"Dave"}
            info={"Amsterdam, Nerthladns - 10:00PM"}
            price={"200.00"}
            backgroundpath={background3}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
