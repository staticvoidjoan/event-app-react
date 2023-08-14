import React from 'react';
import calendaricon from "../../assets/calendar.svg"
import Bold16px22px from "../../components/Text Components/bold16px22px"
import Regular14px19px from "../../components/Text Components/regular14px19px"

const EventCalendar = ({date, month, time,weekday}) => {
    return (
        <div className="event-calendar">
          
        <div className="calendar-icon">
          <img src={calendaricon} alt="" style={{width:"24px" , height:"24px"}} />
        </div>

        <div className="calendar-month">
        <div className="event-date-day"><Bold16px22px text={date}/></div>
        <div className="event-date-month"><Regular14px19px text={month}/></div>
        </div>

        <hr className="calendar-divider"/>

        <div className='calendar-day'>
        <div className="event-date-time"><Bold16px22px text={time}/></div>
        <div className="event-date-weekday" style={{color:"#CCCCCC"}}><Regular14px19px text={weekday}/></div>
        </div>
      </div>
    );
}

export default EventCalendar;
