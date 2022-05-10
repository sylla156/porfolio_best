import React from "react";
import "./about.scss";
import self from "./img/self.jpg";

export default function About({}) {
  return (
    <div className="aboutProject" id='about'>
      <div className="aboutProject__title">
        <h1>
          <span>sylla</span>
          <span>ibrahim</span>
        </h1>
      </div>

      <div className="aboutProject__content">
        <div className="aboutProject__content--description">
          <p>
          I am a <b> full stack developer</b> with <b>three years of experience</b> as a developer and I am a three year student and my main language is <b>javascript and php</b>
          </p>
        </div>

        <div className="aboutProject__content--img">
          <img src={self} alt="my picture for the website about" />
        </div>
      </div>
    </div>
  );
}
