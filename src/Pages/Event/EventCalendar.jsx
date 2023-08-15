import React, { useState, useEffect } from "react"; 
import calendaricon from "../../assets/calendar.svg";
import Text from "../../components/text/Text";

const EventCalendar = ({ date, month, time, weekday }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="event-calendar">
      <div className="calendar-icon">
        <img
          src={calendaricon}
          alt=""
          style={{ width: "24px", height: "24px" }}
        />
      </div>

      <div className="calendar-month">
        <div className="event-date-day">
          <Text label={date} size={"h2"} weight={isSmallScreen ? "regular" : "bold"} lineheight={"l22"} />
        </div>
        <div className="event-date-month">
          <Text
            label={month}
            size={"h1"}
            weight={"regular"}
            lineheight={"l9"}
          />
        </div>
      </div>

      <hr className="calendar-divider" />

      <div className="calendar-day">
        <div className="event-date-time">
        
          <Text label={time} size={"h2"} weight={isSmallScreen ? "regular" : "bold"} lineheight={"l22"} />
        </div>
        <div className="event-date-weekday">
          <Text
            label={weekday}
            size={"h1"}
            weight={"regular"}
            lineheight={"l9"}
            color={"gray"}
          />
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
