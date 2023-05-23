import React from 'react'
import EventHero from '../../components/EventsHero/EventHero'
import EventDisplay from '../../components/EventCard/EventsDisplay'
import EventCategories from '../../components/EventCard/EventsCatogies'
import './EventsPage.css'
export default function EventsPage() {
  return (
    <div className='event-page'>
       <EventHero></EventHero>
       <EventDisplay heading={"Upcoming Events"} />
       <EventCategories></EventCategories>
    </div>
  )
}
// TODO idea - drop down ion events