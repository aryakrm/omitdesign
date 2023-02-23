import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Home.scss";

function Home() {
  return (
    <div className="Home">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/homeBg/1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Kaff Diamond</h3>
            <p>Yalıkavak Marina</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/homeBg/2.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>La Pace Gym</h3>
            <p>Park Oran Ofis</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/homeBg/3.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Pariba Cafe</h3>
            <p>Bestekar Sokak</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/homeBg/4.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Murt Evi</h3>
            <p>Park Joven</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/homeBg/5.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Murt Evi</h3>
            <p>Park Joven</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/homeBg/6.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Murt Evi</h3>
            <p>Park Joven</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/homeBg/7.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Murt Evi</h3>
            <p>Park Joven</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
