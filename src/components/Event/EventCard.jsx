import React from 'react';
import './Event.css';
function Event(props) {
    return (
        <>
      
            <div className="event-card">
                <img src="assets/event-image.jpg" alt="Event Image" />
                <h3>Event Topic</h3>
                <p>Event Description</p>
                <p>Date: <time dateTime="2023-06-01">June 1, 2023</time></p>
                <a href="#" className="register-button">View Details</a>
            </div>
        </>
    );
}

export default Event;