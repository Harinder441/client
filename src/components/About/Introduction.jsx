import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './About.css'
export default function Introduction() {
  return (
    <Container>
      <Row>
        <Col class="text-center intro-heading">
          <h1>Welcome to Curry Leaf</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>About Curry Leaf</h2>
          <p>
            Curry Leaf is a math alumni club that aims to bring together MTTS alumni, spread the teaching methodologies of MTTS, and provide a platform for math students to enhance their skills. With a diverse range of activities and events, we strive to create a community that fosters learning, collaboration, and growth.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Our Journey</h2>
          <p>
            Curry Leaf was formed with the vision of creating a vibrant math community. Since our inception, we have organized numerous workshops, panel discussions, webinars, and events to provide valuable learning experiences for math students. Our journey has been marked by memorable moments, inspiring achievements, and impactful contributions to the field of mathematics.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Join Us</h2>
          <p>
            By joining Curry Leaf, you will have the opportunity to connect with like-minded individuals, expand your knowledge, and contribute to the growth of the math community. As a member, you'll gain access to exclusive events, resources, and networking opportunities. Join us today and embark on a journey of learning, collaboration, and success.
          </p>
          <Button variant="primary" size="lg">Learn More</Button>
        </Col>
      </Row>
    </Container>
  );
}
