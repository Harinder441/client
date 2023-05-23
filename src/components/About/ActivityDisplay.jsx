import React from 'react'
import EventHero from '../../components/EventsHero/EventHero'

export default function ActivityDisplay() {
  return (
    <section>
    <h2 className="section-heading">What are the Activities we do?</h2>
    <div className="act-container px-4">
      <EventHero/>
    </div>
</section> 
  )
}
