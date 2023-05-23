import React, { useState, useEffect } from 'react'
import "./Home.css"
import EventsDisplay from '../../components/EventCard/EventsDisplay'
import Hero from '../../components/HeroSection/Hero'
import VisionMission from '../../components/About/VisionMission'
import Webstat from '../../components/WebStat/Webstat'
import SideLeafBorder from '../../components/UI/SideLeafBorder';
import TestimonialDisplay from '../../components/Testimonial/TestimonialDisplay'

export default function Home({setNavVisible}) {
  setNavVisible(false);
  const updateHeroVisibility = () => {
    const heroSection = document.getElementsByClassName('hero-section')[0];
    const heroSectionHeight = heroSection.offsetHeight;
    const scrollPosition = window.scrollY;
    if (scrollPosition < heroSectionHeight) {
      setNavVisible(false);
    } else {
      setNavVisible(true);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', updateHeroVisibility);
    return () => {
      window.removeEventListener('scroll', updateHeroVisibility);
    };
  }, []);
  return (

    <div className="home">
          <Hero />
          <VisionMission />
          <EventsDisplay heading="Featured Events" />
          <TestimonialDisplay />
          <Webstat />
    </div>

  )
}
