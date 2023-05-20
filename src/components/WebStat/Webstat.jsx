import React from 'react'
import WebstatCard from './WebstatCard'
import './Webstat.css'
export default function Webstat() {
  return (
    <section className="website-stats">
    <div className="d-flex stats-container">
    <WebstatCard className="stats-border-right"/>
    <WebstatCard className="stats-border-right"/>
    <WebstatCard/>
    </div>
  </section>
    
  )
}
