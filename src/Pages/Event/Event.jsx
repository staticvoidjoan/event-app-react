import React from "react";
import background from "../../assets/concert2.jpeg";
import ticketico from "../../assets/ticket.svg";
import backico from "../../assets/back.svg";
import calendaricon from "../../assets/calendar.svg"
import locationicon from "../../assets/location.svg"
import "./Event.css";

import {useNavigate} from "react-router-dom"
const Event = () => {
  let navigate = useNavigate();
  const cardStyle = {
    backgroundImage: `url(${background})`,
  };

  const handleEventBackClick = () =>{
    navigate("/");
  }


  return (
    <div className="event-container">
      <div className="event-page-container">
        <div className="event-background" style={cardStyle}>
        <div className="event-title">
          
          <div className="back-icon-container" onClick={handleEventBackClick}>
            <img src={backico} alt="go back" className="back-icon" />
          </div>
          <div className="top-title-container">
            <h3>Dave</h3>
          </div>
          
        </div>
        
        <div className="event-info">
       

          <div className="event-location"></div>
          <div className="tickets"></div>
        </div>
      </div>
      <div className="event-title-price">
        <div>
          <h3>Dave</h3>

        </div>
          <div className='event-price-box'>
                <p>$300.00</p>
            </div>
        </div>
          <div className="event-calendar">
            <div className="calendar-icon">
              <img src={calendaricon} alt="" style={{width:"24px" , height:"24px"}} />
            </div>
            <div className="calendar-month"><p><strong>02</strong><br/>September</p></div>
            <hr className="calendar-divider"/>
            <div><p><strong>10:00PM</strong><br/>Thursday</p></div>
          </div>
          <div className="event-location">
            <div className="location-icon">
              <img src={locationicon} alt="location"  style={{width:"24px" , height:"24px"}}/>
            </div>
            <div className="location-info">
              <p>Amsterdam, Netherlands</p>
            </div>
          </div>

          <div className="event-ticket">
            <div className="ticket-event-icon">
              <img src={ticketico} alt="ticket icon"  style={{width:"24px" , height:"24px"}}/>
            </div>
            <div className="ticket-info">
              <p>5 tickets</p>
            </div>
          </div>

        </div>
      <div className="event-page-info">
        <h4 className="event-about-title">About Event</h4>
        <p>
          Lorem ipsum dolor sit amet. Ea nobis corporis ad fugiat culpa ut
          quibusdam soluta aut aliquid saepe. Est explicabo neque aut molestiae
          doloribus At fugiat ipsum non cupiditate soluta sed dolorem asperiores
          aut quia perferendis sed possimus officiis.
        </p>
        <button className="tickets-button">
          <div>
            <img
              src={ticketico}
              alt="ticket icon"
              className="ticket-icon"
              style={{ width: "24px", height: "24px" }}
            />
          </div>
          <div className="ticket-text">
            <p>Tickets</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Event;
