import React from 'react';
import { Card } from 'react-bootstrap';

export default function WebstatCard(props) {
  return (
    <Card className={"stats-card bg-none py-4 " + props.className}>
      <Card.Body>
        <Card.Title class="mb-1">Members</Card.Title>
        <Card.Text className="count lead lead-text">52</Card.Text>
      </Card.Body>
    </Card>
  );
}
