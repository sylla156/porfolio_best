import React, { useState, useEffect, useCallback } from "react";
import "./projects.scss";
import WebsiteContent from "../../assets/js/websiteContent";
import ParallaxEffect from "../Header/Components/ParallaxEffect/ParallaxEffect";

export default function Projects({ onChangeVisibility }) {
  const titles = WebsiteContent().project.titles;
  let isMobile = false;

  const onChangeIsMobile = (e) => {
    const width = e.target.innerWidth;
    if (width < 700) {
      isMobile = true;
    } else if (width > 700) {
      isMobile = false;
    }
  };
  useEffect(() => {
    window.addEventListener("resize", onChangeIsMobile);

    return function reset() {
      window.removeEventListener("resize", onChangeIsMobile);
    };
  }, []);

  const handleProject = function (e) {
    const cursor = document.querySelector('.cursor');
    cursor.classList.remove('cursorAfter');
    const position = e.target.dataset.index;
    onChangeVisibility(position);
  };

const  hanbleChangeBackGround = useCallback((e) => {
  const value = e.target.dataset.position;
  const nameClass = ["space", "commerce"];
  const bg = e.target;
  const element = document.querySelectorAll(".projects__nav section");
  for (let index = 0; index < nameClass.length; index++) {
    const item = nameClass[index];
    if (index == value) {
      bg.classList.add(item);
      element[index].classList.add("enable");
      continue;
    } else {
      bg.classList.remove(item);
      element[index].classList.remove("enable");
    }
  }


},[])

const cursorBig = useCallback((e) => {
  const cursor = document.querySelector('.cursor');
  cursor.classList.add('cursorAfter');


})


const cursorReset = useCallback((e) => {
  const cursor = document.querySelector('.cursor');
  cursor.classList.remove('cursorAfter');
})
 
  return (
    <div className="projects" id="project">
      <ParallaxEffect/>
      <div className="projects__title">
        <h1>
          <span>p</span>
          <span>r</span>
          <span>o</span>
          <span>j</span>
          <span>e</span>
          <span>c</span>
          <span>t</span>
          <span>s</span>
        </h1>
      </div>
      <nav className="projects__nav">
        {titles.map((item, index) => {
          return (
            <section
              onMouseEnter={hanbleChangeBackGround}
              onClick={handleProject}
              data-position={index}
              key={index}
            >
              <p data-index={index} onMouseEnter={cursorBig} onMouseLeave={cursorReset}>
                <span>0.{1 + index}</span> {item}
              </p>
            </section>
          );
        })}
      </nav>
    </div>
  );
}
