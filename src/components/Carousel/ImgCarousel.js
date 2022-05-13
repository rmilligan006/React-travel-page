import React from "react";
import "./ImgCarousel.css";
import BoraBora from "../../assets/borabora.jpeg";
import BoraBora2 from "../../assets/borabora2.jpeg";
import KeyWest from "../../assets/keywest.jpeg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImgCarousel() {
  return (
    <div name="carousel" className="container">
      <Carousel
        className="carousel"
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img src={BoraBora} alt="/" />
        </div>
        <div>
          <img src={BoraBora2} alt="/" />
        </div>
        <div>
          <img src={KeyWest} alt="/" />
        </div>
      </Carousel>
    </div>
  );
}

export default ImgCarousel;
