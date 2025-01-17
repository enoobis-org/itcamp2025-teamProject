import React from "react";
import "../css/Slider.css";
import alaacha from "../assets/alaacha2.jpg";
import alakol from "../assets/ala-kyl2.jpg";
import burana from "../assets/burana2.jpg";
import issikkyl from "../assets/issikkyl2.jpg";

const Slider = () => {
    return (
      <div className="container mt-5">
        <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
          {/* Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#imageCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#imageCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#imageCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#imageCarousel"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
  
          {/* Carousel Items */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={alaacha} className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src={alakol} className="d-block w-100" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src={burana} className="d-block w-100" alt="Slide 3" />
            </div>
            <div className="carousel-item">
              <img src={issikkyl} className="d-block w-100" alt="Slide 4" />
            </div>
          </div>
  
          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#imageCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#imageCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  };
  
  export default Slider;