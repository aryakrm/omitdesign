import React, { useState, useEffect } from "react";
import "./Projects.scss";
import { useStore } from "../../store/projectsStore";
import { Image } from "antd";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = useStore((state) => state.projects);
  const selectedProject = useStore((state) => state.selectedProject);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 700px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 700px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <motion.div
      className="Projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <div className="title">
        <h3>{selectedProject.name}</h3>
        <h6>{selectedProject.loc}</h6>
      </div>
      {!matches ? (
        <Image.PreviewGroup
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {selectedProject.images.map((image) => (
            <Image width="90%" src={image} key={image} alt={projects.name} />
          ))}
        </Image.PreviewGroup>
      ) : (
        <Image.PreviewGroup>
          {selectedProject.images.map((image) => (
            <Image width="40%" src={image} key={image} alt={projects.name} />
          ))}
        </Image.PreviewGroup>
      )}
    </motion.div>
  );
};

export default Projects;
