import React from 'react';
import "./About.css";
import { motion } from "framer-motion";

const About = ({ toggleDarkMode }) => {
    console.log(toggleDarkMode)

    const text = "Hello, I am Andreo Samaddar";
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const child = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className='about_section'>
            <motion.div
                className="aboutcss"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="aboutcss_2">
                    {words.map((word, index) => (
                        <motion.h1
                            className="aboutcss_2_h3"
                            variants={child}
                            key={index}
                        >
                            {word}{" "}
                        </motion.h1>
                    ))}
                </motion.div>
                <motion.div
                    className="aboutcss_2_1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <h3>React JS Developer</h3>
                </motion.div>
                <motion.div
                    className="aboutcss_2_2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                >
                    <p>
                        I am a fresher React JS developer, creating responsive and dynamic websites. I have completed my web design and development course from Webskitters Academy. I love coding, listening to music, and traveling.
                    </p>
                </motion.div>
            </motion.div>
            <motion.div
                className="imgcss_1"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1 }}
            >
                <motion.img
                    className="imgcss"
                    src="../Images/369793574_6575152132573683_8751029389372295118_n.jpg"
                    alt="noimg"
                    initial={{ scale: 1, borderRadius: '50%' }}
                    whileHover={{ scale: 1.2, borderRadius: '0%' }} // Adjust to show the full image on hover
                />
            </motion.div>
        </div>
    );
};

export default About;
