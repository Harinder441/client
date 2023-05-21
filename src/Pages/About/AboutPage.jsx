import React from 'react'
import NavbarMain from '../../components/Navbar/NavbarMain'
import Footer from '../../components/Footer/Footer'
import SideLeafBorder from '../../components/UI/SideLeafBorder'
import VisionMission from '../../components/About/VisionMission'
import Introduction from '../../components/About/Introduction'
import MemberDisplay from '../../components/Members/MemberDisplay'


import './AboutPage.css'
export default function AboutPage() {
  return (
    <div className='about-page'>
       <NavbarMain/>
       <SideLeafBorder left={true} right={true}>
      <div className="page-container">
        <Introduction/>
        <VisionMission/>
        <MemberDisplay/>

       </div>
       </SideLeafBorder>
       <Footer/>
    </div>
  )
}
