import React from 'react';
import calendaricon from "../../assets/calendar.svg"

const EventCalendar = ({date, month, time,weekday}) => {
    return (
        <div className="event-calendar">
        <div className="calendar-icon">
          <img src={calendaricon} alt="" style={{width:"24px" , height:"24px"}} />
        </div>
        <div className="calendar-month"><p><strong>{date}</strong><br/>{month}</p></div>
        <hr className="calendar-divider"/>
        <div><p><strong>{time}</strong><br/>{weekday}</p></div>
      </div>
    );
}

export default EventCalendar;
