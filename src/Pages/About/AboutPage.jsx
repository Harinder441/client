import React from 'react'
import Introduction from '../../components/About/Introduction'
import MemberDisplay from '../../components/Members/MemberDisplay'
import { Container } from 'react-bootstrap'
import './AboutPage.css'
export default function AboutPage({setNavVisible}) {
  setNavVisible(true);
  return (
    <div className='about-page'>
     
  
      {/* <Container className="text-center py-4">
      <h1 className="about-heading">Welcome to Curry Leaf</h1>
      <p className="about-subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestiae!</p>
      </Container> */}
       <Introduction />
  
        <MemberDisplay/>


    </div>
  )
}
