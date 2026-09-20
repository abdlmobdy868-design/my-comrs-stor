import React from 'react'
import "./about.css"
import { FaBoxOpen, FaShoppingCart, FaMobileAlt, FaTags } from 'react-icons/fa'

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-project">
          <h1>About The Project - ShopEase</h1>
          <p>
            ShopEase is a responsive E-commerce platform built to simulate a real online shopping experience.
          </p>
          <div className="project-details">
            <h2>Tech Stack</h2>
            <p>HTML5, CSS3, JavaScript (ES6+), React.js, React Router</p>

            <h2>Key Features</h2>
            <div className="feature-list">
              <div className="feature-item"><FaBoxOpen /> <span>Product listing</span></div>
              <div className="feature-item"><FaTags /> <span>Categories: Accessories, Home, Blog</span></div>
              <div className="feature-item"><FaShoppingCart /> <span>Add to Cart and cart management</span></div>
              <div className="feature-item"><FaMobileAlt /> <span>Responsive design for mobile and desktop</span></div>
            </div>

            <h2>Goal</h2>
            <p>To practice front-end development and build a real-world e-commerce flow.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

