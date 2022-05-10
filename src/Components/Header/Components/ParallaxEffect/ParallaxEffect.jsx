import gsap from "gsap";
import React, { useEffect, useState } from "react";
import img1 from "./img/1.png";
import img2 from "./img/1.png";

import "./ParallaxEffect.scss";

export default function ParallaxEffect() {
  useEffect(() => {});
  return (
    <div className="parallax" id="scene" onMouseMove={Paralla}>
      <div className="parallax__elements" data-speed="2">
        <img src={img1} alt="les image de parallax" />
      </div>
      <div className="parallax__elements" data-speed="5">
        <img src={img2} alt="les image de parallax" />
      </div>{" "}
      <div className="parallax__elements" data-speed="7">
        <img src={img1} alt="les image de parallax" />
      </div>{" "}
      <div className="parallax__elements" data-speed="9">
        <img src={img2} alt="les image de parallax" />
      </div>
    </div>
  );
}

const Paralla = function (e) {

  const elements = document.querySelectorAll('.parallax__elements');

  elements.forEach((element) => {
    const speed = element.dataset.speed;
    const x = (window.innerWidth - e.pageX * parseInt(speed)) / 100;
    const y = (window.innerHeight - e.pageY * parseInt(speed)) / 100;
      element.style.transform = `translate(${x}px,${y}px)`;
  })

  console.log();
};
