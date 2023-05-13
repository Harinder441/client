import React from 'react'
import './Hero.css'
import logo from '../../assets/images/logo.jpeg'
export default function Hero() {
  return (
    <section className="hero-section  flex-center">
    <div className="logo-container">
      <img src={logo} alt="Curry Leaf logo" />
    </div>
    <div className="text-container ">
      <h1>Curry Leaf</h1>
      <h2>Mathematics Club of MTTS alumni</h2>
    </div>
    {/* TODO get curved arrow gif or create one */}
    <div className="hero-button-cont">
      <button className="hero-button">Upcoming Events</button>
    </div>
    <nav>
      <ul>
        <li className="darknav"><a href="Event/event.html">Events</a></li>
        <li className="lightnav"><a href="#">Link 2</a></li>
        <li className="darknav"><a href="#">Link 3</a></li>
        <li className="lightnav"><a href="#">Link 2</a></li>
      </ul>
    </nav>
  </section>
  )
}
