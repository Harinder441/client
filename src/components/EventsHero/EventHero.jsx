import React from 'react';
import { Carousel } from 'react-bootstrap';
import './EventHero.css';
import EventHeroCard from './EventHeroCard';
export default function EventHeroSection() {
  return (
    <Carousel fade prevIcon={null} nextIcon={null}>
      <Carousel.Item >
        <EventHeroCard className='active' heading ={"VSSP"}/>
      </Carousel.Item>
      <Carousel.Item>
        <EventHeroCard heading ={"Panel Discussion"} img={'https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN0dWRlbnQlMjBzZW1pbmFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60'}/>
      </Carousel.Item>
      <Carousel.Item>
        <EventHeroCard heading ={"Workshops"} img={'https://plus.unsplash.com/premium_photo-1661373813027-5c3f6bca333a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN0dWRlbnQlMjBzZW1pbmFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60'}/>
      </Carousel.Item>

      {/* Add more Carousel.Item components for additional cards */}
    </Carousel>
  );
}
