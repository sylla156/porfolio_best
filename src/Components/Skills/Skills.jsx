import React, { useCallback } from "react";
import "./skill.scss";

export default function Skills({}) {


  const cursorBig = useCallback((e) => {
    const element = e.target;
    const cursor = document.querySelector('.cursor');
    cursor.classList.add('cursorBefore');
  
  
  })
  
  
  const cursorReset = useCallback((e) => {
    const element = e.target;
    const cursor = document.querySelector('.cursor');
    cursor.classList.remove('cursorBefore');
  
  
  
  })


  return (
    <div className="skillsProject" id='skills'>
      <div className="skillsProject__title">
        <h1>my skills</h1>
        <p>THERE ARE JUST MY MOST SIGNIFICANT SKILLS</p>
      </div>
      <div className="skillsProject__content">
        <div className="skillsProject__content--child" onMouseEnter={cursorBig} onMouseLeave={cursorReset}>
          <h3>figma</h3>
          <p>HERE I CREATE DESIGNS, PROTOTYPES, MOOD BOARDS</p>
        </div>
        <div className="skillsProject__content--child" onMouseEnter={cursorBig} onMouseLeave={cursorReset}>
          <h3>HTML/CSS</h3>
          <p>I USE THESE TECHNOLOGIES TO BRING MY DESIGN TO BROWSERS</p>
        </div>
        <div className="skillsProject__content--child" onMouseEnter={cursorBig} onMouseLeave={cursorReset}>
          <h3>JAVASCRIPT</h3>
          <p>WITH THIS TECHNOLOGY I CREATE VISUAL EFFECTS AND INTERACTION</p>
        </div>
        <div className="skillsProject__content--child" onMouseEnter={cursorBig} onMouseLeave={cursorReset}>
          <h3>REACT.JS</h3>
          <p>I USE IT TO CREATE APPLICATIONS THAT HAVE A LOT OF REACTIVITY</p>
        </div>
        <div className="skillsProject__content--child" onMouseEnter={cursorBig} onMouseLeave={cursorReset}>
          <h3>PHP</h3>
          <p> I USE IT IN DEVELOPMENT FOR WRITING SERVER-SIDE SCRIPTS</p>
        </div>
        <div className="skillsProject__content--child" onMouseEnter={cursorBig} onMouseLeave={cursorReset}>
          <h3>NODE.JS</h3>
          <p> I USE IT FOR WRITING SERVER APPLICATIONS AND PROTOTYPING</p>
        </div>
        <div className="skillsProject__content--child" onMouseEnter={cursorBig} onMouseLeave={cursorReset}>
          <h3>WORDPRESS</h3>
          <p> CONTENT MANAGEMENT SYSTEM. I USE IT TO MANAGE CONTENT</p>
        </div>
        <div className="skillsProject__content--child" onMouseEnter={cursorBig} onMouseLeave={cursorReset}>
          <h3>EXPRESS</h3>
          <p> FRAMEWORK FOR WRITING A BACKEND ON A NODE.JS</p>
        </div>
      </div>
    </div>
  );
}
