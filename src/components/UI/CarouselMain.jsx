import React from 'react'
import { Carousel, Button } from 'react-bootstrap';

export default function CarouselMain({items,chunkSize,interval}) {

    const renderItems = () => {
        const itemChunks = [];
    
        for (let i = 0; i < items.length; i +=chunkSize ) {
          const chunk = items.slice(i, i + chunkSize);
          itemChunks.push(chunk);
        }
    
        return itemChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="item-container">
              {chunk.map((item) => (
                item
              ))}
            </div>
          </Carousel.Item>
        ));
      };
      return (
        <Carousel
        className="main-carousel px-4"
        interval={interval||4000}
        pause={true}
        slide={true}
        touch={true}
        indicators={false}>
        {renderItems()}
      </Carousel>
            )
}
