import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import Event from './EventCard';
import './Event.css';
import eventImage from '../../assets/images/event-image.jpg';
import ButtonMain from '../UI/ButtonMain';
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

  const renderEvents = () => {
    const eventChunks = [];
    const chunkSize = 3;

    for (let i = 0; i <= events.length-chunkSize; i +=1 ) {
      const chunk = events.slice(i, i + chunkSize);
      eventChunks.push(chunk);
    }

    return eventChunks.map((chunk, index) => (
      <Carousel.Item key={index}>
        <div className="event-container">
          {chunk.map((event, eventIndex) => (
            <Event
              key={eventIndex}
              imageSrc={eventImage}
              title={event.title}
              description={event.description}
              speaker={event.speaker}
            />
          ))}
        </div>
      </Carousel.Item>
    ));
  };

  return (
    <section className="featured-events">
      <h2 className="section-heading">{props.heading}</h2>
      <Carousel
        className="event-carousel"
        interval={2000}
        pause={true}
        slide={true}
        touch={true}
        indicators={false}

      >
        {renderEvents()}
      </Carousel>
      <div className="show-all-button-container">
        <ButtonMain href="#" className="show-all-button" >
          Show All
        </ButtonMain>
      </div>
    </section>
  );
}
