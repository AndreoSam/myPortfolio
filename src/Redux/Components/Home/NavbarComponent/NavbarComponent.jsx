// NavbarComponent.jsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoLogoAngular } from "react-icons/io";
import "./NavbarComponent.css"
import { motion } from 'framer-motion';

const Letter = ({ children }) => {
    return (
        <motion.span
            whileHover={children.trim() ? { y: -10 } : {}} // Makes the letter jump, but not spaces
            transition={{ type: "spring", stiffness: 300 }}
            style={{ display: "inline-block" }} // Ensures letters stack horizontally
        >
            {children === ' ' ? '\u00A0' : children} {/* Render non-breaking space for spaces */}
        </motion.span>
    );
};

const NavbarComponent = ({ scrollToSection, isDarkMode, toggleDarkMode, showNavbar }) => {
    const text = "Andreo Samaddar";

    return (
        <div className={`header ${showNavbar ? 'visible-navbar' : 'hidden-navbar'}`}>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container className='navbar_css'>
                    <Navbar.Brand href="#home" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <motion.div
                            style={{ display: "flex", alignItems: "center" }}
                            whileHover={{ y: -10 }} // Makes the logo jump
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <IoLogoAngular style={{ fontSize: "30px" }} />
                        </motion.div>
                        <motion.h3
                            style={{ padding: 0, margin: 0, display: "flex", alignItems: "center" }}
                            initial={{ textShadow: "0px 0px 0px rgba(255, 255, 255, 0)" }}
                            whileHover={{
                                textShadow: "0px 0px 15px rgba(255, 255, 255, 0.8)", // Glow effect
                                color: "#fff" // Optional: change color on hover
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            {text.split("").map((letter, index) => (
                                <Letter key={index}>{letter}</Letter>
                            ))}
                        </motion.h3>
                    </Navbar.Brand>

                    <Nav>
                        <Nav.Link onClick={() => scrollToSection('home')} className='icons_nav'>Home</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('skills')} className='icons_nav'>Skills</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('projects')} className='icons_nav'>Projects</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('contact')} className='icons_nav'>Contact Me</Nav.Link>
                        {/* <Nav.Link variant="primary" onClick={toggleDarkMode}>
                            {isDarkMode ? <IoSunnyOutline /> : <FaRegMoon />}
                        </Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;
