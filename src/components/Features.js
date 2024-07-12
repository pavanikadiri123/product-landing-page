import React from 'react';
import feature1 from '../assets/images/feature1.jpg';
import feature2 from '../assets/images/feature2.jpg';
import feature3 from '../assets/images/feature3.jpg';
import './Features.css';

const Features = () => {
  return (
    <section id="features" className="features-section">
      <h2>Features</h2>
      <div className="features-container">
        <div className="feature">
          <img src={feature1} alt="Health Monitoring" />
          <h3>Health Monitoring</h3>
          <p>Track your heart rate, sleep patterns, and daily activity.</p>
        </div>
        <div className="feature">
          <img src={feature2} alt="Smart Home Control" />
          <h3>Smart Home Control</h3>
          <p>Manage your smart home devices with voice commands and remote access.</p>
        </div>
        <div className="feature">
          <img src={feature3} alt="Personal Assistant" />
          <h3>Personal Assistant</h3>
          <p>Keep track of your schedule, receive notifications, and set reminders.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
