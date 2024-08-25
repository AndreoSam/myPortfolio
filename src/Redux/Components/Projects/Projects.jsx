import React, { useEffect, useState } from "react";
import app from "../firebase";
import { getDatabase, ref, get } from "firebase/database";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Projects.css";
import Skeleton from "@mui/material/Skeleton";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [state, setState] = useState([""]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "data");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      setState(Object.values(snapshot.val()));
    } else {
      alert("error");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("Received Projects: ", state);

  return (
    <div className="project_css">
      <div>
        <h2>Projects</h2>
      </div>
      <div>
        <Row xs={2} md={3} className="g-4">
          {loading
            ? Array.from(new Array(2)).map((_, index) => (
              <Col key={index}>
                <SkeletonLoader index={index} />
              </Col>
            ))
            : state.map((prod, index) => (
              <Col key={index}>
                <ProjectCard prod={prod} index={index} />
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};

const SkeletonLoader = ({ index }) => {
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
      style={{ overflow: "hidden", height: '100%' }} className="skeleton-card-container"
    >
      <Card>
        <Skeleton variant="rectangular" height={180} />
        <Card.Body>
          <Skeleton variant="text" />
          <Skeleton variant="text" width="60%" />
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default Projects;
