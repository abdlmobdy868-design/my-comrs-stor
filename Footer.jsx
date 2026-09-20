import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import "./footer.css"

const quickLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
  { title: "Blog", link: "/blog" },
]

const customerService = [
  { title: "Terms & Conditions", link: "/terms" },
  { title: "Privacy Policy", link: "/privacy" },
  { title: "Shipping Info", link: "/shipping" },
  { title: "Returns", link: "/returns" },
]

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer_container">
        <div className="footer_box">
          <div className="footer_about">
            <div className="footer_logo amazon-logo">
              <Link to="/">
                <span className="logo-arrow">▶</span>
                <span className="logo-text">zon</span>
              </Link>
            </div>
            <p>
              We offer the best products at the best prices. 
              Shop with us for a seamless shopping experience.
            </p>
            <div className="footer_social">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="footer_links">
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((item, index) => (
                <li key={index}><Link to={item.link}>{item.title}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer_links">
            <h3>Customer Service</h3>
            <ul>
              {customerService.map((item, index) => (
                <li key={index}><Link to={item.link}>{item.title}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer_contact">
            <h3>Contact Us</h3>
            <p>Email: support@ecommerce.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Shop Street, City, Country</p>
            <div className="footer_map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" 
                width="100%" 
                height="150" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>

        <div className="footer_bottom">
          <p>&copy; 2026 Designed &amp; Developed by Eng. Mahomed Abdlmobdy</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

