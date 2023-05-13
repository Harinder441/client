import React from 'react'
import Event from '../../components/Event/Event'
import "./Home.css"
export default function Home() {
  return (
    <div className="home border-right">
    <div className="page-container">
  {/* Start-- Hero Section */}
  <div className="hero-section  flex-center">
    <div className="logo-container">
      <img src="assets/logo.jpeg" alt="Curry Leaf logo" />
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
  </div>
  {/* End-- Hero Section */}
  {/* Introduction section start */}
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
  {/* Introduction section end */}
  {/* TODO clear a difference between featured and upcoming */}
  {/* Featured event section start */}
  <section className="featured-events">
    <h2 className="section-heading">Featured Events</h2>
    <div className="event-container">
      <div className="event-card">
        <img src="assets/event-image.jpg" alt="Event Image" />
        <h3>Event Topic</h3>
        <p>Event Description</p>
        <p>Date: <time dateTime="2023-06-01">June 1, 2023</time></p>
        <a href="#" className="register-button">Register Now</a>
      </div>
      <div className="event-card">
        <img src="assets/event-image.jpg" alt="Event Image" />
        <h3>Event Topic</h3>
        <p>Event Description</p>
        <p>Date: <time dateTime="2023-06-01">June 1, 2023</time></p>
        <a href="#" className="register-button">Register Now</a>
      </div>
      <div className="event-card">
        <img src="assets/event-image.jpg" alt="Event Image" />
        <h3>Event Topic</h3>
        <p>Event Description</p>
        <p>Date: <time dateTime="2023-06-01">June 1, 2023</time></p>
        <a href="#" className="register-button">Register Now</a>
      </div>
    </div>
    <div className="show-all-button-container">
      <a href="#" className="show-all-button hero-button">Show All</a>
    </div>
  </section>
  {/* Featured event section end */}
  {/* Testimonial starts  */}
  <section className="testimonial-section">
    <h2 className="section-heading">Testimonials</h2>
    <div className="testimonial-carousel">
      <div className="testimonial-card flex-center">
        <p>"I had an amazing experience attending Curry Leaf's workshop. The teaching style is unique and engaging, and I learned a lot from the knowledgeable instructors."</p>
        <img src="assets/person.jpeg" alt="Person 1" />
        <h3>John Doe</h3>
      </div>
      <div className="testimonial-card flex-center">
        <p>"Curry Leaf's panel discussions are always insightful and thought-provoking. I highly recommend them to anyone interested in mathematics."</p>
        <img src="assets/person.jpeg" alt="Person 2" />
        <h3>Jane Smith</h3>
      </div>
      <div className="testimonial-card flex-center">
        <p>"The webinars organized by Curry Leaf are top-notch. The presenters are knowledgeable and the content is always relevant to my studies."</p>
        <img src="assets/person.jpeg" alt="Person 3" />
        <h3>Bob Johnson</h3>
      </div>
    </div>
  </section>
  {/* Testimonial ends  */}
  {/* website stats start */}
  <section className="website-stats">
    <div className="stats-container">
      <div className="stats-card">
        <h3>Members</h3>
        <p className="count">52</p>
      </div>
      <div className="stats-card border">
        <h3>Alumni</h3>
        <p className="count">1240</p>
      </div>
      <div className="stats-card">
        <h3>Views</h3>
        <p className="count">897</p>
      </div>
    </div>
  </section>
  {/* website stats end */}
  <section className="footer">
    <div className="footer-links">
      <div className="footer-list">
        <h4>Archive</h4>
        <ul>
          <li><a href="#">Events</a></li>
          <li><a href="#">Newsletters</a></li>
          <li><a href="#">Blog Posts</a></li>
        </ul>
      </div>
      <div className="footer-list">
        <h4>Navigation</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-list">
        <h4>External Links</h4>
        <ul>
          <li><a href="#">MTTS</a></li>
          <li><a href="#">Math Stack Exchange</a></li>
          <li><a href="#">Arxiv</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-info flex-center">
      <div className="footer-email ">
        <a href="mailto:curryleaf@example.com">curryleaf@example.com</a>
      </div>
      <div className="footer-social">
        <a href="#"><i className="fab fa-instagram" /></a>
        <a href="#"><i className="fab fa-facebook" /></a>
        <a href="#"><i className="fab fa-linkedin" /></a>
        <a href="#"><i className="fab fa-twitter" /></a>
      </div>
    </div>
  </section>
</div>

    </div>
    
  )
}
