import React from 'react'
import Event from './EventCard'
import './Event.css'
import eventImage from '../../assets/images/event-image.jpg'
export default function EventsDisplay(props) {
  var text = "Lorem, ipsum dolor sit amet. Autem tempore  blanditiis possimus rerum! Possimus?";
  return (
    <section className="featured-events">
    <h2 className="section-heading">{props.heading}</h2>
    <div className="event-container">
     <Event imageSrc={eventImage} title="Event 1" description ={text} speaker={"A. bnmsk"}/>
     <Event imageSrc={eventImage} title="Event 1" description ={text} speaker={"A. bnmsk"}/>
     <Event imageSrc={eventImage} title="Event 1" description ={text} speaker={"A. bnmsk"}/>
      </div>
    <div className="show-all-button-container">
      <a href="#" className="show-all-button hero-button">Show All</a>
    </div>
  </section>
  )
}
