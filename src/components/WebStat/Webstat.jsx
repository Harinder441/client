import React from 'react'
import WebstatCard from './WebstatCard'
import './Webstat.css'
export default function Webstat() {
  return (
    <section className="website-stats">
    <div className="stats-container">
    <WebstatCard/>
    <WebstatCard className="border"/>
    <WebstatCard/>
    </div>
  </section>
    
  )
}
