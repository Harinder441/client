import React from 'react'
import EventHero from '../../components/EventsHero/EventHero'
import EventDisplay from '../../components/EventCard/EventsDisplay'
import EventCategories from '../../components/EventCard/EventsCatogies'
import NavbarMain from '../../components/Navbar/NavbarMain'
import Footer from '../../components/Footer/Footer'
import SideLeafBorder from '../../components/UI/SideLeafBorder'
import './EventsPage.css'
export default function EventsPage() {
  return (
    <div className='event-page'>
       <NavbarMain/>
       <SideLeafBorder left={true} right={true}>
      <div className="page-container">
        
       <EventHero></EventHero>
       <EventDisplay heading={"Upcoming Events"} />
       <EventCategories></EventCategories>
       
       </div>
       </SideLeafBorder>
       <Footer/>
    </div>
  )
}
// TODO idea - drop down ion events