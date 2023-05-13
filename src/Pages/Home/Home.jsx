import React from 'react'
import "./Home.css"
import EventsDisplay from '../../components/Event/EventsDisplay'
import Footer from '../../components/Footer/Footer'
import Hero from '../HeroSection/Hero'
import VisionMission from '../../components/About/VisionMission'
import Webstat from '../../components/WebStat/Webstat'

import TestimonialDisplay from '../../components/Testimonial/TestimonialDisplay'
export default function Home() {
  return (
    <div className="home border-right">
    <div className="page-container">
  <Hero/>
  <VisionMission/>
  <EventsDisplay heading ="Featured Events"/>
  <TestimonialDisplay/>
  <Webstat/>
  <Footer/>
  
</div>

    </div>
    
  )
}
