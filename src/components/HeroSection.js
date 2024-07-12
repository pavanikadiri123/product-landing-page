import React from 'react';
import heroImage from '../assets/images/hero.jpg';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h2>Welcome to SmartGadget Pro</h2>
        <p>Your ultimate companion for a smarter, healthier life</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
