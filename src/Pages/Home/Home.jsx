import React, { useState, useEffect } from 'react'
import "./Home.css"
import EventsDisplay from '../../components/EventCard/EventsDisplay'
import NavbarMain from '../../components/Navbar/NavbarMain';
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/HeroSection/Hero'
import VisionMission from '../../components/About/VisionMission'
import Webstat from '../../components/WebStat/Webstat'
import SideLeafBorder from '../../components/UI/SideLeafBorder';
import TestimonialDisplay from '../../components/Testimonial/TestimonialDisplay'

export default function Home() {
  const [isHeroVisible, setHeroVisible] = useState(true);
  const updateHeroVisibility = () => {
    const heroSection = document.getElementsByClassName('hero-section')[0];
    const heroSectionHeight = heroSection.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition < heroSectionHeight) {
      setHeroVisible(true);
    } else {
      setHeroVisible(false);
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
      <SideLeafBorder right={true} left={true}>
        <div className="page-container">
          <Hero />
          {!isHeroVisible && (<NavbarMain></NavbarMain>)}
          <VisionMission />
          <EventsDisplay heading="Featured Events" />
          <TestimonialDisplay />
          <Webstat />

        </div>
      </SideLeafBorder>
      <Footer />
    </div>

  )
}
