import React from "react";
import "./SelectImage.css";

function SelectImage({ bgImg, text }) {
  return (
    <div className="selects-location">
      <img src={bgImg} alt="/" />
      <div className="overlay">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default SelectImage;
