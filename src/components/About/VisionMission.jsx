import React from 'react'
import './About.css'
export default function VisionMission() {
  return (
    <section className="intro">
    <div className="intro__content">
      <img className="intro__logo" src="assets/logo.jpeg" alt="Curry Leaf Logo" />
      <div className="intro__text">
        <h2 className="section-heading">Our Vision &amp; Mission</h2>
        <p className="intro__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum est vitae orci suscipit, ut eleifend urna sodales. Aliquam erat volutpat. Sed ullamcorper neque in eleifend malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla id lacus orci. Donec vel nunc vel enim malesuada sagittis. Fusce non sapien non elit egestas facilisis.
        </p>
        {/*TODO make hero button the custom button or  */}
        <button className="intro__btn hero-button">Learn More</button>
      </div>
    </div>
  </section>
  )
}
