import React from 'react';
import "./EventCards.css"
const EventCard = ({date,title,info,backgroundpath,month,price}) => {
    const cardStyle = {
        backgroundImage: `url(${backgroundpath})`,
      };
    return (
        <div className='event-card-container' style={cardStyle}>
            <div className='event-card-date'>
                <p >{date}<br/><strong>{month}</strong></p>
            </div>
            <div className='price-box'>
                <p>${price}</p>
            </div>

            <div className='info-box'>
                <div className='info-text'>
                <h2>{title}</h2>
                <p>{info}</p>
                </div>
            </div>

        </div>
    );
}

export default EventCard;
