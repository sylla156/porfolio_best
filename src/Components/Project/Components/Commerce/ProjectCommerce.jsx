import React, { useCallback, useEffect, useRef, useState } from "react";
import "./projectCommerce.scss";
import desktop from "./img/Desktop.png";
import form from "./img/form.png";
import contact from "./img/contact.png";
import LoaderProject from "../LoaderProject/LoaderProject";

export default function ProjectCommerce({ onChangeVisibility }) {
  const container = useRef();
  const element = useRef();

  useEffect(() => {
    const page = container.current.parentElement;
    page.scroll(0, 0);
  });

  const out = useCallback(() => {
    container.current.parentElement.scrollTop = innerHeight;
    onChangeVisibility(null);
  }, []);

  const nextProject = useCallback(() => {
    const cursor = document.querySelector(".cursor");
    cursor.classList.remove("cursorAfter");
    onChangeVisibility(0);
  }, []);

  const cursorBig = useCallback((e) => {
    const cursor = document.querySelector(".cursor");
    cursor.classList.add("cursorAfter");
  });

  const cursorReset = useCallback((e) => {
    const cursor = document.querySelector(".cursor");
    cursor.classList.remove("cursorAfter");
  });

  return (
    <div className="projectCommerce" ref={container}>
      <Exit exits={out} />
      <LoaderProject />
      <div className="projectCommerce__header">
        <div className="projectCommerce__header--title">
          <h1 className="main">ecommerce</h1>
          <h3 className="secondary">ART DIRECTION / developpeur full-stack</h3>
        </div>
        <div className="projectCommerce__header--content">
          <div className="sectionFirst">
            <dl>
              <dt>date</dt>
              <dd>2021</dd>
            </dl>
            <dl>
              <dt>credits</dt>
              <dd>
                <p>
                  <span>author : </span> sylla ibrahim
                </p>
                <p>
                  <span>front-end : </span> html / scss / reactjs
                </p>
                <p>
                  <span>back-end : </span> commercejs
                </p>
              </dd>
            </dl>
          </div>
          <div className="sectionSecond">
            <div>
              Welcome to Commerce.js, a powerful eCommerce SDK for building
              custom cart and checkout experiences. Commerce.js is trusted by
              developers around the world to deliver API driven eCommerce into
              web, mobile, augmented, and virtual shopping experiences.
            </div>
            <div>
              The philosophy and products of 'COMMERJS' inspired me to create
              this site. Looking for an organic atmosphere with a pleasant use,
              I wanted to create a site that guides the user at a glance
            </div>
          </div>
        </div>
      </div>
      <div className="projectCommerce__content" ref={element}>
        <header className="projectCommerce__content--header">
          <div>
            <h3>client</h3>
            <p>sy Djeneba</p>
          </div>
          <div>
            <h3>my role</h3>
            <p>full-stack development </p>
          </div>
          <div>
            <h3>type</h3>
            <p>online sales and shopping site</p>
          </div>
          <div>
            <h3>collabs</h3>
            <p> none </p>
          </div>
        </header>
        <div className="projectCommerce__content--introduction">
          <h1>introduction</h1>
          <p>
            <span>
              A striking digital invitation to experience powerful online
              storytelling.
            </span>
            A website that feels like an online art magazine that pulls you in
            and surprises you with every new scroll.
          </p>
        </div>
      </div>
      <div className="projectCommerce__image">
        <div className="projectCommerce__image--one">
          <img src={desktop} alt="la premier image de mes project" />
        </div>
        <div className="projectCommerce__image--two">
          <img src={form} alt="le second image de mes projet" />
        </div>
        <div className="projectCommerce__image--three">
          <img src={contact} alt="le troisieme image de mes projet" />
        </div>
      </div>
      <div
        className="projectCommerce__next"
        onClick={nextProject}
        onMouseEnter={cursorBig}
        onMouseLeave={cursorReset}
      >
        <div>
          <h3>next Projet</h3>
          <h1>spaces</h1>
        </div>
      </div>
    </div>
  );
}

const Exit = function ({ exits }) {
  return <button className="button-close" onClick={exits}></button>;
};
