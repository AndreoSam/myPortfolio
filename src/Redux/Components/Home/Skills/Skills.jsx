import React from 'react'
import "./Skills.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const skills_arr = [
    {
      name: 'HTML5',
      logo: 'https://cdn.worldvectorlogo.com/logos/html-1.svg'
    }, {
      name: 'CSS3',
      logo: 'https://cdn.worldvectorlogo.com/logos/css-3.svg'
    }, {
      name: 'Bootstrap5',
      logo: 'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg'
    }, {
      name: 'Material UI',
      logo: 'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg'
    }, {
      name: 'Javascript',
      logo: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg'
    }, {
      name: 'Next JS',
      logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg'
    }, {
      name: 'React JS',
      logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg'
    }, {
      name: 'Tailwind CSS',
      logo: 'https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000'
    }, {
      name: 'Daisy UI',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjriJ3Pylplf9wiqVZiSuuCQGomHicU1J0XjdtC4IzwweHqMrus3lLGiZ_TjXds6bLAs&usqp=CAU'
    }, {
      name: 'Framer Motion',
      logo: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg'
    }, {
      name: 'SweetAlert2',
      logo: 'https://rohit-chouhan.gallerycdn.vsassets.io/extensions/rohit-chouhan/sweetalert2-snippet/1.1.2/1625627316335/Microsoft.VisualStudio.Services.Icons.Default'
    }, {
      name: 'GitHub',
      logo: 'https://cdn.worldvectorlogo.com/logos/github-icon.svg'
    }
  ]

  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.1, // Trigger animation when 10% of the component is in view
  });

  return (
    <div className='skill_main_css' ref={ref}>
      <div className="skillsheader">
        <h2>Skills</h2>
      </div>
      <div className="skills">
        <Row xs={2} md={3} className="g-4">
          {skills_arr.map((prod, index) => (
            <Col key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }} // Start slightly zoomed in
                animate={{
                  opacity: inView ? 1 : 0,
                  scale: inView ? 1 : 0.8, // Zoom out to normal size when in view
                }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }} // Adjust duration and easing for smooth effect
                style={{ overflow: "hidden", height: '100%' }}
              >
                <Card className='skills_cards'>
                  <Card.Img variant="top" src={prod.logo} style={{ height: "100px", width: "100px" }} />
                  <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default Skills