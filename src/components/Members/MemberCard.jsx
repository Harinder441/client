import React from 'react'
import { Card , Image} from 'react-bootstrap'
import './Member.css';
export default function MemberCard({img,name,role }) {
  return (
    <Card className="bg-transparent text-center member-card">
        <Card.Header>
        <Image src={img} roundedCircle={true} alt={"person image"} width='150px'></Image>
        </Card.Header>
        <Card.Body className='mt-0 pt-0'>
        <Card.Title>{name}</Card.Title>
       <Card.Subtitle className='color-text'>{role}</Card.Subtitle>
        </Card.Body>
       
    </Card>
  )
}
