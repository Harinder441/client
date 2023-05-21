import React, { useState } from 'react';
import { Tab, Tabs ,Row,Col} from 'react-bootstrap';
import EventCard from './EventCard';
import eventImage from '../../assets/images/event-image.jpg';
import './Event.css'
export default function EventCategories() {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };
 var items =Array(5).fill(<EventCard  imageSrc={eventImage} title="Event" speaker="ABC" description="Lorem ej  djs xsaja d ajk"/>)
  return (
    <section className='event-catagories'>
      <h1 className='section-heading'>Events By Catagories</h1>
      <Tabs activeKey={activeTab} onSelect={handleTabSelect} >
        <Tab eventKey="all" title="All" className='p-4'>
           <Row>
           {items.map((event)=><Col md={3} className='mb-4'>{event}</Col>)}
           </Row>
        </Tab>
        <Tab eventKey="vssp" title="VSSP" className='p-4'>
        <Row>
           {items.map((event)=><Col md={3} className='mb-4' >{event}</Col>) }
           </Row>
        </Tab>
        <Tab eventKey="workshops" title="Workshops" className='p-4'>
        <Row>
           {items.map((event)=><Col md={3} className='mb-4'>{event}</Col>)}
           </Row>
        </Tab>
      
      </Tabs>
    </section>
  );
}
