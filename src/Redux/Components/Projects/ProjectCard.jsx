import React from "react";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const ProjectCard = ({ prod, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }} // Start slightly zoomed in
            animate={{
                opacity: inView ? 1 : 0,
                scale: inView ? 1 : 0.8, // Zoom out to normal size when in view
            }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }} // Adjust duration and easing for smooth effect
            style={{ overflow: "hidden", height: '100%' }} className="project-card-container"
        >
            <Card
                className="project-card"
                style={{ position: "relative", overflow: "hidden" }}
            >
                <motion.img
                    src={prod.image}
                    alt={prod.title}
                    whileHover={{ scale: 1.2 }}
                    style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "cover",
                        transition: "transform 0.2s ease",
                    }}
                />
                <motion.div
                    className="overlay"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        color: "white",
                        textAlign: "center",
                        zIndex: 1,
                        transition: "opacity 0.5s ease",
                    }}
                >
                    <div>
                        <Card.Title>{prod.title}</Card.Title>
                        <Link
                            style={{ textDecoration: "none" }}
                            target="_blank"
                            to={`${prod.link}`}
                        >
                            Go to Website
                        </Link>
                    </div>
                </motion.div>
            </Card>
        </motion.div>
    );
};

export default ProjectCard;
