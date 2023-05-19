import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Event.css';
import ButtonSecond from '../UI/ButtonSecond';

function Event(props) {
  const { imageSrc, title,speaker, description } = props;

  return (
    <>
      <Card className="event-card">
        <Card.Img variant="top" src={imageSrc} alt="Event Image" />
        <Card.Header ><Card.Title className='color-fg'>{title}</Card.Title>
          <Card.Subtitle>{speaker}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Text>{description}</Card.Text>
          
        </Card.Body>
        <Card.Footer>
        <ButtonSecond >View Details</ButtonSecond>
        </Card.Footer>

      </Card>
    </>
  );
}

export default Event;
