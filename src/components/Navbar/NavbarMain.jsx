import React from 'react';
import { Navbar, Nav,Image } from 'react-bootstrap';
import logo from '../../assets/images/logo.jpeg';
import ButtonMain from '../UI/ButtonMain';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
export default function NavbarMain() {
  return (
    <Navbar expand="lg" variant="dark" fixed="top" className="px-4 font-primary  main-navbar" >
       {/* <Link to={`/`} >  */}
       <NavLink to="/" className='nav-link-n'>
      <Navbar.Brand className="" href="/">
     
        <Image src={logo}
          height="60"
          alt="Company Logo"
          roundedCircle={true} 
          className='me-2'
          />
  
        Curry Leaf
      
      </Navbar.Brand>
      </NavLink>
      {/* </Link> */}
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="w-100 justify-content-end align-items-center">
          <NavLink to="events" className='nav-link-n'><ButtonMain  className="px-2 py-1 mx-1 nav-link">Event</ButtonMain></NavLink>
          <NavLink to="about" className='nav-link-n'><ButtonMain as="a" href="about" className="px-2 py-1 mx-1 nav-link">About Us</ButtonMain></NavLink>
          <NavLink to="/" className='nav-link-n'><ButtonMain as="a" href="about" className="px-2 py-1 mx-1 special-link">Join Us</ButtonMain></NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}