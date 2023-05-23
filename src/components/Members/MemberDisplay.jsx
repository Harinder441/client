import React from 'react'
import MemberCard from './MemberCard'
import { Col, Row } from 'react-bootstrap'
import person from '../../assets/images/person.jpeg'
export default function MemberDisplay() {
  var members = Array(10).fill(<MemberCard img={person} name={'john'} role={'Member'}/>)
  return (
    <section >
    <h2 className="section-heading">Our Members</h2>
      <Row className='p-4'>
        {members.map(member=><Col md={3} className='mb-2'>{member}</Col>)}
      </Row>
</section> 
  )
  
}
