import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './About.css';
import logo from '../../assets/images/logo.jpeg'
import ButtonMain from '../UI/ButtonMain';

export default function VisionMission() {
  return (
    <section className="vision-mission">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="d-flex justify-content-center">
            <img className="me-1" src={logo} alt="Curry Leaf Logo" width="150px" />
          </Col>
          <Col md={8}>
              <h2 className="section-heading">Our Vision &amp; Mission</h2>
              <p className=" font-size-paragraph color-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum est vitae orci suscipit, ut
                eleifend urna sodales. Aliquam erat volutpat. Sed ullamcorper neque in eleifend malesuada. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla id lacus orci.
                Donec vel nunc vel enim malesuada sagittis. Fusce non sapien non elit egestas facilisis.
              </p>
              <ButtonMain className="font-size-paragraph">Learn More</ButtonMain>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
