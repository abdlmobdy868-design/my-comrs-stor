import React from 'react'
import "./about.css"
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa'

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="profile-section">
          <div className="profile-image">
            <div className="profile-avatar">MA</div>
          </div>
          <h1>Mohamed Abdel Mobdy</h1>
          <p className="profile-title">Web & Web Application Developer</p>
        </div>

        <div className="about-section">
          <h2>About Me</h2>
          <p>
            Hello! I'm a passionate <strong>Web Developer</strong> and <strong>Web Application Developer</strong>. 
            I'm currently studying <strong>Information Systems</strong> and I love building modern, responsive websites 
            and applications. I have several web projects that showcase my skills in front-end and back-end development.
          </p>
        </div>

        <div className="about-section">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>HTML5 & CSS3</li>
            <li>JavaScript / React</li>
            
            <li>Web Application Development</li>
            <li>Responsive Design</li>
            <li>Information Systems</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>My Projects</h2>
          <p>
            I have developed several web projects including e-commerce websites, web applications, 
            and responsive interfaces. Each project reflects my commitment to quality and innovation.
          </p>
        </div>

        <div className="about-section">
          <h2>Education</h2>
          <p>
            <strong>Information Systems</strong> - Student<br />
            Specializing in business technology and information management
          </p>
        </div>

        <div className="about-section">
          <h2>Contact Me</h2>
          <div className="social-links">
            <a href="#" className="social-link"><FaGithub /> GitHub</a>
            <a href="#" className="social-link"><FaLinkedin /> LinkedIn</a>
            <a href="#" className="social-link"><FaEnvelope /> Email</a>
            <a href="#" className="social-link"><FaGlobe /> Website</a>
          </div>
          <p className="contact-note">
            Feel free to reach out for collaborations or just to say hello! 
            Visit our <a href="/contact">Contact page</a> to get in touch.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

