import React from 'react';
import { Card } from 'react-bootstrap';
import './Testimonial.css';

export default function Testimonial(props) {
  return (
    <Card className="testimonial-card text-center">
      <Card.Body>
        <Card.Title className="color-text font-primary">
          "I had an amazing experience attending Curry Leaf's workshop. The teaching style is unique and engaging, and I learned a lot from the knowledgeable instructors."
        </Card.Title>
        <Card.Subtitle>John Doe</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
