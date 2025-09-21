import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Paradise Nursery</h1>
          <p className="hero-description">
            Discover the perfect houseplants to transform your living space into a green paradise. 
            From aromatic herbs to medicinal plants and stunning decorative varieties, we offer 
            a carefully curated selection of healthy, beautiful plants that will bring life and 
            joy to your home.
          </p>
          <p className="hero-description">
            Our expert team ensures every plant is nurtured with care, providing you with 
            thriving greenery that enhances your well-being and decor. Whether you're a 
            seasoned plant parent or just starting your green journey, Paradise Nursery 
            has the perfect plants for you.
          </p>
          <Link to="/products" className="cta-button">
            Get Started
            <span className="button-icon">→</span>
          </Link>
        </div>
      </div>
      
      <div className="features-section">
        <div className="container">
          <h2 className="features-title">Why Choose Paradise Nursery?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Healthy Plants</h3>
              <p>Every plant is carefully selected and nurtured for optimal health and growth.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Quick and safe delivery to ensure your plants arrive in perfect condition.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💚</div>
              <h3>Expert Care</h3>
              <p>Get expert advice and care tips to help your plants thrive in your home.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
