import React from 'react'
import Testimonial from './TestimonialCard'
import './Testimonial.css'
export default function TestimonialDisplay() {
  return (
    <section className="testimonial-section">
    <h2 className="section-heading">Testimonials</h2>
    <div className="testimonial-carousel">
      <Testimonial></Testimonial>
      <Testimonial></Testimonial>
      <Testimonial></Testimonial>
    </div>
  </section>
  )
}
