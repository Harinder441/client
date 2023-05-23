import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './About.css';
import About from './AboutClub';
import VisionMission from './VisionMission';
import ActivityDisplay from './ActivityDisplay';
import JoinUs from './JoinUs';

export default function Introduction() {
  return (
    <Container>
       <About/>
       <VisionMission/>
       <ActivityDisplay/>
       <JoinUs/>
      
    </Container>
  );
}
