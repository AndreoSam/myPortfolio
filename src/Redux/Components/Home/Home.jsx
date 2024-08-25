import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Footer from '../Footer/Footer';
import "./Home.css";
import About from './About/About';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Projects from '../Projects/Projects';
import ScrollToTopButton from '../Button/ScrollToTopButton';
import NavbarComponent from './NavbarComponent/NavbarComponent';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Refs for each section
  const sectionRefs = {
    home: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  // Function to scroll to the respective section
  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Handle scroll to show/hide Navbar
  const handleScroll = () => {
    if (window.scrollY < lastScrollY) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Framer Motion scroll progress
  const { scrollYProgress } = useScroll();

  return (
    <div
      className={`d-flex flex-column ${isDarkMode ? 'bg-dark text-light' : 'bg-light'}`}
      style={{ width: '100%' }}
    >
      <NavbarComponent
        scrollToSection={scrollToSection}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        showNavbar={showNavbar}
      />
      <motion.div
        className="progress-bar"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: '0%',
          backgroundColor: 'red', // Temporary color for visibility
          height: '5px', // Ensure it's visible
        }}
      />
      <div className="home" ref={sectionRefs.home}>
        <About />
      </div>
      <div className="skills" ref={sectionRefs.skills}>
        <Skills />
      </div>
      <div className="projects" ref={sectionRefs.projects}>
        <Projects />
      </div>
      <div className="contact" ref={sectionRefs.contact}>
        <Contact />
      </div>
      <Footer scrollToSection={scrollToSection} />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
