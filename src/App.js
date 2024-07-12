import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Product from './components/Product';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Features />
      <Product />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
