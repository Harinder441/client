import React from 'react'
import Testimonial from './TestimonialCard'
import './Testimonial.css'
import CarouselMain from '../UI/CarouselMain'
export default function TestimonialDisplay() {
  var items =[<Testimonial></Testimonial>,
  <Testimonial></Testimonial>,
  <Testimonial></Testimonial>]
  return (
    <section className="testimonial-section">
    <h2 className="section-heading">Testimonials</h2>
  <CarouselMain items={items} chunkSize={1} interval={3000}></CarouselMain>
  </section>
  )
}
