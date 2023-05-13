import React from 'react'
import Event from './EventCard'
import './Event.css'
export default function EventsDisplay(props) {
  return (
    <section className="featured-events">
    <h2 className="section-heading">{props.heading}</h2>
    <div className="event-container">
     <Event></Event>
     <Event></Event>
     <Event></Event>
    </div>
    <div className="show-all-button-container">
      <a href="#" className="show-all-button hero-button">Show All</a>
    </div>
  </section>
  )
}
