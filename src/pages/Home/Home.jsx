import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Home.scss";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="Home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <Carousel fade interval={2000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/projects/Park Joven - Murt Evi/1 (10).png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>BM Evi</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/projects/Yalıkavak Marina - Kaff Diamond/2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Kaff Diamond</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/projects/YK Office/1 (4).JPG"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>YK Office</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/projects/Bestekar Sokak - Pariba Cafe/cam08 (1).jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Pariba Coffee</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/projects/Park Joven - Murt Evi/3 (1).png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>BM Evi</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/projects/Park Oran Ofis - La Pace Gym/1 (1).png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>La Pace Gym</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </motion.div>
  );
}

export default Home;
