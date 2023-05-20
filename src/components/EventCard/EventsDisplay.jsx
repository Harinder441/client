import React from 'react';
import Event from './EventCard';
import './Event.css';
import eventImage from '../../assets/images/event-image.jpg';
import ButtonMain from '../UI/ButtonMain';
import CarouselMain from '../UI/CarouselMain';
export default function EventsDisplay(props) {
  var text = "Lorem, ipsum dolor sit amet. Autem tempore  blanditiis possimus rerum! Possimus?";
  const events = [
    { title: "Event 1", description: text, speaker: "A. bnmsk" },
    { title: "Event 2", description: text, speaker: "B. xysdk" },
    { title: "Event 3", description: text, speaker: "C. pksdm" },
    { title: "Event 4", description: text, speaker: "D. xszbn" },
    { title: "Event 5", description: text, speaker: "E. iuykl" },
    { title: "Event 6", description: text, speaker: "F. opwqe" },
    // Add more events as needed
  ];

  var items = events.map((event, eventIndex) => (
    <Event
      key={eventIndex}
      imageSrc={eventImage}
      title={event.title}
      description={event.description}
      speaker={event.speaker}
    />
  ));
  return (
    <section className="featured-events">
      <h2 className="section-heading">{props.heading}</h2>
      <CarouselMain items={items} chunkSize={3}></CarouselMain>
      <div className="d-flex justify-content-center mt-4 " >
        <ButtonMain href="#" className="show-all-button px-3 py-2" >
          Show All
        </ButtonMain>
        
      </div>
    </section>
  );
}
