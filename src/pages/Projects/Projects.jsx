import React, { useState, useEffect } from "react";
import "./Projects.scss";
import { useStore } from "../../store/projectsStore";
import { Image } from "antd";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
      {!matches ? (
        <Image.PreviewGroup>
          {selectedProject.images.map((image) => (
            <Image width="90%" src={image} key={image} alt={projects.name} />
          ))}
        </Image.PreviewGroup>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={2.5}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {selectedProject.images.map((image) => (
            <SwiperSlide>
              <Image width="100%" src={image} key={image} alt={projects.name} />{" "}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div className="title">
        <h5>
          {selectedProject.name} | {selectedProject.loc}
        </h5>
      </div>
    </motion.div>
  );
};

export default Projects;
