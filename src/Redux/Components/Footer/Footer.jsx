import React from 'react'
import "./Footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { PiTagSimpleFill } from "react-icons/pi";
import { IoLogoAngular } from "react-icons/io";

const Footer = ({ scrollToSection }) => {
  return (
    <div className='footer_css'>
      <div className="footertop">
        <div className="footertop_1">
          <div className="logo">
            <div className="logo_icon">
              <IoLogoAngular style={{ fontSize: "25px" }} />
            </div>
            <h3>Andreo Samaddar</h3>
          </div>
          <div className="footerabout">
            <p style={{ textAlign: "justify" }}>
              I am a fresher React JS developer. Creating responsive and dynamic websites. I have completed my web design and development course from Webskitters Academy. I love coding and listening to music and traveling.
            </p>
          </div>
          <div className="icons">
            <a href="https://www.facebook.com/andreo.samadder/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/andreo-samaddar-b569b5175/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/AndreoSam" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="footertop_2">
          <div className="link_1">
            <h3>Quick Links</h3>
          </div>
          <div className="nav">
            <a onClick={() => scrollToSection('home')} className="footer-link"><PiTagSimpleFill />Home</a>
            <a onClick={() => scrollToSection('skills')} className="footer-link"><PiTagSimpleFill />Skills</a>
            <a onClick={() => scrollToSection('projects')} className="footer-link"><PiTagSimpleFill />Projects</a>
            <a onClick={() => scrollToSection('contact')} className="footer-link"><PiTagSimpleFill />Contact Us</a>
          </div>
        </div>
        <div className="footertop_3">
          <div className="link_2">
            <h3>Contact Us</h3>
          </div>
          <div className="contactus">
            <div className="link_2_2"><FaPhone /><p>+91 7980370792</p></div>
            <div className="link_2_2"><MdEmail /><p>andreo.samadder@gmail.com</p></div>
            <div className="link_2_2"><FaLocationDot /><p>Kolkata, West-Bengal</p></div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footerbottom">
        <p>Copyright © Andreo-Portfolio 2024. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer