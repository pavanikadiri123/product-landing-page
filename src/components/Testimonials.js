import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <p>"This product is amazing!" - Customer 1</p>
        </div>
        <div className="testimonial">
          <p>"I've never been happier." - Customer 2</p>
        </div>
        <div className="testimonial">
          <p>"A game-changer in the industry." - Customer 3</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
