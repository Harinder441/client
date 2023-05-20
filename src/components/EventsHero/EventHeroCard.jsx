import React from 'react'
import './EventHero.css';
export default function EventHeroCard({img,heading,text}) {
  return (
    <div className="event-hero-card">
         <div className="event-hero-image-container">
          <img
            className="event-hero-image"
            src={img ||"https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3R1ZGVudCUyMHNlbWluYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"}
            alt="Event Background"
          />
          </div>
          <div className="event-hero-content">
            <h2 className="event-hero-heading">{heading}</h2>
            <p className="event-hero-subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis recusandae rem ipsum doloremque blanditiis enim.</p>
          </div>
        </div>
  )
}
