import React from "react";
import SearchBar from "../../layout/SearchBar";
import SuggestedCard from "../../components/SuggestedCard";
import backgournd from "../../assets/concert1.jpg";
import backgournd2 from "../../assets/concert2.jpeg";
import backgournd3 from "../../assets/concer3.jpeg";
import "./Home.css";

const Home = () => {
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
              backgroundpath={backgournd2}
            />
          <SuggestedCard
            date={"24 Sep"}
            time={"19-30"}
            title={"Dave - We're all alone in this toghether UK tour 2023"}
            backgroundpath={backgournd}
          />


          <SuggestedCard
            date={"15 Nov"}
            time={"19-00"}
            title={"Moonlit Melodies Concert"}
            backgroundpath={backgournd3}
          />
        </div>
        <div className="suggested-home-tittle">
          <h3>Upcoming Events</h3>
        </div>
      </div>
    </>
  );
};

export default Home;
