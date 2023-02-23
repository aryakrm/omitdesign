import React, { useState, useEffect } from "react";
import "./Projects.scss";
import { useStore } from "../../store/projectsStore";
import { Image } from "antd";

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
    <div className="Projects">
      {!matches ? (
        <Image.PreviewGroup>
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
    </div>
  );
};

export default Projects;
