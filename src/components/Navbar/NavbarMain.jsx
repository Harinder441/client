import React from 'react';
import { Navbar, Nav,Image } from 'react-bootstrap';
import logo from '../../assets/images/logo.jpeg';
import ButtonMain from '../UI/ButtonMain';
import './Navbar.css'
export default function NavbarMain() {
  return (
    <Navbar expand="lg" variant="dark" fixed="top" className="px-4 font-primary  main-navbar" >
      <Navbar.Brand href="#home" className="">
        <Image src={logo}
          height="60"
          alt="Company Logo"
          roundedCircle={true} 
          className='me-2'
          />
  
        Curry Leaf
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="w-100 justify-content-end align-items-center">
          <ButtonMain as="a" href="#" className="px-2 py-1 mx-1 nav-link">Event</ButtonMain>
          <ButtonMain as="a" href="#" className="px-2 py-1 mx-1 nav-link">About Us</ButtonMain>
          <ButtonMain as="a" href="#" className="px-2 py-1 mx-1 special-link">Join Us</ButtonMain>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}