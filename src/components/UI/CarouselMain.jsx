import React from 'react'
import { Carousel,Col,Row } from 'react-bootstrap';

export default function CarouselMain({items,chunkSize,interval}) {

    const renderItems = () => {
        const itemChunks = [];
    
        for (let i = 0; i < items.length; i +=chunkSize ) {
          const chunk = items.slice(i, i + chunkSize);
          itemChunks.push(chunk);
        }
    
        return itemChunks.map((chunk, index) => (
          <Carousel.Item key={index} >
            <Row className="item-container px-4">
              {chunk.map((item) => (
                <Col md={12/chunkSize}>
                {item}</Col>
              ))}
            </Row>
          </Carousel.Item>
        ));
      };
      return (
        <Carousel fade
        className="main-carousel px-4"
        interval={interval||4000}
        pause='hover'
        slide={true}
        touch={true}
        indicators={false}>
        {renderItems()}
      </Carousel>
            )
}
