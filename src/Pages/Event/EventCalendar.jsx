import React from 'react';
import calendaricon from "../../assets/calendar.svg"

const EventCalendar = ({date, month, time,weekday}) => {
    return (
        <div className="event-calendar">
        <div className="calendar-icon">
          <img src={calendaricon} alt="" style={{width:"24px" , height:"24px"}} />
        </div>
        <div className="calendar-month">
        <div className="event-date-day">{date}</div>
        <div className="event-date-month">{month}</div>
        </div>
        <hr className="calendar-divider"/>
        <div className='calendar-day'>
        <div className="event-date-month">{time}</div>
        <div className="event-date-day">{weekday}</div>
        </div>
      </div>
    );
}

export default EventCalendar;
