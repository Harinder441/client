import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <>
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
    </>
  )
}
