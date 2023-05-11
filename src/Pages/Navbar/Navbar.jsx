import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function NavigationBar() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Math Alumni Club</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Events" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#workshops">Workshops</NavDropdown.Item>
            <NavDropdown.Item href="#interviews">Interviews</NavDropdown.Item>
            <NavDropdown.Item href="#celebrations">Celebrations</NavDropdown.Item>
            <NavDropdown.Item href="#student-seminars">
              Student Seminars
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#all-events">All Events</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#about-us">About Us</Nav.Link>
          <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          <Nav.Link href="#join-us">Join Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default NavigationBar;
