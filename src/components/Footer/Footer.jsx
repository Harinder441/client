import React from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import './Footer.css'
export default function Footer() {
  return (
    <footer className="footer">
      <Row>
        <Col md={9}>
        <Row >
          <Col md={4} className="footer-links">
            <div className="footer-list">
              <h4>Archive</h4>
              <ListGroup bsPrefix='footer-list-group'>
                <ListGroup.Item as="a" href="">
                  Events
                </ListGroup.Item>
                <ListGroup.Item as="a" href="">
                  Newsletters
                </ListGroup.Item>
                <ListGroup.Item as="a" href="">
                  Blog Posts
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col md={4} className="footer-links">
            <div className="footer-list">
              <h4>Navigation</h4>
              <ListGroup bsPrefix='footer-list-group'>
                <ListGroup.Item as="a" href="">
                  Home
                </ListGroup.Item>
                <ListGroup.Item as="a" href="">
                  Events
                </ListGroup.Item>
                <ListGroup.Item as="a" href="">
                  About Us
                </ListGroup.Item>
                <ListGroup.Item as="a" href="">
                  Contact Us
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col md={4} className="footer-links">
            <div className="footer-list">
              <h4>External Links</h4>
              <ListGroup bsPrefix='footer-list-group'>
                <ListGroup.Item as="a" href="">
                  MTTS
                </ListGroup.Item>
                <ListGroup.Item as="a" href="">
                  Math Stack ange
                </ListGroup.Item>
                <ListGroup.Item as="a" href="">
                  Arxiv
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        </Row>
        </Col>
        <Col md={3}>
        <Row className="d-flex flex-column justify-content-center h-100" md={3}>
          <Col md={12} className="text-center footer-email">
            <a href="mailto:curryleaf@example.com">curryleaf@example.com</a>
          </Col>
          <Col md={12} className="text-center justify-content-space footer-social">
            <a href="#" className="mx-1"><i className="fab fa-instagram " /></a>
            <a href="#" className="mx-1"><i className="fab fa-facebook " /></a>
            <a href="#" className="mx-1"><i className="fab fa-linkedin " /></a>
            <a href="#" className="mx-1"><i className="fab fa-twitter " /></a>
          </Col>
        </Row>
        </Col>
      </Row>
    </footer>
  );
}
