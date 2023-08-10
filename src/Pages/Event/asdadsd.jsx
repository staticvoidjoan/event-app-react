import React from 'react';
import './eventPage.css'
import {PriceButton} from '../suggestedEventCard/price';
export const EventPage = () => {
    const backgroundImage = {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/am.jpg'})`,
    }
    return (
        <div className="eventPage-container">
            <div className="eventPagediv1"  style={backgroundImage} >
            <div class="backButtonCircle">   
            </div>
            <div class="backButton">
                    <i class="fas fa-arrow-left"></i>
            </div>
                <div className="eventPage-title">
                    <p>Dave</p>
                </div>
            </div>
            <div className="event-details">
                    <p>Dave</p> 
            </div>
            <PriceButton price="45$"/>
            <div className="eventPagediv2">
                <div className="event-information">
                    <p className="about-event">
                        About event
                    </p>
                    <p className="about">
                    Lorem ipsum dolor sit amet. Ea nobis corporis ad fugiat culpa ut quibusdam soluta aut aliquid saepe. Est explicabo neque aut molestiae doloribus At fugiat ipsum non cupiditate soluta sed dolorem asperiores aut quia perferendis sed possimus officiis.
                    </p>
                    <button className="buy-ticket">
                        <i className="fas fa-ticket-alt"></i>
                        Tickets</button>
                </div>
            </div>
        </div>
    )
}

