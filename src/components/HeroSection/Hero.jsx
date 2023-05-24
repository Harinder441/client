import React from 'react';
import { Container,Nav,Image } from 'react-bootstrap';
import './Hero.css';
import logo from '../../assets/images/logo.jpeg';
import ButtonMain from '../UI/ButtonMain';
import {NavLink} from 'react-router-dom';
export default function Hero() {
  return (
    <section className="hero-section">
      <Container className=" d-flex  align-items-center justify-content-center hero-container">
        <div className="logo-container position-absolute top-0 start-0 ms-3">
          <Image roundedCircle="true"  src={logo} alt="Curry Leaf logo"  />
        </div>
        <div className="text-center text-container position-absolute top-0 mt-2 ">
          <h1>Curry Leaf</h1>
          <h2>Mathematics Club of MTTS alumni</h2>
        </div>
        {/* TODO: Get curved arrow gif or create one */}
        <div className="hero-button-cont">
          <ButtonMain className = "hero-button" >Upcoming Events</ButtonMain>
        </div>
        <Nav className="d-flex justify-content-center bot-navbar position-absolute bottom-0 start-0 w-100">
          <Nav.Item className ="nav-item dark-nav">
            <NavLink className="nav-link"  to="events">
            ALL Events
            </NavLink>
          </Nav.Item>
          <Nav.Item className="nav-item light-nav">
            <NavLink className="nav-link"  to="/">
            Contact Us 
            </NavLink>
          </Nav.Item>
          <Nav.Item className="nav-item dark-nav">
            <NavLink className="nav-link"  to="about">
              About Us
            </NavLink>
          </Nav.Item>
          <Nav.Item className="nav-item light-nav">
            <NavLink className="nav-link"  to="/">
              Join Us
            </NavLink>
          </Nav.Item>
        </Nav>
      </Container>
    </section>
  );
}
